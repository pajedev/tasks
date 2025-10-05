import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    //state
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    //control
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    //view
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-mode-check"
                label="Edit Mode?"
                checked={editMode}
                onChange={updateMode}
            />
            {editMode ?
                <div>
                    <Form.Group controlId="editName" as={Row}>
                        <Form.Label column sm={2}>
                            New Name:
                        </Form.Label>
                        <Col>
                            <Form.Control value={name} onChange={updateName} />
                        </Col>
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={student}
                        onChange={updateStudent}
                    />
                </div>
            :   <div>
                    {name} {student ? "is" : "is not"} a student.
                </div>
            }
        </div>
    );
}
