import React, { useState } from "react";
import styled from "styled-components";

const StyledSection = styled.section<{ selected : boolean }>`
    width: 194px;
    height: 88px;
    background: ${(props: any) => props.selected ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFF'};
    border: 1px solid;
    border-color: ${(props: any) => props.selected ? '#002F52' : '#EB9B00'};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;
    header {
        color: ${(props: any) => props.selected ? '#FFF' : '#EB9B00'};
        font-size: 12px;
        font-weight: 400;
    }
    strong {
        color: ${(props: any) => props.selected ? '#FFF' : '#EB9B00'};
        font-size: 16px;
        font-weight: 700;
    }
    footer {
        color: ${(props: any) => props.selected ? '#FFF' : 'rgba(0,0,0,0.54)'};
        font-size: 12px;
        font-weight: 400;
    }
`

export interface ICstOptionGroup {
    id: number;
    title: string;
    body: string;
    footer: string;
}

export interface CstOptionGroupProps {
    options: ICstOptionGroup[];
    defaultValue?: ICstOptionGroup | null;
    onChange?: (option: ICstOptionGroup) => void 
}

export const CstOptionGroup = ({ options, defaultValue, onChange }: CstOptionGroupProps) => {
    const [selectedOption, setSelectedOption] = useState<ICstOptionGroup | null>(defaultValue ?? null);
    const selectOption = (option: ICstOptionGroup) => {
        setSelectedOption(option);
        if (onChange) {
            onChange(option);
        }
    }

    return (
        <>
            {options.map(option => 
                <StyledSection 
                    onClick={() => selectOption(option)} 
                    key={option.id} 
                    selected={selectedOption?.id == option.id}
                >
                    <header>
                        {option.title}
                    </header>
                    <strong>
                        {option.body}
                    </strong>
                    <footer>
                        {option.footer}
                    </footer>
                </StyledSection>
            )}
        </>
    );
}