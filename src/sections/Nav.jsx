import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Image,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  Heading,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { Link } from "react-scroll";

export default function Simple({ children }) {
  return (
    <>
      <Stack color="black" align={"center"}>
        <Text
          color={"#f8f8f8"}
          fontSize={{ base: "xl", md: "3xl" }}
          _hover={{ color: "green.400", cursor: "pointer" }}
          rounded={"md"}
          mt={{ base: "2", md: "4" }}
          letterSpacing={2}
        >
          DGB
        </Text>
      </Stack>

      <Stack
        align={"center"}
        spacing={{ base: 2, md: 0 }}
        py={{ base: 0, md: 0 }}
      >
        <Stack direction={"row"} bgColor={"#080808"}>
          <Text
            as={Link}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-10}
            pl={0.5}
            pr={0.5}
            color={"#f8f8f8"}
            fontSize={{ base: "md", sm: "xl", md: "xl" }}
            _hover={{ color: "green.400", cursor: "pointer" }}
          >
            Home
          </Text>

          <Text
            as={Link}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            pl={0.5}
            pr={0.5}
            color={"#f8f8f8"}
            fontSize={{ base: "md", sm: "xl", md: "xl" }}
            _hover={{ color: "green.400", cursor: "pointer" }}
          >
            Projects
          </Text>

          <Text
            as={Link}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-10}
            pl={0.5}
            pr={0.5}
            color={"#f8f8f8"}
            fontSize={{ base: "md", sm: "xl", md: "xl" }}
            _hover={{ color: "green.400", cursor: "pointer" }}
          >
            About
          </Text>

          <Text
            as={Link}
            to="contactMe"
            spy={true}
            smooth={true}
            offset={-10}
            pl={0.5}
            pr={0.5}
            color={"#f8f8f8"}
            fontSize={{ base: "md", sm: "xl", md: "xl" }}
            _hover={{ color: "green.400", cursor: "pointer" }}
          >
            Contact
          </Text>
        </Stack>
      </Stack>

      {children}
    </>
  );
}
