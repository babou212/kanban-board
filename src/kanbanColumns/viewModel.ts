import dragula from 'dragula';
import Store from "../service/stateService";

export function kanbanColumns() {
    const newTickets = Store.state.tickets().filter((ticket) => ticket.state == "NEW");
    const inProgressTickets = Store.state.tickets().filter((ticket) => ticket.state == "IN PROGRESS");
    const doneTickets = Store.state.tickets().filter((ticket) => ticket.state == "DONE");

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
