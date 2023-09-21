import React, { Children, ReactNode } from "react";
import styles from "./_Button.module.scss";

interface Props {
  children: ReactNode;
  onClicked: () => void;
}

const Button = ({ children, onClicked }: Props) => {
  return (
    <button
      className={`${styles.btn} ${styles.btnPrimary}`}
      onClick={() => onClicked()}
    >
      {children}
    </button>
  );
};

export default Button;
