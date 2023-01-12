import "./_sidebar-layout.scss";

import {Outlet, useOutletContext} from "react-router-dom";
import {useReducer, useState} from "react";
import classNames from "classnames";

import Sidebar from "../../component/page/sidebar/Sidebar";
import {
  initialSidebarState,
  SidebarContextType,
  sidebarStateReducer
} from "./sidebarStateReducer";
import PageHeader from "../../component/page/header/PageHeader";
import Banner from "../../component/banner/Banner";
import useOnWindowScroll from "../../core/util/hook/useOnWindowScroll";

const STICKY_HEADER_SCROLL_THRESHOLD = 64;
const STICKY_HEADER_HEIGHT_DIFFERENCE = 0;
const STICKY_HEADER_DEBOUNCE_TIME = 0;

function SidebarLayout() {
  const [state, dispatch] = useReducer(sidebarStateReducer, initialSidebarState);

  const sidebarLayoutClassnames = classNames("sidebar-layout", {
    "sidebar-layout--is-navigation-disable": state.isSidebarDisable,
    "sidebar-layout--hidden": !state.isSidebarVisible
  });
  const [isHeaderSticky, setHeaderIsSticky] = useState(false);

  useOnWindowScroll(
    () => {
      if (isHeaderSticky) {
        setHeaderIsSticky(
          window.scrollY + STICKY_HEADER_HEIGHT_DIFFERENCE >
            STICKY_HEADER_SCROLL_THRESHOLD
        );
      } else {
        setHeaderIsSticky(window.scrollY > STICKY_HEADER_SCROLL_THRESHOLD);
      }
    },
    {debounceTime: STICKY_HEADER_DEBOUNCE_TIME}
  );

  return (
    <div className={sidebarLayoutClassnames}>
      <div className={"sidebar-layout__header-wrapper"}>
        <Banner />

        <PageHeader
          customClassName={classNames("sidebar-layout__topbar", {
            "page-header--sticky": isHeaderSticky
          })}
        />
      </div>

      <div className={"sidebar-layout__content"}>
        <Sidebar
          customClassName={classNames({
            "sidebar--header-sticky": isHeaderSticky
          })}
        />

        <div className={"sidebar-layout__body"}>
          <Outlet context={{state, dispatch}} />
        </div>
      </div>
    </div>
  );
}

export function useSidebarContext() {
  return useOutletContext<SidebarContextType>();
}

export default SidebarLayout;
