import line from "../../../public/assets/images/footer/line.png";
import Image from "next/image";
import { Buttons } from "@/components";
import { FooterWidgetStyled } from "./styled";
import headbar from "../../../public/assets/images/headbar.png";

const FooterWidget = () => {
  return (
    <FooterWidgetStyled>
      <div className="footer_container">
        <div className="ft_content_block">
          <div className="group_main">
            <div className="main_text_eng">
              <Image alt="รูปภาพ" src={headbar} className="banner_image" />
            </div>
            <div className="main_text_company">SERENE STUDIO</div>
            <div className="main_text_address">
              Location: Lorem ipsum dolor sit amet, Nam ut maximus turpis Nunc
              nec est porta
            </div>
          </div>
          <div className="group_detail">
            <div className="group_service">
              <div className="group_service_head">About Us</div>
              <div className="group_service_list">
                <p>Home</p>
                <p>Event</p>
                <p>Blog</p>
                <p>About us</p>
              </div>
            </div>
            <div className="group_porfolio">
              <div className="group_porfolio_head">Service</div>
              <div className="group_porfolio_list">
                <p>Helper Center</p>
                <p>Terms of Service</p>
                <p>FAQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWidgetStyled>
  );
};

export default FooterWidget;
