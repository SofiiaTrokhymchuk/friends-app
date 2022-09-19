export class User{
    constructor(firstName, lastName, gender, age, phone, image){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.phone = phone;
        this.image = image;
    }

    getFirstName(){
        return this.firstName;
    }
    
    getLastName(){
        return this.lastName;
    }

    getFullName(){
        return this.getFirstName() + ' ' + this.getLastName();
    }

    getGender(){
        return this.gender;
    }

    getAge(){
        return this.age;
    }

    getPhone(){
        return this.phone;
    }

    getImage(){
        return this.image;
    }
}
