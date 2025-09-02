//! Main Uses of crypto Module
//* 1. Hashing
//* 2. HMAC (Hash-based Message Authentication Code)
//* 3. Encryptions & Decryption
//* 4. Generating Secure Random Values

const crypto = require("node:crypto");

//! Hashing

//? Signup Time
// let password = "x".repeat(81) + "1";
// const hashedPassword = crypto.createHash("sha512").update(password).digest("hex");


//? Login Time
// let enteredPassword = "x".repeat(81) + "1";
// const hashedEnteredPassword = crypto.createHash("sha512").update(enteredPassword).digest("hex");

// if (hashedPassword === hashedEnteredPassword) {
//     console.log("User Logged In");
// } else {
//     console.log("Wrong Password");
// }

// console.log("Password S: ", password);
// console.log("Password L: ", enteredPassword);
// console.log("Hashed Password S: ", hashedPassword);
// console.log("Hashed Password L: ", hashedEnteredPassword);

// -------------------------------------------------------------------------
//! HMAC (Hash-based Message Authentication Code)

// HMAC is combiniation of a secret key with the message.
// It is used to verify both the data integrity and the authenticity of a message.

//* code
// const secretKey = "alaskafallindusk";
// const message = "Hi, Ali How are you?";

// const hmac = crypto.createHmac("sha256", secretKey).update(message).digest("hex");
// const hash = crypto.createHash("sha256").update(message).digest("hex");
// console.log("HMAC: ", hmac);
// console.log("Hash: ", hash);

//* Difference between Hash and HMAC
// Hash = Used to check if the data has changed or not.
// HMAC = Used to check if the data has not changed AND it really came from the original sender (who has the secret key).

//! Important Point:
// MD5, SHA-1, SHA-256, SHA-3 → Fast → Good for file/message integrity.
// bcrypt, scrypt, Argon2 → Slow & salted → Good for password storage.


//! Encryptions & Decryption
// Encryption = Converting plain text into cipher text.
// Decryption = Converting cipher text back to plain text.

//* Symmetric Encryption
// Same key is used for both encryption and decryption. 
// AES (Advanced Encryption Standard) is the most widely used symmetric encryption algorithm.


// ----------------------------------------------------
//* 1. Encryption

// Converts normal data (plain text) → unreadable code (cipher text).
// Needs Algorithm + Key + IV.
// Use: To keep data secret.
// Example: Encrypt chat messages, bank details, secret files.

//* 2. Decryption

// Converts encrypted code (cipher text) → original data (plain text).
// Needs same Key + IV used in encryption.
// Without correct key/IV → cannot get original data.

//* 3. Important Terms

// Algorithm = formula to encrypt data (e.g., AES-256-CBC).
// Key = secret password to lock/unlock data.
// IV (Initialization Vector) = random starter value, makes encryption different each time.


//! chiper = raw text encrypted text

// const algorithm = "AES-256-CBC"; // AES encryption algorithm
// const key = crypto.randomBytes(32); // 32 bytes key for AES-256
// const iv = crypto.randomBytes(16); // 16 bytes IV for AES
// const message = "How are you Babar Azam...?"; // message to be encrypted

//! Encryption
// const chipper = crypto.createCipheriv(algorithm, key, iv);
// let update = chipper.update(message, "utf-8", "hex");  //process the message
// let final = chipper.final("hex");  // process the remaining data
// let encrypted = update + final;  // output hex string (chiper text )

// Decryption 
// const decipher =  crypto.createDecipheriv(algorithm, key, iv);
// let decrypted = decipher.update(encrypted, "hex", "utf-8");  
// decrypted = decrypted + decipher.final("utf-8")

// Output
// console.log("Message: ", message);
// console.log("Key: ", key.toString("hex"));
// console.log("IV: ", iv.toString("hex"));
// console.log("Encrypted: ", encrypted);
// console.log("Decrypted: ", decrypted);


//! Generating Secure Random Values
// Used for creating secure tokens, keys, passwords.

const key = crypto.randomBytes(3)
const iv = crypto.randomBytes(3)
const ramdom = crypto.randomInt(0,2);
console.log(ramdom);


console.log(key);
console.log(iv);
console.log("Key: ", key.toString("hex"));
console.log("IV: ", iv.toString("hex"));    