import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Icon from "../../../components/atoms/Icon";
import Image from "../../../components/atoms/Image";
import Text from "../../../components/atoms/Text";

const FeedbackLists = ({ feedbacks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    ref.current.style.left = `-${(100 / 3) * currentIndex}%`;
  }, [currentIndex]);

  const ref = useRef(null);

  const onHandleChangeFeedback = (val) => {
    setCurrentIndex((prevState) => prevState + val);
  };
  return (
    <div className="home__feedbackLists">
      {currentIndex < feedbacks.length - 2 && (
        <Icon
          onIconClick={onHandleChangeFeedback.bind(this, 1)}
          name="ArrowRight1"
          className="home__feedbackArrow home__feedbackArrow--right"
        />
      )}
      {currentIndex >= 0 && (
        <Icon
          onIconClick={onHandleChangeFeedback.bind(this, -1)}
          name="ArrowRight1"
          className="home__feedbackArrow home__feedbackArrow--left"
        />
      )}
      <ul ref={ref} style={{ width: `${(feedbacks.length * 100) / 3}%` }}>
        {feedbacks.map((feedback, index) => (
          <li key={index}>
            <div
              className={`home__feedbackContainer ${
                index == currentIndex + 1
                  ? "home__feedbackContainer--current"
                  : null
              }`}
            >
              <div className="home__feedbackText">
                <Text variant="pl-17-1 u-text-justify">{feedback.text}</Text>
                <span className="home__feedbackCaret">&nbsp;</span>
              </div>
              <Image name={feedback.picture} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  feedbacks: state.utils.feedbacks,
});

export default connect(mapStateToProps)(FeedbackLists);
