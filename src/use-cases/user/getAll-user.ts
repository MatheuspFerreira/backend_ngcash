import User from "../../models/user";



export default async function getAll () {

    try {
        const UsersFound = await User.findAll()
        const users = UsersFound.map((current:any) => {

            return {
                id:current.id,
                username:current.username,
                accountId:current.accountId

            };
        })

        return users;
        
    } catch (error) {
        return {
            error:true, 
            message:error
        };
        
    };
    
}