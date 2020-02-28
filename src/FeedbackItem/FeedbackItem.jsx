import React from "react";

const FeedbackItem = () => {
  return (
    <div className="feedback-container row">
      <div className="feedback">01.01.2020</div>
      <div className="feedback">Лена</div>
      <div className="feedback">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `30%` }}></span>
        </div>
        <div className="rate_text">3.0</div>
      </div>
      <div className="feedback">1000</div>
      <div className="feedback col-wide">
        внимательная, нашла подход к ребенку
      </div>
      <div className="feedback col-wide">
        правильно ставит диагнозы, не назначает лишних лекарств
      </div>
      <div className="feedback col-wide">
        наблюдаемся два года, пока все нравится
      </div>
    </div>
  );
};

export default FeedbackItem;
