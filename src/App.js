import "./styles.css";
import { useState } from "react";
import Canvas from "./components/Canvas";
import Pallete from "./components/Pallete";
export default function App() {
    const [colors, setColors] = useState(["#000", "#fff", "#f00", "#0f0", "#00f"]);
    const [selectedColor, setSelectedColor] = useState("#000");

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <Canvas width = {10} height = {10} pixelSize = {15} selectedColor = {selectedColor}/>
            <Pallete colors = {colors} setSelectedColor = {setSelectedColor}/>
        </div>
        );
} 