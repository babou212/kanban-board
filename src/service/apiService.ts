import { ticket } from "../interface/ticket";
import Store from "../service/stateService";

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
        Store.state.tickets().push(formBody);
        return response.json();
    }).catch((error) => {
        console.warn("Error", error);
    });
}

export async function getTickets() {
    const data = await fetch("http://localhost:8000/tickets", {
        method: 'GET'})
        .then((response) => {
            if (response.ok) return response.json();
            return null;
    });

    return data;
}
