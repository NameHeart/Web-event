import React from "react";
import Image from "next/image";
import { CardItemStyled } from "./styled";
import { useRouter } from "next/router";

const CardItem = ({ image, title, description, target }) => {
  const router = useRouter();

  const handleClick = () => {
    if (target) {
      router.push(target);
    }
  };

  return (
    <CardItemStyled>
      <div className="card" onClick={handleClick}>
        <div className="card_image">
          <Image alt="รูปภาพ" src={image} width={300} height={200} className="image_cards" />
        </div>
        <div className="text">
          <div className="text_title">{title}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </CardItemStyled>
  );
};

export default CardItem;
