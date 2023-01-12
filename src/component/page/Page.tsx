import "./_page.scss";

import {useState} from "react";
import classNames from "classnames";
import {Outlet} from "react-router-dom";

import PageHeader from "./header/PageHeader";
import Banner from "../banner/Banner";
import useOnWindowScroll from "../../core/util/hook/useOnWindowScroll";
import useSetPageTitle from "../../core/util/hook/useSetPageTitle";

interface PageProps {
  title: string;
  customClassName?: string;
}

const STICKY_HEADER_SCROLL_THRESHOLD = 64;
const STICKY_HEADER_HEIGHT_DIFFERENCE = 0;
const STICKY_HEADER_DEBOUNCE_TIME = 0;

function Page({customClassName, title}: PageProps) {
  const [isHeaderSticky, setHeaderIsSticky] = useState(false);

  useSetPageTitle(title);

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
    <div className={classNames("page", customClassName)}>
      <div className={"page__header-wrapper"}>
        <Banner />

        <PageHeader />
      </div>

      <main className={"page-content"}>
        <Outlet />
      </main>
    </div>
  );
}

export default Page;
