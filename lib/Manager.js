const Manager{
    constructor(name,id,email,github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
getGithub(){
    return this.github;
}

module.exports = Manager;
