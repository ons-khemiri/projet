const Order = require('../models/Order');


exports.addOrder = async(req,res) => {

    const { name , billingaddress , state ,country , cardtype ,cardnumber, phone  } = req.body
      try {
           const newOrder = new Order ({
             name ,
             billingaddress ,
             state ,
             country ,
             cardtype ,
             cardnumber,
             phone,
            });
            await newOrder.save()
            res.status(200).send({success : [{msg:"Order sent please wait for a confirmation call"}] , newOrder })
        }
         catch (error) {
            res.status(400).send({ errors : [{ msg : " Order not sent !!!!"}]})   
        }
    };
    exports.getOrders = async (req,res) => {
        try {
            const listOrder = await Order.find();
            res.status(200).send({msg : 'Orders',  listOrder})
            } 
        catch (error) {
            res.status(400).send({msg : 'can not get all Orders !!', error})
        }
      };
     exports.deleteOrder = async (req,res) => {
        try {
            const{_id}= req.params;
            await Order.findOneAndDelete({_id})
            res.status(200).send({msg : "Order deleted"})
        } 
        catch (error) {
            res.status(400).send({msg : "can not delete this Order !!", error})      
        }
    };           