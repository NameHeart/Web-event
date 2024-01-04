import React from "react";
import Image from "next/image";
import { CardBlogStyled } from "./styled";
import { Buttons } from "@/components";
import { MdLoyalty } from "react-icons/md";

const CardBlog = ({
  head_image,
  image_1,
  image_2,
  image_banner,
  title,
  description1,
  description2,
  description3,
  description4,
  textfooter,
  date,
}) => {
  return (
    <CardBlogStyled>
      <div className="blog_container">
        <div className="card_image">
          <Image alt="รูปภาพ" src={head_image} className="img_card" />
        </div>
        <div className="card">
          <div className="text">
            <div className="text_date">{date}</div>
            <div className="text_title">{title}</div>
            <div className="description1">{description1}</div>
            <div className="description2">{description2}</div>
            <Image alt="รูปภาพ" src={image_1} className="card_img" />
            <div className="description2">{description3}</div>
            <Image alt="รูปภาพ" src={image_2} className="card_img" />
            <div className="description2">{description4}</div>
            <Image alt="รูปภาพ" src={image_banner} className="card_banner" />
            <div className="button">
              <Buttons.BgStandard theme_green label={"Contact Us"} />
            </div>
            <div className="text_underline">
              <MdLoyalty className="mdloyal" />
              {textfooter}
            </div>
          </div>
        </div>
      </div>
    </CardBlogStyled>
  );
};

export default CardBlog;
