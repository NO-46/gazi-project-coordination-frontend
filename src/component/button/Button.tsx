import "./_button.scss";

import React from "react";
import {
  Button as HipoButton,
  ButtonProps as HipoButtonProps
} from "@hipo/react-ui-toolkit";
import classNames from "classnames";

export type ButtonProps = HipoButtonProps & {
  buttonType?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  shouldHideChildrenOnSpinnerView?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  // eslint-disable-next-line prefer-arrow-callback
  function ButtonComponent(props, ref) {
    const {
      buttonType = "primary",
      size = "medium",
      customClassName,
      children,
      shouldHideChildrenOnSpinnerView,
      shouldDisplaySpinner,
      ...otherProps
    } = props;
    const className = classNames(
      "typography--button",
      customClassName,
      `button--${buttonType}`,
      `button--${size}`,
      "typography--button"
    );
    const shouldHideChildren = shouldDisplaySpinner && shouldHideChildrenOnSpinnerView;

    return (
      <HipoButton
        ref={ref}
        customClassName={className}
        shouldDisplaySpinner={shouldDisplaySpinner}
        {...otherProps}>
        {shouldHideChildren ? null : children}
      </HipoButton>
    );
  }
);

export default Button;
