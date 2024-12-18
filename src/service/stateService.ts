import ko from 'knockout';
import { getTickets } from "./apiService";

const Store = {
    state: {
        tickets: ko.observableArray(await getTickets()),
    },
};

export default Store;
