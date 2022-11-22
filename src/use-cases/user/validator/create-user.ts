
export  async function verifyData (data:any) {
    
    if(data.username.length < 3 ) {
        return ({
            error:true, 
            message:"Error, username precisa ter no minímo 3 caracteres "
        });
        
    }else if(data.password.length >= 8){

        const regex = /^(?=.*[A-Z])(?=.*\d)/
        const passwordValid = regex.test(data.password);

        if(passwordValid){
            return true;
           
        }else {
            return ({
                error:true, 
                message:"Error, password precisa ter no minímo uma letra maiúscula e um número."
            });
        };
        
    } else if(data.password.length < 8) {
        return ({
            error:true, 
            message:"Error, password precisa ter no minímo 8 caracteres."
        });

    };

};

export  async function verifyUser (data:any, model:any) {
    const user = data
    const exists =  await model.findOne({
        where:{username:user.username},
                                
    });

    return exists;

};