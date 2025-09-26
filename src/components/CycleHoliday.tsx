import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Halloween"
    | "Christmas"
    | "Fourth of July"
    | "Arbor Day"
    | "Earth Day";

const alphabetical: Record<Holiday, Holiday> = {
    "Arbor Day": "Christmas",
    Christmas: "Earth Day",
    "Earth Day": "Fourth of July",
    "Fourth of July": "Halloween",
    Halloween: "Arbor Day",
};
const chronological: Record<Holiday, Holiday> = {
    "Earth Day": "Arbor Day",
    "Arbor Day": "Fourth of July",
    "Fourth of July": "Halloween",
    Halloween: "Christmas",
    Christmas: "Earth Day",
};
const emojis: Record<Holiday, string> = {
    "Arbor Day": "🌳",
    Christmas: "🎅",
    "Earth Day": "🌎",
    "Fourth of July": "🎆",
    Halloween: "🎃",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    function nextAlphabetical(): void {
        const next = alphabetical[holiday];
        setHoliday(next);
    }
    function nextChronological(): void {
        const next = chronological[holiday];
        setHoliday(next);
    }

    return (
        <div>
            Current Holiday: {emojis[holiday]}
            <br />
            <Button onClick={nextAlphabetical}>Advance by Alphabet</Button>
            <Button onClick={nextChronological}>Advance by Year</Button>
        </div>
    );
}
