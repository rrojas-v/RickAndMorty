import React from "react"
import styled from "styled-components";

const Div = styled.div`
    color:cornflowerblue;
`;

export default function About() {
    return (
        <Div>
            <h1>Autor: Ricardo Rojas</h1>
            <h2>Applicación para poner en práctica lo aprendido</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, veniam repudiandae! Et, iure magnam nam ducimus exercitationem corrupti. Iusto, sint. Alias maiores laudantium fuga odio omnis voluptatum pariatur aliquam harum.
            </p>
        </Div>
    );
}