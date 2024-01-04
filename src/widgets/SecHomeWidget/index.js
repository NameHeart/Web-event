import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SecHomeWidgetStyled } from "./styled";
import imagetest from "../../../public/assets/images/imagetest.png";
import imagetest1 from "../../../public/assets/images/imagetest1.png";
import imagetest2 from "../../../public/assets/images/imagetest2.png";
import imagetest3 from "../../../public/assets/images/imagetest3.png";
import banner1 from "../../../public/assets/images/banner1.png";
import Image from "next/image";
import Link from "next/link";

const SecHomeWidget = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    { id: "12345s", image: imagetest },
    { id: "4586s", image: imagetest1 },
    { id: "85698as", image: imagetest },
  ];
  const highlight1Data = [
    {
      id: "21aaa",
      image: imagetest1,
      text1:
        "typesetting industry. Lorem lpsum has been the industry standard dummy.",
      text2: "electronic tyoesetting, remaining essentially unchanged",
      date: "August 16, 2023",
    },
  ];

  const highlight2Data = [
    {
      id: "5896sa",
      image: imagetest2,
      text1:
        "typesetting industry. Lorem lpsum has been the industry standard dummy.",
      text2: "electronic tyoesetting, remaining essentially unchanged",
      date: "August 16, 2023",
    },
    {
      id: "986sa",
      image: imagetest3,
      text1:
        "typesetting industry. Lorem lpsum has been the industry standard dummy.",
      text2: "electronic tyoesetting, remaining essentially unchanged",
      date: "August 16, 2023",
    },
  ];

  return (
    <SecHomeWidgetStyled>
      <div className="sec_home_container">
        <div className="sec_home_content_block">
          <div className="background_slide">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div className="slide" key={index}>
                  <div className="content">
                    <Link href={`/BlogPage/${item.id}`}>
                      <Image src={item.image} className="image" alt="รูปภาพ" />
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="main_title">Highlight</div>
          <div className="slider_highlight">
          <div className="slider_highlight1">
            {highlight1Data.map((item, index) => (
              <Link key={index} href={`/BlogPage/${item.id}`}>
                <div className="highlight1">
                  <div className="content_highlight1">
                    <Image
                      src={item.image}
                      className="image_highlight1"
                      alt="รูปภาพ"
                    />
                    <div className="text-field_highlight1">
                      <div className="text1_highlight1">{item.text1}</div>
                      <div className="text2_highlight1">{item.text2}</div>
                      <div className="text3_highlight1">{item.date}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            </div>

            <div className="slider_highlight2">
              {highlight2Data.map((item, index) => (
                <Link key={index} href={`/BlogPage/${item.id}`}>
                  <div className="highlight2">
                    <div className="content_highlight2">
                      <Image
                        src={item.image}
                        className="image_highlight2"
                        alt="รูปภาพ"
                      />
                      <div className="text-field_highlight2">
                        <div className="text1_highlight2">{item.text1}</div>
                        <div className="text2_highlight2">{item.text2}</div>
                        <div className="text3_highlight2">{item.date}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="banner">
            <Image alt="รูปภาพ" src={banner1} className="banner_image" />
          </div>
        </div>
      </div>
    </SecHomeWidgetStyled>
  );
};

export default SecHomeWidget;
