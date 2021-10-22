import React, {ChangeEvent, useState} from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from "@chakra-ui/react";

import {colors} from "../constants/colors";
import {INote} from "../interfaces/INote";

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
  onCreate: Function;
}

const CreateNoteModal = ({isOpen, onClose, onCreate}: Props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState(colors[0].color);
  const [characters, setCharacters] = useState(0);
  const MAX_CHARACTERS = 150;

  const clearForm = () => {
    setTitle("");
    setText("");
    setColor(colors[0].color);
  };

  const handleOnCreate = () => {
    const note: INote = {
      title,
      text,
      color: color,
      id: Date.now().toString(),
    };

    clearForm();
    onCreate(note);
    onClose();
  };

  const handleOnClose = () => {
    clearForm();
    onClose();
  };

  const handleTitleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTextOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setCharacters(value.length);
    setText(value);
  };

  const handleColorOnClick = (color: string) => {
    setColor(color);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleOnClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Note</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="first-name">
            <FormLabel fontWeight="bold">Title</FormLabel>
            <Input placeholder="Title" value={title} onChange={handleTitleOnChange} />

            <FormLabel fontWeight="bold" mt={8}>
              Text
            </FormLabel>
            <Textarea
              maxLength={MAX_CHARACTERS}
              placeholder="Text"
              value={text}
              onChange={handleTextOnChange}
            />
            <Text
              fontSize={12}
              position="absolute"
              right={0}
            >{` ${characters} / ${MAX_CHARACTERS}`}</Text>
          </FormControl>

          <Text fontWeight="bold" mt={8}>
            Color
          </Text>
          <HStack mt={2} spacing={4}>
            {colors.map((c) => (
              <Box
                key={c.id}
                _hover={{cursor: "pointer"}}
                backgroundColor={c.color}
                border={color === c.color ? "2px solid" : "none"}
                borderRadius="50%"
                display="inline"
                h={6}
                w={6}
                onClick={() => handleColorOnClick(c.color)}
              />
            ))}
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} variant="ghost" onClick={handleOnClose}>
            Cancel
          </Button>
          <Button colorScheme="teal" onClick={handleOnCreate}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateNoteModal;
