import React, { useRef, useEffect } from "react";
import Slider from "react-slick";

const CustomSlider = () => {
  let settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    speed: 1000,
    infinite: true,
  };

  return (
    <>
      <Slider className="slider" {...settings}>
        <div>
          <a href="news\1069-rady_soobshhit_vam\index.htm">
            <img
              src="cms/uploads/file_1585563721_328972848.jpg"
              alt="Дорогие друзья! Компания Nurli Obod Logistics работает и принимает заказы онлайн!"
            />
            <div className="slider--text">
              <h3>
                Дорогие друзья! Компания Nurli Obod Logistics работает и
                принимает заказы онлайн!
              </h3>
            </div>
          </a>
        </div>
        <div>
          <a href="865-prajs_list.html">
            <img
              src="cms/uploads/file_1554258794_526428223.jpg"
              alt="Доставка груза из Китая в Узбекистан"
            />
            <div className="slider--text">
              <h3>Доставка груза из Китая в Узбекистан</h3>
            </div>
          </a>
        </div>
        <div>
          <a href="1138-aviaperevozki.html">
            <img
              src="cms/uploads/file_1602066229_753685817.jpg"
              alt="Авиаперевозки из Китая 
доставляем за 3-5 дней"
            />
            <div className="slider--text">
              <h3>Авиаперевозки из Китая доставляем за 3-5 дней</h3>
            </div>
          </a>
        </div>
        <div>
          <a href="895-kontejnernyje_gruzoperevozki.html">
            <img
              src="cms/uploads/file_1554359253_626116268.jpg"
              alt="Контейнерные грузоперевозки из Китая"
            />
            <div className="slider--text">
              <h3>Контейнерные грузоперевозки из Китая</h3>
            </div>
          </a>
        </div>
        <div>
          <a href="896-perevozka_sbornyh_gruzov.html">
            <img
              src="cms/uploads/file_1554358344_683357866.jpg"
              alt="Перевозка сборных грузов из Китая"
            />
            <div className="slider--text">
              <h3>Перевозка сборных грузов из Китая</h3>
            </div>
          </a>
        </div>
        <div>
          <a href="897-transportnaja_logistika.html">
            <img
              src="cms/uploads/file_1554369512_194667890.jpg"
              alt="Транспортная логистика"
            />
            <div className="slider--text">
              <h3>Транспортная логистика</h3>
            </div>
          </a>
        </div>
        <div>
          <a href="913-zheleznodorozhnyje_perevozki_iz_kitaja.html">
            <img
              src="cms/uploads/file_1582687353_916244531.jpg"
              alt="Железнодорожные перевозки из Китая"
            />
            <div className="slider--text">
              <h3>Железнодорожные перевозки из Китая</h3>
            </div>
          </a>
        </div>
      </Slider>
    </>
  );
};

export default CustomSlider;
