import React from "react";
import jane from "../../assest/jane.svg";
import devon from "../../assest/devon.svg";
import robert from "../../assest/robert.svg";
//import arrows from "../../assest/arrows.svg";
import "./Section5.css";
import "@fontsource/inter";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CaroLeft from "./CarouselLeft.jsx";
import CaroRight from "./CarouselRight";

const Section5 = () => {
  return (
    <>
      <div className="s5-main-container">
        <div className="s5-main-header">
          <p id="clients">What says our happy Clients</p>
        </div>
        <div className="s5-sub-container">
          <div className="navigation">
            <CaroLeft />
            <CaroRight />
          </div>
          <div className="swiper">
            <Swiper
              style={{ padding: "0px 20px" }}
              spaceBetween={400}
              slidesPerView={"4"}
              modules={[Navigation]}
              initalSlide={0}
            >
              <SwiperSlide>
                <div className="s5-sub1">
                  <div className="s5-img">
                    <img src={jane} alt="jane logo" />
                  </div>
                  <div className="s5-name">
                    <p>Jane Cooper</p>
                  </div>
                  <div className="s5-position">
                    <p>Ceo of Hunt</p>
                  </div>
                  <div className="s5-bio">
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequatduis enim velit
                      mollit Exer. sit aliqua dolor do amet sint. Velit officia
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="s5-sub2">
                  <div className="s5-img">
                    <img src={devon} alt="devon logo" />
                  </div>
                  <div className="s5-name">
                    <p>Devon Lane</p>
                  </div>
                  <div className="s5-position">
                    <p>Ceo of Hunt</p>
                  </div>
                  <div className="s5-bio">
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequatduis enim velit
                      mollit Exer. sit aliqua dolor do amet sint. Velit officia
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="s5-sub3">
                  <div className="s5-img">
                    <img src={robert} alt="robert logo" />
                  </div>
                  <div className="s5-name">
                    <p>Robert Fox</p>
                  </div>
                  <div className="s5-position">
                    <p>Ceo of Hunt</p>
                  </div>
                  <div className="s5-bio">
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequatduis enim velit
                      mollit Exer. sit aliqua dolor do amet sint. Velit officia
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
