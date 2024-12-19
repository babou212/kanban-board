import dragula from 'dragula';
import Store from "../service/stateService";
import { TicketProgress } from '../enum/TicketProgress';
import ko from 'knockout';

export function kanbanColumns() {
    const newTickets = Store.state.tickets().filter((ticket) => ticket.state == "NEW");
    const newCount = ko.observable(newTickets.length);
    const inProgressTickets = Store.state.tickets().filter((ticket) => ticket.state == "IN PROGRESS");
    const progressCount = ko.observable(inProgressTickets.length);
    const doneTickets = Store.state.tickets().filter((ticket) => ticket.state == "DONE");
    const doneCount = ko.observable(doneTickets.length);

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
          inProgressTickets.push(ticketToAdd[0]);
        }

        if (targetId == "new") {
          const ticketToAdd = Store.state.tickets().filter((ticket) => ticket.id == objectId);
          ticketToAdd.filter((ticket) => ticket.state = TicketProgress.New)
          newTickets.push(ticketToAdd[0]);
        }

        if (targetId == "done") {
          const ticketToAdd = Store.state.tickets().filter((ticket) => ticket.id == objectId);
          ticketToAdd.filter((ticket) => ticket.state = TicketProgress.Done)
          doneTickets.push(ticketToAdd[0]);
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      drake.on('drop', function(el: any, target: any) {
        const dataId = el.getAttribute("dataid");
        updateTicketState(target.id, dataId);
      });
     
  return {
    newTickets,
    inProgressTickets,
    doneTickets,
    newCount,
    progressCount,
    doneCount,
    updateTicketState
  };
}

export default kanbanColumns;
