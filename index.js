import express, { json } from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import    cookieParser   from "cookie-parser";

const application = express();
const PORT = process.env.PORT || 3000;
const __dirname__ = dirname(fileURLToPath(import.meta.url));

application.use(json());
application.use(cookieParser());

application.use("/home", express.static(join(__dirname__, "public")));

application.get("/api/v1/firms", (request, response) => {
    response.send("Hello Abdoulaye");
});

application.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT : ${PORT}`);
});