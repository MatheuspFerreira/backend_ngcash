import User from "../../models/user";



export default async function getAll () {

    try {
        const allUsers = await User.findAll()

        return allUsers;
        
    } catch (error) {
        return {
            error:true, 
            message:error
        };
        
    };
    


}