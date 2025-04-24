/* @odoo-module */

import {registry} from '@web/core/registry';
import {kanbanView} from '@web/views/kanban/kanban_view';
import {KanbanController} from '@web/views/kanban/kanban_controller';
import {useService} from '@web/core/utils/hooks';
const {useState, onWillStart} = owl

export class ResPartnerKanbanController extends KanbanController{
    setup(){
        super.setup()
        this.action = useService('action')
        this.orm = useService('orm')
        this.state = useState({
            value:1
        })


        onWillStart(async ()=>{
                this.customerLocations = await this.orm.readGroup('res.partner' , [] ,['state_id'],['state_id'])
//             this.customerLocations = await this.orm.readGroup('res.partner',[],['state_id'],['state_id'])


        })



    }


        selectLocation(cust){
            const name = cust[1] || 'No State';
            const id = cust[0] || false;

            this.env.searchModel.createNewFilters([
            {
                description:name,
                domain:[['state_id','=',id]],

            }
            ])


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


ResPartnerKanbanController.template = 'web.KanbanView_inheritance'
export const resPartnerKanbanController = {
    ...kanbanView,
    Controller:ResPartnerKanbanController,
    buttonTemplate:'web.KanbanView.Buttons.inheritance'
}


registry.category("views").add("res_partner_kanban_view_controller", resPartnerKanbanController)