# valtown-api-types
This package provides the [Val Town OpenAPI spec](https://www.val.town/docs/openapi.yaml) as a Typescript file. 

# Usage 
This package is intended for use with a [`fets`](https://github.com/ardatan/feTS) API client.

```ts
import { NormalizeOAS, createClient } from "fets";
import { api } from "valtown-api-types";

const token = "<YOUR TOKEN>";

const client = createClient<NormalizeOAS<typeof api>>({
  endpoint: "https://api.val.town",
});

const resp = await client["/v1/alias/{username}/{val_name}"].get({
  params: { username: "nbbaier", val_name: "hello" },
  headers: { Authorization: `Bearer ${token}` },
});

const val = await resp.json();
console.log(val);
```
