import { LightningElement } from 'lwc';

export default class PersonParent extends LightningElement {
    handleUser(){
        this.template.querySelector('c-person').handleUser();
    }
}