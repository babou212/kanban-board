import ko from "knockout";
import template from './main.template.html?raw';
import "./style.css";

import "./ticketForm";
import "./kanbanColumns";

function viewModel(params: { initialText: string }) {
  const text = ko.observable(params.initialText);

  return {
    text,
  };
}

ko.components.register("main", {
  viewModel,
  template,
});

function rootModel() {
  return {
    context: "Root model",
  };
}

ko.applyBindings(rootModel);
