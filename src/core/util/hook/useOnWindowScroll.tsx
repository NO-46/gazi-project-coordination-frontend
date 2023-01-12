import {useEffect, useRef} from "react";

const DEFAULT_DEBOUNCE_TIME = 700;

const DEFAULT_OPTIONS = {
  /* Discard emitted scroll events that take less than the specified time */
  debounceTime: DEFAULT_DEBOUNCE_TIME
};

function useOnWindowScroll(callback: VoidFunction, options = DEFAULT_OPTIONS) {
  const timeoutId = useRef<any>(undefined);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId.current);
    };

    function handleScroll() {
      if (!timeoutId.current) {
        timeoutId.current = setTimeout(() => {
          callbackRef.current();
          timeoutId.current = undefined;
        }, options.debounceTime);
      }
    }
  }, [options.debounceTime]);
}

export default useOnWindowScroll;
