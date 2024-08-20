import { renderTable } from "../presentation/render-table/render-table";
import usersStore from "../store/users-store";

export const usersApp =  async (element) => {

    element.innerHTML = '';
    await usersStore.loadNextPage();
    console.log(usersStore.getUser());

    renderTable(element)
}