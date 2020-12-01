import React from "react";
import Head from "next/head";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>테스트</title>
      </Head>
      <Component />
    </>
  );
};

export default App;
