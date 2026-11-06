import nodemailer from "nodemailer";
import products from "../../../data/products";
import { createQuotePostHandler } from "./quote-handler";

export const POST = createQuotePostHandler({
  createTransport: (options) => nodemailer.createTransport(options),
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  adminEmail: process.env.ADMIN_EMAIL || "swastikboats@gmail.com",
  productTitles: products.map((product) => product.title),
});
