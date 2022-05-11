import * as React from "react";

import passIcon from "../images/nwicons/pass_icon.png";
import petIcon from "../images/nwicons/pet_icon.png";
import bbiconColor from "../images/nwicons/bb_icon.png";

import HC from "../components/Horizontal_card";

import { Container, Stack, Heading, Box, Flex, VStack } from "@chakra-ui/react";

export default function App() {
  const list = [
    {
      icon: petIcon,
      title: "Password storage",
      desc: "Password storage for users to store login private info login info to keep it safe and secure.",
    },
    {
      icon: bbiconColor,
      title: "Bangbola banking",
      desc: "Mock mobile banking where users and transfer money to mock users within the application.",
    },
    {
      icon: passIcon,
      title: "Pet insurance",
      desc: "Mock insurance application based around pets where users can manage the pet’s insurance.",
    },
  ];

  return (
    <Container as={Stack} maxW={"6xl"} name="projects">
      <Heading
        fontWeight={600}
        fontSize={{ base: "xl", sm: "1xl", md: "3xl" }}
        color={"#f8f8f8"}
        textAlign={{ base: "left", md: "center" }}
        mt={10}
        mb={10}
      >
        Selected Projects
      </Heading>

      {list.map((item, key) => (
        <HC
          key={key}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          tools={item.tools}
        />
      ))}
    </Container>
  );
}
