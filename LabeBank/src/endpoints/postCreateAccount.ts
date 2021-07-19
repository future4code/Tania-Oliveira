import {Request, Response} from 'express'
import { accounts } from './account';

export const postCreateAccount =(
  req:Request,
  res:Response
):void=>{
  try{
    const { name, CPF, dateBirthAsString } = req.body
    const [day,month,year] = dateBirthAsString.split("/")
    const dateBirth: Date = new Date(`${year}-${month}-${day}`)

    const ageInMilisseconds: number = Date.now() - dateBirth.getTime()

    const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

    if (ageInYears < 18){
      res.statusCode=406
      throw new Error("idade deve ser maior de 18 anos")
    }
    accounts.push({
      name,
      CPF,
      dateBirth,
      balance:0,
      statement:[]
    })
    res.status(201).send("Conta criada com sucesso!")
  }catch(error){
    console.log(error)
    res.send(error.message)
  }
}