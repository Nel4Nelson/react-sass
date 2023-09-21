import React, { useState } from "react";
import styles from "./_ListGroup.module.scss";

interface Props {
  items: string[];
  heading: string;
  onClicked: (item: string) => void
}

const ListGroup = ({ items, heading, onClicked }: Props) => {
  items.map((item) => <li>{item}</li>);
  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <>
      <h1>{ heading }</h1>
      {items.length == 0 && <h2>Sorry, there is no List</h2>}
      <ul className={styles.itemList}>
        {items.map((item, index) => (
          <li
            className={selectedItem == index ? `${styles.active}`  : `${styles.nothing}`}
            key={item}
            onClick={() => {
              setSelectedItem(index);
              onClicked(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
