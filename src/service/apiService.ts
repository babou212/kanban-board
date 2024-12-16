import { ticket } from "../interface/ticket";

export function postFormApi(ticket: ticket):void {
    const formBody = {
        "id": ticket.id,
        "title": ticket.title,
        "description": ticket.description,
        "state": ticket.state
    }

    fetch("http://localhost:8000/tickets", {
        method: 'POST',
        body: JSON.stringify(formBody),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => 
    {
        return response.json();
    }).catch((error) => {
        console.warn("Error", error);
    });
}
