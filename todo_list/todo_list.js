/** @odoo-module **/
import {registry} from '@web/core/registry';

const {useState,Component,onWillStart,useRef} = owl;

import {useService} from '@web/core/utils/hooks'

export class TodoList extends Component {
    setup(){
        this.state = useState({
            taskList:[],
            task: {
            name:'',
            color:'#FFF306',
            completed:false
            },
            edit  : false,
            activeId : false

        })

        this.orm = useService('orm');
        this.model = 'todo.list.owl';
        this.searchText = useRef('search-text')


        onWillStart( async ()=>{
            await this.getAllTasks()
        })

    }


    async searchTask(){
        const text = this.searchText.el.value
        this.state.taskList =  await this.orm.searchRead(this.model,
        [['name','ilike',text]],[
        "name","completed","color",]
        )
    }

    newTask(){
        this.state.edit = false;
        this.state.activeId = false;
    }

    async getAllTasks(){
        this.state.taskList = await this.orm.searchRead(this.model,[],[
                "name","completed","color",
            ])
    }


    async saveTask(){
        if(this.state.edit){
            await this.orm.write(this.model,[this.state.activeId],this.state.task)

        }else{
            await this.orm.create(this.model,[this.state.task])
        }


        await this.getAllTasks()
        this.clearTask()
    }

    clearTask(){
        this.state.task = {
            name:'',
            color:'#FFF306',
            completed:false
        }
    }

     editTask(task){
        this.state.edit = true;
        this.state.activeId = task.id;
        this.state.task = {...task};
    }

    async changeCheckTree(e,task){

         await this.orm.write(this.model,[task.id],{
            completed : e.target.checked
        })

        await this.getAllTasks()
    }

    async changeColorTree(e,task){
        await this.orm.write(this.model,[task.id],{color:e.target.value})
    }

    async deleteTask(task){
        await this.orm.unlink(this.model,[task.id])
        await this.getAllTasks()
        this.clearTask()
    }

}

TodoList.template = 'to_do_list_owl.todo_list_client_template';
registry.category('actions').add('to_do_list_owl.owl_todo_list_js',TodoList);