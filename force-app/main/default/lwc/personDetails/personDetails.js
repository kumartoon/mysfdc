import { LightningElement } from 'lwc';

export default class PersonDetails extends LightningElement {
    name = 'Elon Musk';
    details = 'Elon Musk is the founder of spaceX';
    showDetails = false;
    show_hide = 'Show';

    

    handleClick(){
       
        this.showDetails = !this.showDetails;
        this.show_hide = this.showDetails? 'Hide' : 'Show';
        console.log(this.showDetails);
    }
}