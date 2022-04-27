import { Schema,Types } from "mongoose"

export const ProductSchema = new Schema({

    createdBy:{
        type:Types.ObjectId,
        ref:'User'
    },
    name:{
        type:String
    },
    price:{
        type:Number
    },
    sku:{
        type:Number
    },
    sales:{
        type:Number
    },
    active:{
        type:Boolean
    }

},{
    timestamps:true,
    versionKey:false
})