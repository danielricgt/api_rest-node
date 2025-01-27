import { renderModal } from "../presentation/render-modal/render-modal";
import { renderAddbutton } from "../presentation/render-table/render-add-button/render-add-botton";
import { renderButtons } from "../presentation/render-table/render-buttons/render-buttons";
import { renderTable } from "../presentation/render-table/render-table";
import usersStore from "../store/users-store";
import { saveUser } from "./save-user";

export const usersApp =  async (element) => {

    element.innerHTML = '';
    await usersStore.loadNextPage();
    element.innerHTML= '';

    renderTable(element);
    renderButtons(element);
    renderAddbutton(element );
    renderModal(element, async ( userLike ) => {
        await saveUser( userLike );
         usersStore.onUserChanged();
        renderTable();
    });
    
}