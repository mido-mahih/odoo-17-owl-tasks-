/* @odoo-module*/

import {registry} from '@web/core/registry';
import {formView} from '@web/views/form/form_view';
import {FormController} from '@web/views/form/form_controller';
import {useService} from '@web/core/utils/hooks';


export class ResPartnerFormInheritance extends FormController {
    setup(){
        super.setup()
        this.action =useService('action')



    }

    get urlValidatorWidget(){
            const regex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/[^\s]*)?$/i;
            return !regex.test(this.model.root.data.website)

        }


    visitWebSite(){
        const url = this.model.root.data.website;
        if(url){
            this.action.doAction({
                type:'ir.actions.act_url',
                target:'blank',
                url
            })

        }


    }



}




ResPartnerFormInheritance.template = 'web.FormView.inheritance'
export const resPartnerFormInheritance = {
    ...formView,
    Controller : ResPartnerFormInheritance

}


registry.category('views').add('res_partner_form_inheritance_js_attachment',resPartnerFormInheritance)