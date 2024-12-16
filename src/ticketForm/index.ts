import ko from 'knockout';
import viewModel from './viewModel';
import template from './template.html?raw';

ko.components.register('ticketForm', {
  viewModel,
  template,
});
