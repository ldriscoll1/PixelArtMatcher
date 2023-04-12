import "../styles.css";
import { useState } from "react";
import styled from "styled-components";

import Pixel from "./Pixel";
// Class that represents the a Premade canvas in the Pixel Art Maker
// Props:
// width: The width of the canvas
// height: The height of the canvas
// pixelSize: The size of each pixel
// onPixelClick: The function that is called when the pixel is clicked
export default function PreMadeCanvas({ width, height, pixelSize, selectedColor, premadeCanvas}) {
    const [pixelColors, setPixelColors] = useState(premadeCanvas);
    function updatePixelColors(X,Y,color){
        let newPixelColors = pixelColors;
        newPixelColors[X][Y] = color;
        setPixelColors(newPixelColors);
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
                row.push(<Pixel X = {i} Y = {j} setPixelColor = {updatePixelColors} color = {pixelColors[i][j]} selectedColor = {selectedColor} isVisible = {true} isClickable = {false} PixelSize = {pixelSize}/>);
            }
            pixels.push(row);
        }
        return pixels;
    }
    return (
        <Canvas className="PreMadeCanvas">
            {generatePixels()}
        </Canvas>
        );
}