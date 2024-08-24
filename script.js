document.addEventListener('DOMContentLoaded', function () {
  let data = [];

  fetch('beers.json')
    .then(response => response.json())
    .then(json => {
      data = json;
      updateFilterOptions();
      updateBeerList();
    });

  const filterButton = document.getElementById('filterButton');
  const sortButton = document.getElementById('sortButton');
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const resetButton = document.getElementById('resetButton');
  const filterModal = document.getElementById('filterModal');
  const sortModal = document.getElementById('sortModal');
  const closeFilter = document.getElementById('closeFilter');
  const closeSort = document.getElementById('closeSort');
  const filterType = document.getElementById('filterType');
  const filterValue = document.getElementById('filterValue');
  const abvFilter = document.getElementById('abvFilter');
  const sortType = document.getElementById('sortType');
  const beerList = document.getElementById('beerList');
  const beerDescription = document.getElementById('beerDescription');
  const modal = document.getElementById('beerModal');
  const closeBeer = document.getElementById('closeBeer');

  filterButton.addEventListener('click', () => filterModal.style.display = 'block');
  sortButton.addEventListener('click', () => sortModal.style.display = 'block');
  closeFilter.addEventListener('click', () => filterModal.style.display = 'none');
  closeSort.addEventListener('click', () => sortModal.style.display = 'none');
  closeBeer.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', (event) => {
    if (event.target == filterModal) {
      filterModal.style.display = 'none';
    }
    if (event.target == sortModal) {
      sortModal.style.display = 'none';
    }
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  filterType.addEventListener('change', updateFilterOptions);
  filterValue.addEventListener('change', updateBeerList);
  abvFilter.addEventListener('change', updateBeerList);
  sortType.addEventListener('change', updateBeerList);
  searchButton.addEventListener('click', updateBeerList);
  resetButton.addEventListener('click', resetFilters);

  function updateFilterOptions() {
    const selectedFilter = filterType.value;
    const uniqueValues = [...new Set(data.map(item => item[selectedFilter.toUpperCase()]))];
    filterValue.innerHTML = '<option value="all">All</option>';
    uniqueValues.forEach(value => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      filterValue.appendChild(option);
    });
    updateBeerList();
  }

  function updateBeerList() {
    const selectedFilter = filterType.value;
    const selectedValue = filterValue.value;
    const selectedAbv = abvFilter.value;
    const searchQuery = searchInput.value.toLowerCase();

    let filteredData = selectedValue === 'all' ? data : data.filter(item => item[selectedFilter.toUpperCase()] === selectedValue);

    if (selectedAbv !== 'all') {
      filteredData = filteredData.filter(item => {
        if (selectedAbv === 'low') return item.ABV < 5;
        if (selectedAbv === 'medium') return item.ABV >= 5 && item.ABV <= 7;
        if (selectedAbv === 'high') return item.ABV > 7;
      });
    }

    if (searchQuery) {
      filteredData = filteredData.filter(item =>
        item.NAME.toLowerCase().includes(searchQuery) ||
        item.STALL.toLowerCase().includes(searchQuery) ||
        item.BREWERY_NAME.toLowerCase().includes(searchQuery)
      );
    }

    const sortOption = sortType.value;
    if (sortOption === 'name') {
      filteredData.sort((a, b) => a.NAME.localeCompare(b.NAME));
    } else if (sortOption === 'abvAsc') {
      filteredData.sort((a, b) => a.ABV - b.ABV);
    } else if (sortOption === 'abvDesc') {
      filteredData.sort((a, b) => b.ABV - a.ABV);
    }

    const groupedByStallOrStyle = filteredData.reduce((acc, item) => {
      const key = selectedFilter === 'style' ? item.STALL : item.STYLE;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});

    beerList.innerHTML = '';
    for (const key in groupedByStallOrStyle) {
      const groupDiv = document.createElement('div');
      groupDiv.className = selectedFilter === 'style' ? 'stall' : 'style';
      const groupHeader = document.createElement('button');
      groupHeader.className = 'collapsible';
      groupHeader.textContent = `${key} (${groupedByStallOrStyle[key].length} beers)`;
      groupDiv.appendChild(groupHeader);

      const contentDiv = document.createElement('div');
      contentDiv.className = 'content';

      const beerNames = groupedByStallOrStyle[key].map(beer => {
        const beerName = document.createElement('div');
        beerName.className = 'beer-name';
        beerName.textContent = beer.NAME;
        beerName.addEventListener('click', () => showBeerDescription(beer));
        return beerName;
      });

      beerNames.forEach(beerName => contentDiv.appendChild(beerName));
      groupDiv.appendChild(contentDiv);
      beerList.appendChild(groupDiv);
    }

    const collapsibles = document.getElementsByClassName('collapsible');
    for (let i = 0; i < collapsibles.length; i++) {
      collapsibles[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    }
  }

  function showBeerDescription(beer) {
    beerDescription.innerHTML = `
          <h3>${beer.NAME}</h3>
          <p><strong>Brewery:</strong> ${beer.BREWERY_NAME}</p>
          <p><strong>ABV:</strong> ${beer.ABV}%</p>
          <p><strong>Style:</strong> ${beer.STYLE}</p>
          <p><strong>Type:</strong> ${beer.TYPE}</p>
          <p><strong>Tasting Notes:</strong> ${beer.TASTING_NOTES}</p>
      `;
    modal.style.display = 'block';
  }

  function resetFilters() {
    filterType.value = 'style';
    filterValue.value = 'all';
    abvFilter.value = 'all';
    sortType.value = 'name';
    searchInput.value = '';
    updateFilterOptions();
  }

  updateFilterOptions(); // Initial call to populate filter options and display all beers
});
