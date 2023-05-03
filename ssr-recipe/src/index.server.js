import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(
  <div> Hello server Side rendering</div>
);

console.log(html);
