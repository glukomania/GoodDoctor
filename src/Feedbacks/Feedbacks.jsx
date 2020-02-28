import React from "react";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import "./feedbacks.css";

const Feedbacks = () => {
  return (
    <div className="feedbacks-container">
      <div className="feedbacks-header">
        <div className="feedback-header_wrapper">
          <div className="feedbacks-header_title">Отзывы</div>
          <div className="feedbacks-header_add">
            <button className="feedbacks-header_btn">Добавить отзыв</button>
          </div>
        </div>
        <div className="feedbacks-sorting">
          <div className="sorting-header">Сотировать:</div>
          <div className="sorting-type">по дате</div>
          <div className="sorting-type">по оценке</div>
          <div className="sorting-type">по полезности</div>
        </div>
      </div>

      <div className="feedbacks-list">
        <div className="feedback-header row">
          <div className="feedback-col feedback">дата</div>
          <div className="feedback-col feedback">Имя</div>
          <div className="feedback-col feedback">оценка</div>
          <div className="feedback-col feedback">цена за прием</div>
          <div className="feedback-col feedback col-wide">
            отношение доктора
          </div>
          <div className="feedback-col feedback col-wide">
            компетенция доктора
          </div>
          <div className="feedback-col feedback col-wide">отзыв</div>
        </div>
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
      </div>
    </div>
  );
};

export default Feedbacks;
