import React from "react";
import styled from "styled-components";

const StyledGroupInput = styled.label`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 18px;
    label {
        font-weight: 800;
        padding: 8px;
        padding-left: 20px;
    }
    input {
        border-radius: 50px;
        padding: 10px 22px;
        font-size: inherit;
        opacity: 0.8;
        border: 1px solid #000;
    }
`;

export const CstTextInput = () => {
    return (
        <StyledGroupInput>
            <label>E-mail</label>
            <input type="text" placeholder="youremail@mail.com"></input>
        </StyledGroupInput>
    )
}