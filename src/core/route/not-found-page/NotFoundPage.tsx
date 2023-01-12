import {Link} from "react-router-dom";

import useSetPageTitle from "../../util/hook/useSetPageTitle";
import ROUTES from "../routes";

function NotFoundPage() {
  useSetPageTitle("404");

  return (
    <div>
      <h1>{"Not Found"}</h1>

      <p>{"We couldn't find this page"}</p>

      <Link to={ROUTES.HOME}>{"Go Home"}</Link>
    </div>
  );
}

export default NotFoundPage;
