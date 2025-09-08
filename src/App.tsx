import React from "react";
import "./App.css";
import snoopy from "./images/comp_sci_snoopy.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <br />
                Author: Patricia Devine
            </header>
            <h2>Another header! Just for fun.</h2>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <br />
                Hello World!
            </p>
            <p>
                New paragraph, so exciting!
                <br />
                <Container>
                    <Row>
                        <Col>
                            Red Rectangle 1:
                            <br />
                            <div
                                style={{
                                    width: "400px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            <ol>
                                <li>Task 1: done!</li>
                                <li>Task 2: done!</li>
                                <li>Task 3: working...</li>
                                <li>Task 4+: yet to start</li>
                            </ol>
                        </Col>
                        <Col>
                            Red Rectangle 2:
                            <br />
                            <div
                                style={{
                                    width: "400px",
                                    height: "100px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            This is me working on these tasks:
                            <br />
                            <img
                                src={snoopy}
                                alt="A picture of snoopy typing on his computer"
                            />
                        </Col>
                    </Row>
                </Container>
            </p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
