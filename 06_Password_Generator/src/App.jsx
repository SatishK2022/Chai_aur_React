import { useCallback, useEffect, useState, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=-{}[]|?";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="h-screen w-full bg-gray-900 text-white flex items-center px-5 selection:bg-orange-500 selection:text-white">
      <div className="w-full max-w-md rounded-lg mx-auto shadow-md px-5 py-5 bg-gray-700">
        <h1 className="text-3xl text-center mb-8 font-bold text-orange-500 underline underline-offset-8">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none text-black px-5 py-2 w-full"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipBoard}
          className="px-5 py-2 bg-orange-500 focus:bg-orange-600 text-white font-semibold">
            Copy
          </button>
        </div>
        <div className="flex gap-x-2 mt-5 flex-col gap-2">
          <div className="flex items-center gap-x-8">
            <input
              className="cursor-pointer accent-orange-500"
              type="range"
              min={5}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>
              Length:{" "}
              <span className="text-orange-500 text-lg font-semibold">
                {length}
              </span>
            </label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              className="accent-orange-500"
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="text-lg" htmlFor="numberInput">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              className="accent-orange-500"
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className="text-lg" htmlFor="charInput">
              Char
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
