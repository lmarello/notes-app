import React, {useState, useEffect} from "react";
import {Box, Button, Flex, Text, useDisclosure} from "@chakra-ui/react";

import {INote} from "../interfaces/INote";
import {NotesList} from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import CreateNoteModal from "../components/CreateNoteModal";
import NotesService from "../services/notes";

const notesService = new NotesService();

const BoardScreen: React.FC = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [notesToShow, setNotesToShow] = useState<INote[]>([]);
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    const notes: INote[] = notesService.getNotes();

    setNotesToShow(notes);
    setNotes(notes);
  }, []);

  const handleOnCreate = (note: INote): void => {
    notesService.addNote(note);
  };

  const handleOnSearch = (notes: INote[]): void => {
    setNotesToShow(notes);
  };

  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between" pb={5} pt={10}>
        <Text fontSize="xl" fontWeight="bold">
          My Notes
        </Text>
        <Button onClick={onOpen}>Create Note</Button>
        <CreateNoteModal isOpen={isOpen} onClose={onClose} onCreate={handleOnCreate} />
      </Flex>
      <SearchBar notes={notes} onSearch={handleOnSearch} />
      <NotesList notes={notesToShow} />
    </Box>
  );
};

export default BoardScreen;
