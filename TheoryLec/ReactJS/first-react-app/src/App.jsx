import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";
import Footer from "./Components/Footer.jsx";

// App is a functional component
// Name of component should start with a capital letter
function App() {
  // let name = "John";
  // let names = ["John", "Jane", "Doe"];
  
  let students = [
    {name: "Ravi", age: 20},
    {name: "Ankit", age: 21},
    {name: "Suman", age: 19}
  ];
  
  return (
    <>
      <Header />
      {/* <Main name={name}/> */}
      {/* <Main names={names}/> */}
      <Main students={students}/>
      <Footer/>
    </>
  )
}

export default App
