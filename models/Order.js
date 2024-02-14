import { Schema, model, models } from 'mongoose';

const OrderSchema = new Schema({
    userEmail: String,
    line_items:Object,
    name:String,
    email:String,
    address:String,
    province:String,
    postalCode:String,
    phone:String,
    paid:Boolean,
},{
    timestamps: true,
});

export const Order = models?.Order || model('Order', OrderSchema);