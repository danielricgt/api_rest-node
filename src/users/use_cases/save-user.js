import { userModelToLocalhost } from "../mappers/user-to-local-host.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} userlike 
 */


export const saveUser = async( userLike ) => {


    const user = new User(userLike);
    if (!user.firstName || !user.lastName ){
     throw  "First and LastName required"
    }
    const userToSave = userModelToLocalhost(user); 
    if (user.id) {
        throw new Error('No se puede crear un usuario con un id existente');
        return;
    }
 
    const updateUser = await createUser( userToSave);
    return updateUser;
}

const createUser = async (user) => {
    const url = `${ import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url,{

        method : 'POST',
        body: JSON.stringify(user),
        headers : {
            'Content-Type': 'application/json'
        }
    });
    const newUser = await res.json();
    console.log(newUser);
    return newUser;
}