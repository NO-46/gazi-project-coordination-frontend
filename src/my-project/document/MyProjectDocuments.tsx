import {ReactComponent as DocumentIcon} from "../../core/ui/icon/document.svg";
import {ReactComponent as UserIcon} from "../../core/ui/icon/user.svg";
import {ReactComponent as CalendarIcon} from "../../core/ui/icon/calendar.svg";

import "./_my-project-documents.scss";

import {List, ListItem} from "@hipo/react-ui-toolkit";
import {Button} from "@mui/material";

import {PROJECT_DATA} from "../../projects/mock/mockProjectsData";
import {DOCUMENT_MOCK_DATA} from "./mock/documentMockData";

function MyProjectDocuments() {
  const project = PROJECT_DATA.find(({id: itemID}) => itemID === "46");

  return (
    <div className={"my-project-documents"}>
      <h1
        className={
          "typography--h1"
        }>{`${project?.title} | ${project?.group_no} - Dokumanlar`}</h1>

      <List items={DOCUMENT_MOCK_DATA} customClassName={"my-project-documents__list"}>
        {(item) => (
          <ListItem customClassName={"my-project-documents__list__item"}>
            <div className={"my-project-documents__list__item__title"}>
              <h1 className={"typography--subhead"}>{item.name}</h1>

              {item.isUploaded ? (
                <p className={"typography--medium-body text-color--success"}>
                  {"Yüklendi"}
                </p>
              ) : (
                <p className={"typography--medium-body text-color--danger"}>
                  {"Yüklenmedi"}
                </p>
              )}
            </div>

            {item.isUploaded ? (
              <p
                className={
                  "typography--tiny text-color--gray my-project-documents__grade"
                }>{`Not: ${item.grade}`}</p>
            ) : (
              <p
                className={
                  "typography--tiny text-color--gray my-project-documents__grade"
                }>{`Teslim Tarihi: ${item.deadline}`}</p>
            )}

            <p className={"text-color--gray my-project-documents__description"}>
              {item.description}
            </p>

            {item.isUploaded && (
              <div>
                <div className={"my-project-documents__document-info__item"}>
                  <DocumentIcon />

                  <a href={"fgasg"}>{item.uploadedFile}</a>
                </div>

                <div className={"my-project-documents__document-info__item"}>
                  <UserIcon />

                  <p>{item.uploadedBy}</p>
                </div>

                <div className={"my-project-documents__document-info__item"}>
                  <CalendarIcon />

                  <p>{item.uploadedDate}</p>
                </div>
              </div>
            )}

            {!item.isUploaded && (
              <Button
                className={"button button--secondary button--fluid button--medium"}
                variant={"contained"}
                component={"label"}>
                {"Doküman Yükle"}
                <input hidden={true} accept={"image/*"} multiple={true} type={"file"} />
              </Button>
            )}
          </ListItem>
        )}
      </List>
    </div>
  );
}

export default MyProjectDocuments;
