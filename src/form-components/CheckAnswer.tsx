import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    //state
    const [answer, setAnswer] = useState<string>("");
    //control
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    //view
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="userAnswer">
                <Form.Label>
                    Find x:
                    <br />
                    3278 = 78x + 2
                </Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div>
                Your answer is{" "}
                {answer === expectedAnswer ? "correct! ✔️" : "incorrect ❌"}
            </div>
        </div>
    );
}
