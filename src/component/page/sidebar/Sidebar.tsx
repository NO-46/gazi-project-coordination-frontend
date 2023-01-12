import {ReactComponent as ExternalIcon} from "../../../core/ui/icon/external.svg";

import "./_sidebar.scss";

import {NavLink, NavLinkProps} from "react-router-dom";
import {List, ListItem} from "@hipo/react-ui-toolkit";
import classNames from "classnames";

import {useAppContext} from "../../../core/app/AppContext";
import {SIDEBAR_FOOTER_LINKS, SIDEBAR_LINKS} from "./util/sidebarConstants";

function Sidebar({customClassName}: {customClassName?: string}) {
  const {
    state: {account}
  } = useAppContext();
  const navlinkClassnames: NavLinkProps["className"] = ({isActive}) =>
    classNames("sidebar__nav-link", {
      "sidebar__nav-link--active": isActive
    });

  return (
    <div className={classNames("sidebar", customClassName)}>
      <nav className={"sidebar__nav"}>
        <List customClassName={"sidebar__nav-list"} items={SIDEBAR_LINKS}>
          {(item) => (
            <ListItem
              customClassName={classNames(
                "typography--button",
                "text-color--main",
                "sidebar__nav-list-item",
                {"sidebar__nav-list-item--hide": item.shouldNeedUser && !account}
              )}>
              <NavLink
                to={item.to}
                // eslint-disable-next-line react/jsx-no-bind
                className={navlinkClassnames}>
                {item.icon}

                {item.text}
              </NavLink>
            </ListItem>
          )}
        </List>
      </nav>

      <div className={"sidebar__footer"}>
        <List customClassName={"sidebar__footer-list"} items={SIDEBAR_FOOTER_LINKS}>
          {(item) => (
            <ListItem
              customClassName={"typography--secondary-body sidebar__footer-list-item"}>
              <a
                href={item.to}
                className={"sidebar__footer-link"}
                rel={"noopener noreferrer"}
                target={"_blank"}>
                {item.text}

                <ExternalIcon
                  className={"sidebar__footer-list-item__external-icon"}
                  width={16}
                  height={16}
                />
              </a>
            </ListItem>
          )}
        </List>

        <div className={"sidabar__footer__copyright"}>
          <p className={"typography--secondary-body text-color--gray"}>
            {"© 2023 Gazi Üniversitesi"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
