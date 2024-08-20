import '../../presentation/render-table/render-table.css';
import usersStore from '../../store/users-store';

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders =  document.createElement ('thead');
    tableHeaders.innerHTML = `
    <tr>
    <th>#ID</th>
    <th>Balance</th>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Active </th>
    <th>Actions<th>

    </tr>` 
    const tableBody =  document.createElement ('tbody');
    table.append(tableHeaders, tableBody);
    return table;
 }


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const renderTable = (element) => {
    const users = usersStore.getUser();
    if (!table) {
        table =  createTable();
        element.append(table);
        //TODO listeners a la table
    }

    let tableHTML = ''
    users.forEach(user => {
        tableHTML += `
        <tr>
        <td>${user.id}</td>
        <td>${user.balance}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.active}</td>
        <td>
            <a href = ">
        </tr>
        `
    });
}