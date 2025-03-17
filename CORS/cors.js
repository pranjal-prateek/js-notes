/**
 * CORS (Cross-Origin Resource Sharing)
 * ------------------------------------
 * CORS is a mechanism that restricts how resources on a web page can be requested from another domain.
 * It helps protect against potential security risks, such as unauthorized data access by malicious websites.
 *
 * By default, browsers enforce the Same-Origin Policy (SOP), which blocks cross-origin requests for security reasons.
 * The Same-Origin Policy ensures that a webpage can only request resources from the same origin
 * (i.e., same protocol, domain, and port).
 *
 * CORS depends on three key factors:
 * 1. Protocol  -> (http, https)
 * 2. Domain    -> (localhost, example.com)
 * 3. Port      -> (3000, 5000, etc.)
 *
 * Example:
 * --------
 * If a frontend running on:
 * http://localhost:3000
 *
 * Tries to access an API at:
 * http://localhost:5000/api/data
 *
 * This is considered a cross-origin request because the port numbers are different (3000 ≠ 5000).
 * Since localhost:5000 is a different origin than localhost:3000, CORS applies.
 * The backend must include appropriate CORS headers to allow the request.
 */
