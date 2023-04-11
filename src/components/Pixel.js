import "../styles.css";
import { useState } from "react";
import styled from "styled-components";
// Class that represents a single Pixel inside of the Pixel Art Maker
// Props:
// isVisible: Boolean that represents if the Prop is visible or nots
// isClickable: Boolean that represents if the Prop is visible or nots
// onCardClick: The function that is called when the card is clicked
// PixelSize: The size of the pixel
// color: The color of the pixel
export default function Pixel({X,Y,PixelSize, isVisible, isClickable, selectedColor,color, setPixelColor}) {
    const [buttonColor, setColor] = useState(color);
    const Button = styled.div`
    background-color: ${buttonColor};
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
            //Update the color of the Button
            setColor(selectedColor);
            setPixelColor(X,Y,selectedColor);
        }
    }
    return (
        <Button className={isVisible && "Button-Hidden"} onClick = {PerformClickAction}></Button>
        );
}