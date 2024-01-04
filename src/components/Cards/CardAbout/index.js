import React from "react";
import Image from "next/image";
import { CardAboutStyled } from "./styled";

const CardAbout = ({ image, title, description, image_logo }) => {
  return (
    <CardAboutStyled>
      <div className="card">
        <div className="card_image">
          <Image alt="รูปภาพ" src={image} className="image_card" />
        </div>
        <div className="text">
          <div className="text_about">About us.</div>
          <div className="img_card">
            <Image alt="รูปภาพ" src={image_logo} className="image_logo" />
          </div>
          <div className="text_title">{title}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </CardAboutStyled>
  );
};

export default CardAbout;
