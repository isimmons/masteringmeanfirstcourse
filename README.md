To set NODE_ENV to testing or development when running server.js

```
set NODE_ENV=environment&& server
```

Remove 'set' and should work for unix systems.

gitignored env.environment files are
* .env.testing
* .env.development


Use production hosting specific setup to set the following env variables. Do not upload a .env file to a production server.

example env.environment file
```
DATABASE=mongodb://localhost:27017/mean-book

SESSION_SECRET=developmentSessionSecret

FB_CLIENT_ID=yourappid
FB_CLIENT_SECRET=yourappsecret
FB_CALLBACK_URL=yourappcallbackurl

TW_CLIENT_ID=yourappid
TW_CLIENT_SECRET=yourappsecret
TW_CALLBACK_URL=yourappcallbackurl

G_CLIENT_ID=yourappid
G_CLIENT_SECRET=yourappsecret
G_CALLBACK_URL=yourappcallbackurl
```

To add more env variables just add them here and then add the appropriate lines in either testing.js or development.js located in config/env

#Testing
One liner to set env and run mocha tests
```
set NODE_ENV=testing&& mocha --reporter spec tests
```