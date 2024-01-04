import React from "react";
import Image from "next/image";
import { CardBlogAboutStyled } from "./styled";

const CardBlogAbout = ({ image, title, description }) => {
  return (
    <CardBlogAboutStyled>
      <div className="card">
        <div className="card_image">
          <Image alt="รูปภาพ" src={image} className="img_card" />
        </div>
        <div className="text">
          <div className="text_title">{title}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </CardBlogAboutStyled>
  );
};

export default CardBlogAbout;
