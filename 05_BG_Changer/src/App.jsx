import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed h-full left-5 lg:left-0  lg:bottom-10 flex flex-wrap items-center lg:items-end justify-start lg:justify-center inset-x-0 px-2">
        <div className="flex flex-wrap flex-col lg:flex-row gap-5 bg-white px-5 py-3 rounded-lg lg:rounded-full bg-opacity-60 shadow-lg">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full font-semibold"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full font-semibold"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("salmon")}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold"
            style={{ backgroundColor: "salmon" }}
          >
            Salmon
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full font-semibold"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("skyblue")}
            className="outline-none px-4 py-1 rounded-full font-semibold"
            style={{ backgroundColor: "skyblue" }}
          >
            Sky Blue
          </button>
          <button
            onClick={() => setColor("teal")}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold"
            style={{ backgroundColor: "teal" }}
          >
            Teal
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
