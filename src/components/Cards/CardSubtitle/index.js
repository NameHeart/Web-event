import React, { useState } from "react";
import Image from "next/image";
import { CardSubtitleStyled } from "./styled";

const CardSubtitle = ({ title, description }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const separatorStyle = {
    borderBottom: "1px solid #000", // เพิ่มเส้นขีดด้านล่างของ title
    paddingBottom: "10px", // เพิ่มระยะห่างด้านล่างของเส้นขีด
  };

  return (
    <CardSubtitleStyled>
      <div className="card">
        <div style={separatorStyle}>
          <div className="card-text">
            <div className="text_title">
              {title}
              <button
                onClick={toggleDescription}
                className={`description-button ${
                  isDescriptionOpen ? "open" : ""
                }`}
              >
                {isDescriptionOpen ? "-" : "+"}
              </button>
            </div>{" "}
          </div>
        </div>
        <div className="description">
          {isDescriptionOpen && <div>{description}</div>}
        </div>
      </div>
    </CardSubtitleStyled>
  );
};

export default CardSubtitle;
