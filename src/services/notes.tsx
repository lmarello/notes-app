import {INote} from "../interfaces/INote";

export default class NotesService {
  private _get() {
    return localStorage.getItem("notes") || "";
  }

  private _parse(notes: string) {
    if (notes?.length) return JSON.parse(notes);

    return [];
  }

  public getNotes(): INote[] {
    const notes = this._get();

    return this._parse(notes);
  }

  public addNote(note: INote): void {
    const notes = this._get();
    const newNotes = notes ? [note, ...this._parse(notes)] : [note];

    localStorage.setItem("notes", JSON.stringify(newNotes));
  }
}
