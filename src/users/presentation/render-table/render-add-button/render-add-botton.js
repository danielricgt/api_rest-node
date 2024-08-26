import '../render-add-button/render-add-botton.css';
/**
 * 
 * @param {HTMLDivElement} element 
 *  @param {() => void} callback 
 */
export const renderAddbutton = (element) => {
    const fabButton= document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');
    element.append(fabButton);
     
    fabButton.addEventListener('click', () => {
    //    if (!callback) return;
    //    callback();
        throw Error ('No implementado');
    })
}