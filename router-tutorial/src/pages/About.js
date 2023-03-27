import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>{detail}</p>
      <p>{mode}</p>
      <button onClick={onToggleDetail}>onToggleDetail</button>
      <button onClick={onIncreaseMode}>onIncreaseMode'+1'</button>
    </div>
  );
};

export default About;
