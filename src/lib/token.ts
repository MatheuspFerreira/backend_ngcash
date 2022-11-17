import Jwt from 'jsonwebtoken';
const SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"





interface ITokenUser {
    
  id: string
  username: string
  accountId:string

  
}

export function createToken(user: ITokenUser) {
  return {
        token: Jwt.sign({
            
            id:user.id,
            username:user.username,
            accountId:user.accountId

            

        }, SECRET)
    }
}

export function verifyToken(token: string) {
  try {
    // @todo: Verificar se o usuário ainda existe
    
    return Jwt.verify(token, SECRET);

  } catch (err) {
    return (
        {
            error:true, 
            message:'Não autorizado'
        }
    );
  }
}

export function decodeToken(token: string) {
  return Jwt.decode(token);
}