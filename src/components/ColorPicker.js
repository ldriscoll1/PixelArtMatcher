import "../styles.css";
import { useState } from "react";
import styled from "styled-components";
// Class that represents the a button to change the color in the Pixel Art Maker
// Props:
// color: The color of the button
// onButtonClick: The function that is called when the button is clicked
// PixelSize: The size of the pixel
export default function ColorPicker({PixelSize, isVisible, isClickable, color, setSelectedColor}) {
    const Button = styled.div`
    background-color: ${color};
    border-radius: 5px;
    border-style: solid;
    border-color: grey;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    width: ${PixelSize}px;
    height: ${PixelSize}px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.1s ease-in;
    &:hover {
        transform: scale(1.03);
    }
    `;
    function PerformClickAction(e){
        e.preventDefault();
        if(isClickable === true){
            setSelectedColor(color);
        }

    }
    return (
        <Button className={isVisible && "Button-Hidden"} onClick = {PerformClickAction}></Button>
    );
}