/* eslint-disable react/no-children-prop */
import React, {useState, ChangeEvent} from "react";
import {Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {Search2Icon, SmallCloseIcon} from "@chakra-ui/icons";

import {INote} from "../interfaces/INote";

interface Props {
  notes: INote[];
  onSearch: Function;
}

const SearchBar = ({notes, onSearch}: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputClearOnClick = () => {
    setInputValue("");
  };

  const child = inputValue ? (
    <SmallCloseIcon color="gray.400" cursor="pointer" onClick={handleInputClearOnClick} />
  ) : (
    <Search2Icon color="gray.400" />
  );

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleOnKeyPress = (event: KeyboardEvent): void => {
    if (!inputValue.length) onSearch(notes);

    if (event.key === "Enter") {
      const filteredNotes = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          note.text.toLowerCase().includes(inputValue.toLowerCase()),
      );

      onSearch(filteredNotes);
    }
  };

  return (
    <InputGroup>
      <Input
        focusBorderColor="gray.500"
        placeholder="Search"
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      />
      <InputRightElement children={child} />
    </InputGroup>
  );
};

export default SearchBar;
