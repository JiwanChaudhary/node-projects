#jsonwebtoken
-> An implementation of JSON Web Tokens.
-> This was developed against draft-ietf-oauth-json-web-token-08. It makes use of node-jws
-> Install
npm install jsonwebtoken
-> Usage
-> jwt.sign(payload, secretOrPrivateKey, [options, callback])
-> (Asynchronous) If a callback is supplied, the callback is called with the err or the JWT.
-> (Synchronous) Returns the JsonWebToken as string
-> payload could be an object literal, buffer or string representing valid JSON.
->secretOrPrivateKey is a string (utf-8 encoded), buffer, object, or KeyObject containing either the secret for HMAC algorithms or the PEM encoded private key for RSA and ECDSA. In case of a private key with passphrase an object { key, passphrase } can be used (based on crypto documentation), in this case be sure you pass the algorithm option. When signing with RSA algorithms the minimum modulus length is 2048 except when the allowInsecureKeySizes option is set to true. Private keys below this size will be rejected with an error.


#joi
-> The most powerful schema description language and data validator for JavaScript.
-> Installation
npm install joi
-> Keywords
schema validation

#joi-password-complexity
-> Creates a Joi object that validates password complexity.
-> Installation
npm install joi-password-complexity
-> Keywords
Joi validation password complexity