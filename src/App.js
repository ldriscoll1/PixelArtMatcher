import "./styles.css";
import { useState } from "react";
import Canvas from "./components/Canvas";
import PremadeCanvas from "./components/PremadeCanvas";
import Pallete from "./components/Pallete";
export default function App() {
    //The colors of the rainbow plus black and white 
    const [colors, setColors] = useState(["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#ee82ee", "#000", "#ffffff"]);
    const [selectedColor, setSelectedColor] = useState("#000");
    const premadeCanvasses = {"Snake":[
        [
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#008000",
            "#000",
            "#008000",
            "#000000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#008000",
            "#ff0000",
            "#008000",
            "#ff0000",
            "#008000",
            "#000000",
            "#000",
            "#000"
        ],
        [
            "#008000",
            "#008000",
            "#008000",
            "#008000",
            "#008000",
            "#000000",
            "#000",
            "#008000"
        ],
        [
            "#000",
            "#ffffff",
            "#000",
            "#ffffff",
            "#000000",
            "#000",
            "#008000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#008000",
            "#000",
            "#000",
            "#000",
            "#008000",
            "#000"
        ],
        [
            "#000",
            "#008000",
            "#008000",
            "#008000",
            "#008000",
            "#008000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#008000",
            "#008000",
            "#008000",
            "#008000",
            "#000",
            "#000",
            "#000"
        ]
    ], 
    "Cactus":[
        [
            "#000",
            "#000",
            "#000",
            "#000",
            "#008000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#000",
            "#008000",
            "#008000",
            "#008000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#008000",
            "#000000",
            "#008000",
            "#008000",
            "#008000",
            "#000000",
            "#000"
        ],
        [
            "#000",
            "#008000",
            "#008000",
            "#008000",
            "#008000",
            "#008000",
            "#000000",
            "#000"
        ],
        [
            "#000",
            "#000000",
            "#000000",
            "#008000",
            "#008000",
            "#008000",
            "#000000",
            "#008000"
        ],
        [
            "#000",
            "#000000",
            "#000000",
            "#008000",
            "#008000",
            "#008000",
            "#008000",
            "#008000"
        ],
        [
            "#000",
            "#000",
            "#000",
            "#008000",
            "#008000",
            "#008000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#008000",
            "#008000",
            "#008000",
            "#008000",
            "#008000",
            "#000"
        ]
    ],
    "Heart":[
        [
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#ff0000",
            "#ff0000",
            "#000",
            "#ff0000",
            "#ff0000",
            "#000",
            "#000"
        ],
        [
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#000"
        ],
        [
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#000"
        ],
        [
            "#000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#000",
            "#ff0000",
            "#000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000"
        ]
    ],
    "Mushroom":[
        [
            "#000",
            "#000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ffff00",
            "#ff0000",
            "#000"
        ],
        [
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ffff00",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000"
        ],
        [
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ffff00",
            "#ff0000",
            "#ff0000"
        ],
        [
            "#000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#000",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000",
            "#000"
        ]
    ]   
    ,
    "Duck":[
        [
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#ffff00",
            "#ffffff",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#ffffff",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#ffffff",
            "#000",
            "#000",
            "#000",
            "#ffffff",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#ffa500",
            "#ffff00",
            "#000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000"
        ]
    ],
    "Chicken":[
        [
            "#000",
            "#000",
            "#ff0000",
            "#ff0000",
            "#ff0000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#ffffff",
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000"
        ],
        [
            "#ffa500",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff"
        ],
        [
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff"
        ],
        [
            "#000",
            "#000000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#000",
            "#ffa500",
            "#ffa500",
            "#000",
            "#000",
            "#000"
        ]
    ],
    "Bunny":[
        [
            "#000",
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#ffffff",
            "#000",
            "#ffffff",
            "#000",
            "#000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#ee82ee",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000000",
            "#000",
            "#000"
        ],
        [
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#ee82ee",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000",
            "#000",
            "#000"
        ]
    ],
    "Key":[
        [
            "#000",
            "#000",
            "#000",
            "#ffff00",
            "#ffff00",
            "#ffff00",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#ffff00",
            "#000",
            "#000",
            "#000",
            "#ffff00",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#ffff00",
            "#000",
            "#000",
            "#000",
            "#ffff00",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#000",
            "#ffff00",
            "#ffff00",
            "#ffff00",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#000",
            "#000",
            "#ffff00",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#000",
            "#000",
            "#ffff00",
            "#ffff00",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#000",
            "#000",
            "#ffff00",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#000",
            "#000",
            "#000",
            "#ffff00",
            "#ffff00",
            "#000",
            "#000"
        ]
    ],
    "Moon":[
        [
            "#000",
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000000"
        ],
        [
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff"
        ],
        [
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000",
            "#000",
            "#000"
        ],
        [
            "#000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff"
        ],
        [
            "#000",
            "#000000",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#000"
        ]
    ]};
    //Get random canvas
    function getRandomCanvas(){
        let keys = Object.keys(premadeCanvasses);
        let randomKey = keys[Math.floor(Math.random() * keys.length)];
        return premadeCanvasses[randomKey];
    }
    function reloadPage(){
        window.location.reload();
    }
    //Gameflow
    //1. Select premade canvas
    const [currentPremadeCanvas, setCurrentCanvas] = useState(getRandomCanvas());
    let premadeCanvasDiv = <PremadeCanvas premadeCanvas = {currentPremadeCanvas} width = {8} height = {8} pixelSize = {40} setSelectedColor = {setSelectedColor}/>;
    //2. Show Start Screen with Start Button and setUp visibility
    let [startScreen, setStartScreen] = useState(true);
    function StartScreen(){
        return(
            <div className="Centered">
                <h1 className="Title">Pixel Art Matching Game</h1>
                <h2 className="Description">Try to Match your drawing to the Prompt Image</h2>
                <button className="ActionButton"onClick = {() => SetupGame()}>Start</button>
            </div>
        );
    }
    //3. When Start Button is clicked, show Premade Canvas and Start a 20 second timer
    let [prepScreen, setPrepScreen] = useState(false);
    function SetupGame(){
        setStartScreen(false);
        setPrepScreen(true);
        console.log("SetupGame");
        countdown(PlayGame);
    }
    function PrepScreen(){
        return(
            <div>
                <h2 className="Prompt">Prompt:</h2>
                {premadeCanvasDiv}
            </div>
        );
    }
    //4. When timer is up, hide the premade canvas and show the blank canvas and start a new timer for 100 seconds
    let [gameScreen, setGameScreen] = useState(false);
    function PlayGame(){
        setPrepScreen(false);
        setGameScreen(true);
        console.log("PlayGame");
        counter = 60;
        countdown(EndGame);
    }

    //5. When timer is up, show the premade canvas again and the completed canvas with the score and a button to play again
    let [endScreen, setEndScreen] = useState(false);
    function EndGame(){
        setGameScreen(false);
        setEndScreen(true);
        // getScore();
        console.log("EndGame");
    }
    let [currentGrid, setCurrentGrid] = useState(() => {
        let grid = [];
        for (let i = 0; i < 8; i++) {
            let row = [];
            for (let j = 0; j < 8; j++) {
                row.push("#000");
            }
            grid.push(row);
        }
        return grid;
    });
    // let [score, setScore] = useState(0);
    // function printGrid(grid){
    //     console.log(grid);
    //     setCurrentGrid(grid);
    // }
    // function getScore(){
    //     let rating = 64;
    //     console.log(currentGrid);
    //     for (let i = 0; i < 8; i++) {
    //         for (let j = 0; j < 8; j++) {
    //             if (currentGrid[i][j] !== currentPremadeCanvas[i][j]){
    //                 rating--;
    //             }
    //         }
    //     }
    //     console.log(Math.floor(rating/64*100));
    //     setScore(Math.floor(rating/64*100));
    // }
    let [counter, setCounter] = useState(20);
    function countdown(callback){
        console.log("countdown");
        let interval = setInterval(() => {
            setCounter(counter = counter - 1);
            if (counter < 0){
                clearInterval(interval);
                callback();
            }
        }, 1000);
    }
    return (
        <div className="App">
            {startScreen ? <StartScreen/> : null}
            {prepScreen ? <h2 className="Timer"> {counter} seconds left!</h2> : null}
            {prepScreen ? <PrepScreen/> : null}
            {gameScreen ? <h2 className="Timer"> {counter + 1} seconds left!</h2> : null}
            {gameScreen ? <div className="Centered">
                <Canvas setGrid = {setCurrentGrid} width = {8} height = {8} pixelSize = {50} selectedColor = {selectedColor}/>
                <Pallete colors = {colors} setSelectedColor = {setSelectedColor}/> 
            </div> : null}
            {endScreen ?<div className="Centered">
                <h1 className="Title">Times Up!</h1>
                <div className="Rows">
                    <div>
                        <h2 className="Prompt">Prompt:</h2>
                        {premadeCanvasDiv}
                    </div>
                    <div>
                        <h2 className="Prompt">Your Image:</h2>
                        <PremadeCanvas premadeCanvas = {currentGrid} width = {8} height = {8} pixelSize = {40} setSelectedColor = {setSelectedColor}/>
                    </div>
                </div>
                <button className = "ActionButton" onClick = {reloadPage}>Play Again</button>
                {/* <h2>Score: {score}%</h2> */}
            </div> : null}
        </div>
        );
} 
