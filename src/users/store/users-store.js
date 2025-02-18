import { User } from "../models/user";
import { loadUsersbypage } from "../use_cases/load-user"

const state = {
    currentPage: 0,
    users: []
}

const  loadNextPage = async () => {
    const users = await loadUsersbypage(state.currentPage + 1);
    if (users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
};

const loadPreviousPage = async () => {
    if (state.currentPage <= 1) return;  
    const users = await loadUsersbypage(state.currentPage - 1);
    state.users = users;
    state.currentPage -= 1;
};
/**
 * 
 * @param {User} updatedUser 
 */
let wasFound = false;
const onUserChanged =  async(updatedUser) => {
    state.users = state.users.map(user =>{
        if (user.id === updatedUser.id) {
            wasFound = true;
            return updatedUser;
        }
        return user; 
    });
    if (state.users.length < 10 && !wasFound)  {
        state.users.push (updatedUser);
    }  
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