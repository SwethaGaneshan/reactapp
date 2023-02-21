import "./errorstyle.css";
import { useNavigate } from "react-router-dom";
function Error() {
  const nav = useNavigate();
  return (
    <div
      className="error"
      style={{
        backgroundImage: "url(error3.webp)",
        width: "600px",
        height: "400px",
      }}
    >
      <h1 className="row mt-5 justify-content-center" style={{ color: "Red" }}>
        404
      </h1>
      <h3 style={{ color: "Black" }}>Error occured!-File not Found</h3>
      <button className="btn btn-info mt-3" onClick={() => nav("/login")}>
        BACK
      </button>
    </div>
  );
}
export default Error;
