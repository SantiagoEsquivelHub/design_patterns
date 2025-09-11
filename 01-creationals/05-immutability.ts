/**
 * ! Immutability with copy
 * Although immutability is a good practice, it's not always possible.
 * In these cases, you can make a copy of the object and modify the copy.
 *
 *  * It's useful for maintaining a history of states in interactive applications.
 *
 */

import { COLORS } from "../helpers/colors.ts";


class CodeEditorState {
    readonly content: string;
    readonly cursorPosition: number;
    readonly unsaveChanges: boolean;

    constructor(content: string, cursorPosition: number, unsaveChanges: boolean) {
        this.content = content
        this.cursorPosition = cursorPosition
        this.unsaveChanges = unsaveChanges
    };

    copyWith({ content, cursorPosition, unsaveChanges }: Partial<CodeEditorState>): CodeEditorState {
        return new CodeEditorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsaveChanges ?? this.unsaveChanges,
        );
    }

    displayState() {
        console.log('\n%cEditor state:', COLORS.green);
        console.log(`
            Content: ${this.content}    
            Cursos Pos: ${this.cursorPosition}    
            Unsaved changes: ${this.unsaveChanges}    
        `);

    }
}

class CodeEditorHistory {
    private history: CodeEditorState[] = [];
    private currentIndex: number = -1;

    save(state: CodeEditorState): void {

        if (this.currentIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.currentIndex + 1);
        }

        this.history.push(state);
        this.currentIndex++;
    }

    redo(): CodeEditorState | null {

        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }

        return null;
    }

    undo(): CodeEditorState | null {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }

        return null;
    }
}

function main() {
    const history = new CodeEditorHistory();
    let editorState = new CodeEditorState("console.log('Hello world')", 2, false);

    history.save(editorState);

    console.log('%cInitial state', COLORS.blue);
    editorState.displayState();

    editorState = editorState.copyWith({
        content: "console.log('Hello worlddddddd'); \n console.log('New line')",
        cursorPosition: 3,
        unsaveChanges: true
    });
    history.save(editorState);

    console.log('%cAfter first change', COLORS.blue);
    editorState.displayState();

    console.log('%cAfter cursor moving', COLORS.blue);
    editorState = editorState.copyWith({ cursorPosition: 5 });
    history.save(editorState);
    editorState.displayState();

    console.log('%cAfter Undo', COLORS.blue);
    editorState = history.undo()!;
    editorState.displayState();

    console.log('%cAfter Redo', COLORS.blue);
    editorState = history.redo()!;
    editorState.displayState();

}

main();