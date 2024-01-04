import React from "react";
import Head from "next/head";
import { BlogPageStyled } from "./styled";
import Headbar from "@/components/HeadBar/Headbar";
import FooterWidget from "@/widgets/FooterWidget";
import SecBlogWidget from "@/widgets/SecBlogWidget";

const BlogPage = () => {
  return (
    <>
      {" "}
      <Head>
        <title>Web Event</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BlogPageStyled>
        <Headbar />
        <div className="head_title">Blog</div>
        <div className="body_container_layout">
          <SecBlogWidget />
        </div>
        <div className="footer_layout">
          <FooterWidget />
        </div>
      </BlogPageStyled>
    </>
  );
};

export default BlogPage;
