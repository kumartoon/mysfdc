import { LightningElement } from 'lwc';

export default class WelcomeMessage extends LightningElement {
greeting="World"
    handleChange(event){
        this.greeting=event.target.value;
    }
}