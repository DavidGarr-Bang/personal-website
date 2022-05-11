import * as React from "react";
import {
  Box,
  Center,
  Image,
  Flex,
  Badge,
  Text,
  Stack,
  Heading,
  Button,
  Container,
} from "@chakra-ui/react";

import Nav from "./sections/nav";
import Hero from "./sections/Hero";
import ContactMe from "./sections/ContactMe";
import ProjectList from "./sections/Projects";
import About from "./sections/About";

export default function Example() {
  return (
    <Box bg="#080808">
      <Nav>
        <Hero />
        <ProjectList />
        <About />
        <ContactMe />
      </Nav>
    </Box>
  );
}
