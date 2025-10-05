import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown",
];

export function ChangeColor(): React.JSX.Element {
    //state
    const [chosenColor, setColor] = useState<string>(colors[0]);
    //control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    //view
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                You have chosen
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}.
                </span>
            </div>
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="color"
                    id={`color-${color}`}
                    label={color}
                    value={color}
                    checked={chosenColor === color}
                    onChange={updateColor}
                    style={{ backgroundColor: color }}
                />
            ))}
        </div>
    );
}
