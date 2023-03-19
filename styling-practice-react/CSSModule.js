import classNames from "classnames";
import styles from "./CSSModule.module.css";

const cx = classNames.bind(styles); //미리 styles에서 class를 받아오도록 설정하고

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요.<span className="something">CSS</span>
    </div>
  );
};

const sizes = {
  desktop: 1034,
  tablet: 343,
};
