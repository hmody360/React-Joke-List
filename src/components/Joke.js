import React from "react";

const Joke = (props) => {
    const [isShown, setIsShown] = React.useState(true)

    const handleShowHide = () => {
        setIsShown(!isShown)
    }
        return (
            <div className="joke-container">
                {props.setup && <h4>{props.setup}</h4>}
                {isShown && <p>{props.punchline}</p>}
                <p>{props.likes}</p>
                <button className="show-hide-btn" onClick={handleShowHide}>{!isShown ? "Show" : "Hide"} Punchline</button>
            </div>
        )
}
export default Joke