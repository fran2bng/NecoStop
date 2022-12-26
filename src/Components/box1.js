import React from "react";

 function Box(props) {
    return (
        <div className="box">
            <img src={require(`./box1-IMG/${props.imagen}.jpg`)}
                className="boximage"
                alt="iconomaps" />
            <div className="testbox">
                <p className="dato1">{props.saludo}!</p>
                <p className="dato2">{props.pregunta}</p>
            </div>
        </div>
    );
}

export default Box; 