import {ReactComponent as GaziLogo} from "../core/ui/image/gazi-logo.svg";

import "./_login-page.scss";

import {useNavigate} from "react-router-dom";
import {Input} from "@hipo/react-ui-toolkit";

import Button from "../component/button/Button";
import useFormito from "../core/util/hook/useFormito/useFormito";
import {useAppContext} from "../core/app/AppContext";
import ROUTES from "../core/route/routes";

const initialLoginFormState = {
  email: "",
  password: ""
};

function LoginPage() {
  const {dispatch} = useAppContext();
  const {formitoState, dispatchFormitoAction} = useFormito(initialLoginFormState);
  const navigate = useNavigate();

  return (
    <div className={"login-page"}>
      <div className={"login-page__header"}>
        <GaziLogo />

        <h1 className={"typography--h2 is-centered-text login-page__title"}>
          {"Giriş Yap"}
        </h1>
      </div>

      <div>
        <Input
          customClassName={"login-page__input"}
          placeholder={"johndoe@gazi.edu.tr"}
          name={"email"}
          onChange={handleFieldChange}
        />

        <Input
          customClassName={"login-page__input"}
          placeholder={"123456"}
          type={"password"}
          onChange={handleFieldChange}
          name={"password"}
        />
      </div>

      <Button
        onClick={handleLogin}
        isDisabled={!formitoState.email || !formitoState.password}
        customClassName={"login-page__button"}
        buttonType={"primary"}>
        {"Giriş Yap"}
      </Button>
    </div>
  );

  function handleFieldChange(event: React.SyntheticEvent<HTMLInputElement>) {
    return dispatchFormitoAction({
      type: "SET_FORM_VALUE",
      payload: {
        [event.currentTarget.name]: event.currentTarget.value
      }
    });
  }

  function handleLogin() {
    dispatch({
      type: "SET_LOGGED_IN_ACCOUNT",
      account: {
        email: formitoState.email
      }
    });

    navigate({
      pathname: ROUTES.HOME
    });
  }
}

export default LoginPage;
