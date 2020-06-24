import {useState} from "react";

export function useCart() {
  const [open, setOpen] = useState(false);

  function toggleCart() {
    setOpen(!open);
  }

  return {open, toggleCart, setOpen}

}