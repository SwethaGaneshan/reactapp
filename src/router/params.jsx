import { useParams } from "react-router-dom";
function useparams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}
export default useparams;
