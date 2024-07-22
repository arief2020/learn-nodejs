# API Contract

## Overview
This document defines the API contract for managing product categories and searching products in an e-commerce application.

## Endpoints

### 1. Get All Categories
- **Endpoint:** `/categories`
- **Method:** `GET`
- **Description:** Retrieve a list of all product categories.
- **Response:**
    - **Status Code:** `200 OK`
    - **Body:**
      ```json
      [
        { "id": 1, "name": "Elektronik" },
        { "id": 2, "name": "Perabotan" }
      ]
      ```

### 2. Get Category by ID
- **Endpoint:** `/categories/:id`
- **Method:** `GET`
- **Description:** Retrieve details of a category by its ID.
- **Path Parameters:**
    - `id` (integer, required): The ID of the category.
- **Response:**
    - **Status Code:** `200 OK`
    - **Body:**
      ```json
      { "id": 1, "name": "Elektronik" }
      ```
    - **Status Code:** `404 Not Found` (if category is not found)

### 3. Add New Category
- **Endpoint:** `/categories`
- **Method:** `POST`
- **Description:** Add a new category.
- **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      { "name": "Pakaian" }
      ```
- **Response:**
    - **Status Code:** `201 Created`
    - **Body:**
      ```json
      { "id": 3, "name": "Pakaian" }
      ```
    - **Status Code:** `400 Bad Request` (if name is missing or invalid)

### 4. Update Category by ID
- **Endpoint:** `/categories/:id`
- **Method:** `PUT`
- **Description:** Update a category by its ID.
- **Path Parameters:**
    - `id` (integer, required): The ID of the category.
- **Request Body:**
    - **Content-Type:** `application/json`
    - **Body:**
      ```json
      { "name": "Pakaian dan Aksesoris" }
      ```
- **Response:**
    - **Status Code:** `200 OK`
    - **Body:**
      ```json
      { "id": 1, "name": "Pakaian dan Aksesoris" }
      ```
    - **Status Code:** `400 Bad Request` (if name is missing or invalid)
    - **Status Code:** `404 Not Found` (if category is not found)

### 5. Delete Category by ID
- **Endpoint:** `/categories/:id`
- **Method:** `DELETE`
- **Description:** Delete a category by its ID.
- **Path Parameters:**
    - `id` (integer, required): The ID of the category.
- **Response:**
    - **Status Code:** `200 OK`
    - **Body:**
      ```json
      { "message": "Category deleted successfully." }
      ```
    - **Status Code:** `404 Not Found` (if category is not found)

### 6. Search Products by Name
- **Endpoint:** `/products`
- **Method:** `GET`
- **Description:** Search products by name.
- **Query Parameters:**
    - `name` (string, required): The name of the product to search for.
- **Response:**
    - **Status Code:** `200 OK`
    - **Body:**
      ```json
      [
        { "id": 1, "name": "Laptop", "category": "Elektronik" }
      ]
      ```
    - **Status Code:** `404 Not Found` (if no products are found)

### 7. Get Products by Category and Search by Name
- **Endpoint:** `/categories/:id/products`
- **Method:** `GET`
- **Description:** Retrieve products in a specific category and search by name.
- **Path Parameters:**
    - `id` (integer, required): The ID of the category.
- **Query Parameters:**
    - `name` (string, optional): The name of the product to search for.
- **Response:**
    - **Status Code:** `200 OK`
    - **Body:**
      ```json
      [
        { "id": 1, "name": "Laptop", "category": "Elektronik" }
      ]
      ```
    - **Status Code:** `404 Not Found` (if no products are found)

---

**Note:** Ensure that all responses include the appropriate HTTP status codes and messages for error handling.
