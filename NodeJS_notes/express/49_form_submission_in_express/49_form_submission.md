## Form Submission in ExpressJS

- you can use `<form>` tag with `action=""` attribute to specify the URL to which the form data is submitted.

- By-default, a form will use `GET` request, and you can handle it with `app.get` to access the from data via `req.query` as the data is sent through URL as query string.

- Since URLs have length limit, you can use the `POST` method for form submissions, which sends the data in the request body, allowing for larger amounts of data.

- To access the data from a `POST` request, you must first use `express.urlencoded()` middleware to parse the request body.

- The urlencoded option `{extended: true}` uses the `qs` library to parse the query string, allowing for the more complex structure like nested objects, whcih the default parser can not handle.

- Use `req.body` in `app.post` to access the from data send in the body of the `POST` request.
