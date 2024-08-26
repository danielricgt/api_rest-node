import { User } from "../models/user";
import { loadUsersbypage } from "../use_cases/load-user"

const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async () => {
    const users = await loadUsersbypage(state.currentPage + 1);
    if (users.length === 0) {
        state.currentPage -= 1; // Decrementar currentPage para evitar que siga incrementando
        return;
    }
    state.currentPage += 1;
    state.users = users;
};

const loadPreviousPage = async () => {
    if (state.currentPage <= 1) return; // Verificar si currentPage es mayor que 1 antes de decrementar
    const users = await loadUsersbypage(state.currentPage - 1);
    state.users = users;
    state.currentPage -= 1;
};

const onUserChanged =  async() => {
    
} 

const reloadPage =  async() => { 
    
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */

    getUser: () => [...state.users],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,

}