/* @odoo-module*/

import {registry } from "@web/core/registry"
//import {standardFieldProps } from "@web/views/fields/standard_field_props"
import {standardFieldProps} from '@web/views/fields/standard_field_props';
import {Component , useState} from "@odoo/owl"






export class RangeWidget extends  Component{
    setup(){
        super.setup()
        this.state = useState({
            salary : 5,
            currency :this.props.record.data.currency_id[1] ? this.props.record.data.currency_id[1]: "EG",
        })



    }



    async chaneSalary(e){
        const salary = e.target.value;
//        await this.props.record.update({[this.props.name]:salary})
          await this.props.record.update({'salary':salary})
    }

}


RangeWidget.template = 'to_do_list_owl.range_widget_view'



export const rangeWidget = {
    component:RangeWidget,
    displayName:'RangeWidget',
    supportedTypes:['integer'],

}

//export const rangeWidget = {
//    component:RangeWidget,
//    displayName:'RangeWidget',
//    supportedTypes:['integer'],
//
//}


registry.category('fields').add('range_widget',rangeWidget)






//import {registry} from '@web/core/registry';
//import {Component,useState} from '@odoo/owl';
//import {standardFieldProps} from '@web/views/fields/standard_field_props';
//
//
//export class RangeWidget extends Component{
//    setup(){
//        super.setup()
//        this.state = useState({
//            salary : `${this.props.record.data.salary} ${this.props.record.data.currency_id?.[1] ? this.props.record.data.currency_id?.[1] : 'EG'}`
//        })
//
//    }
//
//    async changeRange(e,props){
//        const salary = e.target.value;
//        await this.props.record.update({[this.props.name]:salary})
//        this.state.salary = `${this.props.record.data.salary} ${this.props.record.data.currency_id?.[1] ? this.props.record.data.currency_id?.[1] : 'EG'}`
//
////        console.log(e)
////        console.log(this.props)
////        console.log(this.props.record.data.currency_id)
//    }
//
//}
//
//RangeWidget.template = 'to_do_list_owl.range_widget_view'
//RangeWidget.props = {
//...standardFieldProps
//
//}
//
//export const  rangeWidget = {
//    component:RangeWidget,
//    displayName:'range_widget',
//    SupportTypes:['integer'],
//}
//
//
//registry.category('fields').add('range_widget_view',rangeWidget)

