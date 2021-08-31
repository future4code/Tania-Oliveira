export default interface authenticationData {
  id: string
}
  enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event"
}
export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) { }
  
  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getEmail() {
    return this.email
  }

  getPassword() {
    return this.password
  }

  setId(newId: string) {
    this.id = newId
  }

  setName(newName: string) {
    this.name = newName
  }

  setEmail(newEmail: string) {
    this.email = newEmail
  }

  setPassword(newPassword: string) {
    this.password = newPassword
  }
}
export class post{
  constructor(
   private id: string,
   private photo: string,
   private description: string,
   private type: POST_TYPES,
   private createdAt: Date,
   private authorId: string
  ){}
  getPostId(){
    return this.id
  }
  getPostPhoto(){
    return this.photo
  }
  getPostDescripition(){
    return this.description
  }
  getPostType(){
    return this.type
  }
  getPostCreatedAt(){
    return this.createdAt
  }
  getPostAuthorId(){
    return this.authorId
  }
}

