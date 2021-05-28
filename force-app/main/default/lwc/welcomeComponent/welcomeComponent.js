import { LightningElement,track } from 'lwc';

export default class WelcomeComponent extends LightningElement {

   

    @track student = {
        fname:'Vikash',
        lname:'Agarwal'
    }


    handleClick(){
        this.student.fname='Shaqib';
        this.student.lname='Ahmed';
    }
}