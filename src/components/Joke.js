import React from "react";

const Joke = (props) => {
        return (
            <div className="joke-container">
                {props.setup && <h4>{props.setup}</h4>}
                <p>{props.punchline}</p>
                <p>{props.likes}</p>
            </div>
        )
}
export default Joke