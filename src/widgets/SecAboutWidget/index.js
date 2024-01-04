import React, { useState } from "react";
import { SecAboutWidgetStyled } from "./styled";
import CardAbout from "@/components/Cards/CardAbout";
import CardSubtitle from "@/components/Cards/CardSubtitle";
import aboutmetest from "../../../public/assets/images/aboutmetest.png";
import banner2 from "../../../public/assets/images/banner2.png";
import banner3 from "../../../public/assets/images/banner3.png";
import headbar from "../../../public/assets/images/headbar.png";
import Image from "next/image";

const SecAboutWidget = () => {
  const data = [
    {
      image: aboutmetest,
      image_logo: headbar,
      title: "SERENE STUDIO",
      description:
        "About us : Lorem ipsum dolor sit amet, Nam ut maximus turpis. Nunc nec est porta",
    },
   
  ];

  const sub_title = [
    {
      title: "sub title. 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with release of Letraset sheets containing Lorem Ipsum passages",
    },
    {
      title: "sub title. 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with release of Letraset sheets containing Lorem Ipsum passages",
    },
    {
      title: "sub title. 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with release of Letraset sheets containing Lorem Ipsum passages",
    },
    {
      title: "sub title. 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with release of Letraset sheets containing Lorem Ipsum passages",
    },

   
  ];

  const cardsPerPage = 1; 
  const totalCards = data.length;
  const totalSlides = Math.ceil(totalCards / cardsPerPage);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const displayedData = data.slice(
    currentSlide * cardsPerPage,
    (currentSlide + 1) * cardsPerPage
  );

  return (
    <div className="About" id="About">
      <SecAboutWidgetStyled>
        <div className="sec_about_container">
          <div className="sec_about_content_block">
            <div className="banner">
              <Image alt="รูปภาพ" src={banner2} className="banner_image" />
              <Image alt="รูปภาพ" src={banner3} className="banner_image" />
            </div>
            <div className="cards_container">
              <div className="cards">
                {displayedData.map((item, index) => (
                  <CardAbout
                    key={index}
                    image={item.image}
                    image_logo={item.image_logo}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
            <div className="cards_container">
              <div className="cards">
                {sub_title.map((item, index) => (
                  <CardSubtitle
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SecAboutWidgetStyled>
    </div>
  );
};

export default SecAboutWidget;
