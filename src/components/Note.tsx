import React from "react";
import {Box, Text} from "@chakra-ui/react";
import {SmallCloseIcon} from "@chakra-ui/icons";

import {INote} from "../interfaces/INote";

interface Props {
  note: INote;
}

const Note: React.FC<Props> = ({note}) => {
  const {title, text, color} = note;

  return (
    <Box
      backgroundColor={color}
      borderRadius="1px"
      height="150px"
      padding={4}
      position="relative"
      width="300px"
    >
      <SmallCloseIcon
        color="gray.400"
        cursor="pointer"
        position="absolute"
        right="10px"
        top="10px"
      />
      <Text fontWeight="bold" pb={2}>
        {title}
      </Text>
      <Text color="gray.800">{text}</Text>
    </Box>
  );
};

export default Note;
