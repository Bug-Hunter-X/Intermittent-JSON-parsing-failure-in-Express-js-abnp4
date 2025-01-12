# Intermittent JSON Parsing Failure in Express.js

This repository demonstrates a bug where an Express.js application intermittently fails to parse JSON request bodies, even when `express.json()` middleware is correctly used.  The issue is difficult to reproduce consistently, making debugging challenging.

## Bug Description

An Express.js application using `express.json()` middleware to parse incoming JSON requests sporadically fails to parse the request body. The `req.body` object remains empty, even when valid JSON data is sent in the request.

## Reproduction Steps

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the server: `node bug.js`
4. Send a POST request to `/data` with a JSON payload using a tool like Postman or curl.  Observe that sometimes `req.body` is correctly populated and other times it is empty.

## Solution

The solution involves ensuring that the `express.json()` middleware is placed before any route handlers that expect a JSON body.  Additionally, checking the request content type is crucial to avoid unexpected behavior.  The `bugSolution.js` file shows the corrected code.