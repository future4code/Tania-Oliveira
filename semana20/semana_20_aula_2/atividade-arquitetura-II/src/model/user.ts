export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export class authenticationData{
   constructor(
      id:string,
      role:USER_ROLES
   ){}
}


export class userData {
   constructor(
     private id: string,
     private name: string,
     private nickname: string,
     private email: string,
     private password: string,
     private role: USER_ROLES
   ){}
     getId(){
       return this.id
     }
     getName(){
       return this.name
     }
     getNickname(){
       return this.nickname
     }
     getEmail(){
       return this.email
     }
     getPassword(){
       return this.password
     }
     getRole(){
       return this.role
     }
     setId(newId:string){
        this.id = newId
     }
     setName(newName:string){
        this.id = newName
     }
     setNickname(newNickname:string){
        this.id = newNickname
     }
     setEmail(newEmail:string){
        this.id = newEmail
     }
     setPassword(newPassword:string){
        this.id = newPassword
     }
 
   }