import { api, LightningElement } from 'lwc';

export default class DemoShowFields extends LightningElement {
    @api
    target;

    @api
    cols;

    get targets(){
        if (this.target){
            const targets = this.target.split(/,/).map(t => {
                const id = t;
                const label = `項目${t}`;
                return {id, label};
            });
            return targets;
        }
    }

    get colClass(){
        return 'slds-col slds-size_1-of-' + this.cols;
    }

}