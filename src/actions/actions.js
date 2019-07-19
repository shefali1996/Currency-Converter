import {CONVERT,CONVERT_SUCCESS} from './actionType'

export const convert=(payload)=>{
    return {type:CONVERT,payload }
}
export const convertSuccess=(payload)=>{
    return {type:CONVERT_SUCCESS,payload }
}