import { LightningElement,track } from 'lwc';

export default class CricketersDetail extends LightningElement {


    @track cricketers=[{
        fname:'',
        lname:'',
        team:''
    }
    ];


    handleShowClick(event){
        if (event.target.label === 'RCB') {
            this.cricketers=[{
                fname:'Virat',
                lname:'Kohli',
                team:'RCB'
            }
            ];
        }
        if (event.target.label === 'MI') {
            this.cricketers=[{
                fname:'Rohit',
                lname:'Sharma',
                team:'MI'
            }
            ];
        }
        if (event.target.label === 'KKR') {
            this.cricketers=[{
                fname:'Andre',
                lname:'Russel',
                team:'KKR'
            }
            ];
        }
    }
}