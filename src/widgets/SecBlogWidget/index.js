import React, { useState } from "react";
import { SecBlogWidgetStyled } from "./styled";
import blogoverimage from "../../../public/assets/images/blogoverimage.png";
import blogimage1 from "../../../public/assets/images/blogimage1.png";
import blogimage2 from "../../../public/assets/images/blogimage2.png";
import blogheadimage from "../../../public/assets/images/blogheadimage.png";
import CardBlog from "@/components/Cards/CardBlog";
import banner from "../../../public/assets/images/banner.png";
import CardBlogAbout from "@/components/Cards/CardBlogAbout";
import CardItemBlog from "@/components/Cards/CardItemBlog";
import data from "../../utils/datanew.json";

const SecBlogWidget = () => {
  const data_about = [
    {
      image: blogoverimage,
      title: "SERENE STUDIO",
      description:
        "About us : Lorem ipsum dolor sit amet, Nam ut maximus turpis. Nunc nec est porta",
    },
  ];
  const data_card = [
    {
      head_image: blogheadimage,
      image_1: blogimage1,
      image_2: blogimage2,
      image_banner: banner,
      date: "August 16,2023",
      title:
        "Typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      description1:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words which don't look even slighly believable. If you are going to use a passage of Lorem Ipsum, you",
      description2:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words which don't look even slighly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text, All the Lorem Ipsum generators on Internet tend to repeat predefined chunks as necessary, making this first true generator on the internet. It uses a dictionary.",
      description3:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words which don't look even slighly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text, All the Lorem Ipsum generators on Internet tend to repeat predefined chunks as necessary, making this first true generator on the internet. It uses a dictionary.",
      description4:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words which don't look even slighly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text, All the Lorem Ipsum generators on Internet tend to repeat predefined chunks as necessary, making this first true generator on the internet. It uses a dictionary.",
      textfooter: "variations of passages passages predefined",
    },
  ];

  const cardsPerPage = 1;
  const cardsBlogPerPage = 3;

  const [currentSlide, setCurrentSlide] = useState(0);

  const displayedData = data_card.slice(
    currentSlide * cardsPerPage,
    (currentSlide + 1) * cardsPerPage
  );

  const displayedDataAbout = data_about.slice(
    currentSlide * cardsPerPage,
    (currentSlide + 1) * cardsPerPage
  );

  const displayedDataBlog = data.slice(
    currentSlide * cardsBlogPerPage,
    (currentSlide + 1) * cardsBlogPerPage
  );

  return (
    <SecBlogWidgetStyled>
      <div className="sec_blog_container">
        <div className="sec_blog_content_block">
          <div className="cards-container">
            <div className="cards">
              {displayedData.map((item, index) => (
                <CardBlog
                  key={index}
                  date={item.date}
                  head_image={item.head_image}
                  image_1={item.image_1}
                  image_2={item.image_2}
                  image_banner={item.image_banner}
                  title={item.title}
                  description1={item.description1}
                  description2={item.description2}
                  description3={item.description3}
                  description4={item.description4}
                  textfooter={item.textfooter}
                />
              ))}
              <div className="card_about">
                {displayedDataAbout.map((item, index) => (
                  <CardBlogAbout
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="card_blog">
            {displayedDataBlog.map((item, index) => (
              <CardItemBlog
                key={index}
                image={item.image}
                title={item.title}
                target={item.target}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </SecBlogWidgetStyled>
  );
};

export default SecBlogWidget;
