import React, { useState } from "react";
import { Container, Flex, Stack, List } from "@chakra-ui/layout";
import Player from "./components/Player";
import { Heading } from "@chakra-ui/react";
import { useDrop } from "react-dnd";
const App = () => {
  const [players, setPlayer] = useState([
    { name: "Player 1" },
    { name: "Player 2" },
    { name: "Player 3" },
    { name: "Player 4" },
    { name: "Player 5" },
  ]);

  const [team, setTeam] = useState([]);

  return (
    <Container maxW="800px">
      <Flex justify="space-between" align="center" minH="90vh">
        <Stack width="300px">
          <Heading fontSize="3xl" color="yellow.800" textAlign="center">
            PLAYERS
          </Heading>
          <List p="4" minH="70vh" boxShadow="xl" borderRadius="md">
            {players.map((e, i) => (
              <Player index={i} />
            ))}
          </List>
        </Stack>
        <Stack width="300px">
          <Heading fontSize="3xl" color="teal.800" textAlign="center">
            TEAM
          </Heading>
          <List p="4" minH="70vh" boxShadow="xl" borderRadius="md">
            {team.map((e, i) => (
              <Player />
            ))}
          </List>
        </Stack>
      </Flex>
    </Container>
  );
};

export default App;
