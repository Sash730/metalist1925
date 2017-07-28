## Running Tests

* For run functional tests we are using https://github.com/linkshare/plus.garden

the best way to write tests is run them inside docker and make changes locally

    $ cd garden
    $ npm install
    $ npm run garden

for development purposes best to use VNC client to see what's going on in browser

```sh
vnc://localhost:5900
```

When you are prompted for the password it is `secret`
