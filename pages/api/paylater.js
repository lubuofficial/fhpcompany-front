import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.json('should be a POST request');
    return;
  }

  const { name, email, address, province, postalCode, phone, cartProducts } = req.body;
  await mongooseConnect();
  
  const productsIds = cartProducts;
  const uniqueIds = [...new Set(productsIds)];
  const productsInfos = await Product.find({_id:uniqueIds});

  let line_items = [];
  for (const productId of uniqueIds) {
      const productInfo = productsInfos.find(p => p._id.toString() === productId);
      const quantity = productsIds.filter(id => id === productId)?.length || 0;
      if (quantity > 0 && productInfo) {
          line_items.push({
              quantity,
              price_data: {
                  currency: 'thb',
                  product_data: {name:productInfo.title},
                  unit_amount: quantity * productInfo.price,
                  // unit_amount: 1000,
              },
          });
      }   
  }

  //for nextauth account email in database
  const session = await getServerSession(req,res,authOptions);

  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    address,
    province,
    postalCode,
    phone,
    paid: false,
    userEmail:session?.user?.email, 
  });

  // Return order information
  res.json({
    order: orderDoc,
    payLater: true,
  });
}
