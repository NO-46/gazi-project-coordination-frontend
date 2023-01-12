import GaziLogo from "../../../core/ui/image/gazi-logo.png";

import "./_page-footer.scss";

function PageFooter() {
  return (
    <footer className={"page-footer"}>
      <div className={"page-footer__content"}>
        <p className={"typography--subhead"}>
          {"Gazi Üniversitesi Rektörlüğü 06500"}
          <br />
          {"Teknikokullar / Ankara Tel : +90 312 202 20 00"}
          <br />
          {"Fax : +90 312 221 32 02"}
        </p>

        <img className={"page-footer__logo"} src={GaziLogo} alt={"Gazi Logo"} />
      </div>
    </footer>
  );
}

export default PageFooter;
