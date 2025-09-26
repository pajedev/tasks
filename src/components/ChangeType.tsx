import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

//Create a Record to map the QuestionType
const transition: Record<QuestionType, QuestionType> = {
    multiple_choice_question: "short_answer_question",
    short_answer_question: "multiple_choice_question",
};

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function changeType(): void {
        const newType = transition[type];
        setType(newType);
    }

    return (
        <div>
            <div>
                <Button onClick={changeType}>Change Type</Button>
            </div>
            <div>
                {type === "multiple_choice_question" ?
                    <span>Multiple Choice</span>
                :   <span>Short Answer</span>}
            </div>
        </div>
    );
}
