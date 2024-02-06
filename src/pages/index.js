import AnimatedText from "@/Components/AnimatedText";
import { LinkArrow } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Profilepic from "../../public/images/profile/Shiv.png";
import { RiContactsBookFill } from "react-icons/ri";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Logo from "../../public/images/logo.png";
import Transitions from "@/Components/Transitions";
import { ImUserTie } from "react-icons/im";
import { GoProject } from "react-icons/go";
import {Intro_top, Intro_bottom, Intro_mid } from "@/Text/info";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shiv Awasthi | Home</title>
        <meta name="description" content="SHiv Awasthi Portfolio" />
      </Head>
      <Transitions />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-2 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 md:w-full">
              <Image
                src={Profilepic}
                alt={"DEVELOPER IMAGE"}
                className="w-full h-autolg:w-full md:inline-block md:w-full "
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
             
             
              <AnimatedText
                text="Shiv Awasthi | Cybersecurity Expert | AI / LLM Developer"
                fontColour="!text-yellow-500"
                className="!text-4xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <ul className="my-4 text-base font-medium md:text-sm sm:text-xs ">
                <li className="m-1"> {Intro_top}</li>
                <li className="m-1">{Intro_mid} </li>
                <li className="m-1">{Intro_bottom} </li>
              </ul>
              <div className="flex">
                <div className="flex flex-wrap  items-center place-content-evenly self-start mt-2 content-center lg:self-center">
                <Link
                  href={"/SHIVAWASTHI_RESUME.pdf"}
                  target={"_blank"}
                  className="flex items-center m-1.5 bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  RESUME <LinkArrow className="ml-2"/>
                </Link>
                <Link
                  href={"/projects"}
                  target="_self"
                  className="flex items-center m-1.5 bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  PROJECT <GoProject className="ml-3" />
                </Link>
                </div>
                <div className="flex flex-wrap  items-center self-start mt-2 place-content-evenly content-center lg:self-center">
                <Link
                  href="/about"
                  target={"_self"}
                  className="flex items-center m-1.5 bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  ABOUT  <ImUserTie className="ml-6" />
                </Link>
                <Link
                  href={"mailto:awasthishiv0987@gmail.com"}
                  target="_blank"
                  className="flex items-center m-1.5 bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  CONTACT
                  <RiContactsBookFill className="ml-2" />
                </Link>
                </div>
              </div>
              <div className="flex items-center self-start mt-2 lg:self-center"></div>
            </div>
          </div>
        </Layout>
        <div className="absolute w-24 right-8 bottom-1  inline-block">
          <Image
            src={Logo}
            alt="Bulb"
            className="w-full h-auto md:hidden"
          />
        </div>
      </main>
    </>
  );
}
