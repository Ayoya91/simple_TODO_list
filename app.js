import {createApp} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
createApp({
    data(){
        return{
            tasks:[
                {title:"do sport"},
                {title:"shopping"},
            ],
            taskNew:''
        }
    },
    methods:{
        addTask(){
            this.tasks.push({
                title:this.taskNew
            })
            this.taskNew=''
        },
        removeTask(removeT){
            this.tasks=this.tasks.filter(task=>removeT!=task);
        }
    }
}).mount('#app');
 
