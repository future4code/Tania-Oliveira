import { user } from "../types/user"
import { connection } from "./connection"

export const insertUser = async(
  user: user
) => {
  try {
    await connection('User_Arq').insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
    })
  } catch (error) {
    throw new Error(error.sqlMessage || error.message)
  }
}
