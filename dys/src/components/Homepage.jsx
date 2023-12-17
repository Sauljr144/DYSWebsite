import React from "react";
import {
  Box,
  Container,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Button,
  Link,
} from "@chakra-ui/react";
import logo from "../images/DYS-B.png";
import BG from "../images/BG.jpg";

const Homepage = () => {
  return (
    <>
      <VStack>
        <Container ms={5} me={5} maxW="container.xl" centerContent mt={10}>
          <HStack>
            <Box boxSize="120px">
              <Image
                src={logo}
                alt="DYS Logo"
                bgPosition="center"
                bgSize="cover"
              />
            </Box>
          </HStack>
        </Container>
        <Container ms={5} me={5} mt={0} mb="100px" maxW="container.xl">
          <SimpleGrid
            columns={{ sm: 1, md: 3, lg: 3 }}
            spacingX="40px"
            spacingY="40px"
          >
            <GridItem colSpan={3}>
              <Box
                display="flex"
                alignItems="Center"
                width="100%"
                height="450px"
                padding="20px"
                borderRadius={30}
                bgImage={BG}
                bgPosition="top"
                bgSize="cover"
                justifyContent={"center"}
              >
                <Text
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={10}
                  textTransform="uppercase"
                  fontSize={40}
                  fontWeight={700}
                  color="white"
                >
                  Character Building For Eternity
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={3}>
              <Box
                display="flex"
                alignItems="Center"
                width="100%"
                height="200px"
                padding="20px"
                borderRadius={30}
                justifyContent={"center"}
                flexDirection={"column"}
              >
                <Text
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={10}
                  fontSize={35}
                  fontWeight={700}
                  color="black"
                >
                  Join our online seminar!
                </Text>
                <Text
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={10}
                  fontSize={30}
                  fontWeight={500}
                  color="black"
                  mt={2}
                >
                  Every Sunday from Dec. 17 - Mar. 10{" "}
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 3, sm: 3, md: 1, lg: 1 }}>
              <Box
                display="flex"
                flexDirection={"column"}
                width="100%"
                height="450px"
                padding="25px"
                borderRadius={30}
                bgColor={"#F5F5F5"}
                bgPosition="top"
                bgSize="cover"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={6}
                  fontSize={{ base: 20, md: 18, lg: 20 }}
                  fontWeight={500}
                  color="black"
                >
                  Two international days!
                </Text>
                <Text
                  mt="15px"
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={7}
                  fontSize={{ base: 24, md: 20, lg: 30 }}
                  fontWeight={700}
                  color="black"
                >
                  Dec. 17 & Mar. 10
                </Text>
                <Text
                  mt="15px"
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={6}
                  fontSize={20}
                  fontWeight={500}
                  color="black"
                >
                  6:00 - 8:00 PM Central Time
                </Text>
                <Box>
                  <Link
                    href="https://us02web.zoom.us/j/82269281496?pwd=aHFaM1JkaWY5ZldxYUFWTWxLcUozZz09"
                    isExternal
                  >
                    <Button
                      colorScheme="blackAlpha"
                      variant="outline"
                      fontWeight={700}
                      textColor={"black"}
                      borderWidth={2}
                      mt={10}
                    >
                      Join
                    </Button>
                  </Link>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 3, sm: 3, md: 1, lg: 1 }}>
              <Box
                display="flex"
                flexDirection={"column"}
                width="100%"
                height="450px"
                padding="25px"
                borderRadius={30}
                bgColor={"#F5F5F5"}
                bgPosition="top"
                bgSize="cover"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={6}
                  fontSize={{ base: 20, md: 18, lg: 20 }}
                  fontWeight={500}
                  color="black"
                >
                  Join our English Group!
                </Text>
                <Text
                  mt="15px"
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={6}
                  fontSize={{ base: 24, md: 20, lg: 30 }}
                  fontWeight={700}
                  color="black"
                >
                  Dec. 24 - Mar. 3
                </Text>
                <Text
                  mt="15px"
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={7}
                  fontSize={20}
                  fontWeight={500}
                  color="black"
                >
                  6:00 - 8:00 PM Central Time
                </Text>
                <Box>
                    <Link href="https://us02web.zoom.us/j/5909278766?pwd=cGhpNzh4TlhlcnVrdXZ1WDBIUXFtQT09">
                    
                        <Button
                            colorScheme="blackAlpha"
                            variant="outline"
                            fontWeight={700}
                            textColor={"black"}
                            borderWidth={2}
                            mt={10}
                        >
                            Join
                        </Button>
                    </Link>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 3, sm: 3, md: 1, lg: 1 }}>
              <Box
                display="flex"
                flexDirection={"column"}
                width="100%"
                height="450px"
                padding="25px"
                borderRadius={30}
                bgColor={"#F5F5F5"}
                bgPosition="top"
                bgSize="cover"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={6}
                  fontSize={{ base: 20, md: 18, lg: 20 }}
                  fontWeight={500}
                  color="black"
                >
                  Join our Spanish Group!
                </Text>
                <Text
                  mt="15px"
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={7}
                  fontSize={{ base: 24, md: 20, lg: 30 }}
                  fontWeight={700}
                  color="black"
                >
                  Dec. 24 - Mar. 3
                </Text>
                <Text
                  mt="15px"
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={6}
                  fontSize={20}
                  fontWeight={500}
                  color="black"
                >
                  6:00 - 8:00 PM Central Time
                </Text>
                <Box>
                  <Button
                    colorScheme="blackAlpha"
                    variant="outline"
                    fontWeight={700}
                    textColor={"black"}
                    borderWidth={2}
                    mt={10}
                  >
                    Join
                  </Button>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 3, sm: 3, md: 1, lg: 1 }}>
              <Box
                display="flex"
                flexDirection={"column"}
                width="100%"
                height="450px"
                padding="25px"
                borderRadius={30}
                bgColor={"#F5F5F5"}
                bgPosition="top"
                bgSize="cover"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={6}
                  fontSize={{ base: 20, md: 18, lg: 20 }}
                  fontWeight={500}
                  color="black"
                >
                  Join our Europe Group!
                </Text>
                <Text
                  mt="15px"
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={7}
                  fontSize={{ base: 24, md: 20, lg: 30 }}
                  fontWeight={700}
                  color="black"
                >
                  Dec. 24 - Mar. 3
                </Text>
                <Text
                  mt="15px"
                  fontFamily="Roboto"
                  textAlign="center"
                  lineHeight={6}
                  fontSize={20}
                  fontWeight={500}
                  color="black"
                >
                  6:00 - 8:00 PM Europe Time
                </Text>
                <Box>
                  <Link href="https://us02web.zoom.us/j/5909278766?pwd=cGhpNzh4TlhlcnVrdXZ1WDBIUXFtQT09"> 
                  
                  <Button
                    colorScheme="blackAlpha"
                    variant="outline"
                    fontWeight={700}
                    textColor={"black"}
                    borderWidth={2}
                    mt={10}
                  >
                    Join
                  </Button>
                  </Link>
                </Box>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Container>
      </VStack>
    </>
  );
};

export default Homepage;
