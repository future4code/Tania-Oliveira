import {Request, Response} from 'express'
import { accounts } from './account';

export const getRegisterUser =(
  req:Request,
  res:Response
):void=>{
  try{
    if(!accounts.length){
      res.statusCode=404
      throw new Error("Nenhuma conta encontrada")
    }
    res.status(200).send(accounts)
  }catch(error){
res.send(error.message)
  }
}