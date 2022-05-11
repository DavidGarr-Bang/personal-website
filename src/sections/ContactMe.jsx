import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  chakra,
  VisuallyHidden,
  Center,
  Link,
} from "@chakra-ui/react";

import { FaTwitter, FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";

import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

import SocialButton from "../components/SocialIcons";

export default function ContactMe() {
  return (
    <Box>
      <Container maxW={"6xl"} name="contactMe">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 2, md: 6 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "1xl", sm: "2xl", md: "5xl" }}
            lineHeight={"110%"}
            color={"#f8f8f8"}
          >
            GBDAVIDKD@LIVE.CO.UK
            <br />
            <Text mt={4} fontSize={{ base: "1xl", sm: "2xl", md: "4xl" }}>
              <Link
                href="#"
                _hover={{
                  color: "green.400",
                  borderBottom: "3px solid",
                  borderBottomColor: "green.400",
                }}
              >
                Get in touch
              </Link>
            </Text>
          </Heading>

          <Container
            as={Stack}
            maxW={"1xl"}
            justify={"center"}
            align={"center"}
          >
            <Stack direction={"row"} spacing={3} mt={2}>
              <SocialButton label={"Discord"} href={"#"}>
                <FaDiscord size={26} />
              </SocialButton>
              <SocialButton label={"Github"} href={"#"}>
                <FaGithub size={26} />
              </SocialButton>
              <SocialButton label={"linked in"} href={"#"}>
                <FaLinkedin size={26} />
              </SocialButton>
              <SocialButton label={"Email"} href={"#"}>
                <EmailIcon w={7} h={7} />
              </SocialButton>
            </Stack>
          </Container>
        </Stack>

        <Box>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={3}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            color={"white"}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text textAlign={"center"}>
              Copyright © 2022 David Garrick Bangbola.
            </Text>
            <Stack>
              <Text>
                Designed By{" "}
                <Link color="green.500" href="https://www.melbadesigns.com/">
                  Melba Fernandes
                </Link>
              </Text>
            </Stack>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
