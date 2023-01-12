import {ReactComponent as Illusturation} from "./illusturations/illusturation.svg";
import {ReactComponent as ChevronDown} from "../core/ui/icon/chevron-down.svg";

import "./_home-page.scss";

import {useNavigate} from "react-router-dom";
import {List, ListItem} from "@hipo/react-ui-toolkit";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";

import {useAppContext} from "../core/app/AppContext";
import Button from "../component/button/Button";
import {FAQ_ITEMS} from "./util/homePageContants";
import ROUTES from "../core/route/routes";
import useSetPageTitle from "../core/util/hook/useSetPageTitle";

function HomePage() {
  const {
    state: {account}
  } = useAppContext();
  const navigate = useNavigate();

  useSetPageTitle("Anasayfa");

  return (
    <div className={"home-page__content-container"}>
      <div className={"home-page__illusturation-wrapper"}>
        <Illusturation
          className={"home-page__illusturation-wrapper__illusturation-second"}
        />

        <div>
          <h1 className={"typography--h1 home-page__content-container__title"}>
            {"Gazi Üniversitesi Bilgisayar Mühendisliği"} <br />{" "}
            {"Bitirme Projeleri Koordinatörlüğü"}
          </h1>

          <Button
            onClick={navigateToLogin}
            customClassName={"home-page__content-container__button"}
            buttonType={"primary"}>
            {account ? "Proje Ekle" : "Giriş Yap"}
          </Button>
        </div>
      </div>

      <div>
        <h1 className={"typography--h2 home-page__faq-title"}>
          {"Sıkça Sorulan Sorular"}
        </h1>

        <List items={FAQ_ITEMS} customClassName={"home-page__faq-list"}>
          {(item) => (
            <ListItem customClassName={"home-page__faq-list__item"}>
              <Accordion>
                <AccordionSummary
                  aria-controls={"panel1a-content"}
                  id={"panel1a-header"}
                  expandIcon={<ChevronDown />}>
                  {item.question}
                </AccordionSummary>
                <AccordionDetails>{item.answer}</AccordionDetails>
              </Accordion>
            </ListItem>
          )}
        </List>
      </div>
    </div>
  );

  function navigateToLogin() {
    navigate(ROUTES.LOGIN);
  }
}

export default HomePage;
