import dragula from 'dragula';
import Store from "../service/stateService";
import { TicketProgress } from '../enum/TicketProgress';

export function kanbanColumns() {
    const newTickets = Store.state.tickets().filter((ticket) => ticket.state == "NEW");
    const inProgressTickets = Store.state.tickets().filter((ticket) => ticket.state == "IN PROGRESS");
    const doneTickets = Store.state.tickets().filter((ticket) => ticket.state == "DONE");

   const drake =  dragula([
        document.getElementById("new"),
        document.getElementById("in-progress"),
        document.getElementById("done"),
      ]);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function updateTicketState(targetId: any, objectId: any) {
        if (targetId == "in-progress") {
          // ticket
          const ticketToAdd = Store.state.tickets().filter((ticket) => ticket.id == objectId);

          //update ticket status 
          ticketToAdd.filter((ticket) => ticket.state = TicketProgress.InProgress)
          
          // push ticket to new array
          inProgressTickets.push(ticketToAdd);
        }

        if (targetId == "new") {
          const ticketToAdd = Store.state.tickets().filter((ticket) => ticket.id == objectId);
          ticketToAdd.filter((ticket) => ticket.state = TicketProgress.New)
          newTickets.push(ticketToAdd);
        }

        if (targetId == "done") {
          const ticketToAdd = Store.state.tickets().filter((ticket) => ticket.id == objectId);
          ticketToAdd.filter((ticket) => ticket.state = TicketProgress.Done)
          doneTickets.push(ticketToAdd);
        }


        console.log(newTickets, inProgressTickets, doneTickets);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      drake.on('drop', function(el: any, target: any) {
        const dataId = el.getAttribute("dataid");
        console.log(target.id, dataId);
        updateTicketState(target.id, dataId);
      });
     
  return {
    newTickets,
    inProgressTickets,
    doneTickets,
    updateTicketState
  };
}

export default kanbanColumns;
