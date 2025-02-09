const ApiPrefix = "/api/v1";

export async function getProductById(productId: number) {
  try {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ApiPrefix}/products/public/getProductDetailById/${productId}`).then(
      (res) => res.json()
    );

    return product?.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllProducts({ page = 1, size = 10 }) {
  try {

    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ApiPrefix}/products/public/allproducts?page=${page}&size=${size}&status=1`).then(
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

    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ApiPrefix}/homepage/public/highLightedProducts?page=${page}&size=${size}&status=1`).then(
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

    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ApiPrefix}/homepage/public/popularProducts?page=${page}&size=${size}&status=1`).then(
      (res) => res.json()
    );
    return products;
  } catch (error) {
    console.log(error);
  }
}
export async function getAllCategories() {
  try {

    const categories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ApiPrefix}/categories/all`).then(
      (res) => res.json()
    );
    return categories?.data;
  } catch (error) {
    console.log(error);
  }
}
