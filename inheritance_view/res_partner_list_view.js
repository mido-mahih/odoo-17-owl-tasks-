//** @odoo-module **/

import {registry} from '@web/core/registry';
import {listView} from '@web/views/list/list_view';
import {ListController} from '@web/views/list/list_controller';
import {useService} from '@web/core/utils/hooks';


export class ResPartnerInherit extends ListController {
    setup(){
        super.setup()
        this.action = useService('action')



    }


    getOrders(){
        this.action.doAction({
            'type':'ir.actions.act_window',
            'name':'orders',
            'res_model':'sale.order',
            'views':[[false,'list'],[false,'form']],
        })
    }

}

export const  resPartnerInherit = {
    ...listView,
    Controller: ResPartnerInherit,
    buttonTemplate:'web.ListView.Buttons.inheritance'
}


registry.category('views').add('res_partner_inherit_controller', resPartnerInherit)

///** @odoo-module **/
//
//import {registry} from "@web/core/registry";
//import {listView} from "@web/views/list/list_view";
//import {ListController} from "@web/views/list/list_controller";
//import {useService} from '@web/core/utils/hooks'
//const {useState} = owl;
//
//
//
//export class ResPartnerController extends ListController{
//    setup(){
//        super.setup()
//        this.action = useService('action')
//        this.state = useState({
//            index :1
//        })
//
//    }
//
//
//    getOrders(){
//        console.log(`Order ${this.state.index++} Done`)
//        this.action.doAction({
//            type:'ir.actions.act_window',
//            name:'orders',
//            res_model:'sale.order',
//            views:[[false,'list'],[false,'form']],
//
//
//        })
//
//    }
//
//}
//
//export const resPartnerController = {
//    ...listView,
//    Controller:ResPartnerController,
//    buttonTemplate:'to_do_list_owl.web.ListView.Buttons.inherit'
//
//
//
//}
//
//registry.category('views').add('res_partner_list_view_controller',resPartnerController);








