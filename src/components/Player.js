import { ListItem } from "@chakra-ui/react";
import React from "react";
import { useDrag } from "react-dnd";

const Player = () => {
  return (
    <ListItem p="2" borderRadius="md" boxShadow="md" mb="2" textAlign="center">
      Player
    </ListItem>
  );
};

export default Player;
