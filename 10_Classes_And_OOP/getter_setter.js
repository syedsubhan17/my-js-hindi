class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}subhan `
    }
    set password(value){
        this._password = value.toUpperCase();
    }
}

const subhan = new User("S@subhan.ai", "abcde")
console.log(subhan.email);