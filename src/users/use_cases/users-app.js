import { renderAddbutton } from "../presentation/render-table/render-add-button/render-add-botton";
import { renderButtons } from "../presentation/render-table/render-buttons/render-buttons";
import { renderTable } from "../presentation/render-table/render-table";
import usersStore from "../store/users-store";


export const usersApp =  async (element) => {

    element.innerHTML = '';
    await usersStore.loadNextPage();
    element.innerHTML= '';

    renderTable(element);
    renderButtons(element);
    renderAddbutton(element, () => {console.log('desde el padre')});
    
}