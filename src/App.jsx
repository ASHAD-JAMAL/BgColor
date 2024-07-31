import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = new useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              orange
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button
              onClick={() => setColor("silver")}
              className="outline-none px-4 py-1 rounded-full text-white shaddow-lg bg-[#C0C0C0]"
            >
              silver
            </button>
            <button
            onClick={() => setColor("lime")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-[#00FF00]"
            >
              lime
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
