import React from "react";
class ClassComponent extends React.Component {
  render() {
    return (
      <div className="classcomponent">
        <h2>Class</h2>
      </div>
    );
  }
}
export class ExamCompo extends React.Component {
  render() {
    return (
      <div className="examcomponent">
        <h2>Example Components</h2>
      </div>
    );
  }
}
export default ClassComponent;
