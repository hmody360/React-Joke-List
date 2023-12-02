import React from "react";
import JokeData from "./components/JokeData"
import Joke from "./components/Joke"

const App = () => {
    const jokeElems = JokeData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div className="app-container">
            {jokeElems}
        </div>
    )
}
export default App

