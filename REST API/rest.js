/**
 * REST API Notes
 *
 * REST API -> REST stands for Representational State Transfer Protocol.
 * It is an architectural style for designing APIs that allows communication
 * between clients and servers using standard HTTP methods.
 *
 * Principles of REST API:
 */

// 1. Stateless (No Memory of Previous Requests)
//    - Each request from the client must contain all the necessary information,
//      as the server does not remember past requests.

// 2. Client-Server Architecture (Separation of Frontend and Backend)
//    - The frontend (UI) and backend (server) are independent.
//    - You can modify one without affecting the other.

// 3. Resource-Based (Everything is an Addressable Item)
//    - In REST APIs, everything is treated as a resource (e.g., users, products, orders).
//    - Each resource has a unique URL (e.g., `/users/1` retrieves user with ID 1).

// 4. Representation of Resources (Different Ways to Present Data)
//    - Resources can be represented in formats like JSON, XML, or HTML.
//    - The client specifies the preferred format via headers.

// 5. Cacheable (Remembering Old Responses for Faster Results)
//    - Responses can be cached to reduce load on the server and improve performance.

/**
 * REST API Methods
 */

// GET    -> Retrieve data (e.g., Fetch a list of users or a single user)
// POST   -> Create new data (e.g., Add a new user)
// PUT    -> Update existing data completely (e.g., Replace an entire user record)
// PATCH  -> Update existing data partially (e.g., Modify only the user's name)
// DELETE -> Remove data (e.g., Delete a user from the database)
