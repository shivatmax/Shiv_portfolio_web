import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Transitions from "@/Components/Transitions";

// Images for the projects
import portfolio from "../../public/images/projects/portfolio.png";
import blog from "../../public/images/projects/blog.png";
import flutter from "../../public/images/projects/Flutter-u.png";
import hugginface from "../../public/images/projects/hugginface.png";
import multipdf from "../../public/images/projects/gemini.png";
import scrapy from "../../public/images/projects/scrappy.png";
import space from "../../public/images/projects/space.png";
import stocky from "../../public/images/projects/stocky3-b.png";

const FeatureProject = ({ type, title, summary, img, github, link }) => {
  return (
    <article className="dark:bg-dark dark:border-light w-full flex relative items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-primary xs:-right-3 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:hover:un"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base "
          >
            {" "}
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, github, link }) => {
  return (
    <>
      <article className=" dark:bg-dark dark:border-light w-full flex relative shadow-2xl items-center flex-col justify-center rounded-2xl border border-solid border-dark bg-light p-6 xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-primaryDark md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />

        <Link
          href={link}
          target="_blank"
          className=" w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full dark:text-light text-left text-3xl font-bold lg:text-xl">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="w-full justify-between mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10 md:w-6">
              {" "}
              <GithubIcon className={"dark:fill-light"} />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold md:text-base"
            >
              {" "}
              Visit
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Shiv Awasthi | Project Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions />
      <main className="w-full mb-16 flex flex-col justify-center items-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-5 ">
            {Projectx(
              "Space Tourism App",
              "https://tourismoffice.vercel.app/",
              "https://github.com/shivatmax/Space-Tourism",
              "Launching the future of space exploration with the NASA Planetary Tourism Office: A web experience crafted with React, Flask, and AI, featuring interactive 3D models via ThreeJS, styled with Tailwind, and powered by APIs and LLM for an immersive journey across the cosmos.",
              space
            )}
            {Projectx(
              "MultiPDF- AI",
              "https://geminid.streamlit.app/",
              "https://github.com/shivatmax/Gemini-multiPDF",
              "Empowering document management with MultiPDF-AI: A cutting-edge platform, as showcased on Streamlit and GitHub, leveraging LangChain, vector databases, and advanced embedding techniques for efficient PDF handling and intelligent insights.",
              multipdf
            )}
            {Projectx(
              "B L O G Website",
              "https://decoders.vercel.app/",
              "https://github.com/shivatmax/Personal-blog-website",
              "Transforming ideas into digital narratives with a Notion-powered blog website: Built with Next.js, styled by Tailwind CSS, seamlessly integrated via Notion API, and deployed on Vercel for a sleek, efficient blogging platform",
              blog
            )}
            {Projectx(
              "University Attendance App - Flutter",
              "https://github.com/shivatmax/Flutter_Attendance",
              "https://github.com/shivatmax/Flutter_Attendance",
              "Streamlining academic presence with the University Attendance App: A blend of Flutter development, RESTful APIs, and Figma designs, underpinned by strategic management and ideation for seamless tracking and engagement in educational environments.",
              flutter
            )}
            {Projectx(
              "S C R A P Y - Job Scraper",
              "https://scrapy.streamlit.app/",
              "https://github.com/shivatmax/Scrapy",
              "Automating career opportunities discovery with SCRAPY: A Job Scraper tool fetching listings from LinkedIn, Indeed, and Glassdoor, efficiently organizing them into an Excel sheet for streamlined job search and analysis.",
              scrapy
            )}
            {Projectx(
              "S T O C K Y - Stock Market AI",
              "https://stocky.streamlit.app/",
              "https://github.com/shivatmax/StockMarketAI",
              "Revolutionizing investment strategies with AI: Leveraging Large Language Models, fine-tuning, generative AI, and quantitative finance insights through Langchain and APIs for unparalleled stock market analysis and advice.",
               stocky
            )}
            {Projectx(
              "I S I C - Skin Lesion Classification Models - Reseacrh Paper",
              "https://github.com/shivatmax/ISIC_skin-lesion-classification-model",
              "https://github.com/shivatmax/ISIC_skin-lesion-classification-model",
             "Advancing dermatological diagnostics with a Skin Lesion Classification Model, integrating Deep Learning and Machine Learning for precise data analysis and image classification using PyTorch.",
              hugginface
            )}
            {Projectx(
              "P O R T F O L I O",
              "https://shivawasthi.co",
              "https://github.com/shivatmax/Shiv_portfolio_web",
              "This project is a personal Nextjs website for Me, a B.Tech-M.Tech (Integrated) Computer Science and Engineering student. The website serves as a digital portfolio, showcasing my skills, interests, and contact information. Here are the key sections: Header: The header contains the navigation bar with links to different sections of the website. The brand name Shiv Awasthi is also part of the header.",
              portfolio
            )}
            

            {/* {Projectx("....")} */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
function Projectx(
  project_name,
  project_link,
  project_github,
  project_summary,
  project_img
) {
  return (
    <div className="col-span-12">
      <FeatureProject
        type={"FEATURE PROJECT"}
        title={project_name}
        link={project_link}
        github={project_github}
        img={project_img}
        summary={project_summary}
      />
    </div>
  );
}
