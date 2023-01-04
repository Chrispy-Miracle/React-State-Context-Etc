import React from "react";

const Map = () => {
    const arr = [0, 1, 2, 3]
    const arrString = "const arr = [0, 1, 2, 3]"
    const itemPlusOne = (item, index) => {
        return (
            <li key={index + item}>{item + 1}</li>
        )
    }
    const mapCode = "<ul>\n{arr.map((item, index) => {return (<li key={item + index}>{item}</li>)})}\n</ul>"
    const mapCodeTwo = "<ul>\n{arr.map(itemPlusOne)\n</ul>"
    return (
        <div className="mfr-part flex-col scale">
            <h2>Map</h2>
            <h3>Here are two ways to map an array:</h3>
            <code>{arrString}</code>
            <div className="flex-two">
                <div className="flex-col map-col">
                    <p> In this one code looks like this:</p>
                    <code>{mapCode}</code>
                    <ul>
                        {arr.map((item, index) => {
                            return (<li key={item + index}>{item + index}</li>)
                        })}
                    </ul>
                </div>
                <div className="flex-col map-col">
                    <p>And if you have pre-defined a function:</p>
                    <code>{mapCodeTwo}</code>
                    <ul>
                        {arr.map(itemPlusOne)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Map;