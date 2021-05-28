import { api, LightningElement, track } from 'lwc';

export default class Person extends LightningElement {

    @api location  

    @track user={
        fname:'Kumar',
        lname:'Niraj'
    };

    @api
    handleUser(){
       
        this.user.fname='Virat';
        this.user.lname='Kohli';
    }
}