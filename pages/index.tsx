import { Container, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Game from "../src/sections/game";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>CLQL8</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Container
        mt="5"
        maxW={["90vw"]}
        h="93vh"
        p={0}
        bgGradient="linear(to-r, green.300, pink.300)"
        borderRadius="md"
        shadow="2xl"
      >
        <Heading
          w="full"
          py={[1, 2, 4]}
          textAlign="center"
          color="blue.400"
          bg="whiteAlpha.800"
          size={"md"}
          fontStyle="italic"
          fontFamily="mono"
          borderBottom="8px"
          borderColor="blackAlpha.200"
        >
          ➕✖️ clql8.funt.im ➗➖
        </Heading>
        <Game />
      </Container>
      <Text w="full" textAlign="center" fontFamily="funt">
        Funt.im 🤙
      </Text>
    </>
  );
};

export default IndexPage;
