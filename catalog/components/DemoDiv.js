import React from 'react';
import styled from 'styled-components';
import pinkGreen from '@sparknz/set-tokens/dist/js/pinkGreen.json';

export default function Demo(){
    return (
            <HelloWorld>Hello World</HelloWorld>
    )
}

const HelloWorld = styled.h1`
    font-size: ${pinkGreen.size.font.default.md}
    color: ${pinkGreen.color.main.default.default}
`