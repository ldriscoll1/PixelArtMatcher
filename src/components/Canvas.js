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
export default function Canvas({ width, height, pixelSize, selectedColor, premadeCanvas}) {
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
        setPixelColors(newPixelColors);
    }
    function compareCanvas(){
        let score = 64;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (pixelColors[i][j] !== premadeCanvas[i][j]){
                    score--;
                }
            }
        }
        console.log(score);
        return score;
    }
    // Styled component that represents the canvas which is a grid of pixels
    const Canvas = styled.div`
        display: grid;
        grid-template-columns: repeat(${width}, 5px);
        grid-template-rows: repeat(${height}, 5px);
        grid-gap: ${pixelSize}px;
        background-color: #808080;
        width: ${width * (pixelSize + pixelSize/2)}px;
        height: ${height * (pixelSize + pixelSize/2)}px;
    `;
    // Function that generates a 2D array of Pixels
    // Returns: A 2D array of Pixels
    function generatePixels() {
        let pixels = [];
        for (let i = 0; i < height; i++) {
            let row = [];
            for (let j = 0; j < width; j++) {
                row.push(<Pixel X = {i} Y = {j} setPixelColor = {updatePixelColors} color = {pixelColors[i][j]} selectedColor = {selectedColor} isVisible = {true} isClickable = {true} PixelSize = {pixelSize}/>);
            }
            pixels.push(row);
        }
        return pixels;
    }
    return (
        <Canvas className="Canvas" >
            {generatePixels()}
            <h1>
                {/* Format as Percent */}
                {'Score: '+ Math.floor(compareCanvas() / 64 * 100) + '%'}
            </h1>
        </Canvas>
        );
}