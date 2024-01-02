const User = {
    _email: 's@Sd.com',
    _password: "abcde",

    get email(){
        return this._email.toUpperCase()
    },
    
    set password(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log((tea.email));