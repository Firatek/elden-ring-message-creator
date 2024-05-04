import Word from './word';
import { refilter } from './search';

// Define the type for the message
export default class Message {
    // Words that make up a message
    template1: Word | null = null;
    template2: Word | null = null;
    conjunction: Word | null = null;
    clause1: Word | null = null;
    clause2: Word | null = null;

    messageText: string = ""; // The text of the message
    wordButtons: JSX.Element[] = []; // Array of buttons for each Word in the message
    onUpdate: ((buttons: JSX.Element[]) => {}) | null = null; // Callback function for message update

    // Singleton instance
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

    // Update the buttons array
    update(): void {
        let buttons: JSX.Element[] = []; // Temporary array to hold word buttons

        const addButton = (word: Word | null, buttonText: string) => {
            console.log("Adding button: ", buttonText);
            buttons.push(
                <button
                    onClick={() => word && this.handleClick(word)} // Only invoke handleClick if word is not null
                    disabled={word === null} // Disable the button if word is null
                    style={{ marginLeft: '2px', marginRight: '2px' }} // Adjust the margin as needed
                    title={word ? word.category + ": " + word.word : undefined} // Conditionally set tooltip text
                >
                    {word ? <u>{buttonText}</u> : buttonText}
                </button>
            );
        }

        const addTemplateAndClause = (template: Word | null, clause: Word | null) => {
            console.log("Adding template and clause: ", template, clause);

            if (template) { // If template exists
                if (clause) { // If clause exists
                    const clauseIndex = template.word.indexOf("****");
                    addButton(template, template.word.substring(0, clauseIndex));
                    if (clause != null) {
                        addButton(clause, clause.word);
                    }
                    addButton(template, template.word.substring(clauseIndex + 4));
                } else { // If clause does not exist
                    addButton(template, template.word);
                }
            } else if (clause != null) { // If clause exists
                // Add template without clause
                addButton(null, "[template]");
                addButton(clause, clause.word);
            } else {
                // Add template without clause
                addButton(null, "[template]");
            }
        }

        if (!this.template1 && !this.template2 && !this.conjunction && !this.clause1 && !this.clause2) {
            // If no words are present, display a placeholder message
            addButton(null, "Your message will appear here.");
        } else {
            // Add the first part of the message
            addTemplateAndClause(this.template1, this.clause1);
            // Add the conjunction
            addButton(this.conjunction, this.conjunction ? this.conjunction.word : "[conjunction]");
            // Add the second part of the message
            addTemplateAndClause(this.template2, this.clause2);
        }

        // Update the wordButtons array with the new buttons
        this.wordButtons = buttons;

        // Call the onUpdate callback if it's set
        if (this.onUpdate) {
            this.onUpdate(this.wordButtons);
        }
    }

    // Function to handle click events on buttons
    private handleClick(word: Word | null): void {
        if (word == null) {
            console.log("Clicked on null");
            return;
        }
        console.log("Clicked on word:", word.word);
        this.remove(word);
        refilter(); // Redo the search to update the buttons
    }

    // Add a word to the message
    add(word: Word): boolean {
        switch (word.category) {
            case "Templates":
                if (!this.template1) {
                    this.template1 = word;
                } else if (!this.template2) {
                    this.template2 = word;
                } else {
                    console.error("Only two templates allowed");
                    return false;
                }
                break;
            case "Conjunctions":
                if (!this.conjunction) {
                    this.conjunction = word;
                } else {
                    console.error("Only one conjunction allowed");
                    return false;
                }
                break;
            default:
                if (!this.clause1) {
                    this.clause1 = word;
                } else if (!this.clause2) {
                    this.clause2 = word;
                } else {
                    console.error("Only two clauses allowed");
                    return false;
                }
        }
        this.update();
        return true;
    }

    // Remove a word from the message
    remove(word: Word): boolean {
        console.log("Removing word: " + word.word + "(" + word.category + ")");

        switch (word.category) {
            case "Templates":
                if (this.template2) {
                    this.template2 = null;
                } else if (this.template1) {
                    this.template1 = null;
                } else {
                    console.error("Word is not in message");
                    return false;
                }
                break;
            case "Conjunctions":
                if (this.conjunction) {
                    this.conjunction = null;
                } else {
                    console.error("Word is not in message");
                    return false;
                }
                break;
            default: // Clauses
            if (this.clause2) {
                this.clause2 = null;
            } else if (this.clause1) {
                this.clause1 = null;
            } else {
                console.error("Word is not in message");
                return false;
            }
            break;
        }
        this.update();
        return true;
    }
}