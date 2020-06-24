import {useState} from "react";


export function useChoice(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function onChange(e) {
    setValue(e.target.value);
  }

  return {value, onChange};
}