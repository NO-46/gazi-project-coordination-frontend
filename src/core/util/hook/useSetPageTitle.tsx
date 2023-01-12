import {useLayoutEffect} from "react";

function useSetPageTitle(title: string) {
  useLayoutEffect(() => {
    document.title = `${title} | BMBPK`;
  }, [title]);
}

export default useSetPageTitle;
