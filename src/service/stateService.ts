import ko from 'knockout';
// import { getTickets } from "./apiService";
import * as data from '../../db.json';

// const Store = {
//     state: {
//         tickets: ko.observableArray(await getTickets()),
//     },
// };

const Store = {
    state: {
        tickets: ko.observableArray(data.tickets),
    },
};

export default Store;
