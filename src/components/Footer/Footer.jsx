import {
  Box,
  Container,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from "react-icons/fa";

function Footer() {
  return (
    <Box as="footer" backgroundColor="gray.800" pt={5} color="whiteAlpha.900">
      <Container maxW="95%">
        <Flex
          justify="space-between"
          align="center"
          pb={6}
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Text fontSize="lg">Get connected with us on social networks:</Text>
          <Box
            width={"30%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Link href="#" _hover={{ textDecor: "none" }}>
              <Icon as={FaFacebookF} color="whatsapp.50" boxSize={7} />
            </Link>
            <Link href="#" _hover={{ textDecor: "none" }}>
              <Icon as={FaTwitter} color="whatsapp.50" boxSize={7} />
            </Link>
            <Link href="#" _hover={{ textDecor: "none" }}>
              <Icon as={FaGoogle} color="whatsapp.50" boxSize={7} />
            </Link>
            <Link href="#" _hover={{ textDecor: "none" }}>
              <Icon as={FaInstagram} color="whatsapp.50" boxSize={7} />
            </Link>
            <Link href="#" _hover={{ textDecor: "none" }}>
              <Icon as={FaLinkedin} color="whatsapp.50" boxSize={7} />
            </Link>
            <Link href="#" _hover={{ textDecor: "none" }}>
              <Icon as={FaGithub} color="whatsapp.50" boxSize={7} />
            </Link>
          </Box>
        </Flex>

        <Flex flexWrap="wrap" justify="space-between" py={10}>
          <VStack
            align="start"
            spacing={4}
            mb={6}
            flex={{ base: "0", md: "0", lg: "3", xl: "3" }}
          >
            {/* <Icon as={FaDiagnoses} color="secondary" boxSize={10} /> */}
            <Box
              width={"140px"}
              height={"50px"}
              backgroundColor={"gray.200"}
              borderRadius={"10px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src="./logo.png" />
            </Box>
            <Text fontSize="lg" fontWeight="bold">
              Company Name
            </Text>
            <Text width={"300px"}>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Text>
          </VStack>

          <VStack
            align="start"
            spacing={4}
            mb={6}
            flex={{ base: "0", md: "0", lg: "2", xl: "2" }}
          >
            <Text fontSize="lg" fontWeight="bold">
              Features
            </Text>
            <Link href="#" _hover={{ textDecor: "none" }}>
              Text to Animation
            </Link>
            <Link href="#" _hover={{ textDecor: "none" }}>
              Text to Image
            </Link>
            <Link href="#" _hover={{ textDecor: "none" }}>
              Text to Speech
            </Link>
            <Link href="#" _hover={{ textDecor: "none" }}>
              Text to Video
            </Link>
          </VStack>

          <VStack
            align="start"
            spacing={4}
            mb={6}
            flex={{ base: "0", md: "0", lg: "2", xl: "2" }}
          >
            <Text fontSize="lg" fontWeight="bold">
              Company
            </Text>
            <Link href="#" _hover={{ textDecor: "none" }}>
              Contact Us
            </Link>
            <Link href="#" _hover={{ textDecor: "none" }}>
              About
            </Link>
            <Link href="#" _hover={{ textDecor: "none" }}>
              Blog
            </Link>
            <Link href="#" _hover={{ textDecor: "none" }}>
              Services
            </Link>
          </VStack>

          <VStack
            align="start"
            spacing={4}
            mb={6}
            flex={{ base: "0", md: "0", lg: "3", xl: "3" }}
          >
            <Text fontSize="lg" fontWeight="bold">
              Contact
            </Text>
            <Flex align="center">
              <Icon as={FaGithub} color="secondary" boxSize={6} mr={2} />
              <Text>New York, NY 10012, US</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaEnvelope} color="secondary" boxSize={6} mr={2} />
              <Text>info@example.com</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaPhone} color="secondary" boxSize={6} mr={2} />
              <Text>+ 01 234 567 88</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaPrint} color="secondary" boxSize={6} mr={2} />
              <Text>+ 01 234 567 89</Text>
            </Flex>
          </VStack>
        </Flex>
      </Container>

      <Box bg="gray" py={4} textAlign="center">
        © 2023 Copyright:
        <Link fontWeight="bold" href="#" _hover={{ textDecor: "none" }}>
          Anime Project
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
