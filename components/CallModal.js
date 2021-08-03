import Inputmask from "inputmask";
import { useState, useRef, useEffect } from "react";

const CallModal = () => {
  const [phone, setPhone] = useState();
  const phoneRef = useRef(null);

  useEffect(() => {
    const im = new Inputmask("+7 (999) 999-99-99");
    im.mask(phoneRef.current);
  }, []);

  return (
    <>
      <a
        href="#"
        className="btn-whatsupp open--modal2"
        data-modal="#modal--call"
      >
        <img src="images\whatsapp.svg" alt="" />
        Заказать звонок
      </a>
      <a href="#" className="open--modal" data-modal="#modal--call">
        <i className="fa fa-phone" aria-hidden="true" />
      </a>

      <div className="modal" id="modal--call">
        <div className="modal__layer"></div>
        <div className="modal__block">
          <a href="#" className="close"></a>
          <h3 className="mini-title">Заказать звонок</h3>
          <form
            onSubmit="return sendForm(this, '#modal--finish')"
            className="form_disable"
          >
            <input
              name="fields[name]"
              type="text"
              placeholder="Имя"
              required="required"
            />
            <input
              name="fields[phone]"
              type="text"
              className="tel"
              placeholder="+7 (999) 999-99-99"
              pattern=".{18,18}"
              required="required"
              ref={phoneRef}
            />
            <input
              type="submit"
              value="Отправить"
              className="btn"
              disabled=""
            />
            <input
              type="hidden"
              name="form_name"
              value="Соощение с формы Заказать звонок на сайте www.adil-logistic.kz"
            />
          </form>
        </div>
      </div>
      <div className="modal" id="modal--finish">
        <div className="modal__layer"></div>
        <div className="modal__block">
          <a href="#" className="close"></a>
          <h4 style={{ textAlign: "center" }}>
            Ваше письмо успешно отправлено!
          </h4>
        </div>
      </div>
    </>
  );
};

export default CallModal;
