import { Container, Heading } from "@chakra-ui/react";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Maths Challenge</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
          Maths Challenge
        </Heading>
      </Container>
    </>
  );
};

export default IndexPage;
