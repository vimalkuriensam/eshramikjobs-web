import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Image from "../../../components/atoms/Image";
import Text from "../../../components/atoms/Text";

const FeedbackLists = ({ feedbacks }) => {
  useEffect(() => {
    ref.current.style.left = `-${(100 / 3) * currentIndex}%`;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef(null);
  return (
    <div className="home__feedback">
      <ul ref={ref} style={{ width: `${(feedbacks.length * 100) / 3}%` }}>
        {feedbacks.map((feedback, index) => (
          <li key={index}>
            <div className="home__feedbackContainer">
              <div className="home__feedbackText">
                <Text variant="pl-17-1">{feedback.text}</Text>
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
