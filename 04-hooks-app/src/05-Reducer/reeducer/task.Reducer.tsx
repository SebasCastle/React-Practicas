import { useReducer } from "react";
import * as z from "zod";
 

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


interface TaskState{
    todos:Todo[];
    length: number;
    completed: number;
    pending: number;
}

//objeto
export type TaskAction =
| {type:'ADD_TASK',  payload:string}
| {type:'TOGGLE_TASK', payload:number }
| {type:'DELETE_TASK',  payload:number}

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateScheme = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number(),
})

export const getTasksInitialState = (): TaskState => {
    const localStorageStage = localStorage.getItem('task-state');

    if (!localStorageStage) { 
        return{
            todos:[],
            length: 0,
            completed: 0,
            pending: 0,
            
        }
    }
    //validar por Zod
    const result = TaskStateScheme.safeParse(JSON.parse(localStorageStage) );
    if(result.error){
        console.error(result.error);
        return{
            todos:[],
            length: 0,
            completed: 0,
            pending: 0,
        }
    }

    return result.data;

    // return JSON.parse(localStorageStage);
    
}

//action: determinar un nuevo estado state=nuevo estado
export const taskReducer = (state:TaskState, action: TaskAction): TaskState => {

    switch(action.type){
        case'ADD_TASK':
            const newTodo : Todo ={
            id: Date.now(),
            text: action.payload,
            completed: false,
        }
        return{
            ...state,
            length: state.todos.length + 1,
            todos: [...state.todos, newTodo],
            pending: state.pending + 1,
        }
        case'DELETE_TASK':
        {
            const currentTodos = state.todos.filter(
             (todo) => todo.id!==action.payload 
        );

            return{
            ... state,
            todos:currentTodos,
            length:currentTodos.length,
            completed: currentTodos.filter(todo => todo.completed).length,
            pending: currentTodos.filter(todo => !todo.completed).length

            }
        }
        
        case'TOGGLE_TASK':
        {
            const updatedToDos = state.todos.map((todo) =>{
            if(todo.id === action.payload){
                return {...todo, completed:!todo.completed};
            }
            return todo;
          });

            return {
            ...state,
            todos:updatedToDos,
            completed: updatedToDos.filter(todo => todo.completed).length,
            pending: updatedToDos.filter(todo => !todo.completed).length

            }
        }

        default:
                return state;


    }
}