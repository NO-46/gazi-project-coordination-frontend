import {ReactComponent as Calendar} from "../../core/ui/icon/calendar.svg";

import "./_banner.scss";

import classNames from "classnames";
import {DateTimer} from "@hipo/react-ui-toolkit";

function Banner() {
  return (
    <div className={classNames("banner typography--h4")}>
      <Calendar className={"banner__calendar-icon"} />

      <DateTimer
        timerType={"up"}
        range={[new Date(), new Date("June 15 2023")]}
        alwaysShowSeconds={true}
        titleMap={{days: "Gün", hours: "Saat", minutes: "Dakika", seconds: "Saniye"}}
      />
    </div>
  );
}

export default Banner;
