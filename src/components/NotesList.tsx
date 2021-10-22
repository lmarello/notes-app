import React from "react";
import {Grid} from "@chakra-ui/react";

import {INote} from "../interfaces/INote";

import Note from "./Note";

interface Props {
  notes: INote[];
}

export const NotesList: React.FC<Props> = ({notes}) => {
  return (
    <Grid
      gap={4}
      justifyItems="center"
      mt={10}
      templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
    >
      {notes.map((note: INote) => (
        <Note key={note.id} note={note} />
      ))}
    </Grid>
  );
};
