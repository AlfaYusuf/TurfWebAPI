import Razorpay from "razorpay"
import dotenv from "dotenv";
dotenv.config();

const razorpay = new Razorpay({
  key_id: '0'  /*process.env.RAZORPAY_KEY_ID*/,
  key_secret:'0'  /* process.env.RAZORPAY_KEY_SECRET*/,
});

export default razorpay;