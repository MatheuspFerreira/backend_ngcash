import { createToken } from "../../lib/token";
import User from "../../models/user";
import ICreateLogin from "./interfaces/create-login"
import bcrypt from "bcrypt";




export default async function createLogin (credentials:ICreateLogin) {

  const {username, password} = credentials;

  if(!username || !password || username === "" || password === "") {
    return (
      {
        error:true, 
        message:"Erro, Você precisa enviar username e passaword"
      }
    )
  }

  const userExist = <any> await User.findOne(
    { where: { 
      username:username
    } 
  });

  if(!userExist){
    return({
      error:true,
      message:"Erro no login, suas credenciais estão erradas!"

    })
  }

  const comparePassword = await bcrypt.compare (password, userExist.password)

  if(!comparePassword) {
    return({
      error:true,
      message:"Erro no login, suas credenciais estão erradas!"

    })
  }

  const token = await createToken(userExist)

  return token;

}