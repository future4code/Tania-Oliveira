import { connection } from "../connection";


export const createUser = async(
   id: string,
   email: string,
   name: string,
   password: string,
     role: string 
 ): Promise<void>=> {
   try {
     await connection()
       .insert({
         id,
         email,
         name,
         password,
              role
       })
       .into('User_Arq');
   } catch (error) {
     throw new Error(error.sqlMessage || error.message);
   }
 }
   
