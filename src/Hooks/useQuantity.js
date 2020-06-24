import {useState} from "react";

export function useQuantity(defaultQuantity) {
  const [value, setValue] = useState(defaultQuantity || 1);

  const onChange = event => {
    // adding a plus sign in front will convert it into a number
    if (!(+event.target.value > 1)) {
      setValue(1);
      return;
    }
    setValue(+event.target.value);
  }

  return {value, setValue, onChange};
}