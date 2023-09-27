import React from "react";
import styled, { css } from "styled-components";

export interface CstButtonProps {
    text?: string;
    type?: 'primary' | 'secondary';
    onClick?: () => void;
}

const StyledButton = styled.button<CstButtonProps>`
    background: ${(props: CstButtonProps) => props.type === 'primary' ? '#EB9B00' : '#FFF'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${(props: CstButtonProps) => props.type === 'primary' ? '#FFF' : '#EB9B00'};
    font-size: 20px;
    cursor: pointer;
    ${(props: CstButtonProps) => props.type === 'primary' 
        ? css`
            &:hover {
                background: #B87900;
                border: 2px solid #B87900;
            }
        ` 
        : css`
            &:hover {
                background: #FFF;
                border: 2px solid #B87900;
                color: #B87900;
            }
        `
    };
`;

export const CstButton = ({ text, type = 'primary', onClick }: CstButtonProps) => {
    return (<StyledButton onClick={onClick} type={type}> 
            {text}
        </StyledButton>
    );
}