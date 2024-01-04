import React, { useState } from "react";
import { SecRecentBlogWidgetStyled } from "./styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardimage from "../../../public/assets/images/cardimage.png";
import CardItem from "@/components/Cards/CardItem";
import { useRouter } from "next/router";
import data from "../../utils/datanew.json";

const SecRecentBlogWidget = ({ showPagination, showSeeMore, card }) => {
  const cardsPerPage = card;
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

  const router = useRouter();

  const handleSeeMoreClick = () => {
    router.push("/RecentPostPage"); // แทน "recent-post-page" ด้วย URL ของหน้า RecentPostPage
  };

  return (
    <SecRecentBlogWidgetStyled>
      <div className="sec_recent_container">
        <div className="sec_recent_content_block">
          <div className="main_title">Blog</div>
          <div className="group_button">
            <button class="button_select">Top Stories</button>
            <button class="button">Banner</button>
            <button class="button">Highlight</button>
            <button class="button">Resent Posts</button>
            <button class="button">Banner</button>
            <button class="button">Blog</button>
          </div>
          <div className="cards-container">
            <div className="cards">
              {displayedData.map((item, index) => (
                <CardItem
                  key={index}
                  image={item.image}
                  title={item.title}
                  target={item.target}
                  description={item.description}
                />
              ))}
            </div>
            {showSeeMore && (
              <div className="button_see-more">
                <button
                  className="see-more-button"
                  onClick={handleSeeMoreClick}
                >
                  See more +
                </button>
              </div>
            )}
          </div>
          <div className="pagination">
            {showPagination && (
              <>
                <button
                  className={`page-button ${
                    currentSlide === 0 ? "disabled" : ""
                  }`}
                  onClick={() => {
                    if (currentSlide > 0) {
                      handleSlideChange(0); // เมื่อคลิกปุ่ม "First" ให้กลับไปยังหน้าแรก
                    }
                  }}
                >
                  First
                </button>
                <button
                  className={`page-button ${
                    currentSlide === 0 ? "disabled" : ""
                  }`}
                  onClick={() => {
                    if (currentSlide > 0) {
                      handleSlideChange(currentSlide - 1);
                    }
                  }}
                >
                  Previous
                </button>

                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    className={`page-button ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => handleSlideChange(index)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  className={`page-button ${
                    currentSlide === totalSlides - 1 ? "disabled" : ""
                  }`}
                  onClick={() => {
                    if (currentSlide < totalSlides - 1) {
                      handleSlideChange(currentSlide + 1);
                    }
                  }}
                >
                  Next
                </button>
                <button
                  className={`page-button ${
                    currentSlide === totalSlides - 1 ? "disabled" : ""
                  }`}
                  onClick={() => handleSlideChange(totalSlides - 1)}
                >
                  Last
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </SecRecentBlogWidgetStyled>
  );
};

export default SecRecentBlogWidget;
