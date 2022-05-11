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
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import SocialButton from "../components/SocialIcons";

import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import { MdEmail } from "react-icons/md";

import AppImages from "../images/app_mobile_screen.png";

import { Link } from "react-scroll";

export default function Section() {
  return (
    <div>
      <Container
        maxW={"6xl"}
        h={{ md: "70vh", lg: "70vh" }}
        mt={{ md: 10, lg: 0, xl: 0, "2xl": 0 }}
        mb={{ md: 0, lg: 10, xl: 10, "2xl": 20 }}
      >
        <Stack as={Box} py={{ base: 10, md: 10 }} justify={"center"}>
          <Heading
            bgGradient="linear(to-r,#15c98b ,#16c959,#47d1c1, #cbffdb)"
            bgClip="text"
            fontWeight={600}
            fontSize={{ base: "6xl", md: "9xl" }}
          >
            HELLO,
            <br />
            I'M DAVID
            <Text
              fontSize={{ base: "xl", sm: "xl", md: "3xl" }}
              color={"white"}
            >
              I'M A FULL STACK DEVELOPER BASED IN
              <br /> LONDON
            </Text>
          </Heading>

          <Stack direction={"row"}>
            <SocialButton label={"Discord"} href={"#"}>
              <FaDiscord size={26} />
            </SocialButton>
            <SocialButton label={"Github"} href={"#"}>
              <FaGithub size={26} />
            </SocialButton>
            <SocialButton label={"linked in"} href={"#"}>
              <FaLinkedin size={26} />
            </SocialButton>
            <SocialButton label={"Github"} href={"#"}>
              <MdEmail size={32} />
            </SocialButton>
          </Stack>
        </Stack>

        <Flex justify={{ base: "left", md: "center" }}>
          <Button
            pl={10}
            pr={10}
            as={Link}
            to="projects"
            spy={true}
            smooth={true}
            colorScheme="green"
            color={"black"}
            _hover={{ bg: "white" }}
          >
            View Projects
          </Button>
        </Flex>
      </Container>
    </div>
  );
}
