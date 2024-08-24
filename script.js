document.addEventListener('DOMContentLoaded', function () {
  const data = [
    {
      "STALL": "4 Pines",
      "BREWERY NAME": "4 Pines",
      "NAME": "Japanese Rice Lager",
      "TASTING NOTES": "Japanese Style Lager is a modern dry rice lager that tastes as if it’s been yanked right from the streets of Tokyo. Unlike the alley ways of the Golden Gai, there’s nowhere to hide here. A base of Pilsner malt and flaked rice provide and ultra light bodied and colored beer with brightness reminiscent of the neon lights of the Shibuya skyline. A hint of residual sweetness is balanced out by a subtle herbal bite from a dash of hops, resulting in a dry, crisp and refreshing finish that'll leave you wanting more.",
      "ABV": "4.5",
      "STYLE": "lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "4 Pines",
      "BREWERY NAME": "4 Pines",
      "NAME": "New World Pale Ale ",
      "TASTING NOTES": "A modern pale ale, based on a foundation extra pale malts with a small addition of wheat for a slightly hazy liquid that is straw to golden and topped with a soft white foam. Handsome doses of new age hops including Citra, Galaxy and Nelson Sauvin bring refreshing waves of green melon, passionfruit and citrus, backed by a subtle grassy bitterness. The combination of the fruit forward hops, grassy bitterness and light to medium body harmonize to produce a cooling and ultra refreshing Pale Ale.",
      "ABV": "4.2",
      "STYLE": "Pale Ale",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "4 Pines",
      "BREWERY NAME": "4 Pines",
      "NAME": "Hazy Pale Ale ",
      "TASTING NOTES": "A juicy drop with a mystic haze, dumped with loads of tropical fruit notes from heavy additions of Strata, Idaho 7 and Nectaron hops finishing with a smooth bitterness.",
      "ABV": "6",
      "STYLE": "Hazy Pale Ale ",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "4 Pines",
      "BREWERY NAME": "4 Pines",
      "NAME": "Dark Lager",
      "TASTING NOTES": "Where there is darkness, there is light. Dark Lager glints in the light like the flicker of a gentle flame. A rich aroma of roasted malts including chocolate and coffee is met with a medium body and a light hop profile, finishing crisp and dry to leave you wanting more.",
      "ABV": "4.5",
      "STYLE": "Dark Lager",
      "TYPE": "Lager (Dark)"
    },
    {
      "STALL": "4 Pines",
      "BREWERY NAME": "4 Pines",
      "NAME": "Pacific Pale Ale ",
      "TASTING NOTES": "Hazy golden in appearance. Big fruity hop aromas of passionfruit, pineapple and pear are complemented by a smooth, dry, easy finish.",
      "ABV": "3.5",
      "STYLE": "Pacific Pale Ale ",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "Abandoned Brewery",
      "BREWERY NAME": "Abandoned Brewery",
      "NAME": "APA",
      "TASTING NOTES": "Nectarine and apricot with a touch of pine. A light biscuit and caramel malt backbone and mellow bitterness.",
      "ABV": "5.4",
      "STYLE": "APA",
      "TYPE": "American Pale Ale"
    },
    {
      "STALL": "Abandoned Brewery",
      "BREWERY NAME": "Abandoned Brewery",
      "NAME": "IPA",
      "TASTING NOTES": "Juicer and bittererer than ever. Made with a clash of hops from the US and NZ like a nuclear submarine in the Pacific..  Think pithy grapefruit, orange, pineapple and a smooth bitter finish.",
      "ABV": "6.4",
      "STYLE": "IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Abandoned Brewery",
      "BREWERY NAME": "Abandoned Brewery",
      "NAME": "Pilsner ",
      "TASTING NOTES": "Designed, as all good pilsner should be, to be necked in responsibly large quantities. Pale gold with zesty citrus, herbal hop character and a refreshingly bitter finish.",
      "ABV": "5",
      "STYLE": "Pilsner ",
      "TYPE": "Pilsner"
    },
    {
      "STALL": "Abandoned Brewery",
      "BREWERY NAME": "Abandoned Brewery",
      "NAME": "Lager ",
      "TASTING NOTES": "The benchmark for a brewer, no fucking haze and juice to hide behind. A radiant pale straw in the glass. Crisp and dry with delicate hop character and cracker malt. The undisputed king of beer!  ",
      "ABV": "4.2",
      "STYLE": "Lager ",
      "TYPE": "Lager (Pale)"
    },
    {
      "STALL": "Abandoned Brewery",
      "BREWERY NAME": "Abandoned Brewery",
      "NAME": "Hazy Pale Ale ",
      "TASTING NOTES": "Perfect Summer Beer. Beer for a sunny day. Lawnmower beer. Barbeque Beer. Beer for any season. Sunshine in a glass. Wellington on a good day. light, fresh, tropical, easy.",
      "ABV": "5",
      "STYLE": "Hazy Pale Ale ",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Abandoned Brewery",
      "BREWERY NAME": "Abandoned Brewery",
      "NAME": "Hazy #17",
      "TASTING NOTES": "The next iteration in our highly anticipated never ending series of very slightly different Hazy IPAs! This one loaded with America’s finest Mosaic and Centennial and Aotearoa’s finest Nectaron.",
      "ABV": "6.5",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Abandoned Brewery",
      "BREWERY NAME": "Abandoned Brewery",
      "NAME": "NZIPA",
      "TASTING NOTES": "If there’s one thing Aotearoa does as well as growing weed it’s growing fucking unreal hops. We decided to combine the two by smoking as much weed as we could handle then brainstorming the unique combination of Riwaka, Motueka and NZ Cascade that went into this.",
      "ABV": "7",
      "STYLE": "NZIPA",
      "TYPE": "New Zealand IPA"
    },
    {
      "STALL": "Abandoned Brewery",
      "BREWERY NAME": "Abandoned Brewery",
      "NAME": "XXPA ",
      "TASTING NOTES": "Our reprehensible interpretation of an XPA. Big, dank and dirty. This 8.4% MF drinks like a 5%er. After every sip, you'll exhale a cloud of resin. Caution: Risk of altering your taste in music.",
      "ABV": "8.4",
      "STYLE": "Double IPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "Abandoned Brewery",
      "BREWERY NAME": "Abandoned Brewery",
      "NAME": "Stout ",
      "TASTING NOTES": "An amarillo dry hopped stout with a pronounced orange-citrus hop character. A mixture of roasted malts provides the beer with a robust bitterness and classic dark roasted coffee and cocoa character. The nitro pour gives a soft creaminess further enhancing the cold brew coffee feel.",
      "ABV": "5",
      "STYLE": "Oatmeal Stout ",
      "TYPE": "Oatmeal Stout"
    },
    {
      "STALL": "Alchemist Mixology",
      "BREWERY NAME": "Alchemist Mixology",
      "NAME": "Watermelon Gin Mule",
      "TASTING NOTES": "LadyH gin blended with watermelon extract and fresh lime. Topped off with crisp ginger beer",
      "ABV": "6",
      "STYLE": "Ginger Beer Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Alchemist Mixology",
      "BREWERY NAME": "Alchemist Mixology",
      "NAME": "Flirty Lady",
      "TASTING NOTES": "LadyH gin stirred with raspberry, rosehip, rhubarb and lime. Topped off with ginger beer and garnished with a meringue",
      "ABV": "6",
      "STYLE": "Ginger Beer Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Alchemist Mixology",
      "BREWERY NAME": "Alchemist Mixology",
      "NAME": "Duchess Brownie",
      "TASTING NOTES": "Duchess Chocolate & Hazelnut gin liqueur mixed with raspberry puree and finished off with Emerson’s London Porter",
      "ABV": "7.6",
      "STYLE": "Beer-Based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Alchemist Mixology",
      "BREWERY NAME": "Alchemist Mixology",
      "NAME": "Tropical IPA",
      "TASTING NOTES": "Duchess Summer Escape gin liqueur mixed with passionfruit puree, and fresh lime. Topped off with Emerson’s Orange Roughy Tropical Pale Ale",
      "ABV": "6.3",
      "STYLE": "Beer-Based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Alchemist Mixology",
      "BREWERY NAME": "Alchemist Mixology",
      "NAME": "Candyfloss Cider Spritz",
      "TASTING NOTES": "New Zealand Apple Cider, mixed with strawberry puree fresh lime and soda. Garnished with candyfloss!",
      "ABV": "4",
      "STYLE": "Cider-Based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Alchemist Mixology",
      "BREWERY NAME": "Alchemist Mixology",
      "NAME": "Watermelon Gin Mule Mocktail",
      "TASTING NOTES": "LadyH gin blended with watermelon extract and fresh lime. Topped off with crisp ginger beer",
      "ABV": "0",
      "STYLE": "Watermelon Gin Mule Mocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Alchemist Mixology",
      "BREWERY NAME": "Alchemist Mixology",
      "NAME": "Flirty Lady Mocktail",
      "TASTING NOTES": "LadyH gin stirred with raspberry, rosehip, rhubarb and lime. Topped off with ginger beer and garnished with a meringue",
      "ABV": "0",
      "STYLE": "Non-alc Ginger Beer Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Alchemist Mixology",
      "BREWERY NAME": "Alchemist Mixology",
      "NAME": "Duchess Brownie Mocktail",
      "TASTING NOTES": "Duchess Chocolate & Hazelnut gin liqueur mixed with raspberry puree and finished off with Emerson’s London Porter",
      "ABV": "0",
      "STYLE": "Non Alc Beer-Based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Alchemist Mixology",
      "BREWERY NAME": "Alchemist Mixology",
      "NAME": "Tropical IPA Mocktail",
      "TASTING NOTES": "Duchess Summer Escape gin liqueur mixed with passionfruit puree, and fresh lime. Topped off with Emerson’s Orange Roughy Tropical Pale Ale",
      "ABV": "0",
      "STYLE": "Non Alc Beer-Based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Alchemist Mixology",
      "BREWERY NAME": "Alchemist Mixology",
      "NAME": "Candy Floss Cider Spritz Mocktail",
      "TASTING NOTES": "New Zealand Apple Cider, mixed with strawberry puree fresh lime and soda. Garnished with candyfloss!",
      "ABV": "0",
      "STYLE": "Non Alc Cider-Based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Altitude Brewing",
      "BREWERY NAME": "Altitude Brewing",
      "NAME": "Extra Dose (One Drop Collab)",
      "TASTING NOTES": "Pre-eminent Sydney brewers One Drop are synonymous with out the gate beer creations. After our individual beers combined for 1st, 2nd and 3rd at Beervana 2023 we just had to join forces to break the 2024 festival. Introducing our most decadent beer to date...a liquid freshly baked cinnamon roll. Made with mountains of caramel and biscuit malts, imported vanilla beans and gently toasted cinnamon sticks, then conditioned with marshmallows and hints of cold brewed coffee. Nothing short of astonishing to smell and taste, it's like transporting yourself to a Swedish bakery on a Saturday morning.",
      "ABV": "10.5",
      "STYLE": "Cinnamon Roll Golden Pastry Stout (Nitro)",
      "TYPE": "Imperia"
    },
    {
      "STALL": "Altitude Brewing",
      "BREWERY NAME": "Altitude Brewing",
      "NAME": "Choc Nut Slab",
      "TASTING NOTES": "We do treat Fridays here in the brewery, every Friday someone has to bring in some home baking. One fine Friday we were deciding what to brew for beervana 2024 and along came Rob with a Peanut and Chocolate loaf and the brew was thusly decided. Taking influence from our friends at Narrow Gauge in Missouri who brew the best damn peanut stout we know of we created this decadent tipple. Peanuts in the boil, peanut powder in the whirlpool and more dry peanutting with cocoa husks and cocoa powder from the local chocolatier, mean a humongous aroma of peanut brittle cased in milk chocolate. Treat yourself. ",
      "ABV": "9",
      "STYLE": "Peanut & Milk Chocolate Pastry Stout (Nitro)",
      "TYPE": "Imperial"
    },
    {
      "STALL": "Altitude Brewing",
      "BREWERY NAME": "Altitude Brewing",
      "NAME": "Leisure Athlete",
      "TASTING NOTES": "5pm on friday the world as we understand it transforms, batman goes into his cave, superman into the nearest phone booth and the rest of us unleash our own version of the pro athlete inside. Morphing from regular west coast IPA into its weekend state this beer will make your hair turn yellow, your eyes turn green and give you a golden aura. A backbone of new Amplifire morphed Motueka, Cryo enhanced Simcoe and the best Nelson sauvin we could find make up a hop bill that screams at your nose with the flavour and bitterness of a superhero. Whatever your weekend activity is - own it.",
      "ABV": "8.5",
      "STYLE": "Double IPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "Altitude Brewing",
      "BREWERY NAME": "Altitude Brewing",
      "NAME": "Biere de Garde (Heyday Collab)",
      "TASTING NOTES": "Collaboration No. 3 with Heyday Beer Co. from Wellington brings us a winter warmer of ultra-traditional heritage. Brewed on the winter solstice of 2024 this is a rich and malt forward Pale Ale for sipping on dark winter evenings. A traditional French farmhouse style usually brewed in winter and bottle-aged until the following winter or even longer for full maturation and enjoyment. Our version is dark copper in colour and incorporates three different rye malts giving a spicy dry feel to this beautiful style. Drink now or keep for up to 3 years.",
      "ABV": "6.7",
      "STYLE": "Traditional French Pale Ale",
      "TYPE": "Belgian Ale"
    },
    {
      "STALL": "Altitude Brewing",
      "BREWERY NAME": "Altitude Brewing",
      "NAME": "Jam Sessions Vol. 13: Strawberry & Sea Buckthorn",
      "TASTING NOTES": "This jammy journey of mouth FOMO keeps going! The unique and piquant vibrancy of sea buckthorns take centre stage in this dance, partnering with sweet juicy strawberries for a carefully choreographed combo of yum. A thick orange pour is slightly pinkened by the strawberry and delivers an aroma of tangy citrus with a sweet strawberry poke. Despite the huge sweet and sour punch, there is a balanced, luscious mouthfeel and clean sour base to finish out the beer.",
      "ABV": "6.4",
      "STYLE": "Smoothie Sour (Nitro)",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Altitude Brewing",
      "BREWERY NAME": "Altitude Brewing",
      "NAME": "Dollars for Scholars (Derelict Brewing Collab)",
      "TASTING NOTES": "Derelict Brewing X Altitude Brewing brings you this scholarly collaboration of delicious drinking thanks to Smiths - Craft Beer House, Clayton Hops NZ, Froth Technologies, Konvoy and Gladfield Malt. This charity brew is being released this Thursday for Smith's NZIPA Challenge 2024. An oat cream hazy pale where net profits go to local students. Hosting Sam at Derelict and the above team for this brew was a pleasure and for a cause we love. This beer is full of innovative new Amplifire NZ hops, a new yeast and the best NZ malt then put together by some top NZ beer minds.",
      "ABV": "5.5",
      "STYLE": "Oat Cream Hazy",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Altitude Brewing",
      "BREWERY NAME": "Altitude Brewing",
      "NAME": "Super Blood Moon",
      "TASTING NOTES": "This Schwarzbier (black beer) is a dark German lager which takes the classic style and gives it a twist with a dash of roast grains. Resulting in an opaque black beer with hints of coffee and caramel. First brewed under a Super Blood Moon, we have otherwise kept ours as traditional as possible with imported German malts and hops. The result is a classic style that drinks like a Munich lager with hints of roast malts and spice from the hops. Rich yet easy drinking and finishing clean with a smooth bitterness.",
      "ABV": "5.2",
      "STYLE": "Schwarzbier (Dark Lager)",
      "TYPE": "Lager (Dark)"
    },
    {
      "STALL": "Altitude Brewing",
      "BREWERY NAME": "Altitude Brewing",
      "NAME": "Broken Compass",
      "TASTING NOTES": "We have brewed a bucket load of west coast pilsners over the last 12 months, they are popular and delicious, we know this. However we have broken the compass a little on this one. Coming in at a crushable 4.8% it's not your usual abv for the style, but we have carefully crafted it to drink like its big brothers. Big hoppy aromas jump out with white grape, sweet grapefruit and fresh hay then a lovely full mouthfeel, crisp crushable bitterness on a light malt backbone finish this thirst quencher. ",
      "ABV": "4.8",
      "STYLE": "Session WC Pilsner",
      "TYPE": "Pilsner"
    },
    {
      "STALL": "Altitude Brewing",
      "BREWERY NAME": "Altitude Brewing",
      "NAME": "Good Times",
      "TASTING NOTES": "One of our core values here at Altitude is having a good time. Some days are naturally gonna be better than others and some don't go as planned, but as they say, you can turn lemons into lemonade. When it's time to pass up a beer, we respect that. But it never means you shouldn't be having a good time as good times are all the time with us. This extra pale ale is crafted with all the best qualities of a full flavoured brew but without the booze.",
      "ABV": "0.5",
      "STYLE": "Non-Alc XPA",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "BEE",
      "BREWERY NAME": "BEE",
      "NAME": "Alcoholic Lemonade",
      "TASTING NOTES": "Our OG Alcoholic Lemonade is a bee-licious mingle of crisp citrus and smooth sweetness for an old-fashioned style lemonade, bringing you that nostalgic lemonade vibe. Just like your nan used to make it, but boozey. At a breezy 5.0% ABV, this sipper is perfect for lazy afternoons. Enjoy it straight up, over ice, or with a posh lemon wedge if you're feeling extra fancy. 🍋 BEE’s Original Alcoholic Lemonade packs a punch with full-bodied flavour, a fruity middle, and a refreshing finish that’ll leave you buzzing for more.",
      "ABV": "5",
      "STYLE": "Naturally Brewed Alcoholic Soda",
      "TYPE": "Other"
    },
    {
      "STALL": "BEE",
      "BREWERY NAME": "BEE",
      "NAME": "Alcoholic Pink Lemonade",
      "TASTING NOTES": "Introducing: Pink Alcoholic Lemonade. Whether you're vibing with the barbie-core trend, feeling a wave of nostalgia, or just appreciating a stroke of pure genius, this lemonade is your new go-to. Imagine our classic OG Alcoholic Lemonade, now swirled with a bee-lightful burst of your favourite berries. It’s a flavour explosion that’s both crisp and deliciously bold. With a classic 5.0% ABV, this pink delight is your perfect companion as the sun sets and the evening unfolds. Enjoy it solo for a fruity punch, or get creative and mix it into a cocktail or two. Need inspiration? check out our Instagram for some bee-brilliant cocktail ideas!",
      "ABV": "5",
      "STYLE": "Naturally Brewed Alcoholic Soda",
      "TYPE": "Other"
    },
    {
      "STALL": "BEE",
      "BREWERY NAME": "BEE",
      "NAME": "Alcoholic Cola",
      "TASTING NOTES": "Introducing BEE Alcoholic Cola 🥤The latest addition to our range of Naturally Brewed Alcoholic Soda’s… and from first reactions we know this one is here to make a splash 💦. Call is nostalgic, call it futuristic, call your mates… it’s COLA time.",
      "ABV": "5",
      "STYLE": "Naturally Brewed Alcoholic Soda",
      "TYPE": "Other"
    },
    {
      "STALL": "BEE",
      "BREWERY NAME": "BEE",
      "NAME": "Spiced Mulled Lemonade",
      "TASTING NOTES": "Our OG Lemonade takes winter warmer. With the addition of some spice, our mulled lemonade is guaranteed to keep you nice and warm all Beervana long.",
      "ABV": "5",
      "STYLE": "Naturally Brewed Alcoholic Soda",
      "TYPE": "Other"
    },
    {
      "STALL": "BEE",
      "BREWERY NAME": "BEE",
      "NAME": "Pink Lemonade Slushy",
      "TASTING NOTES": "Pink... frozen... BEE-licious. Need we say more?",
      "ABV": "5",
      "STYLE": "Naturally Brewed Alcoholic Soda",
      "TYPE": "Other"
    },
    {
      "STALL": "BEE",
      "BREWERY NAME": "BEE",
      "NAME": "Cola Float",
      "TASTING NOTES": "If Alcoholic Cola wasn't enough, get it with a scoop of vanilla ice cream for the best dammm boozy spider you could imagine.",
      "ABV": "5",
      "STYLE": "Naturally Brewed Alcoholic Soda",
      "TYPE": "Other"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Mr Peanut Butter",
      "TASTING NOTES": "Chocolate, peanut butter, cocoa",
      "ABV": "6.3",
      "STYLE": "Peanut Butter Stout",
      "TYPE": "Sweet Stout"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Froot Dealer ",
      "TASTING NOTES": "Hints of espresso coffee and toffee on the nose, chocolate notes linger in behind. Bold chocolate and toasted malts on the palate with a distinct coffee follow through and rounding it all off with a subtle cherry finish ",
      "ABV": "6.82",
      "STYLE": "Coffee & Cherry Stout",
      "TYPE": "Stout"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Framboise Patisserie",
      "TASTING NOTES": "Good presentation with strong off white head. Raspberry (natural) nose with roast malt. Strong raspberry flavour with sweetness and good dark malt/roast malt characters. Pastry stout with fruit, sweetness but maintains stout credentials",
      "ABV": "6.8",
      "STYLE": "Raspberry Pastry Stout",
      "TYPE": "Sweet Stout"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Darth Hazer",
      "TASTING NOTES": "Dense off white foam, Hazy, Chocolate coffee espresso floral nose, spicey, full, strong citrus hop flavour. Clean.",
      "ABV": "6.5",
      "STYLE": "Dark Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Black Noir",
      "TASTING NOTES": "The darker malts lend roasted flavours that work in contrast with the floral, citric and piney flavours of the hops",
      "ABV": "6.5",
      "STYLE": "Black IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Sultana",
      "TASTING NOTES": "Tight white head, copper red colour, toasted malt aroma, strong pineapple aroma. Toffee toasted malt flavour, sl roast. Pineapple stonefruit marmalade hop flavour. Integrated and clean",
      "ABV": "6.7",
      "STYLE": "Single Hop Amber Ale",
      "TYPE": "Amber Ale"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Mandarina Bavaria",
      "TASTING NOTES": "Strong ripe citrus, mandarin, full mouthfeel/body with hop carrying through the palate and dry clean pleasant bitter finish",
      "ABV": "5",
      "STYLE": "Single Hop Pilsner",
      "TYPE": "Pilsner"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Mosaic",
      "TASTING NOTES": "Copper hue, bright, lingering strong white head, mosaic-tropical citrus nectarine, sl dank. Malt sweetness and balanced clean bitterness. Tropical, fruity. Munich malt nutty character.",
      "ABV": "6.6",
      "STYLE": "Single Hop Pale Ale",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Cashmere",
      "TASTING NOTES": "XPA. Floral, citrus aroma, light body, low bitterness drying. Citrus and floral hop flavour. Clean",
      "ABV": "4.3",
      "STYLE": "Single Hop NZ Pale Ale",
      "TYPE": "New Zealand Pale Ale"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "The Pitmasters Yuzu Lager",
      "TASTING NOTES": "Our yuzu lager has a clean, crispy base with a late hop addition of lemon drop, bringing a hint of citrus from real yuzus. With low bitterness, its a refreshing brew with a subtle fruity twist, going hand in hand with grilling on the BBQ.\n",
      "ABV": "4.77",
      "STYLE": "Yuzu Lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Chewbacca",
      "TASTING NOTES": "Creamy white head with notes of dark fruits and hints of caramel, leading to the star of the show: cherry ad blackberry on the palate. A touch of spice and caramel from the darker malts adds sweetness to the complex flavour profile. Definitely one of a kind. A sour to stand out.",
      "ABV": "4.77",
      "STYLE": "Cherry & Blackberry Red Sour Ale Red Sour Ale",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Macca Money Mclaren",
      "TASTING NOTES": "An Island getaway in the palm of your hand. Mango and toasted coconut up front, with cardamom and cracked peppercorn in the back, all supported by NZ hops showcasing notes of citrus and guava. Creamy and full, this milkshake IPA leaves nothing to be desired, except a beach and a tiny umbrella!\n",
      "ABV": "6.77",
      "STYLE": "Coconut and Mango Milkshake IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "DJ Nacho",
      "TASTING NOTES": "This full bodies porter packs a punch, thanks to a hefty dose of rolled oats for a rich mouthfeel. No dry hop, just pure, robust flavour.",
      "ABV": "5.77",
      "STYLE": "Porter",
      "TYPE": "Porter"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Return of the Haze",
      "TASTING NOTES": "This juice bomb is bursting with flavours of mango, pineapple and tangerine with a balanced malt sweetness and refreshing bitterness for a drink you can't put down",
      "ABV": "6.3",
      "STYLE": "Juicy Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "It's Our Year",
      "TASTING NOTES": "Tropical mango nose-strong mango. Fruity, passionfruit, mango flavour. Clean, good depth and sweetness. Mango dominates both flavour and aroma.",
      "ABV": "6.1",
      "STYLE": "Mango Hazy Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Garstenstein ",
      "TASTING NOTES": "Garstenstein Light hop haze, light citrus/grapefruit aroma,good foam retention, strong sauvin flavour-catty, fruity, gooseberry",
      "ABV": "6.1",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Froot Dealer ",
      "TASTING NOTES": "Crisp and clean with a delicate acid profile that brings the most out of the feijoa. Notes of salted lime support the feijoa at the front, with the wheat base rounding out the finish for a refreshing experience for the whole pint.",
      "ABV": "5.5",
      "STYLE": "Feijoa & Lime Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Mr Grapefruit Head ",
      "TASTING NOTES": "Hazy using the Verdant yeast Hi haze, juicy full mouthfeel Late hopped with Comet and Mandarina Bavaria Dry Hopped with Citra, with secondary notes from Mandarina Bavaria and Comet Aroma and flavour citrus layered with Grapefruit dominating.",
      "ABV": "5.5",
      "STYLE": "Citra Pale Ale",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Banana Man ",
      "TASTING NOTES": "",
      "ABV": "5.6",
      "STYLE": "Banana Hefeweizen",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Lemon Squeeze",
      "TASTING NOTES": "Appearance: Off white Haze, White Head\nOverview: Lemonade sour ale with an intense lemon hit.\nMouthfeel: Some sweetness to balance out the lip-smacking lemon hit at the finish! Perfect summer",
      "ABV": "5.2",
      "STYLE": "Lemon Sour Ale",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "BEERS by Bacon Bros",
      "BREWERY NAME": "BEERS by Bacon Bros",
      "NAME": "Ol' Bluey",
      "TASTING NOTES": "Zesty with a big hit from fresh cold pressed ginger from Green Roots Organics and Red Apple Juice . Brewed the traditional way",
      "ABV": "4",
      "STYLE": "Ginger Beer",
      "TYPE": "Other"
    },
    {
      "STALL": "Behemoth Brewing Company",
      "BREWERY NAME": "Behemoth Brewing Company",
      "NAME": "Smoked Bacon Porter",
      "TASTING NOTES": "Collab with Beers in Christchurch ",
      "ABV": "5.3",
      "STYLE": "Porter",
      "TYPE": "Smoked Beer"
    },
    {
      "STALL": "Behemoth Brewing Company",
      "BREWERY NAME": "Behemoth Brewing Company",
      "NAME": "Pūteketeke Hazy IPA",
      "TASTING NOTES": "Collab with MotoSonora Brewing in Tucson, AZ, USA",
      "ABV": "6.8",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Behemoth Brewing Company",
      "BREWERY NAME": "Behemoth Brewing Company",
      "NAME": "Extra Bossy Japanese Coffee Stout",
      "TASTING NOTES": "Collab with Far Yeast Brewing, Yamanashi, Japan",
      "ABV": "6.4",
      "STYLE": "Stout",
      "TYPE": "Specialty / Hybrid / Mixed"
    },
    {
      "STALL": "Behemoth Brewing Company",
      "BREWERY NAME": "Behemoth Brewing Company",
      "NAME": "Wrong Side of the Tracks",
      "TASTING NOTES": "Collab with Saint Leonards Brewing Co, Auckland",
      "ABV": "6.9",
      "STYLE": "West Coast IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Behemoth Brewing Company",
      "BREWERY NAME": "Behemoth Brewing Company",
      "NAME": "West Coast Hop Buddies - Jason & Andrew",
      "TASTING NOTES": "Collab with Jason Bathgate, Waipu, Northland, NZ",
      "ABV": "6.4",
      "STYLE": "West Coast IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Behemoth Brewing Company",
      "BREWERY NAME": "Behemoth Brewing Company",
      "NAME": "Densely Hoppulated Hazy IPA",
      "TASTING NOTES": "Collab with Hong Kong Brewing Company, Hong Kong",
      "ABV": "7",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Brew Moon Brewing Company",
      "BREWERY NAME": "Brew Moon Brewing Company",
      "NAME": "Leithfield",
      "TASTING NOTES": "Clean, crisp & refreshing. No surprises here!",
      "ABV": "4",
      "STYLE": "Lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "Brew Moon Brewing Company",
      "BREWERY NAME": "Brew Moon Brewing Company",
      "NAME": "Waipara",
      "TASTING NOTES": "Our go-to hazy. Bright and aromatic with lovely tropical fruit.",
      "ABV": "5.8",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Brew Moon Brewing Company",
      "BREWERY NAME": "Brew Moon Brewing Company",
      "NAME": "Hophead (XL)",
      "TASTING NOTES": "Our classic IPA with a facelift. Bright citrus & stone fruit, gentle malt sweetness, clean bitter finish.",
      "ABV": "6.5",
      "STYLE": "IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Brew Moon Brewing Company",
      "BREWERY NAME": "Brew Moon Brewing Company",
      "NAME": "Layer Cake",
      "TASTING NOTES": "A pastry sour designed to replicate the American dessert; Strawberry Pretzel Salad. Strawberries, banana and cream come together for a sweet, fruity, sour delight.",
      "ABV": "5.5",
      "STYLE": "Pastry Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Brew Moon Brewing Company",
      "BREWERY NAME": "Brew Moon Brewing Company",
      "NAME": "Party Porridge",
      "TASTING NOTES": "Breakfast of champions. Heaps of oats for thick, creamy mouthfeel. Heaps of Peacharine hops for a stone fruit flavour bomb.",
      "ABV": "7",
      "STYLE": "Oat Cream IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Brew Moon Brewing Company",
      "BREWERY NAME": "Brew Moon Brewing Company",
      "NAME": "Husk",
      "TASTING NOTES": "A silky Tropical Stout base with a healthy addition of coconut. Mosaic hops added for lovely balance.",
      "ABV": "6.7",
      "STYLE": "Coconut Tropical Stout",
      "TYPE": "Stout"
    },
    {
      "STALL": "Brookvale Union",
      "BREWERY NAME": "Brookvale Union",
      "NAME": "Ginger Beer ",
      "TASTING NOTES": "SPICY YET MILD, DRY BUT WET, SMOOTH BUT SHARP, TIGHT BUT LOOSE – JUST GREAT TASTING GINGER BEER!",
      "ABV": "4",
      "STYLE": "Alcoholic Ginger Beer",
      "TYPE": "Other"
    },
    {
      "STALL": "Brookvale Union",
      "BREWERY NAME": "Brookvale Union",
      "NAME": "Lemon Squash ",
      "TASTING NOTES": "Easy yet squeezy, lem-on but full-on, zesty but smooth, loud but loose – just great tasting Lemon Squash!",
      "ABV": "6",
      "STYLE": "Alcoholic Lemon Squash",
      "TYPE": "Other"
    },
    {
      "STALL": "Brookvale Union",
      "BREWERY NAME": "Brookvale Union",
      "NAME": "Lemon Lime and Bitters",
      "TASTING NOTES": "CLASSIC YET CLASSY, EASY BUT FRESH, BREEZY BUT SMOOTH, BITTER BUT SWEET – JUST GREAT TASTING LEMON LIME & BITTERS!",
      "ABV": "4",
      "STYLE": "Alcoholic Lemon, Lime and Bitters",
      "TYPE": "Other"
    },
    {
      "STALL": "Brothers Beer",
      "BREWERY NAME": "Brothers Beer",
      "NAME": "Peacenik",
      "TASTING NOTES": "Make love, not war. Drink beer, not wine. \nWe start with a traditional Czech recipe using pilsner malt and a touch of wheat. \nTo this we add New Zealand hops Pacifica and Motueka to create a new-world take on an old-world classic. \nClean, crisp and full of citrus notes, our aromatic pilsner is the ultimate thirst quencher, and pairs perfectly with foods that are rich, sweet or spicy.  Lay down your guns and surrender to the taste of Peacenik Pilsner!",
      "ABV": "5",
      "STYLE": "Pilsner",
      "TYPE": "Pilsner"
    },
    {
      "STALL": "Brothers Beer",
      "BREWERY NAME": "Brothers Beer",
      "NAME": "Notorious",
      "TASTING NOTES": "Everything about our Notorious IPA is BIG: think bold fresh flavours, higher ABV and heavy-handed hopping. \nOur recipe is a classic West Coast IPA, starting with a mash-tun full of pilsner and Vienna malts. Then we dose with a dope blend of NZ and US hops: Cascade, Centennial and Waimea unleashing BIG flavours of lush fruit, citrus, and sticky pine. \nAnd if you don't know, now you know….",
      "ABV": "5.8",
      "STYLE": "IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Brothers Beer",
      "BREWERY NAME": "Brothers Beer",
      "NAME": "Wax On Wax Off",
      "TASTING NOTES": "A hazy IPA more meticulously crafted than a Bonsai.\nAn oaty, wheaty, malty base so broad you could hold a karate tournament on it.\nWith a big, juicy crane kick to the face of tropical and stone fruits, this well\u0002 rounded, liberally hopped fruit bomb would even make your local ruthless school bully stop and think twice.\n“Wax On, Wax Off.” \nA tribute to a fallen legend.",
      "ABV": "6.5",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Brothers Beer",
      "BREWERY NAME": "Brothers Beer",
      "NAME": "Houble Dazy",
      "TASTING NOTES": "Houble Dazy is the biggest juiciest haziest hoppiest beer that we brew. \nWe cram our mash-tun full of malt to produce a super high gravity wort which we fermented with a Verdant IPA yeast before dosing heavily \nwith American hops Simcoe, Citra & Columbus to present a beer with a ridiculous amount of fruit flavour: grapefruit, guava and stone fruit",
      "ABV": "8.1",
      "STYLE": "Hazy Double IPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "Brothers Beer",
      "BREWERY NAME": "Brothers Beer",
      "NAME": "Uncorked",
      "TASTING NOTES": "Not many breweries in New Zealand have tried to brew a Grape Ale, that complex yet very drinkable Italian style. But, well, we have an Italian brewer. Two, in fact. \nWhich means we've got a fair idea of how to make one. The only thing is, you need fresh, unfermented grape juice. Like, fresh.\nSo, here it is: quite possibly the only NZ Grape Ale you’ll find this year. \nSauvignon Blanc grapes, picked on Tuesday, juiced on Wednesday, and dropped into the kettle on Thursday. \nA clean, ample malt base, gently hopped with three wine-friendly varieties: Mosaic, Motueka, and Nelson Sauvin. \nSalute!",
      "ABV": "6.7",
      "STYLE": "Grape Ale",
      "TYPE": "Other"
    },
    {
      "STALL": "Brothers Beer",
      "BREWERY NAME": "Brothers Beer",
      "NAME": "Ao Cacao",
      "TASTING NOTES": "Bigger, badder, and smoother than a regular porter, the use of a lager yeast is what sets this style apart and gives the smooth drinkability to such a big beer. \nWe've partnered with Ao Cacao, Māori chocolatier extraordinaire, to bring you this wonderful winter warmer. \nInfused with the finest Samoan cacao nibs, this huge, deceptively drinkable beer delivers big chocolate, vanilla, and red berry flavours to put a smile on your dial. \nIn a true two-way collaboration, Ao Cacao has made a chocolate using the beer-infused nibs!",
      "ABV": "8.3",
      "STYLE": "Imperial Baltic Porter",
      "TYPE": "Porter"
    },
    {
      "STALL": "Brothers Beer",
      "BREWERY NAME": "Brothers Beer",
      "NAME": "Pōkeno",
      "TASTING NOTES": "In a true two-way collaboration, we've taken the sherry barrels used to make Pōkeno Whisky’s delicious Discovery Whisky and filled them with a rich, chocolatey Belgian Ale for a few months. \nAfter this, Pōkeno will reclaim the barrels to create another exceptional whisky!\nThis complex, malt-driven Belgian Dark Strong Ale showcases typical flavours of chocolate, whisky, raisin, and molasses, with delightful aromas of banana and vanilla.",
      "ABV": "8.6",
      "STYLE": "Whiskey Belgian Dark Strong Ale",
      "TYPE": "Belgian Strong Ale"
    },
    {
      "STALL": "Brothers Beer",
      "BREWERY NAME": "Brothers Beer",
      "NAME": "Strange Brothers Yuzu & Mandarin Cider",
      "TASTING NOTES": "Yuzu & Mandarin Cider",
      "ABV": "5.1",
      "STYLE": "Cider",
      "TYPE": "Cider (Flavoured)"
    },
    {
      "STALL": "Brothers Beer",
      "BREWERY NAME": "Brothers Beer",
      "NAME": "Little Brother",
      "TASTING NOTES": "Like all little brothers, he’s fresh and a little bit cheeky. He may be small, but he punches above his weight. Filled with tropical aromas from Mosaic and Kohatu hops, with a fruity and light but surprisingly full malt base. Little Brother might want to borrow your car - but that’s all good, because at 2.5% he can be your designated driver.",
      "ABV": "2.5",
      "STYLE": "Mini IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Cassels Brewery",
      "BREWERY NAME": "Cassels Brewery",
      "NAME": "Light Owl",
      "TASTING NOTES": "While low in alcohol, our Light Owl beer has been brewed to maximise personality.  Chinook hops bring a distinctive pine aroma which is rounded out by the citrusy, floral flavours of the Taiheke hops.  A bit of alchemy in the brew as we tinker with gravity, the result being a full-bodied, big character beer despite the low ABV.",
      "ABV": "2.5",
      "STYLE": "Low ABV Ale",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "Cassels Brewery",
      "BREWERY NAME": "Cassels Brewery",
      "NAME": "Lager",
      "TASTING NOTES": "Pale golden with a lingering, white foam, this Lager’s as easy on the eye as it is on the palate. Subtle orange peel and mandarin citrus notes, mildly peppery hop flavour, and restrained bitterness; complementing a soft, bready, malt base and gentle sweetness on the finish.",
      "ABV": "4.3",
      "STYLE": "Lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "Cassels Brewery",
      "BREWERY NAME": "Cassels Brewery",
      "NAME": "Fogged Up",
      "TASTING NOTES": "Our Fogged Up Hazy Pale Ale has been created by our award-winning brewers to deliver a full flavoured yet elegant beer. Juicy tropical fruit notes combine with punchy hop characteristics to bring you a balanced and refreshing brew that will have you coming back for more!",
      "ABV": "4.7",
      "STYLE": "Hazy Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Cassels Brewery",
      "BREWERY NAME": "Cassels Brewery",
      "NAME": "Nectaron IPA",
      "TASTING NOTES": "Introducing the Nectaron® hop from NZ Hops, bringing intense tropical fruit aromas to the party. This NZ IPA has been hopped at multiple stages through its brewing journey, mellow out all that hoppy goodness with the toastiness of NZ Ale Malt and Cassels’ House Ale Strain and the result is the almighty brew you could soon have in your hand.",
      "ABV": "6.1",
      "STYLE": "IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Cassels Brewery",
      "BREWERY NAME": "Cassels Brewery",
      "NAME": "Red IPA",
      "TASTING NOTES": "Vibrant and copper-coloured, with a rich, tan head. Prominent pine needle and citrus hop aromas lead to bold flavours of bitter orange and grapefruit. The toffee-sweet, caramel malts and creamier mouthfeel balance beautifully amidst lingering bitterness, and a subtle toasty aftertaste.",
      "ABV": "6.6",
      "STYLE": "IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Cassels Brewery",
      "BREWERY NAME": "Cassels Brewery",
      "NAME": "Milk Stout on Nitro",
      "TASTING NOTES": "Obsidian-black with a velvety, tan head, our Milk Stout is traditionally brewed with non-fermentable lactose sugar for a luscious, full-bodied mouthfeel. Aromas of bittersweet chocolate and bold coffee-and-cream is balanced with a soft roasted malt bitterness. Awarded World’s Best Milk Stout in the 2020, 2022 & 2023 World Beer Awards and World’s Best Stout & Porter at the 2019 World Beer Awards.",
      "ABV": "6.2",
      "STYLE": "Milk Stout",
      "TYPE": "Sweet Stout"
    },
    {
      "STALL": "Cassels Brewery",
      "BREWERY NAME": "Cassels Brewery",
      "NAME": "Hearty Porter",
      "TASTING NOTES": " Mild roast character produces dark chocolate and caramel notes that are balanced nicely with light hop qualities. The result is a strong dark beer with a pleasant bitterness.  Robust and earthy.",
      "ABV": "5.2",
      "STYLE": "Porter",
      "TYPE": "Porter"
    },
    {
      "STALL": "Choice Bros. Brewing",
      "BREWERY NAME": "Choice Bros. Brewing",
      "NAME": "Live By The River",
      "TASTING NOTES": "Big coffee hit, like a cold brew on nitro. Smooth clean and dry base beer. Not major roasted character.",
      "ABV": "5",
      "STYLE": "Coffee Porter",
      "TYPE": "Porter"
    },
    {
      "STALL": "Choice Bros. Brewing",
      "BREWERY NAME": "Choice Bros. Brewing",
      "NAME": "Love Gun",
      "TASTING NOTES": "Intense tropical flavours and aromas from Kohia Nelson, Mosaic and Citra. Ranging from passionfruit, pineapple, orange and guava. A very clean body for a hazy, allowing these incredible hops to shine through",
      "ABV": "6",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Choice Bros. Brewing",
      "BREWERY NAME": "Choice Bros. Brewing",
      "NAME": "Rock You Like A Hurricane",
      "TASTING NOTES": "A slightly more reserved hazy in ABV and malt character. But this beer packs a punch in hop character with Nelsons Sauvin and Idaho 7. A beautiful mix of tangerines, gooseberries with a hint of white wine.",
      "ABV": "4.5",
      "STYLE": "Hazy Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Choice Bros. Brewing",
      "BREWERY NAME": "Choice Bros. Brewing",
      "NAME": "Barracuda",
      "TASTING NOTES": "A sweet spicy ginger aroma, pushed through with strong lime character. This sour really lives up to the sour name. But there is a smooth body balancing out that strong kettle sour and lime hit.",
      "ABV": "5.4",
      "STYLE": "Ginger & Lime Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Choice Bros. Brewing",
      "BREWERY NAME": "Choice Bros. Brewing",
      "NAME": "Perfect Day",
      "TASTING NOTES": "If people want light, clean and crisp, this is the beer for them. Easy drinking low carb, with low bitterness and a fresh light body. This beer shows off what Mosaic can do in the whirlpool with a fresh tropical aroma.",
      "ABV": "3.9",
      "STYLE": "Low Carb Lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "Choice Bros. Brewing",
      "BREWERY NAME": "Choice Bros. Brewing",
      "NAME": "She's My Cherry Pie",
      "TASTING NOTES": "Heavy, almost syrup like body. Huge red fruit and cherry aroma. Classic English style, shown through with a modern fruit addition. Vibrant array of malt and fruit sweetness, reminiscent of a nice port/sherry",
      "ABV": "11",
      "STYLE": "Cherry Barley Wine",
      "TYPE": "Barleywine"
    },
    {
      "STALL": "Choice Bros. Brewing",
      "BREWERY NAME": "Choice Bros. Brewing",
      "NAME": "For The Fjord",
      "TASTING NOTES": "Orange. Orange everywhere. The Eclipse Hops, Kviek yeast. It all adds up to orange flesh, orange peel and even slightly like an orange tic tac. A fun collab with our mates at F&B, along with some of the world's premier suppliers",
      "ABV": "5.5",
      "STYLE": "Kviek Amber Ale",
      "TYPE": "Amber Ale"
    },
    {
      "STALL": "Choice Bros. Brewing",
      "BREWERY NAME": "Choice Bros. Brewing",
      "NAME": "Vats of Goo",
      "TASTING NOTES": "Centennial and Simcoe hops hot side, to bring that clean piney bitterness, layered off with Mosaic and Idaho 7 dry hop pushing those patriotic tropical flavours. All rounded out with a balanced 7%.. If you're after a clean easy drinking IPA, this is the beer for you",
      "ABV": "7",
      "STYLE": "WC IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Crimson Badger Brewing",
      "BREWERY NAME": "Crimson Badger Brewing",
      "NAME": "Ginger Bear",
      "TASTING NOTES": "This is where we started. The original craft ginger beer with just enough ginger spice and the right amount of sweetness. Balanced and refreshing, this is New Zealand's best selling ginger beer. Invented and still produced in Queenstown. Vegan friendly and Gluten free.",
      "ABV": "4",
      "STYLE": "Hard Ginger Beer ",
      "TYPE": "Other"
    },
    {
      "STALL": "Crimson Badger Brewing",
      "BREWERY NAME": "Crimson Badger Brewing",
      "NAME": "Dark & Grizzly",
      "TASTING NOTES": "After too many festivals where we meticulously made this combination one at a time we finally got around to getting it ready for beer taps and it has been a hit since. The tasty combination of our classic Ginger Bear with spiced rum and fresh lime. Based of course on the classic dark and stormy cocktail, with a twist.",
      "ABV": "5",
      "STYLE": "Hard Ginger Beer ",
      "TYPE": "Other"
    },
    {
      "STALL": "Crimson Badger Brewing",
      "BREWERY NAME": "Crimson Badger Brewing",
      "NAME": "0% Ginger Bear",
      "TASTING NOTES": "Imagine a cool crisp ginger beer with zero alcohol, just enough ginger spice and the right amount of sweetness. Crafted for clear-headed and adventurous at heart.",
      "ABV": "0",
      "STYLE": "Non-alc Ginger Beer",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "Crimson Badger Brewing",
      "BREWERY NAME": "Crimson Badger Brewing",
      "NAME": "Mulled Ginger Bear",
      "TASTING NOTES": "After an evening of invention or genius, our now-famous Mulled Ginger Bear came to be. A great way to warm up with dark rum, fresh orange, and alot of winter spices added to our original Ginger Bear brew for the ultimate winter warmer",
      "ABV": "6",
      "STYLE": "Mulled Ginger Bear",
      "TYPE": "Other"
    },
    {
      "STALL": "",
      "BREWERY NAME": "",
      "NAME": "",
      "TASTING NOTES": "",
      "ABV": "",
      "STYLE": "",
      "TYPE": ""
    },
    {
      "STALL": "Crimson Badger Brewing",
      "BREWERY NAME": "Crimson Badger Brewing",
      "NAME": "Humble Apple Crumble",
      "TASTING NOTES": "Pressed central otago apples combines with mulled spices. We hit on this a little while ago and have been improving the recipe ever since.",
      "ABV": "0",
      "STYLE": "Non-alc Spiced Cider",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "Crimson Badger Brewing",
      "BREWERY NAME": "Crimson Badger Brewing",
      "NAME": "Tequila Mocking Bear",
      "TASTING NOTES": "Made for beervana 2024 and based off a chance combination now on the menu in a bar or two, we bring you something a little wilder for this year. Limited stock available.",
      "ABV": "6",
      "STYLE": "Cider Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Kraken's Kiss",
      "TASTING NOTES": "They say if it touches yer lips then it has already gotten ye in it's grasp! Once you are entranced, there is no escaping. Some say paralyzed with fear... Others say abv. Proceed with caution as the rich flavours of chocolate and caramel hide the strength. Coming on mellow and playful, then gone to the depths with a smile on yer face!\nFlavours: Krak-into this sippable chocolate caramel brownie. Over 20kg of cacao nibs and lactose on a Rolled Oats and Ale Malt base with Eclipse Wheat for colour. A bit of salt for a Salted Caramel sweet-to-savoury balance.",
      "ABV": "10.5",
      "STYLE": "Chocolate Caramel Imperial Stout - Imperial Pastry Stout",
      "TYPE": "Imperial Stout"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Scallywag",
      "TASTING NOTES": "A pirate's life can be so serious, yet every ship needs a Scallywag to lighten the mood! Milkshake IPAs are just that to Brewers. Mischievously breaking the rules in ways that keep a grin on your face, get ready for a slap in the mouth of Strawberry Milkshake! This beer is 100% about monkeyin' around.\nFlavours: Huge amounts of strawberry puree and lactose for a creamy texture to play with the tropical fruit and berry flavours from Mosaic and Ekuanot. All sitting atop and a pillowy malt base of Oats, Pilsner Malt and Wheat.",
      "ABV": "6.2",
      "STYLE": "Strawberry Milkshake IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Mad Eye",
      "TASTING NOTES": "More Malts, More Hops, More Punch! The legend of Mad Eye has been packed into yer glass with all of the aromas and flavours to tell the story. They say there hasn't been a beer to rival the Captain of Hazy Triples across the seven seas. It's delicious aromas and flavours will have ye thinking you're on a sunset cruise but disrespect it and ye will be swabbing the deck! \nFlavours: Enter a world of flavours sailed over from US and NZ hops to pick up massive tropical, mango, pine and notes of red apple. Late additions include Mosaic, Motueka, and Riwaka, with bountiful dry-hopping of Superdelic and Mosaic. A big thick hazy base balances the massive flavours to hide the abv and showcase the hops for a punch of flavours enough to drive ya mad!",
      "ABV": "10.1",
      "STYLE": "Hazy Triple IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Die Reise",
      "TASTING NOTES": "A collab brew between Double Vision Brewing and Schneider Weisse came to fruition through the likes of Beervana. Elena Fersch - brewmaster of Schneider Weisse has teamed up with DVB to create a beer that ticks all of the boxes between DVBs adventure and Schneider Weisse long standing tradition. \nFlavours: This beer will have it all from the best malts and hops from their part of the world combined with ours here from NZ. \nMotueka and Nelson Sauvin are a pairing that you all know well. Nelson Sauvin has distinct white wine grape flavours. Kohia brings in some passionfruit notes to complement the yeast esters. Hallertau Blanc is a German hop which has wildly similar notes to Nelson Sauvin. Its Hoplist profile goes like this: Flavors of white-wine and fruit, aromas of cassis, elderflower, grapes, grapefruit and lemongrass. Schneider Weisse air freighted us their in-house yeast that has been around since the beginning that will complement with fruity and floral esters that play off of the hops",
      "ABV": "6.1",
      "STYLE": "Double Dry Hopped Hopfenweisse",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Hard Case",
      "TASTING NOTES": "Nothing fake here. 100% strawberry and lime juices infused into NZ’s finest pressed Apples. This O.G. flavoured cider is keeping it real!\nFlavours: Royal Gala Apples bring just the right balance of sweet and crisp, plus strawberry and lime to add to the zesty and fresh complexities.",
      "ABV": "5",
      "STYLE": "Apple Cider with Strawberry and Lime",
      "TYPE": "Cider (Flavoured)"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Naughty Hopper",
      "TASTING NOTES": "Naughty Hopper is packing a mouthful of resinous tropical fruit flavours, thanks to Simcoe, Amarillo and Mosaic hops. These Rockstar hops are low in bitterness but high in juicy goodness. Late additions and awkward positions are what Naughty Hopper is all about!\nFlavours: Mango, Apricot, and Citrus; with a body to back it up.",
      "ABV": "8.9",
      "STYLE": "Double IPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Mouth Party",
      "TASTING NOTES": "Does what it says on the tin, mate! Everything you like from a hazy: full flavour, juicy, and all of those delicious tropical notes from dry hopping, without too much bitter.\nFlavours: Quenching tropical fruits, citrus and lime zest from the US and NZ hops with solid body to match from Oats and Wheat.",
      "ABV": "5.3",
      "STYLE": "Hazy Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Classic",
      "TASTING NOTES": "You wanted an easy-drinking Lager and we are giving you one. Introducing the ‘classic’ beer you’ve been searching for. Quality meets easy goin’ beer. No more sacrificing your standards.\nYour standard go-to lager but with the quality ingredients you would expect from DVB! Think crisp, clean, approachable.",
      "ABV": "4.5",
      "STYLE": "Lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Expatriate",
      "TASTING NOTES": "The EXPATRIATE is an American Pale Ale leaving the homeland in exploration of something more. It had no idea it would find New Zealand but the hops were too good to pass up. An alliance of US and NZ hops are sure to enlist your palate for a second round.\nCitrus, tropical, floral & pine notes from the hops with a light biscuity malt profile.",
      "ABV": "5.6",
      "STYLE": "APA",
      "TYPE": "American Pale Ale"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Colar Raspberry",
      "TASTING NOTES": "Once we made the Colar Beer Original, it was clear we needed to make a Vanilla and Cherry. By popular demand and everyone asking, 'What about the Kiwi favourite,' we now present Colar Beer Raspberry! \nAs with the Cherry, we knew we needed to use real fruit, so get ready to take a bath in Real Raspberry and Cola.",
      "ABV": "4.5",
      "STYLE": "Raspberry Cola Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Colar Vanilla",
      "TASTING NOTES": "We are bringing a bit of spice to the game. Everyone remembers a favourite Vanilla Cola from back in the day, now this is made to tickle that memory at 4.5% abv!\nThe same delicious cola nostalgia as Colar Beer, but dosed with just the right amount of lactose and vanilla. It's like a canned Ice Cream float!",
      "ABV": "4.5",
      "STYLE": "Vanilla Cola Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "FANTAil",
      "TASTING NOTES": "",
      "ABV": "4.5",
      "STYLE": "Orange Soda Sour Beer",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Pirate Punch",
      "TASTING NOTES": "",
      "ABV": "8",
      "STYLE": "Fruit Punch Pale Ale",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Tinyken",
      "TASTING NOTES": "Plain and simply put, if you want a beer but are being 'good' for whatever reason, you don't want to be drinking some rubbish hop water.\nMeet TinyKen. TinyKen is as innocent as the Milkman saying hi to mum; meet your real daddy of Non Alc Hazy IPAs. ",
      "ABV": "0",
      "STYLE": "Non Alcoholic Hazy IPA",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "Double Vision Brewing",
      "BREWERY NAME": "Double Vision Brewing",
      "NAME": "Tiny Terror",
      "TASTING NOTES": "TINY Terror is weighing in light on standard drinks but big in flavour! To keep the body we have used a high protein mash at a higher temp and oats so yo feel like you're still having a beer but being good.",
      "ABV": "2.3",
      "STYLE": "Little Hazy Pale Ale",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "Real Fruit Ice Cream Cake",
      "TASTING NOTES": "Duncan’s turns 10! Let’s party and drink Ice Cream Cake! \nCelebrate with us in true Duncan’s style, with a Real Fruit Ice Cream Cake. A glorious trifecta of raspberry, blueberry and strawberry, with a swirl of vanilla for that real fruit ice cream hit. Happy Birthday ya’ll, thanks for riding 10 years with Duncan’s!\n(Contains lactose)",
      "ABV": "6",
      "STYLE": "Ice Cream Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "Mango Pudding",
      "TASTING NOTES": "Duncan's x Sudden Death (Germany)\nA fruited sour fit for a Beervana feast with our newest festival mates from Germany, Sudden Death Brewing Co.\nSudden Death, like us, love to get down and dirty with experimental sours. Here’s our version of a vegan liquid Mango Pudding. It’s sweet, fruity, and silky smooth; complimented perfectly with coconut milk, a touch of passionfruit, salt and vanilla.",
      "ABV": "6",
      "STYLE": "Smoothie Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "Maple Bacon Pancake",
      "TASTING NOTES": "Stacks on stacks of pancakes; we’ve brewed brunch in a can. Sweet, sticky, smoky and a little salty with a fluffy pancake inspired malt bill. No actual pigs were harmed, but a few delicious sacks of manuka smoked malt were sacrificed to this winter warming Imperial Pastry Stout.",
      "ABV": "10",
      "STYLE": "Imperial Pastry Stout",
      "TYPE": "Imperial Stout"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "Simcoe City",
      "TASTING NOTES": "The year is 2000, and Simcoe City is experiencing bitterness levels that are higher than an isometric dimetric skyscraper! This WCIPA is hopped using a trifecta of Simcoe; Simcoe T90, Simcoe Cryo and Simcoe Dyna Boost. Piney, fruity, dank and assertively bitter. It’s a West Coast reminiscent of the old school IPA days.",
      "ABV": "7",
      "STYLE": "WCIPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "HOT Rum Toffee Apple",
      "TASTING NOTES": "Duncan’s x Peckham’s\nA deliciously hot and sticky Rum Toffee Apple Pastry Sour beer, brewed with our good friends Peckham’s Cidery & Orchard. Toffee malt and lactose impart a full-bodied sweetness that complements the earthy caramel profile from Major apples, harvested from Peckham’s orchard in the 2024 season. We’ve back sweetened this hot version with extra apple juice and added a dash of rum for good times.",
      "ABV": "7",
      "STYLE": "Pastry Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "Gold Rush",
      "TASTING NOTES": "Duncan's x The Enormous Crocodile Company\nWe’ve joined dessert forces with The Enormous Crocodile Co; the crew behind the iconic Wellington waterfront croc bikes and shakes. Transforming their decadent Gold Rush Croc Shake into a big boi of a pastry stout. Chocolate, hokey pokey and loads of toffee malt give us all of the sweet delish feels (and it’s vegan friendly too!).",
      "ABV": "9.5",
      "STYLE": "Imperial Pastry Stout",
      "TYPE": "Imperial Stout"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "Gold Rush Float",
      "TASTING NOTES": "Gold Rush Imperial Pastry Stout topped with a scoop of Duncan's x Croc Shake Gold Rush Ice Cream.\nFull glass only.",
      "ABV": "9.5",
      "STYLE": "Ice Cream Float",
      "TYPE": "Other"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "Gold Rush Ice Cream",
      "TASTING NOTES": "Gold Rush Ice Cream, served on a cone.\n(Duncan's x The Enormous Croc Co.)",
      "ABV": "1",
      "STYLE": "Alcoholic Ice Cream",
      "TYPE": "Other"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "Lemon Meringue",
      "TASTING NOTES": "Our interpretation of a classic and favourite dessert pie - lemon meringue! Just like grandma used to make; tangy lemon curd, a sweet and crumbly crust, topped with pillowy peaks of meringue.",
      "ABV": "4.7",
      "STYLE": "Ice Cream Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "Lemon Meringue Float",
      "TASTING NOTES": "Lemon Meringue Ice Cream Sour topped with a scoop of Lemon Meringue Ice Cream.\nFull glass only. \n(Duncan's x The Enormous Croc Co.)",
      "ABV": "4.7",
      "STYLE": "Ice Cream Float",
      "TYPE": "Other"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "Lemon Meringue Ice Cream",
      "TASTING NOTES": "Lemon Meringue Ice Cream, served on a cone.\n(Duncan's x The Enormous Croc Co.)",
      "ABV": "1",
      "STYLE": "Alcoholic Ice Cream",
      "TYPE": "Other"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "Coconut Choc Ice Cream (vegan)",
      "TASTING NOTES": "Coconut Chocolate Ice Cream, served on a cone.",
      "ABV": "0",
      "STYLE": "Ice Cream",
      "TYPE": "Other"
    },
    {
      "STALL": "Duncan's Brewing",
      "BREWERY NAME": "Duncan's Brewing",
      "NAME": "Birthday Cake Ice Cream",
      "TASTING NOTES": "Birthday Cake Ice Cream, served on a cone.",
      "ABV": "0",
      "STYLE": "Ice Cream",
      "TYPE": "Other"
    },
    {
      "STALL": "Eddyline Brewery",
      "BREWERY NAME": "Eddyline Brewery",
      "NAME": "American-As Pumpkin Pie",
      "TASTING NOTES": "Bronze medal winner at the Brewers Guild Awards in 2021 and released at Beervana the same year, American As Pumpkin Ale is as American as it gets. Taking its lead from the dusting of snow on the southern alps, this warming spiced ale celebrates the winter solstice and changing of the seasons having been made with real pumpkin and a secret blend of spices. Dare to try something a little different?",
      "ABV": "5",
      "STYLE": "Pumpkin Ale",
      "TYPE": "Spiced Beer"
    },
    {
      "STALL": "Eddyline Brewery",
      "BREWERY NAME": "Eddyline Brewery",
      "NAME": "Tantric Haze",
      "TASTING NOTES": "SLVER MEDAL, AIBA 2024 BRONZE MEDAL 2024, BRONZE MEDAL 2023, SILVER MEDAL 2022, NZ Brewers Guild Awards.\nTantric Haze, a sensual Hazy IPA that will tantalise your tastebuds when the tropical fruit hits. Mosaic, NZ Nectaron, El Dorado and Citra round out the hop profile, this double whirlpool and triple dry hopped hazy beer is dangerously easy drinking with a mild bitterness but a knock out at 6.8% ABV. Let Tantric Haze massage your senses.",
      "ABV": "6.8",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Eddyline Brewery",
      "BREWERY NAME": "Eddyline Brewery",
      "NAME": "Sippin on Sunshine",
      "TASTING NOTES": "SILVER MEDAL, AIBA 2024, BRONZE MEDAL  2024, 2023, 2022 NZ Brewers Guild Awards. A juicy and hazy pale ale to maximise your summer day enjoyment, Triple dry hopped with Mosaic, Sultana and Motueka with a smooth maltiness. Bursting with flavour and balanced with refreshing crispness.",
      "ABV": "5.5",
      "STYLE": "Hazy Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Eddyline Brewery",
      "BREWERY NAME": "Eddyline Brewery",
      "NAME": "Grand Theft Alpha",
      "TASTING NOTES": "Eddyline Brewery proudly unveils Grand Theft Alpha WCIPA for the 2024 West Coast IPA Challenge, a brew that's set to hijack your taste buds. Inspired by the thrill of Grand Theft Auto, this IPA orchestrates a flavourful crime spree with a masterful blend of American hops— the hops create a symphony of citrus, pine, and floral aromas that dominate the palate, while a smooth malt backbone ensures a balanced getaway. Like a high-speed chase through hop-filled streets, Grand Theft Alpha delivers an exhilarating experience with every sip. Prepare to be captivated and let this bold IPA steal the show, leaving you craving another heist.",
      "ABV": "6.3",
      "STYLE": "WCIPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Eddyline Brewery",
      "BREWERY NAME": "Eddyline Brewery",
      "NAME": "T.E.D",
      "TASTING NOTES": "Introducing our award-winning WCIPA that's making waves in the craft beer scene! Winner of the 15th West Coast IPA Challenge in 2022 and recipient of the Bronze Medal at the Brewers Guild Awards 2023, this beer is a true testament to our commitment to quality, sustainability, and innovation.\nBrewed with a blend of seven West Coast hop varieties and 100% New Zealand malts, this WCIPA is bursting with dank bitterness and rich hoppy aromas. You'll be delighted by the dance of passionfruit and mandarin on the maltiness, leading you into the depths of dankness for a crisp and satisfyingly bitter finish.\nExperience the bold flavours and award-winning excellence of our WCIPA, crafted sustainably for your enjoyment.",
      "ABV": "6.2",
      "STYLE": "WCIPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Eddyline Brewery",
      "BREWERY NAME": "Eddyline Brewery",
      "NAME": "Pina Colada Stout",
      "TASTING NOTES": "Fly away from your midwinter blues and enjoy this tropical cocktail. With a careful blend of coconut and pineapple, we’ve created a creamy, fruity and decadent piña colada stout that will take you back to the swim-up bar of the Rarotongan. Once in your happy place, the dark malts and full body roll through to the finish of a smooth stout. Enjoy the beer in your togs with your eyes closed and the sun on your face.",
      "ABV": "5.5",
      "STYLE": "Stout",
      "TYPE": "Stout"
    },
    {
      "STALL": "Eddyline Brewery",
      "BREWERY NAME": "Eddyline Brewery",
      "NAME": "Inner Glow",
      "TASTING NOTES": "Inner glow is our porter brewed with New Mexico's sun-ripened Chimayo Chilies. The fruitiness of the chilies combine with the rich chocolate malts in the porter and the heat from the chilies builds slowly creating a pleasant inner glow warming you from the inside out to combat the winter chill",
      "ABV": "5",
      "STYLE": "Red Chile Porter",
      "TYPE": "Porter"
    },
    {
      "STALL": "Eddyline Brewery",
      "BREWERY NAME": "Eddyline Brewery",
      "NAME": "Barrel-Aged Imperial Bourbon Stout 2023",
      "TASTING NOTES": "SILVER MEDAL, Brewers Guild Awards 2023 Experience the richness of our Barrel Aged Imperial Bourbon Stout. Notes of luscious vanilla and roasted coffee blend with bourbon sweetness, leaving a lingering taste. Indulge in this year's edition aged in Buffalo Trace barrels for a year! Cheers to a truly unforgettable beer!",
      "ABV": "10.5",
      "STYLE": "Imperial Stout",
      "TYPE": "Imperial Stout"
    },
    {
      "STALL": "Eddyline Brewery",
      "BREWERY NAME": "Eddyline Brewery",
      "NAME": "EddyLite",
      "TASTING NOTES": "GOLD MEDAL, Australian International Beer Awards 2024 BRONZE MEDAL, Brewers Guild Awards 2024, 2023 Introducing EddyLite, our session Pale Ale that embodies the perfect balance of full-bodied richness and a delightful hoppy aroma. Crafted with care, Eddylite is made from 100% NZ malts, ensuring a local touch in every sip. Sustainably brewed, this low-carb beer is the ideal choice for those seeking a flavourful brew with reduced alcohol content. Elevate your beer experience with EddyLite – a testament to our commitment to quality, sustainability, and a taste that stands out from the rest. Cheers to a refreshing and conscious choice!",
      "ABV": "2.5",
      "STYLE": "Low Carb Low Alc Pale Ale",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "Eddyline Brewery",
      "BREWERY NAME": "Eddyline Brewery",
      "NAME": "505",
      "TASTING NOTES": "Pulling at our New Mexican roots paying homage to the local area code, 505 Low Carb Light Lager is a refreshing American-style light lager with a crisp taste that hits the spot at 4% ABV. Crafted with care, this brew offers a satisfying balance of malt sweetness and a subtle hop character. With its low-carb profile, it's the perfect choice for those seeking a lighter option.",
      "ABV": "4.5",
      "STYLE": "Low Carb Lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "Fortune Favours",
      "BREWERY NAME": "Fortune Favours",
      "NAME": "Mk Ultra",
      "TASTING NOTES": "The MK Ultra isn’t just a low-carb lager; it’s a covert operation in every sip. Perfect for when you want to enjoy a cold one without the heavy baggage of extra carbs. Drink it and keep your mission on track. Cheers to low-carb intrigue!",
      "ABV": "4.5",
      "STYLE": "Low carb lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "Fortune Favours",
      "BREWERY NAME": "Fortune Favours",
      "NAME": "The Mystic",
      "TASTING NOTES": "Stone Fruits & Tropical Fruits + Resinous + Big Body\nBig hoppy aromas and flavours with enough dankness and resin to stand out from the usual sweet hazy. Single hopped with Nelson Sauvin for textbook NZ hop character.",
      "ABV": "5.8",
      "STYLE": "Hazy Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Fortune Favours",
      "BREWERY NAME": "Fortune Favours",
      "NAME": "The Wellingtonian ",
      "TASTING NOTES": "Stone Fruit + Passionfruit + Light Bitterness\nTurns out most people love an easy drinking, not so bitter, hoppy IPA as the Wellingtonian is easily our most popular beer. Boasting stone fruit, passionfruit and a touch of resiny pine on a sweeter malt base with enough bitterness to balance it all out without overwhelming the palate.",
      "ABV": "6",
      "STYLE": "IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Fortune Favours",
      "BREWERY NAME": "Fortune Favours",
      "NAME": "The Brightsider ",
      "TASTING NOTES": "Crisp + Refreshing + Medium Dry\nA crisp apple cider with sweet apple flavours balanced by a medium dry finish.",
      "ABV": "4.7",
      "STYLE": "Cider",
      "TYPE": "Cider"
    },
    {
      "STALL": "Fortune Favours",
      "BREWERY NAME": "Fortune Favours",
      "NAME": "Super Hash Bro's",
      "TASTING NOTES": "Welcome Player One to Super Hash Bros! Attack, shield, dodge and drink, and try not to get knocked off your platform by the Wombo Combo of classic pine and citrus hops! The WCIPA Challenge is a multiplayer match up, and this year Fortune Favours is ready to do some serious damage with an arsenal of hop hash flavours. Lets-a go!",
      "ABV": "7",
      "STYLE": "WCIPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Fortune Favours",
      "BREWERY NAME": "Fortune Favours",
      "NAME": "The Claymore ",
      "TASTING NOTES": "Peat smoke combines with rich malt flavours of dried fruits and raisins. A surprisingly light body for such a malty beer with a light bitterness balancing the sweetness",
      "ABV": "6.5",
      "STYLE": "Peated Scottish Ale",
      "TYPE": "Scottish Style Ale"
    },
    {
      "STALL": "Fortune Favours",
      "BREWERY NAME": "Fortune Favours",
      "NAME": "Lucky Fruits Feijoa Sour",
      "TASTING NOTES": "Lucky Fruits Feijoa Sour isn’t just a beer; it’s an adventure in a glass. Perfect for those who like their brews with a twist of fortune and a splash of fruitiness. One sip and you’ll feel like you’ve found the pot of gold at the end of the sour rainbow. Cheers to the luck of the sour!",
      "ABV": "3.5",
      "STYLE": "Feijoa Sour Ale",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Fortune Favours",
      "BREWERY NAME": "Fortune Favours",
      "NAME": "The Nutter ",
      "TASTING NOTES": "Roasted Peanuts + Chocolate + Smooth\nAn out-there experimental beer that quickly became our most popular dark beer!\nThe Nutter is a smooth, sessionable porter that is packed with flavour. Sweet and rich chocolate combines with roasted peanuts for that peanut slab flavour! A darker chocolate finish balances out the sweetness.",
      "ABV": "4.5",
      "STYLE": "Peanut & Chocolate Porter",
      "TYPE": "Porter"
    },
    {
      "STALL": "Garage Project",
      "BREWERY NAME": "Garage Project",
      "NAME": "Hazy Pernicious Weed ",
      "TASTING NOTES": "",
      "ABV": "6",
      "STYLE": "Hazy IPA ",
      "TYPE": "IPA"
    },
    {
      "STALL": "Garage Project",
      "BREWERY NAME": "Garage Project",
      "NAME": "Astro Turf ",
      "TASTING NOTES": "",
      "ABV": "6.5",
      "STYLE": "West Coast IPA ",
      "TYPE": "IPA"
    },
    {
      "STALL": "Garage Project",
      "BREWERY NAME": "Garage Project",
      "NAME": "Sticky Icky ",
      "TASTING NOTES": "",
      "ABV": "7.8",
      "STYLE": "Oat Cream IPA ",
      "TYPE": "IPA"
    },
    {
      "STALL": "Garage Project",
      "BREWERY NAME": "Garage Project",
      "NAME": "Bake Sale ",
      "TASTING NOTES": "",
      "ABV": "12.4",
      "STYLE": "Pastry Stout ",
      "TYPE": "Sweet Stout"
    },
    {
      "STALL": "Garage Project",
      "BREWERY NAME": "Garage Project",
      "NAME": "Maui Wowie ",
      "TASTING NOTES": "",
      "ABV": "7.2",
      "STYLE": "Milkshake Sour ",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Garage Project",
      "BREWERY NAME": "Garage Project",
      "NAME": "Mango - Soft Serve ",
      "TASTING NOTES": "",
      "ABV": "5.4",
      "STYLE": "Seltzer Soft Serve ",
      "TYPE": "Other"
    },
    {
      "STALL": "Garage Project",
      "BREWERY NAME": "Garage Project",
      "NAME": "Raspberry Soft Serve ",
      "TASTING NOTES": "",
      "ABV": "5.4",
      "STYLE": "Seltzer Soft Serve ",
      "TYPE": "Other"
    },
    {
      "STALL": "Garage Project",
      "BREWERY NAME": "Garage Project",
      "NAME": "Fugazi ",
      "TASTING NOTES": "",
      "ABV": "2.5",
      "STYLE": "IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Garage Project",
      "BREWERY NAME": "Garage Project",
      "NAME": "Tiny Hazy ",
      "TASTING NOTES": "",
      "ABV": "0.5",
      "STYLE": "Hazy Ipa ",
      "TYPE": "IPA"
    },
    {
      "STALL": "Garage Project",
      "BREWERY NAME": "Garage Project",
      "NAME": "Tiny Xpa ",
      "TASTING NOTES": "",
      "ABV": "0.5",
      "STYLE": "XPA ",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "Heaps Normal",
      "BREWERY NAME": "Heaps Normal",
      "NAME": "Quiet XPA",
      "TASTING NOTES": "Tastes like a delicious, refreshing beer. Tropical and citrus aroma with a lingering and unmistakably beery finish. Unfiltered with balanced bitterness and a subtle malt sweetness, reminiscent of your old pals",
      "ABV": "0.5",
      "STYLE": "XPA",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "Heaps Normal",
      "BREWERY NAME": "Heaps Normal",
      "NAME": "Half Day Hazy",
      "TASTING NOTES": "Whether you’ve got a half day off or a half day left, this tropical sunshine in a can lets you knockoff without the knock-ons. Pairs well with yummy stuff, and holds up before, during or after a few normal ones, if that’s your thing.",
      "ABV": "0.5",
      "STYLE": "Hazy Pale Ale",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "Hop Federation Brewery",
      "BREWERY NAME": "Hop Federation Brewery",
      "NAME": "Radio Hauraki Backbone Brew",
      "TASTING NOTES": "The legends of The Radio Hauraki Big Show (Jason Hoyte, Mike Minogue and Keyzie) have been down to our Motueka brewery to help us create an absolutely bangin’ new brew, especially for Beervana. \nMade with local Wai-iti and Kohatu hops, the brew is a crisp, clean pilsner bursting with fresh flavours of citrus and stonefruit.",
      "ABV": "5",
      "STYLE": "Pilsner",
      "TYPE": "Pilsner"
    },
    {
      "STALL": "Hop Federation Brewery",
      "BREWERY NAME": "Hop Federation Brewery",
      "NAME": "Fields of Green",
      "TASTING NOTES": "A crowd-favourite with dry citrus, creamy lychee and zesty grapefruit flavours. This one’s something special. A trifecta of local hops, Riwaka, Nelson Sauvin, and Motueka.",
      "ABV": "5.8",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Hop Federation Brewery",
      "BREWERY NAME": "Hop Federation Brewery",
      "NAME": "Deep Space",
      "TASTING NOTES": "Explore the unknown with Deep Space IPL… Packing a hoppy punch, lager malts and yeast collide with NZ Hops’ trial hop NZH104 to deliver hits of stone fruit, pine, and tropical fruit on the palate.",
      "ABV": "5.5",
      "STYLE": "IPL",
      "TYPE": "Lager (Pale)"
    },
    {
      "STALL": "Hop Federation Brewery",
      "BREWERY NAME": "Hop Federation Brewery",
      "NAME": "Binecraft",
      "TASTING NOTES": "Why craft mines when you can craft bines? Constructed with hoppy building blocks of Citra, US Cascade and Nectaron, this WCIPA will transport you to a delicious new biome, filled with bursts of citrus and tropical fruit. \nBrewed for The Malthouse's video-game themed WCIPA Challenge, we’ve played tribute to Minecraft.",
      "ABV": "6.8",
      "STYLE": "WCIPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Hop Federation Brewery",
      "BREWERY NAME": "Hop Federation Brewery",
      "NAME": "Hold the Line",
      "TASTING NOTES": "A celebration of New Zealand hops with Southern Cross, Taiheke and Nectaron packed in to create a tropical taste explosion. Hold the line, caller - it’s beer o’clock.",
      "ABV": "5.9",
      "STYLE": "NZIPA",
      "TYPE": "New Zealand IPA"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Schneeeule",
      "NAME": "Marlene",
      "TASTING NOTES": "Original Berliner Weisse\nMarlene – traditional Berliner Weisse with historic yeasts. Named after the icon Marlene Dietrich. Fermented with Brettanomyces strains from up to 50 year old bottles. Closer to the historical original is not possible. Slightly sour, fruity, sparkling and wild.",
      "ABV": "3.5",
      "STYLE": "Berliner Weisse",
      "TYPE": "Berliner Weisse"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Schneeeule",
      "NAME": "Kennedy",
      "TASTING NOTES": "Ich bin ein Berliner Weisse\n“Ich bin einer Berliner!” – ​Kennedy​ once announced to the world, so this American-style hopped Berliner Weisse was named after him. Its as well dry-hopped with German hops to support the fine flavors of the Berliner Weisse. Regularly changing hop varieties keep our Kennedy exciting. The recent Weisse is hopped with Monore and Callista, which emphasizes and complements the vinous fruity aromas of the beer. The Brettanomyces yeast changes the aroma of the hops and the beer during storage, which makes it exciting to taste the beer at any time. ",
      "ABV": "3.5",
      "STYLE": "Berliner Weisse",
      "TYPE": "Berliner Weisse"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Schneeeule",
      "NAME": "Blaue Blume Lavendel",
      "TASTING NOTES": "Berliner Weisse with Lavender and cornflower",
      "ABV": "3.5",
      "STYLE": "Berliner Weisse",
      "TYPE": "Berliner Weisse"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Schneeeule",
      "NAME": "Hot Irmi",
      "TASTING NOTES": "Berliner Weisse with Ginger and Habaneros\nHot Irmi​ – a variant of Irmgard with Habaneros. The wort is flavoured with oranges, lemon and pomegranate. The beer is fermented in Berliner Weisse-style with live yeasts and lactic acid bacteria. Habaneros have been added to the fermentation to mimic a ginger spiciness. The Habanero has a distinctive taste, which makes it quite easy to smell and taste. The spiciness is similar to a strong tea with lots of ginger and lemon (but cold and with a slight alcohol content).",
      "ABV": "3.5",
      "STYLE": "Berliner Weisse",
      "TYPE": "Berliner Weisse"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Schneeeule",
      "NAME": "Gurkenkaiser",
      "TASTING NOTES": "Berliner Weisse with cucumber and dill flowers.",
      "ABV": "3.5",
      "STYLE": "Berliner Weisse",
      "TYPE": "Berliner Weisse"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Sudden Death Brewing",
      "NAME": "Survival Kit",
      "TASTING NOTES": "Not for your average outdoor enthusiasts and preppers.\nMash hopped with whole leaf Saaz, hotside hopped with HBC 682, Millenium, Strata, Idaho 7, dip hopped with @yakimachiefeu Dynaboost Idaho 7.\nTriple dry hopped – twice with Idaho 7, Millenium, HBC 682; finished with Strata. A truly complete DIPA: aromatic, flavourful, and expressive.\nPineapple, red fruits, dank weed.",
      "ABV": "9.2",
      "STYLE": "Double IPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Sudden Death Brewing",
      "NAME": "Give Me Shelter",
      "TASTING NOTES": "Dry hopped with Citra, Loral, Enigma.\nGreen melon, sweet citrus, garden herbs.",
      "ABV": "7",
      "STYLE": "India Pale Ale",
      "TYPE": "IPA"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Sudden Death Brewing",
      "NAME": "Dodendans",
      "TASTING NOTES": "Dance with the dead in my dreams...\nTriple dry hopped with Mosaic, Centennial, Riwaka. Finished with even more Riwaka. Green mango, grapefruit, dank kush. ",
      "ABV": "7.2",
      "STYLE": "Rye IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Sudden Death Brewing",
      "NAME": "Paradise Plumes",
      "TASTING NOTES": "Put a feather in your cap old chap!\nThe ever-humble Andris of @arpusbrewing flew to our little brewery and pub last April to take over our taps and help us sing the song of hop and fruit-filled delights!\nWe surveyed the land from above and collected the most attractive bush and tree-borne bounties to spawn a life-giving sour nectar jam-packed with over 400 g. / L of blackberry, raspberry, orange, and sea buckthorn purée and concentrate that was finished with honey, vanilla, and sea salt.\nRearing this fledging was a challenge, but it managed to spread its wings and take oa beautifully.\nPriekā!",
      "ABV": "5",
      "STYLE": "Fruited Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Sudden Death Brewing",
      "NAME": "Lush Blossom Punch",
      "TASTING NOTES": "Cowabunga baby!\nIt’s the middle of summer, the sun is out, the temperature is rising, good vibes all around. What better way to kick back. Lush Blossom Punch is our Tiki-inspired fruit sour loaded with over 400 g. / L of pineapple, coconut cream, banana, orange, and lime purée and concentrate, finished with a touch of vanilla and sea salt.\nBarrel your tastebuds in wave after wave of tropical delight. ",
      "ABV": "5",
      "STYLE": "Fruited Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Schneider Weisse",
      "NAME": "Original Weissbier",
      "TASTING NOTES": "A wheat beer like home. It's the art of brewing in its purest form for true wheat beer connoisseurs: \"\"Original\"\"  – the traditional wheat beer brewed unaltered in accordance with the original recipe of Georg I. Schneider since 1872 – and since then simply marquee. Of a deep amber colour, harmonically balanced and strong. That's what Bavaria tastes like. And that's also what coming home tastes like - in the comfort of your own four walls as well as at your convivial \"\"Stammtisch\"\".",
      "ABV": "5.4",
      "STYLE": "Hefeweizen",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Schneider Weisse",
      "NAME": "Aventinus",
      "TASTING NOTES": "A day's reward. For golden moments by the fireplace: \"\"Mein Aventinus\"\" - the wholehearted, dark ruby coloured wheat beer, intensive and fiery, warming, well-balanced and tender. Bavaria's oldest wheat \"\"Doppelbock\"\" - brewed since 1907! Its sturdy body in combination with its sweet malty aroma is an invitation to profound indulgence - an ingenious blend with a strong body.  Perfectly matches rustic dishes, dark roasts and sweet desserts.",
      "ABV": "8.2",
      "STYLE": "Doppelbock",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Schneider Weisse",
      "NAME": "Hopfenweisse",
      "TASTING NOTES": "A new dimension of wheat beer. Go on a discovery: \"\"Meine Hopfenweisse\"\" - the incomparable experience of indulgent drinking, that exceeds all expectations … hoppy, but flowery, bitter and full-bodied, and still with a sweet malty aroma - this is how multifaceted wheat beer can actually be. A real delight in the special Schneider way! And when it comes to spicy dishes or refined chocolates the \"\"Hopfenweisse\"\" unleashes no less than a pleasant tremor of the senses.",
      "ABV": "8.2",
      "STYLE": "Hopfenweisse",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Schneider Weisse",
      "NAME": "Festweisse",
      "TASTING NOTES": "A celebration of live. Ideal for celebrations: \"\"Meine Festweisse\"\" - the lucid golden wheat beer, renewed from the traditional Oktoberfest beer recipe. Its fresh citrusy note is derived from precious Cascade hop and the fruity Schneider yeast - a real treat, unrivaled in freshness and drinkability. A great companion for Mediterrenean and light dishes, and - of course - festive gatherings.",
      "ABV": "6.2",
      "STYLE": "Hefeweizen",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "International Invitational: GERMANY",
      "BREWERY NAME": "Schneider Weisse",
      "NAME": "Love Beer",
      "TASTING NOTES": "LoveBeer is a musically lively composition by the Bavarian band LaBrassBanda and Bavaria's oldest wheat beer brewery Schneider Weisse. This naturally cloudy, summery fresh wheat beer is dominated by flavours of passion fruit and lime. You can literally taste the rhythm and beat. A taste experience that cries out for an encore on the palate.",
      "ABV": "4.9",
      "STYLE": "Helles",
      "TYPE": "Lager"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Dr Pepper",
      "TASTING NOTES": "Lager w/ Cherry & Almond",
      "ABV": "5",
      "STYLE": "Beer-based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Queen Mary",
      "TASTING NOTES": "Lager w/ Grenadine",
      "ABV": "5",
      "STYLE": "Beer-based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Snake Bite",
      "TASTING NOTES": "50/50 Lager & Cider w/ Blackberry",
      "ABV": "5",
      "STYLE": "Beer-based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Stormy Daniels",
      "TASTING NOTES": "50/50 Stout & Cider w/ Blackberry",
      "ABV": "6",
      "STYLE": "Beer-based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Big Cherry",
      "TASTING NOTES": "Cider w/ Cherry",
      "ABV": "5",
      "STYLE": "Beer-based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Gin and Tonic",
      "TASTING NOTES": "Tribeca Lime, Soho Dry, Manhattan Rose",
      "ABV": "5",
      "STYLE": "Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Big Apple Cider",
      "TASTING NOTES": "",
      "ABV": "5",
      "STYLE": "Apple Cider",
      "TYPE": "Cider"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Divine Wind",
      "TASTING NOTES": "",
      "ABV": "5",
      "STYLE": "Japanese Lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Juice Bro",
      "TASTING NOTES": "",
      "ABV": "5",
      "STYLE": "Hazy Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "God of War",
      "TASTING NOTES": " WCIPA Winner 2024",
      "ABV": "6.9",
      "STYLE": "West Coast IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Darkest Days",
      "TASTING NOTES": "",
      "ABV": "6",
      "STYLE": "Oatmeal Stout",
      "TYPE": "Oatmeal Stout"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Citra",
      "TASTING NOTES": "",
      "ABV": "9",
      "STYLE": "IIPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Little Liberty",
      "TASTING NOTES": "Miniature Hazy",
      "ABV": "2.5",
      "STYLE": "Miniature Hazy",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Liberty Brewing",
      "BREWERY NAME": "Liberty Brewing",
      "NAME": "Prohibition Porter",
      "TASTING NOTES": "",
      "ABV": "12.7",
      "STYLE": "Barrel Aged Porter",
      "TYPE": "Wood- and Barrel-Aged Beer"
    },
    {
      "STALL": "Martinborough Brewery",
      "BREWERY NAME": "Martinborough Brewery",
      "NAME": "Hollywood Hops",
      "TASTING NOTES": "New wave SoCal West Coast IPA. Tropical fruit bonanza, light in body and colour, dry finish. Mosaic, Simcoe, Nelson Sauvin and El Dorado Hops.",
      "ABV": "7",
      "STYLE": "West Coast IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Martinborough Brewery",
      "BREWERY NAME": "Martinborough Brewery",
      "NAME": "Dessert sour beer with your choice of syrup",
      "TASTING NOTES": "Tart and fruity kettle-soured wheat ale with your choice of syrup:\n-Fruity\n-Spicy",
      "ABV": "4.5",
      "STYLE": "Sour beer with flavoured syrup added",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Martinborough Brewery",
      "BREWERY NAME": "Martinborough Brewery",
      "NAME": "NZ DIPA",
      "TASTING NOTES": "Pine and citrus dominate this well balanced, strong IPA. Brewed with only NZ hops that are often overlooked and used for their bittering qualities: Waimea, Southern Cross, Moutere.",
      "ABV": "8",
      "STYLE": "Double IPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "Martinborough Brewery",
      "BREWERY NAME": "Martinborough Brewery",
      "NAME": "Double West Coast Pils",
      "TASTING NOTES": "Stepped up version of a West Coast Pilsner, using Idaho 7, Simcoe and Cascade hops. Lean body, fruity hops, crisp finish. West Coast Pils is an American brewers riff on NZ hopped Pilsner, which in turn was a riff on European Pilsner!",
      "ABV": "7",
      "STYLE": "Double Pilsner",
      "TYPE": "Pilsner"
    },
    {
      "STALL": "Martinborough Brewery",
      "BREWERY NAME": "Martinborough Brewery",
      "NAME": "Nitro coffee caramel milk stout",
      "TASTING NOTES": "Get your coffee caramel latte fix, in beer form. This oatmeal stout was conditioned on Martinborough Coffee beans, lactose, and caramel. Served on nitro for extra creaminess.",
      "ABV": "5.8",
      "STYLE": "Flavoured stout",
      "TYPE": "Oatmeal Stout"
    },
    {
      "STALL": "Martinborough Brewery",
      "BREWERY NAME": "Martinborough Brewery",
      "NAME": "Ferrymans Ale",
      "TASTING NOTES": "English-style pale ale, light copper in colour and quite sessionable. Hops and malt are well balanced, with notes of biscuit and caramel, and subtle spice from the East Kent Golding Hops.",
      "ABV": "4",
      "STYLE": "English Bitter",
      "TYPE": "English Bitter"
    },
    {
      "STALL": "Martinborough Brewery",
      "BREWERY NAME": "Martinborough Brewery",
      "NAME": "Hoppy Haze",
      "TASTING NOTES": "A full-bodied Hazy IPA made with wheat and oats, along with all the best juicy hops from NZ and USA. Dank tropical and citrus flavours and a smooth finish. Riwaka, Mosaic, Citra, El Dorado hops.",
      "ABV": "6.5",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Martinborough Brewery",
      "BREWERY NAME": "Martinborough Brewery",
      "NAME": "Ohio APA",
      "TASTING NOTES": "A light, crisp American Pale Ale with juicy citrus and tropical fruit and pine notes. US hops are the hero and shine off a light malt base. Citra, Simcoe, Centennial, Amarillo hops.",
      "ABV": "5",
      "STYLE": "American Pale Ale",
      "TYPE": "American Pale Ale"
    },
    {
      "STALL": "Martinborough Brewery",
      "BREWERY NAME": "Martinborough Brewery",
      "NAME": "Pilsner",
      "TASTING NOTES": "Crisp malt profile, hopped with Freestyle Hops Kohia Nelson blend, which combines fruit-forward hops and freeze-dried passionfruit. Collab Brew with Choice Bros and Fork & Brewer.",
      "ABV": "5.1",
      "STYLE": "NZ Pilsner",
      "TYPE": "Pilsner"
    },
    {
      "STALL": "Mean Doses",
      "BREWERY NAME": "Mean Doses",
      "NAME": "Outrun",
      "TASTING NOTES": "Between Pole Position and Daytona USA there was an eight-year period where OutRun was basically the gold standard. Maybe you don't know what I'm talking about - in which case you're either younger than me (good for you) or you spent your pocket money on something else (*snort*, loser). \nI was never any good at OutRun but who cares. We're celebrating this arcade classic with Centennial, Nelson Sauvin, Sabro and Columbus hops, to give you a resinous, complex and full-bodied taste of the West Coast as it was authentically experienced by kiwi pre-teens in the 1980s. Feel that warm air rushing past your face. Smell that ocean breeze. Experience the thrill of me taking all the corners too late and missing the time extension. ",
      "ABV": "6.5",
      "STYLE": "WCIPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Mean Doses",
      "BREWERY NAME": "Mean Doses",
      "NAME": "BIG",
      "TASTING NOTES": "Presenting the debut of a new talent. Last week Michael was just an ordinary 12 year old boy with big dreams of someday becoming a craft brewer. But after dropping 25 cents in a Zoltar machine (not easy with NZ currency), and heaps of centennial, simcoe and sabro hops into a vat of boiling water, some weird magic has kicked in. So now we have this: a gorgeous, fully grown IPA which mixes pine resin, citrus, coconut and tropical flavours.",
      "ABV": "8",
      "STYLE": "Double IPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "Mean Doses",
      "BREWERY NAME": "Mean Doses",
      "NAME": "Gyruss",
      "TASTING NOTES": "Yeah I know, it’s another 80s-reference name. But this isn’t us “playing the hits”. This is us making the hits.\nIt’s dank and yum. And also when did you last play Gyruss? It’s really hard. Like making excellent beer is really hard.\nAnd yes we are also really good at Gyruss.",
      "ABV": "5.3",
      "STYLE": "Bright Pale Ale",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "Mean Doses",
      "BREWERY NAME": "Mean Doses",
      "NAME": "Mean APA",
      "TASTING NOTES": "So what's the difference, between an IPA and an APA?\nThe boring answer: it's the hops.\nThe more interesting answer: it's a feeling.\nIPAs are cool, they're punchy, they're fresh. They're maybe a little loud - like Elastica. Remember them?\nWhereas APAs are kind of murkier, heavier - gruntier, but in a good way, sort of like... uh... \n...well, like L7 I guess.\nSo while IPAs probably sold way more records back in the 90s, and I think one of them dated Damon Albarn, APAs had a track on the Natural Born Killers OST, and a cameo appearance in Serial Mom.\nI hope that explains things.",
      "ABV": "5",
      "STYLE": "APA",
      "TYPE": "American Pale Ale"
    },
    {
      "STALL": "Mean Doses",
      "BREWERY NAME": "Mean Doses",
      "NAME": "Meaniversary",
      "TASTING NOTES": "Happy Meaniversary baby, we've got you on our miiind. Yeah I know we didn't get you anything last year, sorry about that. But here we are now babe, one year into the bar and six years into the brewery. Just think: six whole years since our financial advisor had that nervous breakdown! Time flies. \nSo six years is the, uh... (checks Wikipedia) Malty anniversary. Right, right. So what we've done here is we've made you something special which combines the wholesome goodness of a porter with the \"\"Eurotrash tattoo parlour\"\" edge of a doppelbock to give you something extra smoove, and malty, and barrel-agedy. Here's to many more, eh.",
      "ABV": "10",
      "STYLE": "Blended Barrel Aged Doppelbock",
      "TYPE": "Wood- and Barrel-Aged Beer"
    },
    {
      "STALL": "Mean Doses",
      "BREWERY NAME": "Mean Doses",
      "NAME": "L'am Ber",
      "TASTING NOTES": "Qu'est-ce que c'est l'am Ber? L'am Ber est un sentiment. It's how you feel when you're happy with yourself, and where you are, and who you're with. \nPourquoi l'am Ber? Aucune raison. You don't really need to explain it. It just happens. Try it. Turn to the person next to you and say it. Say “L'am Ber”. See? \nOu est l'am Ber? L'am Ber c'est partout. I know I'm supposed to say it's in your heart but no, basically it's everywhere quality beers are sold. Probably it's right in front of you because you're reading this. \nL'am Ber est Francais? Non, définitivement pas. It's a German style beer made in New Zealand by a part-Inuit man who was kicked out of fourth form French for misbehaviour (true story).",
      "ABV": "5",
      "STYLE": "Amber lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "Monteiths Brewery",
      "BREWERY NAME": "Monteiths Brewery",
      "NAME": "West Coastin'",
      "TASTING NOTES": "Take your foot off the pedal and coast into this tropically charged unfiltered Hazy India Pale Ale. Wind blowin’, waves crashin’ and sandflies buzzin’… Cocktail hour on the West Coast has got a bit of bite.",
      "ABV": "5.5",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Monteiths Brewery",
      "BREWERY NAME": "Monteiths Brewery",
      "NAME": "Wayfarer",
      "TASTING NOTES": "A golden straw coloured crisp New Zealand Pilsner with thick hop bitterness and a smooth malty character.  The Monteith’s Wayfarer Pilsner is a golden straw coloured crisp New Zealand Pilsner with thick hop bitterness and a smooth malty character. Motueka hops give the brew a wonderful aroma and contribute to a pleasantly crisp finish in the body. ",
      "ABV": "4.9",
      "STYLE": "NZ Pilsner",
      "TYPE": "Pilsner"
    },
    {
      "STALL": "Monteiths Brewery",
      "BREWERY NAME": "Monteiths Brewery",
      "NAME": "Phoenix",
      "TASTING NOTES": "The Phoenix IPA showcases a unique fusion of American Simco, Chinook and Citra hops. A clean crisp malt base allows these hops to shine with a heady aroma of pine and citrus. Notes of fresh cut grass compliment subtle passionfruit flavours with a touch a of spice to round out the brew. ",
      "ABV": "5",
      "STYLE": "IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Monteiths Brewery",
      "BREWERY NAME": "Monteiths Brewery",
      "NAME": "Tight Lines",
      "TASTING NOTES": "Strike! Reel in this crisp, clear Pale Ale.  Brewed with Galaxy and Mosaic hops hooked into the best New Zealand ale malts and rippling with fruit-forward, balanced bite. Time to wind down river and spool the slack, ready for tight lines tomorrow.",
      "ABV": "5",
      "STYLE": "Pale Ale",
      "TYPE": "IPA"
    },
    {
      "STALL": "Monteiths Brewery",
      "BREWERY NAME": "Monteiths Brewery",
      "NAME": "Hazy Lemonade",
      "TASTING NOTES": "What do you do when life gives you lemons? If you are as optimistic as Monteith’s you brew a lemonade that’s equal parts cloudy and zesty. It’s like a summer’s day at Lake Brunner.",
      "ABV": "4.2",
      "STYLE": "Alcoholic Hazy Lemonade",
      "TYPE": "Other"
    },
    {
      "STALL": "Monteiths Brewery",
      "BREWERY NAME": "Monteiths Brewery",
      "NAME": "Apple Cider",
      "TASTING NOTES": "Made from 100% freshly crushed New Zealand apples. A refreshing and easy drinking dry-style cider, made from 100% freshly crushed New Zealand apples. ",
      "ABV": "4.5",
      "STYLE": "Apple Cider",
      "TYPE": "Cider"
    },
    {
      "STALL": "Monteiths Brewery",
      "BREWERY NAME": "Monteiths Brewery",
      "NAME": "Ginger Beer",
      "TASTING NOTES": "Introducing our new Alcoholic Ginger Beer. At 4% ABV this is a delicious and harmonious brew with hints of zesty ginger balanced with a subtle sweetness. Now you can enjoy the taste of summer all year round, whatever the weather. ",
      "ABV": "4",
      "STYLE": "Alcoholic Ginger Beer",
      "TYPE": "Other"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Cider Cider",
      "TASTING NOTES": "This bad boy just took home the Trophy and a silver medal at the NZ Cider Awards 2022! WOAH. \nCrisp, dry, and delicious, this refreshing drop is our original, signature cider - virtuously simple, yet everything you could ever want in a canned beverage. ",
      "ABV": "4.9",
      "STYLE": "Classic Cider",
      "TYPE": "Cider"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Strawberry Rose",
      "TASTING NOTES": "Our most award-winning cider! This pink beauty is the 2022 Gold medal winner at NZ Cider Awards and was one of two ciders that made it in the NW TOP30 for Beer and Cider Competition. We are so proud of her. \nThis beautiful blend of strawberries and peach and pink is perfect over ice in the sunshine. Best served with friends and joy.",
      "ABV": "4.9",
      "STYLE": "Strawberry Cider",
      "TYPE": "Cider (Flavoured)"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Black",
      "TASTING NOTES": "Wotcha get when you smush blackcurrant and peach together with crispy apple?\nYou get Morningcider Black.\nDon't be fooled by the dirty graffiti - when you crack open your first can of this fruity beauty, this dark and moody gal will bring a fruity wilderness to your lips.",
      "ABV": "4.5",
      "STYLE": "Blackcurrant & Peach Cider",
      "TYPE": "Cider (Flavoured)"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Cider Sangria",
      "TASTING NOTES": "Let's raise a glass to 🍏 apple and 🫚 ginger cider fused together with 🫐 blackcurrant and 🍑 peach in the style of a 🍹 cider sangria.\nMmmm mmm.",
      "ABV": "4.5",
      "STYLE": "Sangria",
      "TYPE": "Cider (Flavoured)"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Apple IPA Cider",
      "TASTING NOTES": "Brewing IPA hops with a dry cider? Making it Hazy? Sounds like a good time to us. \nApple IPA Cider is a burly, dry cider with a heavy dry hop, courtesy of some big NZ hop varieties - it pushes the boundaries and is made for the IPA and cider lover alike.",
      "ABV": "6",
      "STYLE": "Hopped Apple Cider",
      "TYPE": "Cider"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Peace O' Pie",
      "TASTING NOTES": "You know you want a peace o' this - blending crunchy cinnamon topping with blueberries and Granny Smith apples, this desserty sip is about to become the apple of your pie!",
      "ABV": "4.5",
      "STYLE": "Blueberry Pie Cider",
      "TYPE": "Cider (Flavoured)"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Ultra Cider",
      "TASTING NOTES": "Introducing the most refreshing, crisp apple ultra low carb cider you’ve ever tasted!\n90% less carbs than beer, this is better for your tastebuds and your waistline.\nThis super refreshing, crisp and dry classic cider, but super low on sugar (less than 2g p/100ml) and landing in at 4% alc/vol.",
      "ABV": "4",
      "STYLE": "Low Carb Cider",
      "TYPE": "Cider"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Hot X Bun Cider",
      "TASTING NOTES": "This beauty is a beautiful cinnamon and brioche spice infused cider. With notes of dried fruit, apples, heaps of cinnamon and warm brioche. This little dessert cider will warm your hearts. You can enjoy this cider cold and refreshing, or warm her up with a bit of rum for a beautiful mulled cider cocktail.",
      "ABV": "4.5",
      "STYLE": "Cinnamon Brioche Cider",
      "TYPE": "Cider (Flavoured)"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Cherry Bomb",
      "TASTING NOTES": "Our latest beverage bombshell has dropped and she’s a stunner of a cider! A magical colab between Citizen and Morningcider, this sweet beauty queen boasts of fresh rescued Central Otago cherry, apple, brown sugar and cinnamon. Citizen rescue surplus food so we can all fight food waste over a bevvy and Morningcider is the gang behind NZ’s first neighbourhood apple orchard - what a duo of goodness! Cherry Bomb is sure to steal hearts and tastebuds all over Morningside, a land full of locals that live on the bright cider life.",
      "ABV": "4.5",
      "STYLE": "Cherry Cider",
      "TYPE": "Cider (Flavoured)"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Cider ZERO",
      "TASTING NOTES": "Morningcider 0% Crisp Apple Cider is the most refreshing crisp apple 0% cider you’ve ever tasted!\nAs the days get shorter and the nights get chillier, we thought we’d brighten things up with a burst of neon joy. Meet Zero% Crisp Apple Cider, your cheer up companion for winter and beyond.",
      "ABV": "0",
      "STYLE": "Zero Alc Cider",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Strawberry Slushy",
      "TASTING NOTES": "Indulge in the delightful experience of our Strawberry Rosé Cider Slushy. This captivating beverage offers a harmonious blend of ripe strawberries and juicy peaches, crafting a flavour profile that is both vibrant and elegant. Each sip reveals the sweet, succulent essence of strawberries, perfectly complemented by the subtle undertones of fragrant peach. The rosé cider base adds a crisp, effervescent quality, making this slushy an incredibly refreshing treat. Perfectly chilled, it brings a burst of freshness and a touch of warmth to any winter day, offering a blissful escape into a fruity wonderland.",
      "ABV": "6",
      "STYLE": "Cider Slushy",
      "TYPE": "Specialty / Hybrid / Mixed"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Classic Mulled Cider",
      "TASTING NOTES": "Experience the cozy embrace of our Classic Mulled Cider, a timeless favourite that warms the soul. This aromatic beverage is infused with the rich essence of cinnamon, cloves, and star anise, creating a symphony of comforting spices. The cider itself offers a robust apple flavour, enhanced by the subtle sweetness of oranges and the gentle heat of ginger. Each sip is a harmonious blend of sweet and spicy, with a lingering warmth reminiscent of a freshly baked cinnamon brioche scroll. The notes of warm, buttery cinnamon brioche add an extra layer of indulgence, making this mulled cider a heartwarming treat that brings comfort and cheer to any gathering.",
      "ABV": "5",
      "STYLE": "Cinnamon Brioche Hot Cider",
      "TYPE": "Cider (Flavoured)"
    },
    {
      "STALL": "Morningcider",
      "BREWERY NAME": "Morningcider",
      "NAME": "Hard Lemonade",
      "TASTING NOTES": "Discover the invigorating zest of our Alcoholic Lemonade, a delightful fusion of bright citrus and a subtle kick. This refreshing beverage boasts a lively lemon flavour, bursting with the tangy sweetness of freshly squeezed lemons. Each sip reveals a crisp, clean profile, balanced by the effervescent sparkle that dances on the palate. The subtle alcoholic undertone adds a sophisticated edge, elevating the lemonade to a truly refreshing experience. Perfectly chilled, it’s a revitalizing treat that brings a burst of sunshine to any occasion, offering a vibrant and enjoyable escape into a world of citrus bliss.",
      "ABV": "5",
      "STYLE": "Alcoholic Lemonade",
      "TYPE": "Specialty / Hybrid / Mixed"
    },
    {
      "STALL": "New Kids on the Block",
      "BREWERY NAME": "Rudd Street Brewery",
      "NAME": "Old Ben",
      "TASTING NOTES": "Delicious, crisp, dry stout utilising cold infusion to maximise big roast coffee aroma and flavours.",
      "ABV": "5.2",
      "STYLE": "Dry Stout",
      "TYPE": "Stout"
    },
    {
      "STALL": "New Kids on the Block",
      "BREWERY NAME": "Rudd Street Brewery",
      "NAME": "Jenny's Vice",
      "TASTING NOTES": "Refreshing Bavarian style wheat beer, balanced ripe banana, clove, and creamy full-bodied texture.",
      "ABV": "5",
      "STYLE": "Hefeweizen",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "New Kids on the Block",
      "BREWERY NAME": "Rudd Street Brewery",
      "NAME": "Fireside",
      "TASTING NOTES": "Luscious, smooth and malty with toast, caramel and hints of blackberry, apricot and orange. Soft, well rounded and super tasty!",
      "ABV": "5.7",
      "STYLE": "American Amber",
      "TYPE": "Amber Ale"
    },
    {
      "STALL": "New Kids on the Block",
      "BREWERY NAME": "Batsman Brewing",
      "NAME": "Flying Bat",
      "TASTING NOTES": "The Tatau (tattoo) of Samoa has multiple sections with intricate designs that represent our culture. Starting with a bat (Pe’a) in the centre of the back then seamlessly merging into other sections that extend to the knees. The overall design has remained unchanged for thousands of years. This beer is brewed to honour the past, present and future Bats! Fly your bat or as said in Samoa, Fa’alele lau pe’a!",
      "ABV": "6.3",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "New Kids on the Block",
      "BREWERY NAME": "Batsman Brewing",
      "NAME": "Tāpulu",
      "TASTING NOTES": "The Tapulu is one of the many sections of the Tatau. It is positioned on both thighs of the male and extends from hip to knee. It represents the dark sea of the pacific that our people navigated in ancient times. A wider tattooing tool is used to embed the lama (ink) into the skin. It can take up to 8 hours to cover each thigh of the Tatau. Some recipients have thoughts of going into a deep dark place to endure the pain. We say, it’s all blacked out!",
      "ABV": "4.5",
      "STYLE": "Koko Porter",
      "TYPE": "Porter"
    },
    {
      "STALL": "One Drop Brewing",
      "BREWERY NAME": "One Drop Brewing",
      "NAME": "FULL UP",
      "TASTING NOTES": "Full Up is a new pastry-laden Imperial Stout made with our pals at Altitude Brewing in Queenstown, New Zealand. Rob flew over with a pack of one of our favorite bikkies we miss from back home while we laid down the base for a liquid version of said bikkie. What we conjured up is a deliciously lactose-heavy foundation of over nine types of specialty malts, juxtaposed by light and fluffy chocolate-coated marshmallows sitting on a shortcake biscuit base. Unable to accommodate any more adjuncts, this is one of our biggest stouts to date. We’re Full Up y'all!",
      "ABV": "10.5",
      "STYLE": "Pastry stout",
      "TYPE": "Sweet Stout"
    },
    {
      "STALL": "One Drop Brewing",
      "BREWERY NAME": "One Drop Brewing",
      "NAME": "LESSSGO",
      "TASTING NOTES": "A punchy tartness, full-bodied creaminess, and rockin' fruit-filled goodness? Lesssgo! Straight from our pilot program and cranked up to eleven, we’ve amped up our Florida Weisse base with banana, coconut, lactose, and the little nutty, slightly sweet, super vibrant purple ube yam. A touch of Crema di Vanilla ties this wild ride together. Like a piña colada from the edge of the galaxy, this cream tube will have you rocking out in flavourtown. Lesssgo!",
      "ABV": "8",
      "STYLE": "SMOOTHIE SOUR",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "One Drop Brewing",
      "BREWERY NAME": "One Drop Brewing",
      "NAME": "MAKE WAVES",
      "TASTING NOTES": "Make Waves is a new IPA championing a brand new cultivar flown directly from the Yakima Valley, HBC1019 cv. In rubbing and brewing trials, this hop has displayed a complex and potent mix of citrus, tropical, peach, and honeydew melon character. Cool. Naturally, we’ve used this in combination with Freestyle Motueka™, NZ Superdelic™, and US Citra® hops, along with an addition of thiol-rich Phantasm™, and fermented out with our in-house hazy yeast strain. Another evolution in our journey of exploring the modern India Pale Ale.",
      "ABV": "7.3",
      "STYLE": "IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "One Drop Brewing",
      "BREWERY NAME": "One Drop Brewing",
      "NAME": "WYNWOOD HOOD",
      "TASTING NOTES": "Inspired by our travels to Miami Florida, Wynwood Hood exemplifies the area that was the breeding ground for the namesake of this can's style – the Florida Weisse - A step-mashed tart wheat beer inspired by the traditional Berliner Weisse, but with a vibrant and tropical twist. In true OD fashion, we’ve cranked the whole thing right up to 305. With a higher ABV and enhanced mouthfeel, we thought such a base fit to load up on huge doses of mango, pineapple, passionfruit, and coconut water during fermentation. Tropical, tasty, and oh-so vibrant. ",
      "ABV": "8.2",
      "STYLE": "SMOOTHIE SOUR",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "One Drop Brewing",
      "BREWERY NAME": "One Drop Brewing",
      "NAME": "GEDDIT",
      "TASTING NOTES": "Geddit is a new topped-up-to-the-brim kettle sour that's been given our full Fresh-Fruit Smoothie Treatment. Starting with a lactose and oat heavy base soured with our house lacto culture, we’ve then gone and dropped a brain melting amount of strawberry puree, banana, raspberry juice, French vanilla and white chocolate all though this can. Come gedda taste, Geddit?",
      "ABV": "5.9",
      "STYLE": "SMOOTHIE SOUR",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "One Drop Brewing",
      "BREWERY NAME": "One Drop Brewing",
      "NAME": "WIPE ME DOWN",
      "TASTING NOTES": "Wipe me down and call me Nancy. Strap in, fam; this is going to be one wild ride. Our lactose-heavy kettle-sour base has received an all-out Liquid Cream™ treatment, with bucketloads of fresh fruit added just before canning. Australian boysenberry juice, with banana and raspberry purée, lay the foundation for lashings of vanilla ice cream powder, lemon meringue whips, and coconut crème. And what's that? A kiss of Canadian maple syrup, you say? Go on, then. A delightful mess all wrapped in an aluminium suit. Wipe it down.",
      "ABV": "6",
      "STYLE": "SMOOTHIE SOUR",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "One Drop x Altitude",
      "BREWERY NAME": "One Drop x Altitude",
      "NAME": "OVERFLOW",
      "TASTING NOTES": "When you are Full Pp and then add an Extra Dose you get?\nOVERFLOW\nA blend of both Altitude and One Drop collaborative beers.\nEver tried cutting a cinnamon roll in half, filling it with mallowpuffs and running it through a toastie pie machine?\nAltitude and One Drop have... And now you can too!\nOne Marshmallowy Chocolatey Imperial Pastry Stout collaboration brewed in AUS...\nOne Cinnamon Roll Golden Pastry Stout collaboration brewed in NZ...\nBlended together at Sky Stadium for the one beer you won't want to miss this Beervana.",
      "ABV": "10.5",
      "STYLE": "Blended Golden & Imperial Pastry Stout",
      "TYPE": "Imperial Stout"
    },
    {
      "STALL": "Pink Boots Society NZ",
      "BREWERY NAME": "Parrot Dog",
      "NAME": "Pink Frost",
      "TASTING NOTES": "Blackcurrant, red apple, herbal, dry, medium bitterness",
      "ABV": "5.6",
      "STYLE": "Cold IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Pink Boots Society NZ",
      "BREWERY NAME": "Sunshine Brewery",
      "NAME": "Sunrise 7",
      "TASTING NOTES": "hits of berry, tropical and stone fruit",
      "ABV": "5",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Pink Boots Society NZ",
      "BREWERY NAME": "Isthmus Brewing",
      "NAME": "Heat Haze",
      "TASTING NOTES": "Tropical and juicy with low bitterness. Stonefruit, mango and orange flavours.",
      "ABV": "4.7",
      "STYLE": "Hazy Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Pink Boots Society NZ",
      "BREWERY NAME": "Good George",
      "NAME": "Saloon Session",
      "TASTING NOTES": "",
      "ABV": "4.3",
      "STYLE": "Kentucky Common",
      "TYPE": "Cream Ale"
    },
    {
      "STALL": "Pink Boots Society NZ",
      "BREWERY NAME": "PhatHouse Brewing Co.",
      "NAME": "Hapi Pils",
      "TASTING NOTES": "A well balanced New Zealand Pilsner created using locally sourced NZ malts and hops. Moderately spritzy with subtle caramel malty notes rolling into fresh lemon and lime",
      "ABV": "5",
      "STYLE": "Pilsner",
      "TYPE": "Pilsner"
    },
    {
      "STALL": "Ragtag Fermenting Co.",
      "BREWERY NAME": "Ragtag Fermenting Co.",
      "NAME": "Ragtag Riesling",
      "TASTING NOTES": "Bright and light, easy drinking, sparkling style with Riesling purity. Martinborough local fruit, with wine from award-winning vines by an award-winning winemaker.",
      "ABV": "11.4",
      "STYLE": "Sparkling Wine",
      "TYPE": "Wine"
    },
    {
      "STALL": "Ragtag Fermenting Co.",
      "BREWERY NAME": "Ragtag Fermenting Co.",
      "NAME": "Ragtag Pineapple Mimosa",
      "TASTING NOTES": "Refresh your palate, keep the party vibe alive!",
      "ABV": "9.5",
      "STYLE": "Sparkling Wine",
      "TYPE": "Wine"
    },
    {
      "STALL": "Ragtag Fermenting Co.",
      "BREWERY NAME": "Ragtag Fermenting Co.",
      "NAME": "Ragtag Mimosa Classic",
      "TASTING NOTES": "The classic mimosa. Need we say more..... ",
      "ABV": "9.5",
      "STYLE": "Sparkling Cocktail",
      "TYPE": "Wine"
    },
    {
      "STALL": "Ragtag Fermenting Co.",
      "BREWERY NAME": "Ragtag Fermenting Co.",
      "NAME": "Black Velvet",
      "TASTING NOTES": "A New World dark and chocolatey Martinborough Stout, with the fruit forward Wairarapa sparkling Riesling edge up the middle of the palate! A twist on a classic cocktail to mourn the death of Prince Albert in 1861. It is weird, yet strangely wonderful. A collab cocktail of Ragtag Riesling and Martinborough Brewery’s Black Nectar Stout.",
      "ABV": "8.4",
      "STYLE": "Wine / Beer Blend",
      "TYPE": "Other"
    },
    {
      "STALL": "Saint Leonards",
      "BREWERY NAME": "Saint Leonards",
      "NAME": "Meditations",
      "TASTING NOTES": "",
      "ABV": "7.9",
      "STYLE": "Quad Citra DIPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "Saint Leonards",
      "BREWERY NAME": "Saint Leonards",
      "NAME": "Treebeard",
      "TASTING NOTES": "",
      "ABV": "7.7",
      "STYLE": "WCIPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "Saint Leonards",
      "BREWERY NAME": "Saint Leonards",
      "NAME": "Raspberry Sour",
      "TASTING NOTES": "",
      "ABV": "4",
      "STYLE": "Raspberry Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Saint Leonards",
      "BREWERY NAME": "Saint Leonards",
      "NAME": "Rice Lager",
      "TASTING NOTES": "",
      "ABV": "5",
      "STYLE": "Rice Lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "Saint Leonards",
      "BREWERY NAME": "Saint Leonards",
      "NAME": "Gambrinus",
      "TASTING NOTES": "",
      "ABV": "7.7",
      "STYLE": "Weissbock",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "Saint Leonards",
      "BREWERY NAME": "Saint Leonards",
      "NAME": "Dunkelsbock",
      "TASTING NOTES": "",
      "ABV": "6.5",
      "STYLE": "Dunkelsbock",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "Shining Peak Brewing",
      "BREWERY NAME": "Shining Peak Brewing",
      "NAME": "Vintage Stout 2023",
      "TASTING NOTES": "The 2023 Vintage Stout is the fifth release of our ‘Vintage’ range of yearly Barrel Aged releases.\nThis Imperial Stout was brewed with a ‘Reiterated’ Double Mashing schedule, in which the second mash is mixed in with high gravity Wort from the first mash. This process allows us to extract a more concentrated sweet Wort, which feeds the yeast to create a higher alcohol brew.",
      "ABV": "11",
      "STYLE": "Barrel Aged Imperial Stout",
      "TYPE": "Wood- and Barrel-Aged Beer"
    },
    {
      "STALL": "Shining Peak Brewing",
      "BREWERY NAME": "Shining Peak Brewing",
      "NAME": "Vintage Stout 2022",
      "TASTING NOTES": "The 2022 Vintage Stout is the fourth release of our ‘Vintage’ range of yearly Barrel Aged releases.\nThis Imperial Stout was brewed with a ‘Reiterated’ Double Mashing schedule, in which the second mash is mixed in with high gravity Wort from the first mash. This process allows us to extract a more concentrated sweet Wort, which feeds the yeast to create a higher alcohol brew.",
      "ABV": "11",
      "STYLE": "Barrel Aged Imperial Stout",
      "TYPE": "Wood- and Barrel-Aged Beer"
    },
    {
      "STALL": "Shining Peak Brewing",
      "BREWERY NAME": "Shining Peak Brewing",
      "NAME": "Scorched Almond Imperial Stout",
      "TASTING NOTES": "A one off keg exclusive to Beervana 2024. This Imperial Stout is made from the base beer from our Vintage Stout, conditioned on scorched almonds and vanilla beans. ",
      "ABV": "11",
      "STYLE": "Imperial Stout",
      "TYPE": "Imperial Stout"
    },
    {
      "STALL": "Shining Peak Brewing",
      "BREWERY NAME": "Shining Peak Brewing",
      "NAME": "Thorny Drop Blackberry Sour",
      "TASTING NOTES": "Work smarter, not harder - an idiom that Lou Butler Sr fixated on as he sat, drawing machinery designs with chalk on his workshop floor. The Inglewood man, whose father ironically did business selling wine made from blackberries, would go on to invent a machine that would take a sword to said thorny bush.\nDealing to hedges that were sometimes 20 metres wide, the Butler Bros trimmer wielded a 3.5m blade and a steel cage to protect the operator from flying debris and was mounted on Bren-Gun Carriers, Tanks and Army Trucks, no doubt raising eyebrows from their Windsor Road neighbours. This Lactose-infused Sour Beer uses truckloads of Blackberries and a dash of lemon.",
      "ABV": "6",
      "STYLE": "Blackberry Dessert Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Shining Peak Brewing",
      "BREWERY NAME": "Shining Peak Brewing",
      "NAME": "The Good Nurse",
      "TASTING NOTES": "SERVED ON HANDPULL.\nAnn Evans née Clive, a nurse through the Crimean War, moved from England to New Zealand in 1862 as part of a throng of emigrants with big ideas - Ann’s being the establishment of a hospital in the small colony.\nAfter her business plan was thwarted by rising building costs, inflation and a global GIB® shortage, she landed in Hāwera where she tended injured settlers and soldiers. Her most famous patient came when she agreed to be led blindfolded to a secret hiding spot near the Waingongoro river where she nursed an ailing enemy of the crown during the Taranaki feuds of the late 1800s. As a nod to the good nurse, this old English beer is inspired by the ales from Ann’s home near the Trent River in Burton.\nA rich, malty, sweet, and bitter dark ale of moderately strong alcohol. Full bodied and chewy with a balanced hoppy finish and complex malty and hoppy aroma. Fruity notes accentuate the malt richness, while the hops help balance the sweeter finish.",
      "ABV": "5.8",
      "STYLE": "Burton Ale",
      "TYPE": "British Ale"
    },
    {
      "STALL": "Shining Peak Brewing",
      "BREWERY NAME": "Shining Peak Brewing",
      "NAME": "Skunk Juice",
      "TASTING NOTES": "The impressive brains in the natural gas industry once came up with a genius solution to a dangerous problem. The problem? Natural gas doesn't have an odour and hazardous leaks were going undetected. The solution? Skunk Juice!\nWhat is Skunk Juice you ask? It's a pungent brew of Sulphide and Methyl Mercaptan that can be smelled almost three kilometres from its source. It pongs so bad, it once shut down the town of Stratford for a whole day!\nOur version of Skunk Juice harnesses a hazy chemical brew of Mosaic and Citra hops, that unlike its namesake, gives off a beautiful tropical and citrus aromas, so you'",
      "ABV": "6.2",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Shining Peak Brewing",
      "BREWERY NAME": "Shining Peak Brewing",
      "NAME": "Octopus Clamp",
      "TASTING NOTES": "Novelist and Hawera luminary Ronald Hugh Morrieson was a big wrestling fan. His idol was Lofty Blomfield, a lion of the ring whose sickest move was the Octopus Clamp. He and his mates used to drink a brew from the Hawera Brewery called “O.C.” which Ron promptly dubbed Octopus Clamp. We’re going the rest of the way and making it for real as a chocolatey Schwarzbier with stone fruit and caramel flavours.",
      "ABV": "5",
      "STYLE": "Dark Lager",
      "TYPE": "Lager (Dark)"
    },
    {
      "STALL": "Shining Peak Brewing",
      "BREWERY NAME": "Shining Peak Brewing",
      "NAME": "Minesweeper",
      "TASTING NOTES": "At the height of the Great War in 1916, German Raider SMS Wolf sailed from Germany to disrupt and sink Allied shipping. She ventured as far as Taranaki, laying mines that claimed at least two ships off the shores of Aoteraora in what was the first known hostile act against New Zealand.\nOne keen Coastal local by the name of Frank Mace, discovered a mine just off Surf Highway 45, pulling it ashore using chains. It would undergo a controlled detonation on the beach watched by many keen onlookers, as the explosion rocked houses as far as New Plymouth’s hills, leaving a massive crater that swept along the beach.\nThis West Coast IPA explodes with a minefield of Citrus and Tropical hops over a malt base, and was first brewed for Malthouse WCIPA Challenge 2024 in Wellington, New Zealand.",
      "ABV": "6.7",
      "STYLE": "WCIPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Shining Peak Brewing",
      "BREWERY NAME": "Shining Peak Brewing",
      "NAME": "Magic Dart",
      "TASTING NOTES": "Back in the day, Whare Matangi, estranged son of Ngarue, was given a magic dart, or tara, that would lead him to his father. After a few throws the tara hit Ngarue’s house at the mouth of the river. The place became known as Te Whai-tara uni-a-Ngarue, or Waitara.\nOur own Magic Dart aims for an American-style golden ale with a combo of US and kiwi hops combining sweet stonefruit and tropical aromas.",
      "ABV": "5.3",
      "STYLE": "Pale Ale",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "Shining Peak Brewing",
      "BREWERY NAME": "Shining Peak Brewing",
      "NAME": "Chopper",
      "TASTING NOTES": "Born one of eleven children, John Edward Shewry, better known as Ned, grew up just outside the border of the Whangamomona Republic. At 17, Ned and his brother Archie went to work, clearing their family farm with just an axe, a saw and a box of matches. His elders soon saw Ned’s potential with the Axe and entered him into the local Wood Chopping competition. Disposing of the local competition, Ned would go on to win multiple world titles, setting world records along the way. His skills became legend that he could dehorn cattle with one swift swing.\nThis NZIPA delivers a hefty blow of Rakau and Nelson Sauvin from Clayton Hops, and was first brewed for Smith’s NZIPA Challenge 2024 in Queenstown, New Zealand.",
      "ABV": "7.3",
      "STYLE": "NZIPA",
      "TYPE": "New Zealand IPA"
    },
    {
      "STALL": "Shining Peak Brewing",
      "BREWERY NAME": "Shining Peak Brewing",
      "NAME": "Oak Aged Brett Saison - Cellar Release",
      "TASTING NOTES": "Brewers note, July 2024\n\"\"The Brett Saison has aged gracefully over the past 2.5 years, and is now showing a fuller body, with some more flavour development lending the beer a lasting mouthfeel. The beer retains a light spritz and length, and sits nicely beside a cheeseboard made up of pungent fromage.\"",
      "ABV": "",
      "STYLE": "",
      "TYPE": ""
    },
    {
      "STALL": "----",
      "BREWERY NAME": "",
      "NAME": "",
      "TASTING NOTES": "",
      "ABV": "",
      "STYLE": "",
      "TYPE": ""
    },
    {
      "STALL": "This ‘Brett Saison’ was aged for 12 months in used Oak Bourbon Barrels with a mixed fermentation culture of Brettanomyces and Saccharomyces yeasts. The result is a complex, dry farmhouse style beer with a funky and fruity personality that will continue to develop with age. Drink one now, save one for later?\"",
      "BREWERY NAME": "6.2",
      "NAME": "Saison",
      "TASTING NOTES": "Saison",
      "ABV": "",
      "STYLE": "",
      "TYPE": ""
    },
    {
      "STALL": "Southward Distilling",
      "BREWERY NAME": "Southward Distilling",
      "NAME": "Lagerita",
      "TASTING NOTES": "Our beer cocktail made with Lager, Chilli Gin and topped with Lime and jalapeno Soda.",
      "ABV": "7",
      "STYLE": "Beer-based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Southward Distilling",
      "BREWERY NAME": "Southward Distilling",
      "NAME": "Vodka",
      "TASTING NOTES": "With Soda . Full bodied creamy, classic vodka.",
      "ABV": "8",
      "STYLE": "Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Southward Distilling",
      "BREWERY NAME": "Southward Distilling",
      "NAME": "Whiskey and Ginger",
      "TASTING NOTES": "Maple Rye whiskey and ginger ale",
      "ABV": "8",
      "STYLE": "Ginger Beer Based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Southward Distilling",
      "BREWERY NAME": "Southward Distilling",
      "NAME": "Smoked Rosemary Gin",
      "TASTING NOTES": "paired with ginger ale",
      "ABV": "8",
      "STYLE": "Ginger Beer Based Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "Southward Distilling",
      "BREWERY NAME": "Southward Distilling",
      "NAME": "Wave Gin",
      "TASTING NOTES": "With tonic or Soda. Classic Dry wave gin made with local beach-forged seaweed for a slightly salty classic dry gin.",
      "ABV": "8",
      "STYLE": "G&T",
      "TYPE": "Other"
    },
    {
      "STALL": "Southward Distilling",
      "BREWERY NAME": "Southward Distilling",
      "NAME": "Blood Orange Gin",
      "TASTING NOTES": "With Tonic or Soda. NZ Blood Oranges, peeled and juiced at the peak of their season to make our bitter sweet citrus-forward gin.",
      "ABV": "8",
      "STYLE": "G&T",
      "TYPE": "Other"
    },
    {
      "STALL": "State of Play",
      "BREWERY NAME": "State of Play",
      "NAME": "IPA",
      "TASTING NOTES": "Our non-alcoholic IPA beer is naturally brewed without fancy alcohol extraction machines. For full flavour we balance Motueka hop bitterness with the backbone of Canterbury malt, and our special yeast produces only a tiny amount of alcohol (<0.5%) while locking in all the flavour. ",
      "ABV": "0.5",
      "STYLE": "IPA",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "State of Play",
      "BREWERY NAME": "State of Play",
      "NAME": "Nectaron Pale Ale",
      "TASTING NOTES": "Nectaron is an amazing hop – and it is the star of this non-alcoholic Pale Ale. It is like a fruit bowl explosion that lures you in with a heady aroma – then boom! Followed by a 40 EBU bitterness backbone that prepares you for the next sip. The beer is naturally brewed with a massive dry hop, and without fancy alcohol extraction machines that means all those delicate hop aromas and esters are still in the beer. The special yeast produces only a tiny amount of alcohol (0.3%) while locking in all the flavour.",
      "ABV": "0.5",
      "STYLE": "Pale Ale",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "State of Play",
      "BREWERY NAME": "State of Play",
      "NAME": "Sunbreaker Ale",
      "TASTING NOTES": "The signature State of Play full body and finish, fused with the ingredients of the ultimate sunny day elixir. Ginger adds some heat up front, Honey for a warm glow and the Lime cuts through letting all the flavours shine. ",
      "ABV": "0.5",
      "STYLE": "Pale Ale",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "Sunshine Brewery",
      "BREWERY NAME": "Sunshine Brewery",
      "NAME": "Gisborne Gold",
      "TASTING NOTES": "This is still NZ's longest running craft lager in the country.  34 years of Gisborne Gold, has supreme champion status, multiple gold medals, and a true cult following.  ",
      "ABV": "3.8",
      "STYLE": "NZ Lager",
      "TYPE": "Lager (Pale)"
    },
    {
      "STALL": "Sunshine Brewery",
      "BREWERY NAME": "Sunshine Brewery",
      "NAME": "Old Fashioned Imperial Stout",
      "TASTING NOTES": "Our 2024 RIS recipe with a bit of a classic Old Fashion cocktail, Beervana ONLY!",
      "ABV": "10",
      "STYLE": "Imperial Stout",
      "TYPE": "Imperial Stout"
    },
    {
      "STALL": "Sunshine Brewery",
      "BREWERY NAME": "Sunshine Brewery",
      "NAME": "Sonic the Hophog",
      "TASTING NOTES": "Our entry for the 2024 Malthouse West Coast IPA Challenge “Sonic the Hophog”.  One of the most iconic video games, we can still remember the sound of it booting up on SEGA Genesis.  Nostalgic, yes, timeless, we reckon.  The games and movies continue over 30 years after its original release, much like us at Sunshine Brewery.  After 35 years in the industry, we give credence to the balance between the old and the new, and this beer is no different.  A traditional WCIPA malt base with Simcoe, Cryo Mosaic and a new hop from Montana named Ahhroma.   Let out a gleeful sigh with every sip.",
      "ABV": "6.5",
      "STYLE": "WCIPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Sunshine Brewery",
      "BREWERY NAME": "Sunshine Brewery",
      "NAME": "Full Barrel Ale",
      "TASTING NOTES": "Our first Collab with Pokeno Whisky.  A Scottish Export, with a bit more booze behind it to carry the ageing process in Ex Bourbon Barrels.  This is a Beervana only pre-release before we offer it up with their beer barrel aged whisky in September.",
      "ABV": "7",
      "STYLE": "Scotch Ale",
      "TYPE": "Wood- and Barrel-Aged Beer"
    },
    {
      "STALL": "Sunshine Brewery",
      "BREWERY NAME": "Sunshine Brewery",
      "NAME": "Tiramisu Stout",
      "TASTING NOTES": "Our most popular annual winter release.  This sweet inspired stout has all the body and flavour without any use of lactose, so everyone can enjoy!",
      "ABV": "7.5",
      "STYLE": "Stout",
      "TYPE": "Stout"
    },
    {
      "STALL": "Sunshine Brewery",
      "BREWERY NAME": "Sunshine Brewery",
      "NAME": "Sunrise #7",
      "TASTING NOTES": "The newest installment of our Hazy Pale Ale Series.  Hopped with the 2024 Pink Boots Blend from YCH.",
      "ABV": "5",
      "STYLE": "Hazy PA",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Sunshine Coast",
      "BREWERY NAME": "Brouhaha",
      "NAME": "Imperial Strawberry Rhubarb Sour",
      "TASTING NOTES": "Slip into your velour tracksuit, because this beer is pure silk. Strawberries and Rhubarb tear up the dance floor in this imperial take on our most popular beer.",
      "ABV": "8",
      "STYLE": "Kettle Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Sunshine Coast",
      "BREWERY NAME": "Brouhaha",
      "NAME": "Imperial Stout",
      "TASTING NOTES": "A bitter-sweet symphony of roasted grain and sweet malts balance against the bitterness. Lingering notes of coffee and chocolate with a roasted finish. Perfect for the cooler months.",
      "ABV": "9.6",
      "STYLE": "Imperial Stout",
      "TYPE": "Imperial Stout"
    },
    {
      "STALL": "Sunshine Coast",
      "BREWERY NAME": "Moffat Beach Brewing Co",
      "NAME": "Iggy Hop",
      "TASTING NOTES": "Like the great man himself, this big, brash and LOUD Double IPA turns the dial to eleven with an all-American hop bill and a serious lust for life. Bursting with bitterness, punchy fresh hop aroma and a little boozy linger, it’s the beer to get the party started.",
      "ABV": "9",
      "STYLE": "Double IPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "Sunshine Coast",
      "BREWERY NAME": "Moffat Beach Brewing Co",
      "NAME": "Your Own Private Idaho",
      "TASTING NOTES": "This beer sings the melody of modern hop varietal Idaho 7. Named after it’s home state Idaho 7 dances with bold, pungent and playful notes. Our take on this beer is something between a New England and West Coast IPA… super juicy and hazy, yet graced with a robust bitterness that takes you on a journey to your own private Idaho.",
      "ABV": "6",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Sunshine Coast",
      "BREWERY NAME": "Black Flag Brewing",
      "NAME": "Rage",
      "TASTING NOTES": "A battle cry for the repressed, the indifferent, and those who just like to colour outside the lines. This is a beer that doesn’t hold back. And neither should you.",
      "ABV": "6",
      "STYLE": "Juice Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Sunshine Coast",
      "BREWERY NAME": "Black Flag Brewing",
      "NAME": "Bones Raspberry Spark",
      "TASTING NOTES": "Put some pep in your step with Bones Vodka Raspberry Spark! It’s a trip to the candy store, but one where you’ll need ID to get in.",
      "ABV": "4.1",
      "STYLE": "",
      "TYPE": "Other"
    },
    {
      "STALL": "Sunshine Coast",
      "BREWERY NAME": "Coolum Beer Co.",
      "NAME": "The Big Pineapple",
      "TASTING NOTES": "",
      "ABV": "7.5",
      "STYLE": "Tropical Stout",
      "TYPE": "Imperial Stout"
    },
    {
      "STALL": "Sunshine Coast",
      "BREWERY NAME": "Coolum Beer Co.",
      "NAME": "Flat Out",
      "TASTING NOTES": "",
      "ABV": "8.1",
      "STYLE": "IIPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "Te Aro Brewery",
      "BREWERY NAME": "Te Aro Brewery",
      "NAME": "Endless Cloud",
      "TASTING NOTES": "A hazy to get stuck into.  Yellow from the Pilsner, Oat and Wheat Malts.  We added the hops after the boil to give it some light bitterness and a fruit & candy flavor.  Then we dry hop it a varying times during fermentation with El Dorado, Idaho 7 and a little Nectaron. ",
      "ABV": "4.5",
      "STYLE": "Session Hazy",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Te Aro Brewery",
      "BREWERY NAME": "Te Aro Brewery",
      "NAME": "Volks European Lager",
      "TASTING NOTES": "A nice east drinking European Style lager.  Using German Malt and Yeast and European Saaz hops.  This beer is Light, Clean, Crisp, dry and refreshing.",
      "ABV": "4.5",
      "STYLE": "European Lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "Te Aro Brewery",
      "BREWERY NAME": "Te Aro Brewery",
      "NAME": "Get Lucky ",
      "TASTING NOTES": "Not everyone likes hops and bitterness, so we have brought along a Fruited Sour beer for you to try.  This one has been infused with a tart Raspberry puree and a more sweet Mango.  It is pink in colour and not too overpowering in sourness or fruitiness.  It makes for an excellent thirst quencher and a wonderful Beervana palate cleanser.",
      "ABV": "4.8",
      "STYLE": "Fruited Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Te Aro Brewery",
      "BREWERY NAME": "Te Aro Brewery",
      "NAME": "Aro Hazy ",
      "TASTING NOTES": "Our Classic Te Aro Brewing Hazy\nLow in bitterness with a fruity and sweet aroma. A true Te Aro Brewing classic beer.  ",
      "ABV": "5.5",
      "STYLE": "Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Te Aro Brewery",
      "BREWERY NAME": "Te Aro Brewery",
      "NAME": "Remutaka ",
      "TASTING NOTES": "This is a beer, released earlier this year with amazing feedback.\nWe brewed with 3 classic and dependable NZ hops, Nelson Sauvin, Moutere and Riwaka in the boil.  We then dry hopped it to showcase the unique aromas and flavors of these 3 NZ hops",
      "ABV": "5.7",
      "STYLE": "NZ IPA",
      "TYPE": "New Zealand IPA"
    },
    {
      "STALL": "Te Aro Brewery",
      "BREWERY NAME": "Te Aro Brewery",
      "NAME": "Jet Stream",
      "TASTING NOTES": "The biggest ABV of our core range Hazy's.  For this beauty we have used what are sometimes called \"\"The Holy Trinity\"\" of US Hops, Mosaic, Citra and Simcoe.  We add these at multiple points after the boil and then we dry hop for a full on fruit punch.",
      "ABV": "6.5",
      "STYLE": "Hazy Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Te Aro Brewery",
      "BREWERY NAME": "Te Aro Brewery",
      "NAME": "The Bird ",
      "TASTING NOTES": "We brough this Beervana a few year ago and it was a great hit, so we rebrewed it again for this years festival.\nThis is outrageously flamboyant and hopped with all singing and all dancing US hops of Citra, Amarillo and Centennial\nFlipping the bird.... just because we can.",
      "ABV": "6.9",
      "STYLE": "WCIPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Te Aro Brewery",
      "BREWERY NAME": "Te Aro Brewery",
      "NAME": "Magellan",
      "TASTING NOTES": "Magellan was the first European to discover the Pacific Ocean, so we are celebrating this by brewing a Pacific Pale Ale, using hops, from the US, Australia and NZ to give a true taste of the Pacific. ",
      "ABV": "5.4",
      "STYLE": "Pacific Pale Ale",
      "TYPE": "Pale Ale"
    },
    {
      "STALL": "Te Aro Brewery",
      "BREWERY NAME": "Te Aro Brewery",
      "NAME": "Amundsen",
      "TASTING NOTES": "In the race to the South Pole Roald Amundsen got there first.  He was also the first to fly over the North Pole, making him arguably the most accomplished early explorer of both polar regions. \nTo celebrate his exploits, we've crafted a Polar Porter with dark malty goodness.\nAt 7% its strong enough to warm the cockles on a chilly day.",
      "ABV": "7",
      "STYLE": "Polar Porter",
      "TYPE": "Porter"
    },
    {
      "STALL": "Te Aro Brewery",
      "BREWERY NAME": "Te Aro Brewery",
      "NAME": "Marco Polo ",
      "TASTING NOTES": "Marco Polo (depending on who you want to believe) linked Europe with Asia and the many spices produced in that part of the world.  Some even claim the he was the first to introduce the Europeans to Ice Cream.\nTo celebrate this travels we decided to brew a Spiked Milk Stout, loaded with the tastes of literary adventure",
      "ABV": "6.3",
      "STYLE": "Spiced Stout",
      "TYPE": "Stout"
    },
    {
      "STALL": "The German Beer House",
      "BREWERY NAME": "Ayinger",
      "NAME": "Jahrhundertbier",
      "TASTING NOTES": "This beer was first brewed in 1978 to celebrate the 100th anniversary of our brewery. It has a golden-yellow color with a slightly flowery yeast, honey-ish aroma, tastes a little spicy and is full-bodied in initial taste, mild before swallowing and soft with a refined sparkle and fades with a well-balanced hint of bitterness. It is an especially drinkable and harmonious beer. Conrad Seidl, known as the Austrian “Pope of Beers”, on the Jahrhundert Bier: “It is a malty beer that pronounces the precious earthy quality of malted barley.”",
      "ABV": "5.5",
      "STYLE": "Export Lager",
      "TYPE": "Lager (Pale)"
    },
    {
      "STALL": "The German Beer House",
      "BREWERY NAME": "Ayinger",
      "NAME": "Altbairisch Dunkel",
      "TASTING NOTES": "Up until the Second World War, dark beer was the predominant beer type in the Munich area. The hard water found in the region played a special role in producing this specialty. In his book “Beer International”, the world-renowned English beer writer, Michael Jackson, accurately describes the Ayinger “Altbairisch Dunkel” as: “A good example of its kind. Impenetrably dark with a golden-brown gleam when held up to the light, and with a warm aroma and malty taste, while summoning up coffee taste sensations on going down. It is brewed from five types of malt (two of which are torrified dark), and it is only lightly hopped.” It is produced using the traditional double fermentation process.",
      "ABV": "5",
      "STYLE": "Bavarian Dark Lager",
      "TYPE": "Lager (Dark)"
    },
    {
      "STALL": "The German Beer House",
      "BREWERY NAME": "Ayinger",
      "NAME": "Brauweisse",
      "TASTING NOTES": "Fragrance and taste of the “yeast-cloudy” wheat beer are distinguished by a refined top-fermented flowery-yeast character and an unmistakable, distinct banana aroma. First sensation on the taste buds is full-bodied, very soft and mild with a lively, champagne-like sparkle. A light, typical wheat beer taste is expressed, the bitter tone of which can scarcely be detected. The sparklingly refreshing Ayinger Bräuweisse will impress every wheat beer connoisseur with the first mouthful.",
      "ABV": "5.1",
      "STYLE": "Bavarian Wheat",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "The German Beer House",
      "BREWERY NAME": "Ayinger",
      "NAME": "Celebrator",
      "TASTING NOTES": "A beer that has a dominant malty taste. This beer’s origins in a monk’s recipe are reflected in its heartiness. The Pope of Beers, Conrad Seidl, describes it as: “Almost black with a very slight red tone, a sensational, festive foam and truly extraordinary fragrance that at first summons up visions of greaves lard. The first taste is of mild fullness with an accompanying coffee tone, which becomes more dominant with the aftertaste. There is very little of the sweetness that is frequently to be tasted with doppelbock beer.” The Ayinger Celebrator has been ranked among the best beers of the world by the Chicago Testing Institute several times and has won numerous medals.",
      "ABV": "6.7",
      "STYLE": "Doppelbock",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "The German Beer House",
      "BREWERY NAME": "Paulaner",
      "NAME": "Weissbier",
      "TASTING NOTES": "The No. 1 Weissbier in Germany and one of the world’s favourites. Naturally cloudy and shining silky-gold in the glass under a really strong head of foam. At the first mouthful this weissbier classic has a mild aroma of banana. Finer palates detect a trace of mango and pineapple and the balance between sweet and bitter. Beer connoisseurs appreciate the fine note of yeast and the mild but sparkling mix of aromas. It is a typical beer garden beer, which brings people together all over the world.",
      "ABV": "5.5",
      "STYLE": "Wheat Beer",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "The German Beer House",
      "BREWERY NAME": "Paulaner",
      "NAME": "Weissbier Dunkel",
      "TASTING NOTES": "The unusually high content of finest Munich malt turns this dark version of wheat beer into an intensive taste experience: Light chocolate, cocoa, and tropical fruit flavors impress first. Then wheat, malt, and sparkling roast aroma. Weissbier Dunkel is a muscular beer. Unfiltered, strong, and nutty. At the same time, smooth and soft to the taste. A great accompaniment for any meal. And it even wins over many true wine fans.",
      "ABV": "5.3",
      "STYLE": "Hefeweiss Dunkel",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "The German Beer House",
      "BREWERY NAME": "Weihenstephaner",
      "NAME": "Pils",
      "TASTING NOTES": "A Bavarian pilsner with a pleasant bitterness and a noble hop aroma. Our pilsner is as a classic aperitif and agreeably quickens the appetite, a delightful overture to a culinary experience. Served with a meal, it also complements cheese, delicate fish or carpaccio.",
      "ABV": "5.1",
      "STYLE": "Pilsner",
      "TYPE": "Pilsner"
    },
    {
      "STALL": "The German Beer House",
      "BREWERY NAME": "Weihenstephaner",
      "NAME": "1516 Kellerbier",
      "TASTING NOTES": "A speciality beer brewed with the rare hop variety Hallertauer Record, a variety now only grown by a single hop farmer in the Hallertau hop cultivation region. 1516 Kellerbier was first brewed to celebrate the 500th anniversary of the Bavarian Reinheitsgebot (purity law for beer). It has rapidly become an insider tip among beer enthusiasts and is often served with grilled foods, roasts and cheeses.",
      "ABV": "5.6",
      "STYLE": "Kellerbier",
      "TYPE": "Lager"
    },
    {
      "STALL": "The German Beer House",
      "BREWERY NAME": "Weihenstephaner",
      "NAME": "Hefeweissbier",
      "TASTING NOTES": "A veritable classic – and the star of our beer ensemble: Weihenstephaner wheat beer. Our wheat beer is the most widely recognised product of the Bavarian State Brewery Weihenstephan.",
      "ABV": "5.4",
      "STYLE": "Hefe Weissbier",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "The German Beer House",
      "BREWERY NAME": "Weihenstephaner",
      "NAME": "Kristallweissbier",
      "TASTING NOTES": "Our Kristallweissbier has repeatedly been singled out by beer judges the world over for its excellence. This beer is a true jewel of the Bavarian State Brewery Weihenstephan. The clarity of our Kristallweissbier is achieved through filtration, and it is the only top-fermented beer brewed by the Bavarian State Brewery Weihenstephan that is not cloudy.",
      "ABV": "5.4",
      "STYLE": "Kristall Weissbier",
      "TYPE": "German Wheat Beer"
    },
    {
      "STALL": "The German Beer House",
      "BREWERY NAME": "Hofbrau",
      "NAME": "Original",
      "TASTING NOTES": "Sitting together on long wooden benches, enjoying pretzels and hearty snacks and treats, feeling that Bavarian hospitality and camaraderie, the perfect service donned in smart-looking traditional costume – nearly complete but what absolutely can't be missing? A liter of Hofbräu Original! Luminous golden yellow with foamy white crown – you can already taste the refreshment: Slightly malty, full-bodied, mature and with an elegant finish. A beer with character for connoisseurs with character.",
      "ABV": "5.1",
      "STYLE": "Lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "The German Beer House",
      "BREWERY NAME": "Lowenbrau",
      "NAME": "Original Lager",
      "TASTING NOTES": "Brewed to the original Lowenbrau recipe that dates back to 1383; it pours a pale straw colour with a thin head. The nose is fragrant with Hallertau hops providing citrus/grassy notes while the palate is light with average carbonation, balanced citrus bitterness and a touch of malt sweetness followed by a crisp finish.",
      "ABV": "5.2",
      "STYLE": "Lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "The Old Guard",
      "BREWERY NAME": "Hallertau",
      "NAME": "Haterade",
      "TASTING NOTES": "Don't expect to make friends sharing this beer. Rotten grapefruit, slightly salty and bitter from hater's tears.",
      "ABV": "8.5",
      "STYLE": "Soured IPA",
      "TYPE": "Double IPA"
    },
    {
      "STALL": "The Old Guard",
      "BREWERY NAME": "Hallertau",
      "NAME": "#1 Lager",
      "TASTING NOTES": "Some say she’s the luxe life. Exuberant. Snappy. Bright. Chatty. Sunlit. Lush. Passionfruit. Blueberries. Sparkling. Refined. Considered. Dry. And frankly, refreshing.",
      "ABV": "4.5",
      "STYLE": "Lager",
      "TYPE": "Lager"
    },
    {
      "STALL": "The Old Guard",
      "BREWERY NAME": "Three Boys",
      "NAME": "Brewers Reserve Raspberry Sour",
      "TASTING NOTES": "Three Boys' NZ Beer Awards 2024 Trophy-Winning Raspberry Gose",
      "ABV": "3.5",
      "STYLE": "Fruited Gose",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "The Old Guard",
      "BREWERY NAME": "Three Boys",
      "NAME": "Oyster Stout",
      "TASTING NOTES": "Rich and dark malt drives this modern classic of New Zealand brewing. Three Boys say the secret is in the addition of Bluff Oysters harvested from the southernmost waters of the Pacific Ocean. What else can we say about New Zealand’s most awarded dark beer?!",
      "ABV": "6.5",
      "STYLE": "Oyster Stout",
      "TYPE": "Stout"
    },
    {
      "STALL": "The Old Guard",
      "BREWERY NAME": "Three Boys",
      "NAME": "Brewers Reserve Iti Heavy",
      "TASTING NOTES": "",
      "ABV": "6.8",
      "STYLE": "Wee Heavy",
      "TYPE": "Scottish Style Ale"
    },
    {
      "STALL": "The Roxy",
      "BREWERY NAME": "The Roxy",
      "NAME": "Hunky Monkey",
      "TASTING NOTES": "Ginger and spice and everything nice with a good splash of Monkey Shoulder Whisky, Ginger Hop Soda, Lemon, Angostura Bitters",
      "ABV": "3.9",
      "STYLE": "Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "The Roxy",
      "BREWERY NAME": "The Roxy",
      "NAME": "Hunky Monkey (non-alc)",
      "TASTING NOTES": "Having the Hunky Monkey guilt free (non-alc) is just as delicious. Ginger Hop Soda, Lemon, Angostura Bitters",
      "ABV": "0",
      "STYLE": "Non-alc Cocktail",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "The Roxy",
      "BREWERY NAME": "The Roxy",
      "NAME": "Monkey Colada a.k.a Ohh, Ahh, Umaga",
      "TASTING NOTES": "If you cant escape to Fiji for a holiday, then we will bring the holiday in Fiji to you, but in your cup. Creamy, smooth, fruity and fresh, just what you need after another heavy hopped IPA. Monkey Shoulder Whisky, Coconut Water, Coconut Milk, Coconut syrup, Spiced Pineapple and Hop Juice\nAlso available ‘guilt free’ (non-alc) in case you are the responsible adult.",
      "ABV": "3.9",
      "STYLE": "Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "The Roxy",
      "BREWERY NAME": "The Roxy",
      "NAME": "Monkey Colada a.k.a Ohh, Ahh, Umaga (non-alc)",
      "TASTING NOTES": "If you cant escape to Fiji for a holiday, then we will bring the holiday in Fiji to you, but in your cup. Creamy, smooth, fruity and fresh, just what you need after another heavy hopped IPA. Monkey Shoulder Whisky, Coconut Water, Coconut Milk, Coconut syrup, Spiced Pineapple and Hop Juice\nThe ‘guilt free’ (non-alc) version in case you are the responsible adult.",
      "ABV": "0",
      "STYLE": "Non-alc Cocktail",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "The Roxy",
      "BREWERY NAME": "The Roxy",
      "NAME": "Fizz Pop and Hop",
      "TASTING NOTES": "The most instragrammable/tik-tok worthy cocktail you will see at beervana 2024. Flavours that are zingy, hoppy, sweet, and balanced citrusy that itll make your mind POP. Also available ‘guilt free’ (non-alc) in case you’ve had to many beersies. Monkey Shoulder Whisky, Lemongrass syrup, Cranberry juice, Lemon/Lime Juice, Mango hop Foam",
      "ABV": "3.9",
      "STYLE": "Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "The Roxy",
      "BREWERY NAME": "The Roxy",
      "NAME": "Fizz Pop and Hop (non-alc)",
      "TASTING NOTES": "‘Guilt free’ (non-alc) in case you’ve had to many beersies this is the most instragrammable/tik-tok worthy cocktail you will see at beervana 2024. Flavours that are zingy, hoppy, sweet, and balanced citrusy that itll make your mind POP. ",
      "ABV": "0",
      "STYLE": "Non-alc Cocktail",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "The Roxy",
      "BREWERY NAME": "The Roxy",
      "NAME": "Roxy Rosebud",
      "TASTING NOTES": "It's a ROSEBUD made by the team from ROXY and infused with HOPS, literally, the most delicious non-beer beverage your palate will enjoy. The only thing that could be better is fried chicken unless you are vegetarian. Also, available ‘guilt-free’ (non-alc) in case you’re Beervana allowance is running low. Distilled Beer (Vodka), Cranberry and Pineapple juice, Passionfruit, and Lemon Juice. Vanilla Green bullet (hop) syrup",
      "ABV": "3.9",
      "STYLE": "Beer-inspired Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "The Roxy",
      "BREWERY NAME": "The Roxy",
      "NAME": "Roxy Rosebud (non-alc)",
      "TASTING NOTES": "In case you’re beervana allowance is running low, this is the non-alc \"\"guilt free' Roxy Rosebud made by the team from ROXY and infused with HOPS, literally the most delicious non-beer beverage your palate will enjoy. Only thing that could be better is fried chicken. . .unless your vegetarian",
      "ABV": "0",
      "STYLE": "Non-alc Cocktail",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "The Roxy",
      "BREWERY NAME": "The Roxy",
      "NAME": "CoCo Rendezvous",
      "TASTING NOTES": "If you need a secret rendezvous with a drink that looks like beer but isnt beer with fruity sweet passionfruit and punchy hop elderflower syrup topped up with sparkling goodness, then this is for you. No one will tell or judge you. Also available ‘guilt free’ (non-alc) in exchange for smile and a high five. Distilled Beer, Hoppy Elderflower, Lime, Passionfruit, Sparkling water",
      "ABV": "3.9",
      "STYLE": "Cocktail",
      "TYPE": "Other"
    },
    {
      "STALL": "The Roxy",
      "BREWERY NAME": "The Roxy",
      "NAME": "CoCo Rendezvous (non-alc)",
      "TASTING NOTES": "In exchange for smile and a high five you can have this Guilt Free version of a drink that looks like beer but isnt beer with fruity sweet passionfruit and punchy hop elderflower syrup topped up with sparkling goodness, then this is for you. No one will tell or judge you.",
      "ABV": "0",
      "STYLE": "Non-alc Cocktail",
      "TYPE": "Non-Alc"
    },
    {
      "STALL": "Three Sisters Brewery",
      "BREWERY NAME": "Three Sisters Brewery",
      "NAME": "Oakura Blonde",
      "TASTING NOTES": "Classic Blonde Ale, easy drinker",
      "ABV": "4.8",
      "STYLE": "Blonde Ale",
      "TYPE": "Belgian Ale"
    },
    {
      "STALL": "Three Sisters Brewery",
      "BREWERY NAME": "Three Sisters Brewery",
      "NAME": "Ready, Aim, Fire",
      "TASTING NOTES": "West Coast IPA with Amarillo,  Chinook and El Dorado",
      "ABV": "6.5",
      "STYLE": "WCIPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Three Sisters Brewery",
      "BREWERY NAME": "Three Sisters Brewery",
      "NAME": "Flash Flood in the Tropics",
      "TASTING NOTES": "Hazy IPA with Mosaic and El Dorado",
      "ABV": "6.4",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Three Sisters Brewery",
      "BREWERY NAME": "Three Sisters Brewery",
      "NAME": "So Much Noise",
      "TASTING NOTES": "Triple Hazy with Mosaic and Motueka",
      "ABV": "10.5",
      "STYLE": "Triple Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Three Sisters Brewery",
      "BREWERY NAME": "Three Sisters Brewery",
      "NAME": "Soor Plooms #15 - Mango Peach Smoothie Sour",
      "TASTING NOTES": "Like drinking a mango and peach smoothie",
      "ABV": "6.5",
      "STYLE": "Smoothie Sour",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Three Sisters Brewery",
      "BREWERY NAME": "Three Sisters Brewery",
      "NAME": "Chocolate Nutella Banana Cream Pancake Sour",
      "TASTING NOTES": "Errr….",
      "ABV": "6.5",
      "STYLE": "Errr….",
      "TYPE": "Sour Ale"
    },
    {
      "STALL": "Three Sisters Brewery",
      "BREWERY NAME": "Three Sisters Brewery",
      "NAME": "Liquid Cake #4",
      "TASTING NOTES": "Pastry Stout with Cacao, Vanilla and Hazelnuts",
      "ABV": "9",
      "STYLE": "Pastry Stout",
      "TYPE": "Sweet Stout"
    },
    {
      "STALL": "Yeastie Boys",
      "BREWERY NAME": "Yeastie Boys",
      "NAME": "Superfresh",
      "TASTING NOTES": "Pours pale gold with a soft white head that throws a delicate sweet grainy aroma and a gentle floral and spicy hop character… well balanced, this Munich-style lager is much like its German cousins - all about sessionability and good times.   \nSuperFresh is our love letter to Bavaria with a local and modern twist. Brewed with locally grown Pilsner and Munich malts, it's gently hopped with a modern hop from Germany’s traditional Hallertau region. Invoking memories of Munich beer gardens, it’s the perfect beer for anyone who gets thirsty. ",
      "ABV": "4.5",
      "STYLE": "Helles Lager",
      "TYPE": "Lager (Pale)"
    },
    {
      "STALL": "Yeastie Boys",
      "BREWERY NAME": "Yeastie Boys",
      "NAME": "Lazy Slam",
      "TASTING NOTES": "A light and easy drinking hazy pale ale bursting with juicy sun-kissed South Pacific hops. \nLazy Slam is a pale, unfiltered session Hazy ale with bold tropical and white wine notes from the Nelson-grown New Zealand hops along with an American and German hop influence. A luscious mouthfeel with citrus high notes and subtle herbal tones leading through to an unbelievably moreish herbal finish. This will leave you shouting, “Get me another!”",
      "ABV": "4.2",
      "STYLE": "Hazy Pale Ale",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Yeastie Boys",
      "BREWERY NAME": "Yeastie Boys",
      "NAME": "Soft Bomb",
      "TASTING NOTES": "Soft Bomb is a hazy IPA that is as refreshing as a casual bomb off the local jetty on a hot summers day. The tropical fruit aromas come thick and fast, herbal undertones with notes of crushed gooseberries adding the white wine scent. This luscious beer will take you on a journey of passionfruit, grapefruit and tangerine heaven, before delivering you back to your seat with a sweet finish. You’ll be left pleading for ‘just one more bomb’.",
      "ABV": "6",
      "STYLE": "Hazy IPA",
      "TYPE": "IPA"
    },
    {
      "STALL": "Yeastie Boys",
      "BREWERY NAME": "Yeastie Boys",
      "NAME": "Pot Kettle Black",
      "TASTING NOTES": "Fresh & hoppy, yet rich & black. Mind-bendingly delicious and a true original.\nChampion Beer, 2014 Hong Kong International Beer Awards\nChampion Beer, 2012 Asia Beer Awards\nChampion Beer, ‘Stouts & Porters’, Brewers Guild of New Zealand Awards 2009\nOur flagship beer, and biggest seller, Pot Kettle Black is one of New Zealand’s most widely awarded beers. PKB, as it is affectionately known, is a juxtaposition of beer styles: fresh and hoppy, yet as dark as night and malty rich. The black beer that has converted many a person who’d formerly professed a fear of dark ales… and called a \"\"real foodie beer\"\" by every chef we meet! ",
      "ABV": "6",
      "STYLE": "South Pacific Porter",
      "TYPE": "Porter"
    },
    {
      "STALL": "Yeastie Boys",
      "BREWERY NAME": "Yeastie Boys",
      "NAME": "Mangoes Into a Bar",
      "TASTING NOTES": "Dive into the world of bold mango aromas that leap from the glass, teasing your senses with the promise of an exotic adventure. With every sip, you'll be greeted by the sweet embrace of succulent mangoes, seamlessly blended with the perfect amount of hop bitterness, creating a flavor symphony that'll have you singing its praises.",
      "ABV": "5.8",
      "STYLE": "Mango Hazy",
      "TYPE": "Juicy or Hazy Pale Ale"
    },
    {
      "STALL": "Yeastie Boys",
      "BREWERY NAME": "Yeastie Boys",
      "NAME": "Rex Attitude",
      "TASTING NOTES": "With descriptors like leather, tweed, kippers, whisky and cigars it should come as nosurprise that Rex Attitude was once infamously described as “like tonguing your grandad!” Consider yourself warned.\nRex Attitude is a deceptively innocuous looking beer but that all changes when you realise it is, quite probably, the smokiest in the world. Undoubtedly the most polarising beer we’ve ever made, it is actually quite delicate and beguilingly drinkable for those who get past the initial shock of its peat-smoke intensity.\nPale gold, with a very light natural haze, Rex throws a sweet and heavily smoky aroma. Peat fires give way to underlying fruit aromatics reminiscent of feijoa – the classic kiwi backyard crop – and clean pale malt flavour with a gentle bitterness. The dry smoky finish lingers on the palate, like a daytime alternative to Islay whisky.",
      "ABV": "7",
      "STYLE": "Peated Golden Ale",
      "TYPE": "Smoked Beer"
    },
    {
      "STALL": "Yeastie Boys",
      "BREWERY NAME": "Yeastie Boys",
      "NAME": "Gunnamatta",
      "TASTING NOTES": "Boldly floral nose – much like your granny’s bedroom - with stonefruit and citrus flavours and a long dry finish.\nA modern cult classic inspired by the Pale Ales that travelled from England to the East Indies and, perhaps more importantly, by all that precious and delicious tea that returned on those same ships.\nGunnamatta utilises judicious amounts of Earl Grey Blue Flower tea to generate an intoxicating floral and citrus aroma with the quenching dry finish of an ice tea. A truly unique new world India Pale Ale with a decidedly old world twist.",
      "ABV": "6.5",
      "STYLE": "Earl Grey IPA",
      "TYPE": "IPA"
    }
  ];

  const filterType = document.getElementById('filterType');
  const filterValue = document.getElementById('filterValue');
  const beerList = document.getElementById('beerList');
  const beerDescription = document.getElementById('beerDescription');

  filterType.addEventListener('change', updateFilterOptions);
  filterValue.addEventListener('change', updateBeerList);

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
    const filteredData = selectedValue === 'all' ? data : data.filter(item => item[selectedFilter.toUpperCase()] === selectedValue);

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
      const groupHeader = document.createElement('h2');
      groupHeader.textContent = `${key} (${groupedByStallOrStyle[key].length} beers)`;
      groupDiv.appendChild(groupHeader);

      const beerNames = groupedByStallOrStyle[key].map(beer => {
        const beerName = document.createElement('div');
        beerName.className = 'beer-name';
        beerName.textContent = beer.NAME;
        beerName.addEventListener('click', () => showBeerDescription(beer));
        return beerName;
      });

      beerNames.forEach(beerName => groupDiv.appendChild(beerName));
      beerList.appendChild(groupDiv);
    }
  }

  function showBeerDescription(beer) {
    beerDescription.innerHTML = `
          <h3>${beer.NAME}</h3>
          <p><strong>Brewery:</strong> ${beer.BREWERY_NAME}</p>
          <p><strong>ABV:</strong> ${beer.ABV}%</p>
          <p><strong>Style:</strong> ${beer.STYLE}</p>
          <p><strong>Type:</strong> ${beer.TYPE}</p>
          <p>${beer.TASTING_NOTES}</p>
      `;
  }

  updateFilterOptions(); // Initial call to populate filter options and display all beers
});