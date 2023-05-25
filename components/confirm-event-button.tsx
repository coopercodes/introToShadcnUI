"use client"

import { Button } from "./ui/button"

export function ConfirmEventButton() {
    // build an onClick handler

    // when user presses button -> fire API call to schedule an event

    return (
        <Button
            onClick={() => {
                console.log("CLICKED");
            }}
        >
            Schedule It!
        </Button>
    )
}