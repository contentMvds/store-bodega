import axios from "axios";
import { apiUrl } from '../config/urls';
/**
 * Retrieves the products from the API.
 *
 * @return {Promise} The response from the API containing the products.
 */
export async function getProducts() {
    try {
        const response = await axios.get(`${apiUrl}/products`);
        return response;
    } catch (error) {
        return 'Request to receive the products failed';
    }
};


/**
 * Retrieves the products with the specified ID from the API.
 *
 * @param {string} id - The ID of the product to retrieve.
 * @returns {Promise<any>} A Promise that resolves with the response from the API.
 */
export async function getIdProducts(id) {
    if (!id) return 'Error when receiving parameter id';

    try {
        const response = await axios.get(`${apiUrl}/products/${id}`);
        return response;
    } catch (error) {
        return 'Request to pick up product failed';
    }
}

/**
 * Retrieves products belonging to a specific category.
 *
 * @param {string} category - The category of products to retrieve.
 * @return {Promise} A promise that resolves with the response containing the products, or rejects with an error message.
 */
export async function getProductsToCategory(category) {
    if (!category) return 'error when receiving parameter category';
    try {
        const response = await axios.get(`${apiUrl}/products?category=${category}}`);
        return response;
    } catch (error) {
        return 'Request for category failed';
    }
}