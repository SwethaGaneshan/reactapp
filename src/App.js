import "./App.css";
// import ClassComponent, { ExamCompo } from "./components/classCompo";
// import Greeting from "./components/functionalCompo";
// import { Functional } from "./components/functionalCompo";
// import Counts, { CounterApp } from "./countertask/counter";
// import UnControlled from "./forms/uncontrolled";
// import Controlled from "./forms/controlled";
// import Mounting from "./componentLifcycle/mounting";
// import Updating from "./componentLifcycle/updating";
// import UnMounting from "./componentLifcycle/unmounting";
// import ProductList from "./list/productlist";
// import Crud from "./details/crud";
// import Hooks from "./reacthooks/hooks";
import Todo from "./router/todo";
function App() {
  return (
    <div className="App">
      {/* <h2>CounterApp</h2> */}
      {/* <ClassComponent />
        <ExamCompo />
        <Greeting />
        <Functional /> */}
      {/* <Counts />
        <CounterApp /> */}
      {/* <UnControlled /> */}
      {/* <Controlled /> */}
      {/* <Mounting greet="HI" /> */}
      {/* <Updating /> */}
      {/* <UnMounting /> */}
      {/* <ProductList /> */}
      {/* <Crud /> */}
      {/* <Hooks /> */}
      <Todo />
    </div>
  );
}

export default App;
