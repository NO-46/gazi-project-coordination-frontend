import {ReactComponent as PersonalCardIcon} from "../core/ui/icon/personalcard.svg";
import {ReactComponent as UserIcon} from "../core/ui/icon/user.svg";
import {ReactComponent as EmailIcon} from "../core/ui/icon/email.svg";
import {ReactComponent as MobileIcon} from "../core/ui/icon/mobile.svg";

import "./_project-detail-page.scss";

import {List, ListItem} from "@hipo/react-ui-toolkit";
import {useParams} from "react-router-dom";

import {PROJECT_DATA} from "../projects/mock/mockProjectsData";

function ProjectDetailPage() {
  const {id} = useParams<{id: string}>();
  const project = PROJECT_DATA.find(({id: itemID}) => itemID === id);

  return (
    <div className={"project-detail-page"}>
      <h1
        className={
          "typography--h1 project-detail-page__title"
        }>{`${project?.title} | ${project?.group_no}`}</h1>

      <div>
        <h1 className={"typography--subhead project-detail-page__description__title"}>
          {"Proje Açıklaması"}
        </h1>
        <p
          className={
            "typography--medium-body text-color--gray project-detail-page__description"
          }>
          {project?.description}
        </p>
      </div>

      <div>
        <h1 className={"typography--subhead project-detail-page__advisor__title"}>
          {"Danışman"}
        </h1>

        <div className={"project-detail-page__advisor"}>
          <div className={"project-detail-page__advisor__with-icon"}>
            <UserIcon />

            <h1>{project?.advisor.name}</h1>
          </div>

          <div className={"project-detail-page__advisor__with-icon"}>
            <MobileIcon />

            {project?.advisor.phone}
          </div>

          <div className={"project-detail-page__advisor__with-icon"}>
            <EmailIcon />

            {project?.advisor.email}
          </div>
        </div>
      </div>

      <div>
        <h1 className={"typography--subhead"}>{"Grup Üyeleri"}</h1>

        {project?.group_members && (
          <List
            items={project?.group_members}
            customClassName={"project-detail-page__group-member-list"}>
            {(item) => (
              <ListItem customClassName={"project-detail-page__group-member-list__item"}>
                <div
                  className={"project-detail-page__group-member-list__item__with-icon"}>
                  <UserIcon />

                  <h1>{item.name}</h1>
                </div>

                <div
                  className={"project-detail-page__group-member-list__item__with-icon"}>
                  <PersonalCardIcon />

                  {item.student_no}
                </div>

                <div
                  className={"project-detail-page__group-member-list__item__with-icon"}>
                  <EmailIcon />

                  {item.email}
                </div>
              </ListItem>
            )}
          </List>
        )}
      </div>
    </div>
  );
}

export default ProjectDetailPage;
