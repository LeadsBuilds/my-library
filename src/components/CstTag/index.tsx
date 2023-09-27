import React from "react";
import styled from "styled-components";

interface CstTagProps {
    text?: string;
}

const StyledTag = styled.button`
    background: #E48E00;
    border: 0px;
    padding: 48px;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
`;

export const CstTag: React.FC<React.PropsWithChildren<CstTagProps>> = ({ text }) => {
    return (
        <StyledTag>
            {text}
        </StyledTag>
    )
}
