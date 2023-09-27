import React from "react";
import styled from "styled-components";

const StyledCard = styled.button`
    background: #FFF;
    padding: 48px 32px;
    border: #FFF;
    border-radius: 10px;
    min-width: 551px;
    min-height: 374px;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0px 4px 3px rgba(0,0,0,0.25);
`;

export const CstCard: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
}
