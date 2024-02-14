import { Schema, model, models } from "mongoose"

const AddressSchema = new Schema({
    userEmail: {type:String, unique: true, required: true},
    name: String,
    email: String,
    address: String,
    province: String,
    postalCode: String,
    phone: String,
});

export const Address = models?.Address || model('Address', AddressSchema);