import { Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { alloifyEngine } from "../helpers/alloifyEngine";
import Input from "../src/sections/input";
import Output from "../src/sections/output";

const IndexPage = () => {
  const [inputString, setInputString] = useState<string>("");
  const [outputString, setOutputString] = useState<string>("");

  useEffect(() => {
    const output = alloifyEngine(inputString);
    setOutputString(output);
  }, [inputString]);
  return (
    <>
      <Head>
        <title>🇬🇧 Alloify 🇫🇷</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:image"
          content="https://alloify.funt.im/images/preview.jpg"
        />
      </Head>
      <Container maxW="container.xl" maxH="100vh" p={0}>
        <Heading
          w="full"
          h={20}
          m={0}
          py={4}
          textAlign="center"
          color={"blue.700"}
          size="2xl"
        >
          🇬🇧 Alloify 🇫🇷
        </Heading>
        <Text w="full" fontSize="xl" textAlign="center">
          E vory nace woy to umprive year Frunch
        </Text>

        <Flex h="85vh" py={[4, 6, 8]} direction={{ base: "column", md: "row" }}>
          <Input setInputString={setInputString} />
          <Output
            outputString={outputString}
            reroll={() => {
              setOutputString(alloifyEngine(inputString));
            }}
          />
        </Flex>
        <Text
          textAlign="center"
          w="full"
          fontSize="2xl"
          fontFamily={"Funt"}
          p={0}
          mt={-4}
        >
          <Link>Funt.im 🤙</Link>
        </Text>
      </Container>
    </>
  );
};

export default IndexPage;
