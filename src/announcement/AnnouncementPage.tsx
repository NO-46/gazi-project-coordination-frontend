import "./_announcements-page.scss";

import {List, ListItem} from "@hipo/react-ui-toolkit";
/* eslint-disable import/no-duplicates */
import formatWithOptions from "date-fns/fp/formatWithOptions";
/* eslint-enable import/no-duplicates */

import {MOCK_ANNOUNCEMENTS} from "./mock/mockAnnouncement";
import useSetPageTitle from "../core/util/hook/useSetPageTitle";

function AnnouncementPage() {
  useSetPageTitle("Duyurular");

  return (
    <div className={"announcements-page"}>
      <h1 className={"typography--display announcements-page__title"}>{"Duyurular"}</h1>

      <List
        customClassName={"announcements-page__announcements"}
        items={MOCK_ANNOUNCEMENTS}>
        {(item) => (
          <ListItem customClassName={"announcements-page__announcements__item"}>
            <div
              className={
                "typography--small-subhead announcements-page__announcements__item__title has-space-between is-aligned-center"
              }>
              <div>{`${item.title}`}</div>

              <div className={"text-color--gray"}>{item.fromWho}</div>
            </div>

            <div
              className={
                "typography--medium-body text-color--gray announcements-page__announcements__item__description"
              }>
              {item.content}
            </div>

            <div
              className={
                "typography--tagline text-color--gray-light announcements-page__announcements__item__date"
              }>{`${formatWithOptions({}, "MMM d, yyyy HH:mm")(item.date)}`}</div>
          </ListItem>
        )}
      </List>
    </div>
  );
}

export default AnnouncementPage;
