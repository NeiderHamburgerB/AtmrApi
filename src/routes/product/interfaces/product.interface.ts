import { Document } from "mongoose"

export interface IProduct extends Document{
    createdBy:string
    name:string
    price:string
    sku:number
    sales:number
    active:boolean
}