const wordCategories: any = {
  Templates: [
    { word: "ahh, ****...", keywords: "ooh, ohh aha wow woah whoa dot sex" },
    { word: "be wary of ****", keywords: "cautious careful watchful look out for" },
    { word: "behold, ****!", keywords: "look see observe check it out" },
    { word: "could this be a ****?", keywords: "is might this be maybe" },
    { word: "didn't expect ****...", keywords: "unexpected surprising dot" },
    { word: "first off, ****", keywords: "to start with initially beginning 1st" },
    { word: "if only i had a ****...", keywords: "wish i had a desire for a want need dot" },
    { word: "let there be ****", keywords: "make way for grant shall should" },
    { word: "likely ****", keywords: "probably high chance of most" },
    { word: "no **** ahead", keywords: "nothing no in sight absent absence not here" },
    { word: "offer ****", keywords: "provide give present" },
    { word: "praise the ****!", keywords: "hail applaud worship" },
    { word: "seek ****", keywords: "search for look for seek out watch out find hidden" },
    { word: "still no ****...", keywords: "no yet none nothing no in sight absent absence not here dot" },
    { word: "time for ****", keywords: "it's time now clock" },
    { word: "try ****", keywords: "attempt give it a shot why not" },
    { word: "visions of ****...", keywords: "images thoughts pictures dreams dot" },
    { word: "why is it always ****?", keywords: "again come on frustration reason because how come" },
    { word: "****", keywords: "blank" },
    { word: "****!", keywords: "blank shock wow woah whoa exclaim exclamation mark point" },
    { word: "****?", keywords: "blank question" },
    { word: "****...", keywords: "blank dot" },
    { word: "**** ahead", keywords: "upcoming coming up forward" },
    { word: "****, O ****", keywords: "oh sex" },
    { word: "**** required ahead", keywords: "needed necessary" },
  ],
  Enemies: [
    { word: "archer", keywords: "bowman marksman ranger sagittarius arrow ranged sniper" },
    { word: "beast", keywords: "creature animal monster brute critter ugly mammal" },
    { word: "bird", keywords: "avian fowl winged birdie raptor fly eagle hawk falcon" },
    { word: "boss", keywords: "leader chief overlord supervisor commander strong bad" },
    { word: "bug", keywords: "insect creepy-crawly pest vermin invertebrate worm" },
    { word: "cavalier", keywords: "knight horseman equestrian chevalier" },
    { word: "crab", keywords: "crustacean shellfish lobster claw pinch sex" },
    { word: "decoy", keywords: "bait lure enticement trap distraction fake" },
    { word: "demi-human", keywords: "half-human semi-human part-human humanoid monkey primate screech loud scream caveman" },
    { word: "dog", keywords: "canine pooch hound doggy pup wolf bark" },
    { word: "dragon", keywords: "wyvern drake serpent fire breathing lizard wyrm" },
    { word: "enemy", keywords: "foe fiend opponent adversary rival antagonist bad guy" },
    { word: "giant", keywords: "colossus titan goliath juggernaut behemoth huge big massive troll" },
    { word: "group", keywords: "pack gang team bunch collection many lot" },
    { word: "horse", keywords: "steed stallion mare pony equine riding ride torrent" },
    { word: "ill-omened creature", keywords: "ogre evil curse bad portent harbinger" },
    { word: "lord", keywords: "ruler master sovereign god jesus christ" },
    { word: "knight", keywords: "warrior champion paladin cavalier sir shining armor" },
    { word: "mage", keywords: "wizard sorcerer enchanter magician spellcaster" },
    { word: "monarch", keywords: "ruler king queen emperor sovereign royal" },
    { word: "monstrosity", keywords: "abomination freak horror mutant anomaly monster creature bad" },
    { word: "monster", keywords: "creature beast fiend leviathan" },
    { word: "octopus", keywords: "cephalopod squid tentacles mollusk pulpo" },
    { word: "ordnance", keywords: "weaponry arms munitions artillery cannon" },
    { word: "outsider", keywords: "stranger foreigner alien visitor" },
    { word: "pack", keywords: "group wolf herd flock crowd many" },
    { word: "prawn", keywords: "crustacean shrimp crab lobster porn" },
    { word: "rat", keywords: "rodent mouse vermin pest" },
    { word: "raptor", keywords: "bird prey eagle hawk falcon avian fowl winged birdie raptor fly" },
    { word: "skeleton", keywords: "bones corpse remains skeletal structure undead living dead zombie" },
    { word: "snake", keywords: "serpent python viper reptile snake bite poison snail" },
    { word: "sniper", keywords: "sharpshooter marksman rifleman gunman archer ranged" },
    { word: "soldier", keywords: "warrior troop infantry combatant military army fighter" },
    { word: "sentry", keywords: "guard watchman sentinel warden turret" },
    { word: "scarab", keywords: "beetle dung insect bug golden silver teardrop flask ash tears crimson cerulean" },
    { word: "slug", keywords: "snail mollusk gastropod shell bug" },
    { word: "strong foe", keywords: "formidable opponent powerful adversary strong enemy challenger foe fiend rival antagonist big hard bad guy" },
    { word: "undead", keywords: "living dead zombie specter ghost ghoul skeleton" },
    { word: "weak foe", keywords: "feeble opponent weak adversary lesser enemy opponent foe fiend rival antagonist small easy bad guy" },
    { word: "wraith", keywords: "living dead zombie specter ghost ghoul royal revenant" },
    { word: "wolf", keywords: "canine lupine pack dog howl" },
  ],
  People: [
    { word: "angel", keywords: "celestial being guardian spirit beautiful woman girl light god heaven wings fly" },
    { word: "aristocrat", keywords: "noble rich elite cat shit poop family" },
    { word: "champion", keywords: "hero victor winner defender" },
    { word: "cleric", keywords: "priest priestess clergy god good healer pray" },
    { word: "dastard", keywords: "coward scoundrel villain evil bad bastard" },
    { word: "fat coinpurse", keywords: "wealthy rich magnate runes money cash kill farm" },
    { word: "friend", keywords: "companion ally mate buddy good help" },
    { word: "giant sort", keywords: "colossal figure titanic huge big large troll" },
    { word: "god", keywords: "deity divinity immortal jesus christ demigod" },
    { word: "good sort", keywords: "kind gentle decent human friend trustworthy" },
    { word: "hero", keywords: "protagonist savior champion good super tarnished" },
    { word: "invisible sort", keywords: "unseen hidden hiding clear transparent" },
    { word: "knight", keywords: "warrior champion paladin cavalier sir shining armor" },
    { word: "laggardly sort", keywords: "slowpoke sluggish lazy lethargic" },
    { word: "liar", keywords: "deceiver fibber fabricator lies untrustworthy" },
    { word: "lovable sort", keywords: "adorable woman charming girl endearing" },
    { word: "lover", keywords: "romantic partner paramour beloved sex woman girl maiden" },
    { word: "lord", keywords: "ruler master sovereign god jesus christ" },
    { word: "master", keywords: "expert adept proficient slave" },
    { word: "merchant", keywords: "trader vendor business store shop buy sell sale items" },
    { word: "monarch", keywords: "ruler king queen emperor sovereign royal" },
    { word: "nimble sort", keywords: "agile quick fleet-footed dexterity" },
    { word: "noble", keywords: "honorable virtuous undead good nice royal rich" },
    { word: "old codger", keywords: "elderly grumpy old man" },
    { word: "old dear", keywords: "elderly loved  woman beloved codger finger reader" },
    { word: "pauper", keywords: "beggar destitute person indigent" },
    { word: "pathetic sort", keywords: "pitiful miserable weak sad git gud" },
    { word: "plump sort", keywords: "chubby fat round-bodied belly" },
    { word: "pair", keywords: "duo couple twosome 2" },
    { word: "sage", keywords: "wise philosopher" },
    { word: "samurai", keywords: "warrior ronin bushi katanas" },
    { word: "skinny sort", keywords: "thin slender" },
    { word: "sinner", keywords: "wrongdoer transgressor evildoer bad repent confessor" },
    { word: "sorcerer", keywords: "wizard mage enchanter wizard sorcerer enchanter magician spellcaster" },
    { word: "strange sort", keywords: "peculiar unusual weirdo wtf oddball" },
    { word: "swordfighter", keywords: "duelist fencer master" },
    { word: "teacher", keywords: "educator instructor tutor wise wisdom knowledge" },
    { word: "thief", keywords: "burglar robber pickpocket steal stolen take" },
    { word: "traitor", keywords: "betrayer turncoat renegade trader untrustworthy evil bad" },
    { word: "trio", keywords: "three group 3 threesome" },
    { word: "tarnished", keywords: "stained fallen damaged soul PC player character you me" },
    { word: "unfathomable sort", keywords: "mysterious enigmatic baffling impenetrable incomprehensible indecipherable inexplicable unknowable" },
    { word: "warrior", keywords: "fighter combatant soldier" },
    { word: "wicked sort", keywords: "evil bad villainous sinister character untrustworthy" },
  ],
  Things: [
    { word: "armor", keywords: "armour shield protection plate mail" },
    { word: "armament", keywords: "weapons arsenal gear munition armory" },
    { word: "birdseye telescope", keywords: "spyglass see view above binoculars optics scope" },
    { word: "bloodstain", keywords: "blood mark death died past weak spill splotch" },
    { word: "bow", keywords: "arch longbow crossbow composite bow recurve bow" },
    { word: "bug", keywords: "insect creepy-crawly pest vermin invertebrate worm" },
    { word: "butterfly", keywords: "moth insect flutterer lepidopteran" },
    { word: "coffin", keywords: "casket sarcophagus grave tomb funerary box" },
    { word: "corpse", keywords: "dead body cadaver remains carcass deceased" },
    { word: "crystal", keywords: "gem mineral quartz crystalline jewel" },
    { word: "door", keywords: "gate entrance portal threshold hatch" },
    { word: "dung", keywords: "shit poop eater manure feces droppings excrement waste" },
    { word: "elden ring", keywords: "circle band symbol shatter shard" },
    { word: "erdtree", keywords: "sacred great world yggdrasil" },
    { word: "flower", keywords: "blossom bloom floral petal bud" },
    { word: "fruit", keywords: "produce harvest crop edible juicy" },
    { word: "grace", keywords: "light guidance bonfire campfire checkpoint elegance poise charm gracefulness smoothness" },
    { word: "grass", keywords: "turf lawn vegetation herb sod" },
    { word: "incantation", keywords: "spell enchantment charm magic words bewitchment" },
    { word: "item", keywords: "object artifact piece thing article" },
    { word: "key", keywords: "lock key password access code solution" },
    { word: "ladder", keywords: "steps staircase climb ascend stepladder" },
    { word: "level", keywords: "button switch door open elevator hoist raise elevate platform" },
    { word: "lift", keywords: "elevator hoist raise elevate platform" },
    { word: "map", keywords: "fragment chart diagram guide plan cartography" },
    { word: "material", keywords: "substance matter stuff fabric element" },
    { word: "message", keywords: "write note communication dispatch statement missive" },
    { word: "mushroom", keywords: "fungus toadstool mold mycelium spore" },
    { word: "necessary item", keywords: "essential required indispensable needful vital" },
    { word: "precious item", keywords: "valuable treasure jewel gem priceless" },
    { word: "projectile weapon", keywords: "ranged weapon shooting arm launcher firearm projector" },
    { word: "seed", keywords: "germ spore embryo offshoot descendant" },
    { word: "sending gate", keywords: "portal transmitter gateway entryway" },
    { word: "shield", keywords: "buckler guard protection barrier defender" },
    { word: "skill", keywords: "ability ash war talent proficiency expertise capability" },
    { word: "sorcery", keywords: "magic witchcraft enchantment wizardry sorcery" },
    { word: "something", keywords: "thing object item entity article" },
    { word: "something incredible", keywords: "amazing thing unbelievable object astounding item extraordinary entity incredible article" },
    { word: "spiritspring", keywords: "magic well sacred spring enchanted fountain ethereal water horse reach cliff torrent pool" },
    { word: "stone astrolabe", keywords: "ancient archaic sundial mystical relic stone artifact prehistoric device" },
    { word: "talisman", keywords: "ring charm amulet lucky charm protective token magic item" },
    { word: "tear", keywords: "teardrop cry weep lacrimation teary-eyed" },
    { word: "trap", keywords: "snare snares pitfall ambush deception" },
    { word: "tree", keywords: "erdtree plant flora wood timber grove" },
    { word: "treasure chest", keywords: "loot chest gold chest riches container jewel box coin hoard" },
  ],
  "Battle Tactics": [
    { word: "brief respite", keywords: "short break momentary pause rest quick breather sanctuary" },
    { word: "circling around", keywords: "encircling surrounding moving around back stab" },
    { word: "close-quarters battle", keywords: "hand-to-hand combat melee close-range fight" },
    { word: "confusion", keywords: "chaos disarray bewilderment muddle" },
    { word: "dashing through", keywords: "running speeding darting rushing" },
    { word: "defeating one-by-one", keywords: "1 taking down individually eliminating one by one defeating separately" },
    { word: "fleeing", keywords: "run away running withdrawing retreating" },
    { word: "horseback battle", keywords: "torrent combat distance fighting shooting duel" },
    { word: "jumping off", keywords: "leaping diving springing bounding" },
    { word: "luring out", keywords: "enticing out drawing out tempting out baiting out group pack" },
    { word: "mimicry", keywords: "copying imitation emulation simulation" },
    { word: "pursuit", keywords: "chase hunt pursuing following" },
    { word: "ranged battle", keywords: "long-range combat distance fighting shooting sniper duel" },
    { word: "rushing in", keywords: "charging in storming in rushing forward sweeping in" },
    { word: "stealth", keywords: "rogue hide sneakiness furtiveness covert tactics secretive approach" },
    { word: "summoning", keywords: "calling forth aid spirit ashes help friend conjuring" },
    { word: "taking on all at once", keywords: "engaging all at once confronting collectively battling in group" },
  ],
  Actions: [
    { word: "attacking", keywords: "assaulting striking charging assailing attacking head-on" },
    { word: "backstepping", keywords: "retreating backing away" },
    { word: "blocking", keywords: "defending guarding shielding parrying" },
    { word: "critical hit", keywords: "critical strike precise hit devastating blow fatal strike" },
    { word: "crouching", keywords: "low sneak hide" },
    { word: "gesturing", keywords: "signaling indicating making gestures" },
    { word: "guard counter", keywords: "block defend defense shield" },
    { word: "healing", keywords: "flask potion rejuvenating restoring health recovering" },
    { word: "incantation", keywords: "chant spell magic incantation enchantment" },
    { word: "item crafting", keywords: "crafting creating items item creation" },
    { word: "jumping", keywords: "leap diving dive lunging hop" },
    { word: "jump attack", keywords: "leap dive diving lunging hop" },
    { word: "parrying", keywords: "blocking deflecting warding off counterattacking" },
    { word: "rolling", keywords: "dodge dodging ball" },
    { word: "running", keywords: "sprinting dashing rushing hurrying" },
    { word: "running attack", keywords: "charging attack sprinting attack quick attack" },
    { word: "rolling", keywords: "evading dodging tumbling rolling away" },
    { word: "skill", keywords: "technique ability proficiency mastery git gud" },
    { word: "sorcery", keywords: "magic wizardry spellcraft spells enchantment" },
    { word: "summoning", keywords: "calling forth aid spirit ashes help friend conjuring" },
    { word: "throwing", keywords: "tossing hurling pitching away" },
    { word: "two-handing", keywords: "dual-wielding both hands double 2" },
    { word: "target lock", keywords: "locking onto focusing on targeting" },
  ],
  Situations: [
    { word: "ambush", keywords: "ambushment surprise attack trap ambuscade" },
    { word: "battle", keywords: "fight conflict combat warfare" },
    { word: "beating to a pulp", keywords: "severely beaten pummeled thrashed mauled" },
    { word: "bright spot", keywords: "highlight advantage positive aspect silver lining" },
    { word: "clear sky", keywords: "sunny clouds blue" },
    { word: "climbable spot", keywords: "ladder scramble accessible point scaling point" },
    { word: "crossable spot", keywords: "river across pass bridge" },
    { word: "crowd", keywords: "group mass throng mob" },
    { word: "cramped area", keywords: "tight space confined area narrow passage" },
    { word: "danger", keywords: "risk peril hazard threat" },
    { word: "dark spot", keywords: "shadowy area dim corner unlit place hide hidden" },
    { word: "dead end", keywords: "cul-de-sac no exit impasse blind alley" },
    { word: "defensible spot", keywords: "fortified position stronghold secure location" },
    { word: "detour", keywords: "quick route direct path detour bypass shortcut road closed" },
    { word: "explosion", keywords: "burst blast detonation eruption" },
    { word: "evening", keywords: "dusk sunset nightfall twilight" },
    { word: "gorgeous view", keywords: "beautiful sight scenic panorama breathtaking vista erdtree" },
    { word: "high spot", keywords: "elevated area summit peak height" },
    { word: "hidden path", keywords: "secret door trail tunnel hiding passage" },
    { word: "hiding place", keywords: "concealment shelter cover hideout" },
    { word: "looking away", keywords: "turn face avoid deter ward" },
    { word: "mist", keywords: "fog haze miasma vapour" },
    { word: "morning", keywords: "dawn sunrise early hours daybreak" },
    { word: "noon", keywords: "midday noontime lunchtime noonday" },
    { word: "night", keywords: "dusk sunset nightfall twilight moon dark" },
    { word: "open area", keywords: "clearing plain field space" },
    { word: "out of stamina", keywords: "tired exhausted endurance depleted" },
    { word: "overcast", keywords: "cloudy cloud-covered gloomy overclouded" },
    { word: "patrolling", keywords: "guarding watching policing prowling" },
    { word: "pincer attack", keywords: "flanking maneuver encirclement two-pronged" },
    { word: "procession", keywords: "parade march line column" },
    { word: "rain", keywords: "downpour shower precipitation drizzle" },
    { word: "reinforcements", keywords: "summon spirit ashes backup support reserves aid" },
    { word: "recon spot", keywords: "place reconnaissance scout search hunt sweep" },
    { word: "ritual", keywords: "ceremony tradition rite custom" },
    { word: "safety", keywords: "break hide hidden enemies" },
    { word: "secret passage", keywords: "hidden path route concealed pathway underground passage" },
    { word: "shortcut", keywords: "quick route direct path detour bypass" },
    { word: "sniping spot", keywords: "sharpshooting position sniper's nest vantage point" },
    { word: "snow", keywords: "snowfall blizzard snowstorm flurry" },
    { word: "storm", keywords: "tempest gale hurricane squall" },
    { word: "surprise attack", keywords: "ambush sneak raid assault" },
    { word: "unnoticed", keywords: "unseen unobserved unnoticed unperceived hidden secret" },
  ],
  Places: [
    { word: "bog", keywords: "swamp marsh wetland fen" },
    { word: "bridge", keywords: "span viaduct crossing overpass" },
    { word: "camp site", keywords: "campground camp tent site shelter campsite" },
    { word: "castle", keywords: "fortress citadel palace stronghold" },
    { word: "cave", keywords: "cavern grotto den tunnel" },
    { word: "cellar", keywords: "basement underground room storage" },
    { word: "cemetery", keywords: "graveyard burial ground necropolis churchyard" },
    { word: "checkpoint", keywords: "light guidance bonfire campfire elegance poise charm gracefulness smoothness" },
    { word: "church", keywords: "chapel cathedral temple sanctuary god jesus christ" },
    { word: "city", keywords: "town metropolis urban center municipality" },
    { word: "cliff", keywords: "bluff crag precipice wall escarpment face" },
    { word: "evergaol", keywords: "prison penitentiary jail lockup" },
    { word: "forest", keywords: "woodland grove jungle thicket" },
    { word: "fort", keywords: "fortress stronghold barracks garrison" },
    { word: "great tree", keywords: "mighty erdtree scadutree ancient towering old oak" },
    { word: "high road", keywords: "main road thoroughfare highway arterial road" },
    { word: "hole", keywords: "pit cavity opening hollow butt butthole finger pickle sex" },
    { word: "house", keywords: "home dwelling residence shack" },
    { word: "lake", keywords: "pond reservoir lagoon water body" },
    { word: "mountain", keywords: "peak summit mount range" },
    { word: "nest", keywords: "lair roost home dwelling" },
    { word: "river", keywords: "stream waterway brook creek" },
    { word: "ruins", keywords: "remains wreckage debris decay" },
    { word: "surface", keywords: "top exterior outer part upper side" },
    { word: "tower", keywords: "tall building spire obelisk lookout" },
    { word: "tunnel", keywords: "underpass subway passage shaft" },
    { word: "underground", keywords: "subterranean below ground underneath underneath the surface" },
    { word: "underground tomb", keywords: "crypt mausoleum burial chamber grave" },
    { word: "valley", keywords: "dale glen hollow basin" },
    { word: "waterside", keywords: "waterfront shore riverside coast slide" },
  ],
  Directions: [
    { word: "ahead", keywords: "forward onward straight forth up" },
    { word: "behind", keywords: "back rearward backward behind after down butt butthole rump" },
    { word: "center", keywords: "middle midpoint central core" },
    { word: "down", keywords: "below under beneath downward descend south" },
    { word: "east", keywords: "eastern eastward oriental right" },
    { word: "edge", keywords: "border boundary periphery margin gooning sex" },
    { word: "left", keywords: "leftward port left side west" },
    { word: "north", keywords: "northern northward polar up" },
    { word: "right", keywords: "rightward starboard east side" },
    { word: "south", keywords: "southern southward down" },
    { word: "up", keywords: "above upward upwardly skyward ascend north high" },
    { word: "west", keywords: "western westward occidental left" },
  ],
  "Body Parts": [
    { word: "arms", keywords: "limbs appendages forearms biceps triceps elbows hands" },
    { word: "back", keywords: "spine vertebrae dorsum shoulders scapulae lats" },
    { word: "core", keywords: "torso midsection abdomen trunk center midriff center middle" },
    { word: "fingers", keywords: "digits phalanges thumbs index pinky try butt butthole sex" },
    { word: "head", keywords: "skull cranium face brain scalp forehead temple chin oral sex blowjob" },
    { word: "legs", keywords: "lower limbs thighs calves knees shins ankles feet" },
    { word: "rump", keywords: "buttocks behind rear derrière posterior gluteus maximus butt" },
    { word: "stomach", keywords: "belly abdomen gut tummy midsection navel" },
    { word: "tail", keywords: "appendage caudal appendage tailbone rear extension butt" },
  ],
  Affinities: [
    { word: "blood loss", keywords: "hemorrhage bleeding bloodshed" },
    { word: "death", keywords: "demise passing expiration black blight" },
    { word: "fire", keywords: "flames inferno blaze burning" },
    { word: "frost", keywords: "ice cold freezing frostbite" },
    { word: "holy", keywords: "sacred divine blessed golden" },
    { word: "magic", keywords: "sorcery enchantment wizardry" },
    { word: "madness", keywords: "insanity craziness derangement yellow" },
    { word: "physical", keywords: "bodily corporeal material" },
    { word: "piercing", keywords: "penetrating sharp stabbing puncturing" },
    { word: "poison", keywords: "toxin venom poisoning green" },
    { word: "scarlet rot", keywords: "red decay crimson corruption affliction" },
    { word: "sleep", keywords: "slumber rest nap trina" },
    { word: "slashing", keywords: "cutting hacking chopping slice slicing" },
    { word: "standard", keywords: "typical usual common regular normal" },
    { word: "striking", keywords: "impressive notable remarkable bludgeoning strike" },
    { word: "toxic", keywords: "harmful noxious dangerous" },
    { word: "lightning", keywords: "electricity thunderbolt shock" },
  ],
  Concepts: [
    { word: "abundance", keywords: "plenty profusion wealth overflow excess" },
    { word: "bad luck", keywords: "misfortune ill luck hard luck unluckiness jinx" },
    { word: "betrayal", keywords: "treachery backstabbing deception double-cross disloyalty" },
    { word: "bliss", keywords: "joy happiness ecstasy euphoria delight" },
    { word: "bravery", keywords: "courage valor fearlessness gallantry heroism" },
    { word: "calmness", keywords: "serenity tranquility peacefulness composure poise" },
    { word: "chaos", keywords: "wild" },
    { word: "clue", keywords: "hint tip cue lead indication" },
    { word: "comfort", keywords: "ease relief solace consolation reassurance" },
    { word: "confidence", keywords: "belief trust assurance certainty conviction" },
    { word: "dark", keywords: "darkness black" },
    { word: "Death", keywords: "destined dying undead blight" },
    { word: "defeat", keywords: "loss failure downfall collapse ruin" },
    { word: "despair", keywords: "hopelessness desperation desolation gloom" },
    { word: "destruction", keywords: "ruin demolition devastation wreckage obliteration furniture rolling" },
    { word: "depths", keywords: "deep bottom depth profoundness intensity" },
    { word: "distracted", keywords: "preoccupied inattentive absent-minded unfocused disoriented" },
    { word: "dregs", keywords: "remnants residue sediment lees drugs" },
    { word: "faith", keywords: "golden incantation" },
    { word: "fear", keywords: "dread terror fright anxiety phobia" },
    { word: "fire", keywords: "flames inferno blaze burning" },
    { word: "fortitude", keywords: "courage bravery strength endurance resilience" },
    { word: "friendship", keywords: "companionship camaraderie fellowship amity" },
    { word: "futility", keywords: "pointlessness uselessness hopelessness ineffectiveness vainness" },
    { word: "good fortune", keywords: "luck fortunate blessing favorable prosperity" },
    { word: "hope", keywords: "optimism expectation aspiration wish desire" },
    { word: "injustice", keywords: "unfairness inequity wrong discrimination unjustness" },
    { word: "introspection", keywords: "self-reflection contemplation self-examination meditation self-analysis" },
    { word: "joy", keywords: "happiness glee delight jubilation elation" },
    { word: "light", keywords: "bright white lit" },
    { word: "life", keywords: "existence living being lifeblood vitality" },
    { word: "love", keywords: "affection passion devotion adoration romance sex" },
    { word: "loyalty", keywords: "faithfulness allegiance devotion fidelity" },
    { word: "misfortune", keywords: "bad luck adversity mishap calamity hardship" },
    { word: "opportunity", keywords: "chance opening possibility prospect occasion" },
    { word: "Order", keywords: "golden straight" },
    { word: "on the brink", keywords: "at the edge close to near threshold brim" },
    { word: "pickle", keywords: "cucumber predicament jam dilemma plight tight spot dick sex green penis" },
    { word: "recklessness", keywords: "carelessness foolhardiness" },
    { word: "regret", keywords: "remorse guilt sorrow repentance shame" },
    { word: "revenge", keywords: "retaliation vengeance payback reprisal retribution" },
    { word: "research", keywords: "study investigation analysis exploration examination" },
    { word: "resignation", keywords: "give up giving compliance conformity deference submit" },
    { word: "rot", keywords: "ruin red decay crimson corruption affliction" },
    { word: "ruin", keywords: "destruction collapse decay wreck downfall" },
    { word: "sadness", keywords: "sorrow grief melancholy despair heartache" },
    { word: "sacrifice", keywords: "offering surrender giving up loss forfeit" },
    { word: "secret", keywords: "confidential hidden mystery unknown concealed" },
    { word: "sleep", keywords: "slumber rest nap trina" },
    { word: "sound", keywords: "noise loud quiet audio audible" },
    { word: "stars", keywords: "moon sky space sun" },
    { word: "suffering", keywords: "torture" },
    { word: "tears", keywords: "crying weeping sobbing teardrops emotional sadness" },
    { word: "tranquility", keywords: "calmness serenity peacefulness composure poise" },
    { word: "unguarded", keywords: "open available free" },
    { word: "victory", keywords: "triumph success winning achievement conquest" },
    { word: "vigilance", keywords: "watchfulness alertness caution attentiveness vigil" },
    { word: "vigor", keywords: "health hp energy vitality strength power force" },
    { word: "wrath", keywords: "anger rage fury ire wrathfulness" },
  ],
  Phrases: [
    { word: "are you ready?", keywords: "prepared set go" },
    { word: "beautiful", keywords: "pretty lovely gorgeous stunning woman girl" },
    { word: "do it!", keywords: "go ahead try" },
    { word: "don't give up", keywords: "keep going stop" },
    { word: "don't think", keywords: "no stop thoughts just do it" },
    { word: "don't you dare!", keywords: "forbid stop no" },
    { word: "give up", keywords: "quit surrender stop" },
    { word: "good luck", keywords: "fortune well wishes" },
    { word: "help me...", keywords: "assistance aid support spirit ashes summon" },
    { word: "here!", keywords: "come over right look" },
    { word: "here again...", keywords: "returning back" },
    { word: "it's like a dream...", keywords: "unreal surreal sleep" },
    { word: "I can't take this...", keywords: "frustration anger hopelessness" },
    { word: "I did it!", keywords: "success hooray beat won" },
    { word: "I don't believe it", keywords: "surprise shock disbelief" },
    { word: "I want to go home...", keywords: "homesick scary" },
    { word: "I've failed...", keywords: "failure lost defeat" },
    { word: "just getting started", keywords: "beginning" },
    { word: "keep moving", keywords: "go forward keep going don't stop" },
    { word: "look carefully", keywords: "watch out seek search" },
    { word: "listen carefully", keywords: "hear heed" },
    { word: "not here!", keywords: "absent absence" },
    { word: "seems familiar...", keywords: "deja vu been here before repeat repetitive" },
    { word: "so lonely...", keywords: "alone solitude lonely loneliness" },
    { word: "stay calm", keywords: "relax chill" },
    { word: "think carefully", keywords: "consider ponder" },
    { word: "too high up", keywords: "climb ladder fall death die cliff" },
    { word: "turn back", keywords: "go around retreat" },
    { word: "well done", keywords: "good job nice work" },
    { word: "you don't have the right", keywords: "forbid stop no locked door" },
  ],
  Conjunctions: [
    { word: "all the more", keywords: "even so" },
    { word: "and then", keywords: "next afterwards afterward subsequently" },
    { word: "by the way", keywords: "incidentally as an aside" },
    { word: "but", keywords: "however nevertheless nonetheless yet still butt hole sex" },
    { word: "except", keywords: "excluding excluding apart from other than" },
    { word: "in short", keywords: "briefly concisely succinctly" },
    { word: "or", keywords: "either or else" },
    { word: "so to speak", keywords: "as it were as if to say therefore thus hence consequently accordingly" },
    { word: "therefore", keywords: "thus hence consequently accordingly" },
    { word: ",", keywords: "and" },
  ],
};

export default wordCategories;
