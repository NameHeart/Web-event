import React, { useState } from "react";
import { HeadBarStyled } from "./styled";
import Image from "next/image";
import headbar from "../../../../public/assets/images/headbar.png";
import carbon_search from "../../../../public/assets/images/carbon_search.png";

function HeaderBar() {
  const [selectedLanguage, setSelectedLanguage] = useState("ไทย");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <HeadBarStyled>
      <div className="header">
        <div className="header-left">
          <Image alt="รูปภาพ" src={headbar} className="banner_image" />
        </div>
        <div className="header-center">
          <Image alt="รูปภาพ" src={carbon_search} className="carbon_image" />
          <input
            type="text"
            placeholder={selectedLanguage === "ไทย" ? "ค้นหา" : "Search"}
          />
        </div>
        <div className="header-right">
          <button
            className={`button_chang ${
              selectedLanguage === "ไทย" ? "active" : ""
            }`}
            onClick={() => handleLanguageChange("ไทย")}
          >
            ไทย
          </button>
          <div className="thai_eng">|</div>

          <button
            className={`button_chang ${
              selectedLanguage === "English" ? "active" : ""
            }`}
            onClick={() => handleLanguageChange("English")}
          >
            English
          </button>
        </div>
      </div>
    </HeadBarStyled>
  );
}

export default HeaderBar;
