const Manager{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
getName() {
    return this.name;
}

getPosition(){
    return  "Manager";
}

getEmail(){
    return this.email;
}

getId(){
    return this.id;
}

module.exports = Manager;
