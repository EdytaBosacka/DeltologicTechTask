import app from "./app";

const port: Number = 3000;

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});