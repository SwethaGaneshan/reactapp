import "./assets/styles.css";
function Greeting() {
  let styles = {
    backgroundColor: "aqua",
    color: "red",
    fontSize: "20px",
    padding: "10px",
  };
  return (
    <div className="greeting">
      <button className="inline-btn" style={styles}>
        BUTTON1
      </button>
      <button className="external-btn">BUTTON2</button>
    </div>
  );
}
export function Functional() {
  return (
    <div className="func">
      <h2>Functional</h2>
    </div>
  );
}
export default Greeting;
