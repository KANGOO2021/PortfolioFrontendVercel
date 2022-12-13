export class Login {

    id: Number;
    email?: String;
    password?: String;
    
  
    
  constructor(id: Number, email: String="", password: String="") {
        this.id = id;
        this.email = email;
        this.password = password;
    }
}