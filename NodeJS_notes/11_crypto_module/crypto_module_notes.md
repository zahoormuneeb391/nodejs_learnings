## Crypto Module.

1. `crypto` is a nodejs built-in module.
2. Used for `cryptography` means `راز داری` the main purpose of this modules
   is to provide security.
3. Use to `encrypt/decrypt` the data.
4. Use to generate `hashes` for data and passwords to store in database.
5. Also used to handle `Digital Signaturs` and `Certificates`.
6. Also used to generate a secure random number for (tokens, OTP, etc).

## Main Uses

1. Hashing
2. HMAC (Hash-based Message Authentication Code)
3. Encryptions & Decryption
4. Generating Secure Random Values

## Crypto Module vs Bcrypt (Password Length Notes)

### Crypto Module (`SHA256`, `SHA512`, `PBKDF2`, etc.)

1. No practical password length limit (only system memory limit).
2. Can take arbitrary length input (10 chars or 10,000 chars).
3. Always outputs a fixed-length hash:
3. `SHA-256` → 64 hex chars (256 bits)
4. `SHA-512` → 128 hex chars (512 bits)
5. Safe for long passwords

### Bcrypt

1. Has a 72-byte `(≈72 ASCII characters)` limit.
2. Any characters after 72 are ignored.
3. `"x".repeat(71)+"1"` and `"x".repeat(71)+"2"` → same hash.
4. Still widely used because of built-in salt + key stretching (slows down brute-force).
5. Industry standard for password hashing.
