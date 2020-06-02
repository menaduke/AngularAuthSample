// for serving
import { serve } from "https://deno.land/std/http/server.ts"
// eslint-disable @typescript-eslint/no-var-requires

// for using require
// import { createRequire } from "https://deno.land/std/node/module.ts";

// const require = createRequire(import.meta.url);
import { createRequire } from "https://deno.land/std/node/module.ts";
const require = createRequire(import.meta.url);
const mssql: any = require("mssql");

// for env files
import { config } from "https://deno.land/x/dotenv/mod.ts";
const configuration: any = config();
console.log(config());


// for JWT
// import { validateJwt } from "https://deno.land/x/djwt/validate.ts"
import { makeJwt, setExpiration, Jose, Payload } from "https://deno.land/x/djwt/create.ts"


// const key = "your-secret"
// const payload: Payload = {
//   iss: "joe",
//   exp: setExpiration(new Date().getTime() + 60000),
// }
// const header: Jose = {
//   alg: "HS256",
//   typ: "JWT",
// }

const sql = require('mssql')

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(`mssql://${configuration.USERNAME}:${configuration.password}@localhost/${configuration.db}`)
        const result = await sql.query`select * from auth`;
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}


console.log("server is listening at 0.0.0.0:8000")
for await (const req of serve("0.0.0.0:8000")) {
  if (req.method === "GET"  && req.url === "/") {
    req.respond({ body: "hello" + "\n" })
    // req.respond({ body: makeJwt({ header, payload, key }) + "\n" })
  }
  // else {
  //   const jwt = new TextDecoder().decode(await Deno.readAll(req.body))
  //   await validateJwt(jwt, key, { isThrowing: false })
  //     ? req.respond({ body: "Valid JWT\n" })
  //     : req.respond({ body: "Invalid JWT\n", status: 401 })
  // }

  if (req.method === "GET" && req.url === "/login") {
    req.respond({ body: "hello23" + "\n" })
  }
}


