import React from "react";

const Header = (props) => {
  return (
    <header>
      <div className="running--line">
        <span>
          Дорогие друзья! Рады сообщить, что возобновлена автомобильная
          перевозка сборных грузов из Китая в Узбекистан
        </span>
      </div>
      <a href="#" className="menu--btn">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <a href="#" className="phone--btn"></a>
      <a href="#" className="social--btn"></a>
      <div className="slog">
        <h2>С нами надежно и быстро!</h2>
      </div>
      <a href="index.htm" className="logo" onClick="return false;">
        <img src="cms/uploads/file_1554882961_363227611.png" />
      </a>

      <div className="header-container">
        <div className="header-top">
          <div className="social">
            <ul>
              {props.instagram && (
                <li>
                  <a
                    href="https://instagram.com/adil_logistic?igshid=1u35p4r7o10nq"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              )}
              {props.facebook && (
                <li>
                  <a
                    href="https://www.facebook.com/adil.logistic.3"
                    target="_blank"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="phone">
            <a href="tel:+77004321000" className="binct-phone-number-1">
              +7 700 432 10 00
            </a>
          </div>
        </div>

        <div className="menu">
          <ul>
            <li className="active">
              <a href="index.htm">Главная</a>
            </li>
            <li>
              <a href="about\index.htm">О компании</a>
            </li>
            <li>
              <a href="864-nashi_uslugi.html">Наши услуги</a>
            </li>
            <li>
              <a href="865-prajs_list.html">Прайс-лист</a>
            </li>
            <li>
              <a href="contacts\index.htm">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
