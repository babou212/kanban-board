import ko from "knockout";
import Store from "../service/stateService";
import { TicketProgress } from "../enum/TicketProgress";
// import { postFormApi } from "../service/apiService";

export function ticketForm() {
  const title = ko.observable("");
  const description = ko.observable("");
  const isToggle = ko.observable(false);

  const toggleForm = () => {
    isToggle(!isToggle());
  }

  const submitForm = function () {
    if (title() != "" && description() != "") {
      const ticket = {
        id: crypto.randomUUID(),
        title: title(),
        description: description(),
        state: TicketProgress.New
      }

      // postFormApi(ticket);
      Store.state.tickets().push(ticket);

      title("");
      description("");
    }
  }

  return {
    title,
    description,
    submitForm,
    toggleForm,
    isToggle
  };
}

export default ticketForm;
