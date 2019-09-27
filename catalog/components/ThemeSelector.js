import React from 'react';
import styled from 'styled-components';

export default function ThemeSelector({options, onChange, value}) {
    return (
        <Wrapper>
            <Label>Select Theme: </Label>
            <select onChange={onChange} value={value}>
                {
                    options.map(option => (
                        <option value={option}>{option}</option>
                    ))
                }
            </select>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    padding: 32px;
    justify-content: flex-end;
`

const Label = styled.label`
    margin-right: 16px;
`