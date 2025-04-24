/* @odoo-module*/

import { registry } from '@web/core/registry';
import { EmailField } from '@web/views/fields/email/email_field';



export class ValidEmail extends EmailField{
    setup(){
        super.setup()


    }


    get isValidFormat(){
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return !regex.test(this.props.record.data.email)
    }
}



ValidEmail.template ='web.EmailField_valid_email';
export const validEmail ={
    component:ValidEmail,

     displayName:'valid_email',
     supportedTypes:['char'],


}

registry.category('fields').add('vali_email_widget',validEmail)