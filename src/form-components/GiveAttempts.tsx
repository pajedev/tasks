import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    //state
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");
    //control
    function updateRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setRequested(event.target.value);
    }
    function useAttempt() {
        setAttempts(attempts - 1);
    }
    function gainAttempt() {
        parseInt(requested) ?
            setAttempts(parseInt(requested) + attempts)
        :   setAttempts(attempts);
    }
    //view
    return (
        <div>
            <h3>Give Attempts</h3>
            Number of Attempts left: {attempts}
            <Form.Group controlId="numAttempts" as={Row}>
                <Form.Label column sm={2}>
                    How many more attempts would you like?
                </Form.Label>
                <Col>
                    <Form.Control
                        type="number"
                        value={requested}
                        onChange={updateRequested}
                    />
                </Col>
            </Form.Group>
            <Button onClick={useAttempt} disabled={attempts === 0}>
                Use
            </Button>
            <Button onClick={gainAttempt}>Gain</Button>
        </div>
    );
}
