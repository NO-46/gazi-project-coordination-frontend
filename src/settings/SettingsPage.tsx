import "./_settings-page.scss";

import Button from "../component/button/Button";
import {useAppContext} from "../core/app/AppContext";
import useSetPageTitle from "../core/util/hook/useSetPageTitle";

function SettingsPage() {
  const {
    state: {account},
    dispatch
  } = useAppContext();

  useSetPageTitle("Ayarlar");

  return (
    <div className={"settings-page"}>
      <h1 className={"typography--display settings-page__title"}>{"Ayarlar"}</h1>

      <div className={"setting-page__list"}>
        <div className={"settings-page__list-item"}>
          <h2 className={"typography--small-subhead settings-page__list-item__title"}>
            {"Hesap Bilgileri"}
          </h2>

          <div className={"text-color--gray"}>
            <p
              className={
                "typography--medium-body settings-page__list-item__description"
              }>{`İsim: Ahmet Buğra Yiğiter`}</p>
            <p
              className={
                "typography--medium-body settings-page__list-item__description"
              }>{`Numara: 191180761`}</p>
            <p
              className={
                "typography--medium-body settings-page__list-item__description"
              }>{`Email: ${account?.email}`}</p>
            <p
              className={
                "typography--medium-body settings-page__list-item__description"
              }>{`Proje: Koordinatorluk Projesi - Grup 46`}</p>

            <p
              className={
                "typography--medium-body settings-page__list-item__description"
              }>{`Danışman: Hüseyin Temuçin`}</p>

            <Button
              customClassName={"settings-page__list-item__cta-button"}
              buttonType={"primary"}
              onClick={handleLogout}>
              {"Çıkış Yap"}
            </Button>
          </div>
        </div>

        <div className={"settings-page__list-item"}>
          <h2 className={"typography--small-subhead settings-page__list-item__title"}>
            {"Şifre İşlemleri"}
          </h2>

          <div className={"has-space-between is-vertically-centered text-color--gray"}>
            <h3 className={"typography--medium-body"}>
              {"Şifre Yenileme E-Postası gönder"}
            </h3>

            <Button>{"Gönder"}</Button>
          </div>
        </div>
      </div>
    </div>
  );

  function handleLogout() {
    dispatch({
      type: "SET_LOGGED_IN_ACCOUNT",
      account: null
    });
  }
}

export default SettingsPage;
