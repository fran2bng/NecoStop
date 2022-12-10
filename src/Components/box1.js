import React from "react";

 function Box() {
    return (
        <div className="box">
            <img src={require("./box1-IMG/box1image.jpg")}
                className="boximage"
                alt="iconomaps" />
            <div className="testbox">
                <p className="dato1">Buenos dias!</p>
                <p className="dato2">Cuando llega el colectivo?</p>
            </div>
        </div>
    );
}

export default Box;