import "../styles.css";
import { useState } from "react";
import styled from "styled-components";
import ColorPicker from "./ColorPicker";
// Class that represents the a group of colorpicker buttons in the Pixel Art Maker
// Props:
// colors: The colors of the buttons
// onButtonClick: The function that is called when the button is clicked
export default function Pallete({colors, setSelectedColor}) {
    // Styled component that represents the pallete
    const Pallete = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        background-color: #000;
        width: 100%;
        height: 100px;
    `;
    // Function that gets the color of the button that was clicked and sends it to the parent component
    // Parameters:
    // color: The color of the button that was clicked
    // Function that generates a list of ColorPicker buttons
    // Returns: A list of ColorPicker buttons
    function generateColorPickers() {
        let colorPickers = [];
        for (let i = 0; i < colors.length; i++) {
            colorPickers.push(<ColorPicker PixelSize = {50} isVisible = {true} isClickable = {true} color = {colors[i]} setSelectedColor = {setSelectedColor}/>);
        }
        return colorPickers;
    }
    return (
        <Pallete className="Pallete">
            {generateColorPickers()}
        </Pallete>
        );
}