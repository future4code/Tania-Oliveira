import jwt from 'jsonwebtoken'
import authenticationData from './../model/User';




export class TokenManager {

  generateToken(
    payload: authenticationData
  ): string {
    return jwt.sign(
       payload,
       process.env.JWT_KEY as string,
       {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
       }
    )
  }
  
  getTokenData(
    token: string
  ): authenticationData {
    const result: any = jwt.verify(
       token,
       process.env.JWT_KEY as string
    )
  
    return { id: result.id, }
  }
}