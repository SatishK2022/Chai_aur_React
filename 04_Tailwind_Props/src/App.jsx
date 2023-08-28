import "./App.css";
import Card from "./components/Card";

function App() {

  // const myObj = {
  //   name: "Satish Kumar",
  //   age: 19
  // }

  // const myArr = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="flex items-center">
        <Card name="Satish Kumar" btnText="Click Me" desc="Hello, My Name is Satish Kumar. I am a Web Developer"/>
        <Card name="Nagender Kumar" btnText="Contact Me" desc="Hello, My Name is Nagender Kumar. I am a Web Developer"/>
      </div>
    </>
  );
}

export default App;
