import { useState } from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

function FeedbackOptions() {
  const feedbackSate = useState("");

  return (
    <>
      <div className={s.btnList}>
        {options.map((option) => {
          return (
            <button
              key={option}
              type="button"
              className={s.feedbackBtn}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
