import React, { createRef, useState, useEffect, useContext } from "react";
import AwesomeDebouncePromise from "awesome-debounce-promise";

import { GamepadsContext } from "../context/GamepadsContext";
import useGamepads from "../hooks/useGamepads";

const Menu = ({ items }) => {
  const [gamepads, setGamepads] = useState({});
  const [itemRefs, setItemRefs] = React.useState([]);
  const [selectedItem, setSelectedItem] = useState(0);
  useGamepads((gamepads) => setGamepads(gamepads));

  useEffect(() => {
    if (gamepads && gamepads[0]) {
      // Pressed Up
      if (gamepads[0].buttons[12].pressed) {
        let increment = selectedItem - 1;
        if (increment < 0) increment = items.length - 1;
        return AwesomeDebouncePromise(() => setSelectedItem(increment), 300);
      }
      // Pressed down
      if (gamepads[0].buttons[13].pressed) {
        let increment = selectedItem + 1;
        if (increment > items.length - 1) increment = 0;
        return AwesomeDebouncePromise(() => setSelectedItem(increment), 300);
      }
      // Pressed down
      if (
        gamepads[0].buttons[0].pressed ||
        gamepads[0].buttons[1].pressed ||
        gamepads[0].buttons[2].pressed ||
        gamepads[0].buttons[3].pressed
      ) {
        itemRefs[selectedItem].current.click();
      }
    }
  }, [gamepads, items, selectedItem]);

  useEffect(() => {
    // add or remove refs
    setItemRefs((elRefs) =>
      Array(items.length)
        .fill()
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [items.length]);

  return (
    <div>
      {items &&
        items.map((item, index) => (
          <a
            ref={itemRefs[index]}
            key={index}
            href={item.link}
            className={index === selectedItem && "focused"}
          >
            {item.title}
          </a>
        ))}
    </div>
  );
};

export default Menu;
