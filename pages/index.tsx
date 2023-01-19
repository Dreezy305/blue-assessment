import LeftSideBar from "@/components/LeftSideBar";
import TopBar from "@/components/TopBar";
import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Blue Assessment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cube.svg" />
      </Head>
      <main className="flex flex-row bg-dark">
        <div className="left pt-3 hidden lg:block md:block">
          <LeftSideBar />
        </div>
        <div className="right flex flex-col items-start px-5">
          <TopBar />
        </div>
      </main>
    </>
  );
}
