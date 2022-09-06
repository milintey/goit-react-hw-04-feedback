import PropTypes from 'prop-types';

export const FeedbackOptions = ({ goodUpdete, badUpdete, neutralUpdete }) => {
  return (
    <>
      <button type="button" onClick={goodUpdete}>
        Good
      </button>
      <button type="button" onClick={neutralUpdete}>
        Neutral
      </button>
      <button type="button" onClick={badUpdete}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  goodUpdete: PropTypes.func.isRequired,
  badUpdete: PropTypes.func.isRequired,
  neutralUpdete: PropTypes.func.isRequired,
};
