import { Container, Flex, Heading, List, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import Player from "./components/Player";

function App() {
  const [players, setPlayer] = useState([
    { name: "Player 1" },
    { name: "Player 2" },
    { name: "Player 3" },
    { name: "Player 4" },
    { name: "Player 5" },
  ]);

  const [team, setTeam] = useState([]);

  const [{ isOver }, addToTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  console.log(isOver);
  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const movePlayerToTeam = (item) => {
    console.log(item);
    setPlayer((prev) => prev.filter((_, i) => item.index !== i));
    setTeam((prev) => [...prev, item]);
  };
  const removePlayerFromTeam = (item) => {
    setTeam((prev) => prev.filter((_, i) => item.index !== i));
    setPlayer((prev) => [...prev, item]);
  };

  return (
    <Container maxW="800px">
      <Heading p="2" align="center" color="GrayText">
        React Drag & Drop
      </Heading>

      <Flex justify="space-between" height="90vh" align="center">
        <Stack width="300px">
          <Heading fontSize="3xl" color="yellow.800" textAlign="center">
            PLAYERS
          </Heading>
          <List
            bgGradient={
              isPlayerOver
                ? "linear(to-b, yellow.300, yellow.500)"
                : "linear(to-b, yellow.100, yellow.200)"
            }
            ref={removeFromTeamRef}
            p="4"
            minH="70vh"
            boxShadow="xl"
            borderRadius="md"
          >
            {players.map((p, i) => (
              <Player
                item={p}
                key={i}
                playerType="player"
                onDropPlayer={movePlayerToTeam}
                index={i}
              />
            ))}
          </List>
        </Stack>
        <Stack width="300px">
          <Heading fontSize="3xl" color="teal.800" textAlign="center">
            TEAM
          </Heading>
          <List
            bgGradient={
              isOver
                ? "linear(to-b, teal.300, teal.500)"
                : "linear(to-b, teal.100, teal.200)"
            }
            ref={addToTeamRef}
            minH="70vh"
            boxShadow="xl"
            borderRadius="md"
            p="4"
          >
            {team.map((p, i) => (
              <Player
                item={p}
                key={i}
                index={i}
                playerType="team"
                onDropPlayer={removePlayerFromTeam}
              />
            ))}
          </List>
        </Stack>
      </Flex>
    </Container>
  );
}

export default App;
