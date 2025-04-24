/* @odoo-module */

import {registry} from '@web/core/registry';
import {UrlField} from '@web/views/fields/url/url_field';



export class UrlValidator extends UrlField{
    setup(){
        super.setup()





    }

    get urlValidatorWidget(){
            const regex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/[^\s]*)?$/i;
            return !regex.test(this.props.record.data.website)
        }


}


UrlValidator.template = 'web.UrlField_url_validator'

export const urlValidator = {
    component : UrlValidator,
    supportedTypes : ['char'],
    displayName : 'url_validator',

}


registry.category('fields').add('url_validator_widget' ,urlValidator )

