export const ApiPrefix = "/v1";

export enum Api {
  // Category
  CategoriesList = `${ApiPrefix}/categories/admin`, // get

  // Brand
  BrandListAdmin = `${ApiPrefix}/brands/admin`, // get

  // Product
  ProductsListAdmin = `${ApiPrefix}/products/admin/allproducts`, // get

}