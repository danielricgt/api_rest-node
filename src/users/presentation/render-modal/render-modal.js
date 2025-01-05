import modalHtml from '../render-modal/render-modal.html?raw';
import "../render-modal/render-modal.css"
let modal;
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {
    if (modal) return;  
     
    modal = document.createElement('div');
    modal.innerHTML= modalHtml;
    modal.className = 'modal-container hide-modal';   

    element.append(modal);

} 
