import React from 'react';
import { createRoot } from 'react-dom/client';

// Define the type for the object containing word categories
interface WordCategory {
    [category: string]: string[];
}

// Define the type for the object containing word and category
class WordObject {
    category: string;
    word: string;

    constructor(category: string, word: string) {
        this.category = category;
        this.word = word;
    }

    // Override the toString method to return a unique value for each WordObject
    toString(): string {
        return `${this.category}:${this.word}`;
    }

    // Override the equals method to compare objects based on their properties
    equals(other: WordObject): boolean {
        return this.toString() === other.toString();
    }

    // Check if the WordObject is in an array
    // Use this instead of arr.includes(this)
    isInArray(arr: WordObject[]): boolean {
        return this.indexInArray(arr) !== -1;
    }

    // Get the index of the WordObject in an array or -1 if not found
    indexInArray(arr: WordObject[]): number {
        for (let i = 0; i < arr.length; i++) {
            if (this.equals(arr[i])) {
                return i;
            }
        }
        return -1;
    }

    removeFromArray(arr: WordObject[]): boolean {
        const index = this.indexInArray(arr);
        if (index !== -1) {
            arr.splice(index, 1);
            return true;
        }
        return false;
    }
}

// Define the type for the message
class Message {
    templates: WordObject[] = [];
    conjunction: WordObject | null = null;
    clauses: WordObject[] = []; // All words that aren't templates or conjunctions
    asString: string = "";
    onUpdate: ((message: string) => void) | null = null; // Callback function for message update

    private static instance: Message | null = null;

    private constructor() {
        // Private constructor to prevent instantiation outside the class
    }

    // Static method to get the singleton instance
    public static getInstance(): Message {
        // If the instance doesn't exist, create a new one
        if (!Message.instance) {
            Message.instance = new Message();
        }
        // Return the existing instance
        return Message.instance;
    }

    // Override the toString method to return a unique value for each WordObject
    toString(): string {
        return this.asString;
    }

    updateString(): void {
        let newString: string = "";

        // Add the first template & clause
        if (this.templates.length > 0) {
            if (this.clauses.length > 0) {
                newString += this.templates[0].word.replaceAll("****", this.clauses[0].word) + " ";
            }
            else {
                newString += this.templates[0].word + " ";
            }
        } else if (this.clauses.length > 0) {
            newString += "[template] " + this.clauses[0].word + " ";
        }

        // Add the conjunction
        if (this.conjunction != null) {
            newString += this.conjunction.word + " ";
        } else  if (this.templates.length > 1) {
            newString += "[conjunction] ";
        }

        // Add the second template & clause
        if (this.templates.length > 1) {
            if (this.clauses.length > 1) {
                newString += this.templates[1].word.replaceAll("****", this.clauses[1].word) + " ";
            } else {
                newString += this.templates[1].word + " ";
            }
        } else if (this.clauses.length > 1) {
            newString += "[template] " + this.clauses[1].word + " ";
        }

        console.log("New string: " + newString);
        this.asString = newString;

        // Call the onUpdate callback if it's set
        if (this.onUpdate) {
            this.onUpdate(this.asString);
        }
    }

    add(word: WordObject): boolean {
        switch (word.category) {
            case "Templates":
                if (this.templates.length < 2) {
                    this.templates.push(word);
                } else {
                    console.error("Only two templates allowed");
                    return false;
                }
                break;
            case "Conjunctions":
                if (this.conjunction == null) {
                    this.conjunction = word;
                } else {
                    console.error("Only 1 conjunction allowed");
                    return false;
                }
                break;
            default:
                if (this.clauses.length < 2) {
                    this.clauses.push(word);
                } else {
                    console.error("Only two clauses allowed");
                    return false;
                }
                break;
        }
        this.updateString();
        return true;
    }

    remove(word: WordObject): boolean {
        switch (word.category) {
            case "Templates":
                if (!word.removeFromArray(this.templates)) {
                    return false;
                }
                break;
            case "Conjunctions":
                if (this.conjunction == null) {
                    return false;
                }
                this.conjunction = null;
                break;
            default: // Clauses
                if (!word.removeFromArray(this.clauses)) {
                    return false;
                }
                break;
        }
        this.updateString();
        return true;
    }
}

// Define the type for the props of the Button component
interface ButtonProps {
    onClick: () => void;
    title: string;
    textContent: string;
}

// Button component to render buttons
const Button: React.FC<ButtonProps> = ({ onClick, title, textContent }) => {
    // Assuming you have access to the Message instance in your component
    const handleMessageAdd = () => {
        const messageInstance = Message.getInstance(); // Get the singleton instance of Message
        const wordObject = new WordObject(title, textContent); // Assuming you have a way to create a WordObject
        const added = messageInstance.add(wordObject); // Call the add function
        if (!added) {
            console.log("Failed to add word.");
        }
    };

    return (
        <button
            onClick={handleMessageAdd} // Call handleMessageAdd instead of onClick directly
            title={title + ": \"" + textContent + "\""}
            style={{
                backgroundColor: "#472f17",
                padding: "10px 20px",
                margin: "5px",
                fontFamily: "body-text",
                borderRadius: "9999px", // Make the button pill-shaped
                lineHeight: "normal" // Reset line height to default
            }}
        >
            {textContent}
            <span style={{
                fontSize: "10px",
                fontFamily: "body-text",
                color: "grey",
                display: "block",
                marginTop: "0px" // Adjust margin to reduce space between text and category
                }}>{title}</span> {}
        </button>
    );
};

// Define the type for the props of the ButtonContainer component
interface ButtonContainerProps {
    words: WordObject[];
}

// ButtonContainer component to contain buttons
const ButtonContainer: React.FC<ButtonContainerProps> = ({ words }) => {
    return (
        <div id="buttonContainer">
            {words.map((obj, index) => (
                <Button
                    key={index}
                    onClick={() => {}}
                    title={obj.category}
                    textContent={obj.word}
                />
            ))}
        </div>
    );
};

// Search function to filter words and create buttons
const search = (query: string) => {
    // Prevent failing on string functions
    if (query == null) {
        query === "";
    }
    query = query.trim().toLowerCase();
    const results: WordObject[] = [];

    // Will add all words from a category to the results array
    const addWordsFromCategory = (category: string) => {
        for (const word of wordCategories[category]) {
            let wordObj: WordObject = new WordObject(category, word);
            // Don't add duplicates
            if (!wordObj.isInArray(results)) {
                results.push(wordObj);
            }
        }
    };

    // Add all words if query is empty
    if (query === "") {
        for (const category in wordCategories) {
            addWordsFromCategory(category);
        }
    } else {
        // Search for query in all categories
        for (const category in wordCategories) {
            for (const word of wordCategories[category]) {
                if (word.toLowerCase().includes(query)) {
                    let wordObj: WordObject = new WordObject(category, word);
                    // Don't add duplicates
                    if (!wordObj.isInArray(results)) {
                        results.push(wordObj);
                    }
                }
            }
            // Add all words from the category if the category name matches the query
            if (category.toLowerCase().includes(query)) {
                addWordsFromCategory(category);
            }
        }
    }

    // console.log("Searching for: \"" + query + "\". Results:");
    // console.log(results);
    renderButtons(results);
};

// Render the buttons
const renderButtons = (words: WordObject[]) => {
    const buttonContainer = document.getElementById("buttonContainer");
    if (buttonContainer) {
        const root = createRoot(buttonContainer);
        root.render(<ButtonContainer words={words} />);
    } else {
        console.error("Button container not found");
    }
};

// Word categories object
const wordCategories: WordCategory = {
    "Templates": ["**** ahead", "No **** ahead", "**** required ahead", "Be wary of ****", "Try ****", "Likely ****", "First off\, ****", "Seek ****", "Still no ****...", "Why is it always ****?", "If only I had a ****...", "Didn't expect ****...", "Visions of ****...", "Could this be a ****?", "Time for ****", "****\, O ****", "Behold\, ****!", "Offer ****", "Praise the ****!", "Let there be ****", "Ahh\, ****...", "****", "****!", "****?", "****..."],
    "Enemies": ["enemy", "weak foe", "strong foe", "monster", "dragon", "boss", "sentry", "group", "pack", "decoy", "undead", "soldier", "knight", "cavalier", "archer", "sniper", "mage", "ordnance", "monarch", "lord", "demi-human", "outsider", "giant", "horse", "dog", "wolf", "rat", "beast", "bird", "raptor", "snake", "crab", "prawn", "octopus", "bug", "scarab", "slug", "wraith", "skeleton", "monstrosity", "ill-omened creature"],
    "People": ["Tarnished", "warrior", "swordfighter", "knight", "samurai", "sorcerer", "cleric", "sage", "merchant", "teacher", "master", "friend", "lover", "old dear", "old codger", "angel", "fat coinpurse", "pauper", "good sort", "wicked sort", "plump sort", "skinny sort", "lovable sort", "pathetic sort", "strange sort", "nimble sort", "laggardly sort", "invisible sort", "unfathomable sort", "giant sort", "sinner", "thief", "liar", "dastard", "traitor", "pair", "trio", "noble", "aristocrat", "hero", "champion", "monarch", "lord", "god"],
    "Things": ["item", "necessary item", "precious item", "something", "something incredible", "treasure chest", "corpse", "coffin", "trap", "armament", "shield", "bow", "projectile weapon", "armor", "talisman", "skill", "sorcery", "incantation", "map", "material", "flower", "grass", "tree", "fruit", "seed", "mushroom", "tear", "crystal", "butterfly", "bug", "dung", "grace", "door", "key", "ladder", "lever", "lift", "spiritspring", "sending gate", "stone astrolabe", "Birdseye Telescope", "message", "bloodstain", "Erdtree", "Elden Ring"],
    "Battle Tactics": ["close-quarters battle", "ranged battle", "horseback battle", "luring out", "defeating one-by-one", "taking on all at once", "rushing in", "stealth", "mimicry", "confusion", "pursuit", "fleeing", "summoning", "circling around", "jumping off", "dashing through", "brief respite"],
    "Actions": ["attacking", "jump attack", "running attack", "critical hit", "two-handing", "blocking", "parrying", "guard counter", "sorcery", "incantation", "skill", "summoning", "throwing", "healing", "running", "rolling", "backstepping", "jumping", "crouching", "target lock", "item crafting", "gesturing"],
    "Situations": ["morning", "noon", "evening", "night", "clear sky", "overcast", "rain", "storm", "mist", "snow", "patrolling", "procession", "crowd", "surprise attack", "ambush", "pincer attack", "beating to a pulp", "battle", "reinforcements", "ritual", "explosion", "high spot", "defensible spot", "climbable spot", "bright spot", "dark spot", "open area", "cramped area", "hiding place", "sniping spot", "recon spot", "safety", "danger", "gorgeous view", "detour", "hidden path", "secret passage", "shortcut", "dead end", "looking away", "unnoticed", "out of stamina"],
    "Places": ["high road", "checkpoint", "bridge", "castle", "fort", "city", "ruins", "church", "tower", "camp site", "house", "cemetery", "underground tomb", "tunnel", "cave", "evergaol", "great tree", "cellar", "surface", "underground", "forest", "river", "lake", "bog", "mountain", "valley", "cliff", "waterside", "nest", "hole"],
    "Directions": ["east", "west", "south", "north", "ahead", "behind", "left", "right", "center", "up", "down", "edge"],
    "Body Parts": ["head", "stomach", "back", "arms", "legs", "rump", "tail", "core", "fingers"],
    "Affinities": ["physical", "standard", "striking", "slashing", "piercing", "fire", "lightning", "magic", "holy", "poison", "toxic", "scarlet rot", "blood loss", "frost", "sleep", "madness", "death"],
    "Concepts": ["life", "Death", "light", "dark", "stars", "fire", "Order", "chaos", "joy", "wrath", "suffering", "sadness", "comfort", "bliss", "misfortune", "good fortune", "bad luck", "hope", "despair", "victory", "defeat", "research", "faith", "abundance", "rot", "loyalty", "injustice", "secret", "opportunity", "pickle", "clue", "friendship", "love", "bravery", "vigor", "fortitude", "confidence", "distracted", "unguarded", "introspection", "regret", "resignation", "futility", "on the brink", "betrayal", "revenge", "destruction", "recklessness", "calmness", "vigilance", "tranquility", "sound", "tears", "sleep", "depths", "dregs", "fear", "sacrifice", "ruin"],
    "Phrases": ["good luck", "look carefully", "listen carefully", "think carefully", "well done", "I did it!", "I've failed...", "here!", "not here!", "don't you dare!", "do it!", "I can't take this...", "don't think", "so lonely...", "here again...", "just getting started", "stay calm", "keep moving", "turn back", "give up", "don't give up", "help me...", "I don't believe it...", "too high up", "I want to go home...", "it's like a dream...", "seems familiar...", "beautiful...", "you don't have the right", "are you ready?"],
    "Conjunctions": ["and then", "or", "but", "therefore", "in short", "except", "by the way", "so to speak", "all the more", "\,"]
};

export { search, Message};
