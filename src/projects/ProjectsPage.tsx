import {ReactComponent as PersonalCardIcon} from "../core/ui/icon/personalcard.svg";
import {ReactComponent as GroupIcon} from "../core/ui/icon/group.svg";
import {ReactComponent as UserIcon} from "../core/ui/icon/user.svg";
import {ReactComponent as StarIcon} from "../core/ui/icon/star.svg";

import "./_projects-page.scss";

import {generatePath, useNavigate} from "react-router-dom";
import {List, ListItem} from "@hipo/react-ui-toolkit";

import useSetPageTitle from "../core/util/hook/useSetPageTitle";
import {PROJECT_DATA} from "./mock/mockProjectsData";
import ROUTES from "../core/route/routes";

function ProjectsPage() {
  const navigate = useNavigate();

  useSetPageTitle("Projeler");

  return (
    <div className={"projects-page"}>
      <h1 className={"typography--display"}>{"Projeler"}</h1>

      <List items={PROJECT_DATA} customClassName={"projects-page__list"}>
        {(item) => (
          <ListItem
            clickableListItemProps={{
              onClick: () =>
                navigate({
                  pathname: item.userProject
                    ? ROUTES.MY_PROJECT
                    : generatePath(ROUTES.PROJECT_DETAILS, {
                        id: item.id
                      })
                })
            }}
            customClassName={"projects-page__list__item"}>
            {item.userProject && (
              <StarIcon className={"projects-page__list__item__star-icon"} />
            )}

            <h1 className={"typography--subhead projects-page__list__item__title"}>
              {item.title}
            </h1>

            <p
              className={
                "typography--medium-body text-color--gray projects-page__list__item__description"
              }>
              {item.description}
            </p>

            <div>
              <div className={"projects-page__list__item__with-icon"}>
                <PersonalCardIcon />

                {item.advisor.name}
              </div>

              <div className={"projects-page__list__item__with-icon"}>
                <GroupIcon />

                {`Grup No -> ${item.group_no}`}
              </div>

              <div className={"projects-page__list__item__with-icon"}>
                <UserIcon />

                {`Üye Sayısı -> ${item.group_members.length}`}
              </div>
            </div>
          </ListItem>
        )}
      </List>
    </div>
  );
}

export default ProjectsPage;
