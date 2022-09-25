import { Container, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Game from "../src/sections/game";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>The Great Funt.im Maths Challenge</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container
        mt="5"
        maxW={["90vw", "container.lg", "container.xl"]}
        h="93vh"
        p={0}
        bgGradient="linear(to-r, green.200, pink.500)"
        borderRadius="md"
        shadow="2xl"
      >
        <Heading
          w="full"
          py={4}
          textAlign="center"
          color="blue.400"
          bg="whiteAlpha.800"
          size="2xl"
          fontStyle="italic"
          fontFamily="mono"
          borderBottom="8px"
          borderColor="blackAlpha.200"
        >
          ➕✖️ clql8.funt.im ➗➖
        </Heading>
        <Game />
      </Container>
      <Text w="full" textAlign="center" fontFamily="funt" fontSize="3xl">
        Funt.im 🤙
      </Text>
    </>
  );
};

export default IndexPage;
