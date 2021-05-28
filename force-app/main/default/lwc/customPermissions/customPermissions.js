import { LightningElement } from 'lwc';
import hasViewSetup from '@salesforce/userPermission/ViewSetup';
import hasEmailSingle from '@salesforce/userPermission/EmailSingle';
import hasViewAllData from  '@salesforce/userPermission/ViewAllData';
import hasModifyAllData from '@salesforce/userPermission/ModifyAllData';


export default class CustomPermissions extends LightningElement {

    get disableViewSetup(){
        return hasViewSetup;
    }

    get disableEmailSingle(){
        return hasEmailSingle;
    }

    get ModifyAllData (){
        return hasModifyAllData;
    }

    get ViewAllData (){
        return hasViewAllData;
    }
}