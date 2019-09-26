const data3 = [
  {
    title: "FIFA 20",
    category: "Sport",
    price: "22",
    rating: "8",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=91902&n=18482263557383005.jpg&h=b9ebefeb03f0db81f03765dcf6fd0930",
    info:
      "Age of Mythology (AoM) is a real-time strategy video game developed by Ensemble Studios and published by Microsoft Game Studios. It was released on October 30, 2002 in North America and a week later in Europe.[3]"
  },
  {
    title: "reedFall",
    category: "RPG",
    price: "19",
    rating: "7",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=107613&n=026467f0-c28e-11e9-863c-99d3b62b785b.jpg&h=ea3692e915f790d4e6ca00c7c52ad683",
    info:
      "GreedFall takes us on a journey to a fantastic universe stylized for the 17th century. The overpopulated and polluted Old World is decimated by a mysterious plague known as Malichor. Its inhabitants see a chance for rescue in the New World, and more precisely — on the island of Teer Fradee, supposedly full of treasures and other secrets, whose native inhabitants live in harmony with nature. As the conquistadors are getting bolder there, relations between them and the natives are becoming increasingly tense."
  },
  {
    title: "Monster Hunter: World",
    category: "Fantasy",
    price: "16",
    rating: "6",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=28367&n=6421336816547296.jpg&h=c86cc22fc94c1ebafcf7df8d3da717fd",
    info:
      "Monster Hunter: World is an action role-playing game developed and published by Capcom. A part of the Monster Hunter series, it was published worldwide for PlayStation 4 and Xbox One in January 2018, with a Microsoft Windows version being listed for August 2018. In the game, the member takes the role of a Hunter, tasked to hunt down and either kill or trap beasts that travel in one of several environmental spaces. If successful, the player is rewarded through loot consisting of parts from the monster and different elements that are used to craft weaponry and armor, amongst other devices. The game's core loop has the player crafting appropriate gear to be able to hunt down more difficult monsters, which in turn provide parts that lead to more powerful gear. Players may hunt alone or can hunt in cooperative groups of up to four players via the game's online services."
  },
  {
    title: "The Surge 2",
    category: "Fantasy",
    price: "27",
    rating: "9",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=103024&n=fef27d00-afa5-11e9-863c-99d3b62b785b.jpg&h=685292b51e2393ba65a23c3b78043070",
    info:
      "The Surge 2 takes us on a journey to the dark science fiction universe created for the first part of the series, in which the machines turned against people. You will meet the main character when his plane is knocked down by a nanostorm over the suburbs of the city of Jericho. A few weeks later, the protagonist wakes up in a ruined prison and quickly notices that the metropolis is in chaos — rebellious robots are rampant on its streets, which caused the army to declare martial law, leaving ordinary citizens to their fate."
  },
  {
    title: "Battlefield 5",
    category: "War",
    price: "20",
    rating: "7",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=46835&n=6360433783250614.jpg&h=8f24e5803cacae3f232edfff90f39b02",
    info:
      "Battlefield V will focus extensively on party-based features and mechanics, scarcity of resources, and removing abstractions from game mechanics to increase realism. There will be an expanded focus on player customization through the new Company system, where players will be able to create multiple characters with various cosmetic and weapon options. Cosmetic items, and currency used to purchase others, will be earned by completing in-game objectives."
  },
  {
    title: "Jurassic World Evolution - Deluxe Edition",
    category: "Strategy",
    price: "21",
    rating: "6",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=44155&n=028891845712362807.jpg&h=69093e55fe4f34747ea3c609d8f48230",
    info:
      "Take charge of operations on the legendary islands of the Muertes archipelago and bring the wonder, majesty and danger of dinosaurs to life. Build for Science, Entertainment or Security interests in an uncertain world where life always finds a way."
  },
  {
    title: "DiRT 3 - Complete Edition",
    category: "Racing",
    price: "22",
    rating: "8",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=391&n=2658c950-784c-11e7-8203-abacaa3272cd.jpg&h=0c2efd19ad04a80a065e27e6fb5ffabe",
    info:
      "In DiRT 3 Complete Edition, you’ll race iconic cars representing 50 years of off-road motorsport across three continents – from the forests of Michigan to the infamous roads of Finland and the national parks of Kenya. You’ll also express yourself in the stunning Gymkhana mode, inspired by Ken Block’s incredible freestyle driving event, and take on other modes including Rallycross, Trailblazer, and Landrush. Powered by Codemasters’ award-winning EGO Engine, DiRT 3 Complete Edition features Flashback to rewind time, genre-leading damage and you can take on all game modes in split-screen and competitive online multiplayer."
  },
  {
    title: "Need for Speed: Payback",
    category: "Racing",
    price: "15",
    rating: "5",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=949&n=a8ac8430-784e-11e7-8203-abacaa3272cd.jpg&h=88603e439b217415600c4921f53842b8",
    info:
      "Set in the netherworld of Fortune Valley, you and your team were split by disloyalty and reassembled by retribution to take down The House, a treacherous cartel that rules the city’s saloons, outlaws and cops. In this shady gambler’s heaven, the stakes are high and The House always wins."
  },
  {
    title: "Wreckfest",
    category: "Racing",
    price: "20",
    rating: "8",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=27166&n=08140195615695034.jpg&h=00ce3ba928c9547198634d9c6afe0d1b",
    info:
      "Expect epic crashes, neck-to-neck fights over the finish line and brand-new ways for metal to bend – These are the once-in-a-lifetime moments that can only be achieved in Wreckfest, with its true-to-life physics simulation crafted by legendary developer Bugbear, who also brought you FlatOut 1 & 2!"
  },
  {
    title: "Forza Horizon 4",
    category: "Racing",
    price: "12",
    rating: "4",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=35668&n=7969044378194188.jpg&h=6a251e0845d30a0d9b841e18c46c2cf9",
    info:
      "Dynamic seasons change everything at the world’s greatest automotive festival. Go it alone or team up with others to explore beautiful and historic Britain in a shared open world. Collect, modify and drive over 450 cars. Race, stunt, create and explore – choose your own path to become a Horizon Superstar. The Forza Horizon 4 Standard Edition digital bundle includes the full game of Forza Horizon 4 and the Formula Drift Car Pack."
  },
  {
    title: "GreedFall",
    category: "RPG",
    price: "28",
    rating: "10",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=107613&n=026467f0-c28e-11e9-863c-99d3b62b785b.jpg&h=ea3692e915f790d4e6ca00c7c52ad683",
    info:
      "GreedFall takes us on a journey to a fantastic universe stylized for the 17th century. The overpopulated and polluted Old World is decimated by a mysterious plague known as Malichor. Its inhabitants see a chance for rescue in the New World, and more precisely — on the island of Teer Fradee, supposedly full of treasures and other secrets, whose native inhabitants live in harmony with nature. As the conquistadors are getting bolder there, relations between them and the natives are becoming increasingly tense."
  },
  {
    title: "The Elder Scrolls V: Skyrim - Special Edition",
    category: "RPG",
    price: "23",
    rating: "8",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=15406&n=29742297598190026.jpg&h=67760ccf63b8b46c743e4c0cc9ecd2bf",
    info:
      "The Elder Scrolls V: Skyrim is a game which has won more than 200 GOTY awards and made thousands ditch responsibilities in favor of being glued to the screen, comes back in a new, improved version - Skyrim Special Edition! And there is a lot to be excited about!"
  },
  {
    title: "Worms Armageddon",
    category: "Puzzle",
    price: "18",
    rating: "9",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=10010&n=46034947039528307.jpg&h=909f7a803d08244decc9d016f162fa91",
    info:
      "Those intrepid invertebrates return with a vengeance in the much-loved Worms Armageddon. It’s a whole new can of worms! It’s hilarious fun that you can enjoy on your own or with all your friends."
  },
  {
    title: "Demon Hunter 3: Revelation",
    category: "Puzzle",
    price: "17",
    rating: "5",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=81756&n=5ce6b2ee3c1d5.jpg&h=c71311df4208c6e24324eecee0e7d32d",
    info:
      "Having defeated the Beast from another dimension, Dawn Harlock had hoped to spend the rest of her life in peace. However, circumstances have placed the life of a child at stake and brought her out of retirement to once again solve supernatural riddles and hunt hellish demons. Can the world's foremost paranormal detective muster the courage to follow the dark path and face off against an enemy from beyond? With you as her guide, she stands a chance."
  },
  {
    title: "Gunpoint",
    category: "Puzzle",
    price: "19",
    rating: "6",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=106347&n=09849905873645315.jpg&h=cf32c098832298ff852ad9ef344c1015",
    info:
      "Gunpoint is a stealth puzzle game that lets you rewire its levels to trick people. You play a freelance spy who takes jobs from his clients to break into high-security buildings and steal sensitive data. To get past security, you'll need to make creative use of your main gadget: the Crosslink. It lets you see how all the security devices in a level are wired up, and then you can just click and drag with the mouse to wire them differently. So you can connect a lightswitch to a trapdoor, then flick it when a guard walks across to make him fall through."
  },
  {
    title: "Captain Toad: Treasure Tracker",
    category: "Puzzle",
    price: "30",
    rating: "10",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=67263&n=5680238761427021.jpg&h=708c8531ff73585ef8f021504358786b",
    info:
      "Play anytime, anywhere, and anyway you want—even in two-player mode using a pair of Joy-Con™ controllers on one Nintendo Switch system—in TV mode or Tabletop mode. You could also play alone in handheld mode! No matter what, explore each puzzling course for treasure, like hidden Super Gems and Power Stars. As you reclaim the treasure stolen by the monstrous, greedy bird, Wingo, you’ll eventually be able to play as Toadette! These tiny heroes must waddle, hide, pluck, chuck, and power-up through enemy-infested locales like towers, wild-west shanties, and Goomba waterparks—all bursting with secrets. Aim your head-mounted flashlight at adventure!"
  },
  {
    title: "Guild Wars 2: 2000 Gems Card",
    category: "RPG",
    price: "20",
    rating: "4",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=27289&n=16835962084467604.jpg&h=ca67c356c4453b488c49cfcc7cfc547d",
    info:
      "In addition to Gold, Gems in Guild Wars 2 are the second most important currency. You can redeem them in the game against various other things such as Gold."
  },
  {
    title: "Borderlands 3",
    category: "Action",
    price: "40",
    rating: "7",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=65519&n=2791030168966384.jpg&h=3098898fbe0576212044703940850e5e",
    info:
      "Borderlands 3 takes place five years after the events of the second part. This time the plot is focused on the Sirens, i.e. women with mysterious, superhuman powers who play an important role in the universe of this series. The heroes of the players have to face the cult of Children of the Vault, headed by Calypso Twins — Siren and her twin brother, inexplicably also possessing supernatural powers. You start the game by choosing one of the four available characters. You will find here an expert in melee combat, as well as heroes who can summon useful creatures or fight with the help of robots and gadgets. Importantly, each of the heroes now has more than one special ability."
  },
  {
    title: "Overwatch",
    category: "Action",
    price: "47",
    rating: "6",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=9159&n=6975089307528652.jpg&h=e8679db1794e50c10ecc253a73c4ec38",
    info:
      "Overwatch is a highly stylized team-based shooter set on a near-future earth. Every match is an intense multiplayer showdown pitting a diverse cast of heroes, mercenaries, scientists, adventurers, and oddities against each other in an epic, globe-spanning conflict."
  },
  {
    title: "Dead by Daylight",
    category: "Action",
    price: "39",
    rating: "6",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=11906&n=3626829511878542.jpg&h=1d1e7cc9a841470f366bc4c9d621fc84",
    info:
      "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught, tortured and killed."
  },
  {
    title: "Sea of Thieves",
    category: "Action",
    price: "56",
    rating: "8",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=14037&n=6093358619469487.jpg&h=c93396825c5581a1564d3b98b9d007b1",
    info:
      "Set in a glorious world of exotic islands, hidden treasures and dangers both natural and supernatural, Sea of Thieves immerses you in a new type of multiplayer action. Whether you’re adventuring as a group or sailing solo, you’re bound to encounter other crews – but will they be friends or foes? And how will you respond?"
  },
  {
    title: "TEKKEN 7",
    category: "Fighting",
    price: "70",
    rating: "8",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=89126&n=5ce7c5765fe94.jpg&h=7a441777008ced54c8e12aa0b9bc5020",
    info:
      "Discover the epic conclusion of the Mishima clan and unravel the reasons behind each step of their ceaseless fight. Powered by Unreal Engine 4, TEKKEN 7 features stunning story-driven cinematic battles and intense duels that can be enjoyed with friends and rivals alike through innovative fight mechanics."
  },
  {
    title: "Kung Fu Panda: Showdown of Legendary Legends",
    category: "Fighting",
    price: "5",
    rating: "3",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=58619&n=5609998497045219.jpg&h=f40d13d0b00ff4764cb12765ef7c1584",
    info:
      "It is an age of Kung Fu heroes, warriors, and best of all, LEGENDARY LEGENDS! Face-off alongside or against Po, Tigress, Monkey, Tai Lung, Master Shifu, and all of your favorite Kung Fu Panda characters in the Showdown of Legendary Legends. Up to four players compete in iconic locations throughout the Valley of Peace and beyond. Compete in an epic Tournament where all Kung Fu warriors contend for honor and glory. Who will reign on top as the mightiest warrior in the land? Will it be a mighty hero or a cunning villain? "
  },
  {
    title: "SAMURAI SHODOWN",
    category: "Fighting",
    price: "57",
    rating: "8",
    imgURL:
      "https://cdn-cf.gamivo.com/image_original.jpg?f=93015&n=83e4a760-9447-11e9-ac89-e1ed48c76667.jpg&h=ed1f1b075ccd2a8d062d8b1c92273c97",
    info:
      "Faithfully reproducing the game mechanics and atmosphere that contributed to the success of the series, SAMURAI SHODOWN includes a revolutionary feature that learns players’ game actions and patterns in order to create CPU-controlled “ghost” characters. With its story set one year before the very first installment, warriors and combatants from various backgrounds and with their own goals are about to battle to fulfill their destinies!"
  }
]


module.exports = {data3}
