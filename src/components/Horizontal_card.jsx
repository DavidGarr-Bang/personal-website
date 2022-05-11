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
  Tag,
  HStack,
  Link,
  Tooltip,
} from "@chakra-ui/react";

function Card({ title, desc, icon, tools }) {
  return (
    <Box
      as={Link}
      bg={"#1d1d1d"}
      borderRadius={"md"}
      borderWidth={"1px"}
      borderColor={"green.400"}
      display={{ md: "flex" }}
      flexDirection={"row"}
      // _hover={{
      //   _after: { height: 20, bg: "green" }
      // }}
      // _after={{
      //   content: '""',
      //   display: "inline-block",
      //   bottom: 0,
      //   width: "100%",
      //   height: "100%",
      //   zIndex: -1
      // }}
    >
      <Flex justify={"center"}>
        <Image
          w={100}
          h={100}
          transform="scale(1.0)"
          src={icon}
          justify="center"
          alt="some text"
          objectFit="contain"
          transition="0.3s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
      </Flex>

      <Box
        p={2}
        borderTopWidth={{ base: "1px", md: "0px" }}
        borderLeftWidth={{ base: "0px", md: "1px" }}
        borderColor={"green.400"}
      >
        <Text mt={3} fontWeight="bold" color="#f8f8f8">
          {title}
        </Text>
        <Text mt={2} color="#f8f8f8">
          {desc}
        </Text>
      </Box>
    </Box>
  );
}

export default Card;
