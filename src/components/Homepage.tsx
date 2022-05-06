import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Twitter - Elon musk</title>
      </Head>
      <main className="grid grid-cols-9 lg:max-w-7xl lg:mx-auto px-3 overflow-hidden">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </>
  );
};

export default Homepage;
