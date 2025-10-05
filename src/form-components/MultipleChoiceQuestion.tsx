import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    //state
    const [choice, setChoice] = useState<string>(options[0]);
    //control
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    //view
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userChoice">
                <Form.Label>
                    Who was the first president of the United States?
                    <br />
                    a. Abraham Lincoln
                    <br />
                    b. George Washington
                    <br />
                    c. Robert E. Lee
                </Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                </Form.Select>
            </Form.Group>
            Your answer is
            {choice === expectedAnswer ? " correct! ✔️" : " incorrect. ❌"}
        </div>
    );
}
