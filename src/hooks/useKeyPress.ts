import { useEffect } from "react";

type KeyType = string | "Shift" | "Control" | "Alt" | "Meta";
type CallbackType = (event: KeyboardEvent) => void;

interface KeyCombo {
  keys: KeyType[];
  callback: CallbackType;
}

export const useKeyPress = (keyCombos: KeyCombo[]) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      keyCombos.forEach(({ keys, callback }) => {
        if (
          keys.every((key) => {
            if (key.toLowerCase() === "control") return event.ctrlKey;
            if (key.toLowerCase() === "shift") return event.shiftKey;
            if (key.toLowerCase() === "alt") return event.altKey;
            if (key.toLowerCase() === "meta") return event.metaKey;
            return event.key.toLowerCase() === key.toLowerCase();
          })
        ) {
          event.preventDefault();
          callback(event);
        }
      });
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyCombos]);
};
