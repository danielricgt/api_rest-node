import modalHtml from '../render-modal/render-modal.html?raw';
let modal;
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {
    if (modal) return;  
     
    modal = document.createElement('div');
    modal.innerHTML= modalHtml;
    modal.className = 'modal-contaniner hide-modal';   

    element.append(modal);

} 
