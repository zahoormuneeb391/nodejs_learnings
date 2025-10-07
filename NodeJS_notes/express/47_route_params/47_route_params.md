## Route Parameters in ExpressJS:

- `Route parameters` are the dynamic part of URL that can be accessed using `req.params`.

- They are defined in the route path with colon `(:)` like `/users/:id/view/:article` where `id` and `article` is the route parameter.

- accesing value `req.params.id` and `req.params.article`

### Example:

- **Actual Route** `https://site.com/muneebzahoor714/status/1161`
- **Dynamic Route** `https://site.com/:user/status/:id`;

- Express automatically parses the route parametes and makes the value availble in `req.params` object.
