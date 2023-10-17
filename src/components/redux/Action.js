import {createSlice} from "@reduxjs/toolkit";


export const Action=createSlice({
    name:'Todo',
    initialState:[
        {id:1, discription:'newtodo',
        checked:false
           },
           {id:2, discription:'sectodo',
           checked:false
              },
              {id:3, discription:'therdtodo',
        checked:false
           },
   
    ],
    reducers:{
handleDelet:(state,action)=>{
    return state.filter((el)=>el.id!==action.payload)

},

    }
})





export const{handleDelet}=Action.actions;
export default Action.reducer
