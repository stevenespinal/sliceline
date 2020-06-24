import React from "react";
import styled from "styled-components";

const CursorPointer = `cursor: pointer;`;

const RadioInput = styled.input`${CursorPointer}`;

const Label = styled.label`${CursorPointer}`;

export function Choices({openFood, choiceRadio}) {
  return (
    <>
      <h3>Choose One:</h3>
      {openFood.choices.map(choice => (
          <>
            <RadioInput type="radio" checked={choiceRadio.value === choice} value={choice} name="choice"
                   onChange={choiceRadio.onChange} id={choice}/>
            <Label htmlFor={choice}>{choice}</Label>
          </>
        ))}
    </>
  )
}