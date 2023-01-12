import {ReactComponent as PersonalCardIcon} from "../core/ui/icon/personalcard.svg";
import {ReactComponent as UserIcon} from "../core/ui/icon/user.svg";
import {ReactComponent as EmailIcon} from "../core/ui/icon/email.svg";
import {ReactComponent as MobileIcon} from "../core/ui/icon/mobile.svg";
import {ReactComponent as DangerIcon} from "../core/ui/icon/danger.svg";

import "./_my-project-page.scss";

import {List, ListItem} from "@hipo/react-ui-toolkit";
import {useNavigate, Link} from "react-router-dom";

import useSetPageTitle from "../core/util/hook/useSetPageTitle";
import {PROJECT_DATA} from "../projects/mock/mockProjectsData";
import Button from "../component/button/Button";
import ROUTES from "../core/route/routes";
import {DOCUMENT_MOCK_DATA} from "./document/mock/documentMockData";

function MyProjectPage() {
  const project = PROJECT_DATA.find(({id: itemID}) => itemID === "46");
  const navigate = useNavigate();
  const waitingDocuments = DOCUMENT_MOCK_DATA.filter(
    ({isUploaded}) => isUploaded === false
  );

  useSetPageTitle("Projem");

  return (
    <div className={"my-project-page"}>
      <div className={"my-project-page__title"}>
        <h1 className={"typography--h1"}>{`${project?.title} | ${project?.group_no}`}</h1>

        <Button buttonType={"secondary"} onClick={handleNavigateDocument}>
          {"Dokumanlar"}
        </Button>
      </div>

      {waitingDocuments.length > 0 && (
        <div className={"my-project-page__waiting-documents"}>
          <div className={"my-project-page__waiting-documents__title"}>
            <DangerIcon />

            <h1 className={"typography--subhead"}>{"Yüklenmemiş Dökümanlar var"}</h1>
          </div>

          <List
            items={waitingDocuments}
            customClassName={"my-project-page__waiting-documents-list"}>
            {(item) => (
              <ListItem customClassName={"my-project-page__waiting-documents-list__item"}>
                <p className={"typography--tiny"}>{item.name}</p>
                <p
                  className={
                    "text-color--danger typography--tiny"
                  }>{`Teslim Zamanı: ${item.deadline}`}</p>

                <Link
                  to={ROUTES.DOCUMENTS}
                  className={
                    "typography--tiny my-project-page__waiting-documents-list__item__link"
                  }>
                  {"Görüntüle"}
                </Link>
              </ListItem>
            )}
          </List>
        </div>
      )}

      <div>
        <h1 className={"typography--subhead my-project-page__description__title"}>
          {"Proje Açıklaması"}
        </h1>
        <p
          className={
            "typography--medium-body text-color--gray my-project-page__description"
          }>
          {project?.description}
        </p>
      </div>

      <div>
        <h1 className={"typography--subhead my-project-page__advisor__title"}>
          {"Danışman"}
        </h1>

        <div className={"my-project-page__advisor"}>
          <div className={"my-project-page__advisor__with-icon"}>
            <UserIcon />

            <h1>{project?.advisor.name}</h1>
          </div>

          <div className={"my-project-page__advisor__with-icon"}>
            <MobileIcon />

            {project?.advisor.phone}
          </div>

          <div className={"my-project-page__advisor__with-icon"}>
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
            customClassName={"my-project-page__group-member-list"}>
            {(item) => (
              <ListItem customClassName={"my-project-page__group-member-list__item"}>
                <div className={"my-project-page__group-member-list__item__with-icon"}>
                  <UserIcon />

                  <h1>{item.name}</h1>
                </div>

                <div className={"my-project-page__group-member-list__item__with-icon"}>
                  <PersonalCardIcon />

                  {item.student_no}
                </div>

                <div className={"my-project-page__group-member-list__item__with-icon"}>
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

  function handleNavigateDocument() {
    navigate(ROUTES.DOCUMENTS);
  }
}

export default MyProjectPage;
