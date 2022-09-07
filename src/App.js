import "./Styles/main.scss";
import Paragraph from "./Components/Paragraph";
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">
          <span>/</span> Paragraphs Generator <span>/</span>
        </h1>
        <Paragraph />
      </div>
    </div>
  );
};

export default App;
