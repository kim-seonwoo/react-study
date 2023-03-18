import PropTypes from "prop-types";

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      {name}의 컴포넌트 입니다 <br />
      children의 값을 출력합니다: {children}
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
