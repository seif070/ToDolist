import {configureStore} from "@reduxjs/toolkit"
import Action from './Action'



export default configureStore({
    reducer:{
        Todo:Action
    }
})