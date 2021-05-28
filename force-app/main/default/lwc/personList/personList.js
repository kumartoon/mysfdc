import { LightningElement } from 'lwc';

export default class PersonList extends LightningElement {

    persons=[
        {
            id: 1,
            name: 'Bill Gates'
        },
        {
            id: 2,
            name: 'Jeff Bezzos'
        },
        {
            id: 3,
            name: 'Elon Musk'
        },
        {
            id: 4,
            name: 'Mukesh Ambani'
        },
        {
            id: 5,
            name: 'Jack Ma'
        }

    ];
}