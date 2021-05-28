import { LightningElement } from 'lwc';

export default class Animal extends LightningElement {
    name = 'Cat';
    originalAge = 1;
    newAge = 0;

    get age(){
        if(this.originalAge > 20){
            this.originalAge=20;
        }
        return this.originalAge;
    }
    set age(value){
    //   if(value>20){
    //      throw new Error("Invalid Age");            
    //    }
        this.originalAge = value;
    }
    changeAge(event){
        this.newAge = event.target.value;
    }

    updateAge(){
        this.age = this.newAge;
    }
}