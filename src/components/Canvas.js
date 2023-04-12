import "../styles.css";
import { useState } from "react";
import styled from "styled-components";

import Pixel from "./Pixel";
// Class that represents the whole canvas in the Pixel Art Maker
// Props:
// width: The width of the canvas
// height: The height of the canvas
// pixelSize: The size of each pixel
// onPixelClick: The function that is called when the pixel is clicked
export default function Canvas({ width, height, pixelSize, selectedColor, isVisible, setGrid}) {
    const [pixelColors, setPixelColors] = useState(() => {
        
        const initialPixelColors = [];
        for (let i = 0; i < height; i++) {
            let row = [];
            for (let j = 0; j < width; j++) {
                //Make the initial color transparent
                row.push("#000");
            }
            initialPixelColors.push(row);
        }
        return initialPixelColors;
    });
    function updatePixelColors(X,Y,color){
        let newPixelColors = pixelColors;
        newPixelColors[X][Y] = color;
        setGrid(newPixelColors);
        setPixelColors(newPixelColors);
    }
    //Function that outputs the pixel colors to give to a parent component
    //Returns: A 2D array of pixel colors
    function getPixelColors(){
        return pixelColors;
    }
    // Styled component that represents the canvas which is a grid of pixels
    const Canvas = styled.div`
        display: grid;
        grid-template-columns: repeat(${width}, 0px);
        grid-template-rows: repeat(${height}, 0px);
        grid-gap: ${pixelSize-2}px;
        width: ${width * (pixelSize)}px;
        height: ${height * (pixelSize)}px;
        margin: 0 auto;
    `;
    // Function that generates a 2D array of Pixels
    // Returns: A 2D array of Pixels
    function generatePixels() {
        let pixels = [];
        for (let i = 0; i < height; i++) {
            let row = [];
            for (let j = 0; j < width; j++) {
                row.push(<Pixel X = {i} Y = {j} setPixelColor = {updatePixelColors} color = {pixelColors[i][j]} selectedColor = {selectedColor} isVisible = {isVisible} isClickable = {true} PixelSize = {pixelSize}/>);
            }
            pixels.push(row);
        }
        return pixels;
    }
    return (
        <Canvas className="Canvas"> 
            {generatePixels()}
        </Canvas>
        );
}