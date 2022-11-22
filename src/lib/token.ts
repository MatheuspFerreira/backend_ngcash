import Jwt from 'jsonwebtoken';
const SECRET="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"

interface ITokenUser {
    
  id: string
  username: string
  accountId:string

  
}

export async function createToken(user: ITokenUser) {
  return {
        token: Jwt.sign({
            
          id:user.id,
          username:user.username,
          accountId:user.accountId

        }, SECRET, { expiresIn: '24h' })
  }
}

export async function verifyToken(token: string) {
  try {
    
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

export async function decodeToken(token: string) {
  return Jwt.decode(token);
}
