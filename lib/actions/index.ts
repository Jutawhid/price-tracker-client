"use server"

import { revalidatePath } from "next/cache";
import Product from "../models/product.model";
import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";
import { getAveragePrice, getHighestPrice, getLowestPrice } from "../utils";
import { User } from "@/types";
import { generateEmailBody, sendEmail } from "../nodemailer";

// export async function scrapeAndStoreProduct(productUrl: string) {
//   if(!productUrl) return;

//   try {
//     connectToDB();

//     const scrapedProduct = await scrapeAmazonProduct(productUrl);

//     if(!scrapedProduct) return;

//     let product = scrapedProduct;

//     const existingProduct = await Product.findOne({ url: scrapedProduct.url });

//     if(existingProduct) {
//       const updatedPriceHistory: any = [
//         ...existingProduct.priceHistory,
//         { price: scrapedProduct.currentPrice }
//       ]

//       product = {
//         ...scrapedProduct,
//         priceHistory: updatedPriceHistory,
//         lowestPrice: getLowestPrice(updatedPriceHistory),
//         highestPrice: getHighestPrice(updatedPriceHistory),
//         averagePrice: getAveragePrice(updatedPriceHistory),
//       }
//     }

//     const newProduct = await Product.findOneAndUpdate(
//       { url: scrapedProduct.url },
//       product,
//       { upsert: true, new: true }
//     );

//     revalidatePath(`/products/${newProduct._id}`);
//   } catch (error: any) {
//     throw new Error(`Failed to create/update product: ${error.message}`)
//   }
// }

export async function getProductById(productId: number) {
  try {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/public/getProductDetailById/${productId}`).then(
      (res) => res.json()
    );
    console.log("🚀 ~ getProductById ~ product:", product)

    return product?.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProducts({ page = 1, size = 10 }) {
  try {

    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/public/allproducts?page=${page}&size=${size}&status=1`).then(
      (res) => res.json()
    );
    return products;
  } catch (error) {
    console.log(error);
  }
}

// Get All Propular Products
export async function getAllHighLightedProducts({ page = 1, size = 10 }) {
  try {

    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homepage/public/highLightedProducts?page=${page}&size=${size}&status=1`).then(
      (res) => res.json()
    );
    return products;
  } catch (error) {
    console.log(error);
  }
}
// Get All Propular Products
export async function getAllPopularProducts({ page = 1, size = 10 }) {
  try {

    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homepage/public/popularProducts?page=${page}&size=${size}&status=1`).then(
      (res) => res.json()
    );
    return products;
  } catch (error) {
    console.log(error);
  }
}
export async function getAllCategories() {
  try {

    const categories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/all`).then(
      (res) => res.json()
    );
    return categories?.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSimilarProducts(productId: string) {
  try {
    connectToDB();

    const currentProduct = await Product.findById(productId);

    if(!currentProduct) return null;

    const similarProducts = await Product.find({
      _id: { $ne: productId },
    }).limit(3);

    return similarProducts;
  } catch (error) {
    console.log(error);
  }
}

export async function addUserEmailToProduct(productId: string, userEmail: string) {
  try {
    const product = await Product.findById(productId);

    if(!product) return;

    const userExists = product.users.some((user: User) => user.email === userEmail);

    if(!userExists) {
      product.users.push({ email: userEmail });

      await product.save();

      const emailContent = await generateEmailBody(product, "WELCOME");

      await sendEmail(emailContent, [userEmail]);
    }
  } catch (error) {
    console.log(error);
  }
}