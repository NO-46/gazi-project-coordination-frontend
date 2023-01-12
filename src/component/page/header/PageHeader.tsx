import {ReactComponent as GaziLogo} from "../../../core/ui/image/gazi-logo.svg";
import {ReactComponent as NotificationIcon} from "../../../core/ui/icon/notification.svg";

import "./_page-header.scss";

import {Link, useNavigate} from "react-router-dom";
import classNames from "classnames";

import ROUTES from "../../../core/route/routes";
import Button from "../../button/Button";
import {useAppContext} from "../../../core/app/AppContext";

interface PageHeaderProps {
  customClassName?: string;
}

function PageHeader({customClassName}: PageHeaderProps) {
  const {
    state: {account}
  } = useAppContext();
  const navigate = useNavigate();

  return (
    <header className={classNames("page-header", customClassName)}>
      <Link to={ROUTES.HOME} className={"align-center--vertically"}>
        <GaziLogo />
      </Link>

      <div className={"page-header__action-buttons"}>
        {account && (
          <Link
            className={"page-header__action-buttons__notification-link"}
            to={ROUTES.ANNOUNCEMENT}>
            <NotificationIcon />

            <div className={"page-header__action-buttons__notification-link__dot"} />
          </Link>
        )}

        <Button buttonType={"secondary"} onClick={toggleLoginState}>
          {account?.email || "Giriş Yap"}
        </Button>
      </div>
    </header>
  );

  function toggleLoginState() {
    navigate({
      pathname: account ? ROUTES.SETTINGS : ROUTES.LOGIN
    });
  }
}
export default PageHeader;
