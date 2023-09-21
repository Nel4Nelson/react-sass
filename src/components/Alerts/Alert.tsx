import React from "react";
import styles from "./_Alert.module.scss";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
    onClicked: () => void;
}

const Alert = ({onClicked}: Props) => {
  return (
    <div className="bg-primary flex justify-sb align-c">
      <div className={`${styles.alert} ${styles.alertPrimary}`}>Alert</div>
      <AiOutlineClose size={20} onClick={() => onClicked()}/>
    </div>
  );
};

export default Alert;
