import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  Heading,
  Center,
  Button,
} from "@chakra-ui/react";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  StackDivider,
  Icon,
} from "@chakra-ui/react";

import PhoneImage from "../images/phone_with_logo.png";

export default function WithLargeQuote() {
  return (
    <Box bg={"#1d1d1d"} mt={10}>
      <Container maxW={"6xl"} mt={{ base: 1, md: 200 }} name="about">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} mt={{ base: 6, md: 110 }}>
            <Heading color={"white"}>About me.</Heading>
            <Text color={"white"} fontSize={"lg"}>
              Hey again, it's David still a junior full stack devleoper based
              out of south east london with a love for creative interactive
              applications.
            </Text>
            <Text color={"white"} fontSize={"lg"}>
              But when I'm not typing in some code for some random project that
              i have, I like nothing more then going on a simple walk to clear
              my head or just chilling with some friends on a nice day out.
            </Text>
            <Button
              to="projects"
              justify={"center"}
              colorScheme="green"
              color={"black"}
              _hover={{ bg: "white" }}
              w={"120px"}
              p={1}
            >
              View CV
            </Button>
          </Stack>

          <Flex justify={"center"}>
            <Image
              alt={"Phone image"}
              src={PhoneImage}
              objectFit={"cover"}
              w={300}
              // boxSize={{ base: 300, md: "100%" }}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
