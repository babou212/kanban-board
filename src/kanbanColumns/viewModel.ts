import dragula from 'dragula';
import Store from "../service/stateService";

export function kanbanColumns() {
    const tickets = Store.state.tickets;
    const newTickets = tickets().filter((ticket) => ticket.state == "NEW");
    const inProgressTickets = tickets().filter((ticket) => ticket.state == "IN PROGRESS");
    const doneTickets = tickets().filter((ticket) => ticket.state == "DONE");

    dragula([
        document.getElementById("new"),
        document.getElementById("in-progress"),
        document.getElementById("done"),
      ]);
     
  return {
    newTickets,
    inProgressTickets,
    doneTickets,
  };
}

export default kanbanColumns;
