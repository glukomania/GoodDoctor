import React from "react";
import Feedbacks from "../Feedbacks/Feedbacks";
import "./doctorinfo.css";

const DoctorInfo = () => {
  return (
    <div>
      <div className="doctor-header">
        <div className="header-empty"></div>
        <div className="header-name">Andrea Horaková</div>
        <div className="header-empty"></div>
      </div>

      <div className="header-rate">
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `30%` }}>3.0</span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
      </div>

      <div className="doctor-wrapper">
        <div className="doctor-info">
          <div className="doctor-row">
            <div className="doctor-parameter">учереждение</div>
            <div className="doctor-value">Opatovska Nemocnice</div>
          </div>
          <div className="doctor-row">
            <div className="doctor-parameter">адрес</div>
            <div className="doctor-value">ul. 5 kvetna 145/2</div>
          </div>
          <div className="doctor-row">
            <div className="doctor-parameter">телефон</div>
            <div className="doctor-value">777123456</div>
          </div>
          <div className="doctor-row">
            <div className="doctor-parameter">сайт</div>
            <div className="doctor-value">
              <a href="doctor-super-doctor.cz">doctor-super-doctor.cz</a>
            </div>
          </div>
          <div className="doctor-row">
            <div className="doctor-parameter">языки</div>
            <div className="doctor-value">чешский, английский, русский</div>
          </div>
          <div className="doctor-row">
            <div className="doctor-parameter">коммерческие страховки</div>
            <div className="doctor-value">maxima, ergo</div>
          </div>
          <div className="doctor-row">
            <div className="doctor-parameter">берет новых пациентов</div>
            <div className="doctor-value">да</div>
          </div>
        </div>
        <div className="doctor-map">
          <iframe
            title="map"
            src="https://en.frame.mapy.cz/s/cobofasedu"
            width="90%"
            height="280"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
