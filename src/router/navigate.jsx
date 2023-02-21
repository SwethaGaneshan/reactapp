import { useNavigate } from "react-router-dom";
function navigation(Component) {
  return (props) => <Component {...props} nav={useNavigate()} />;
}
export default navigation;
