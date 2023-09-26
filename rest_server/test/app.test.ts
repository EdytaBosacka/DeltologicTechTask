import request from "supertest";
import app from "../src/app";

describe("Test app.ts", () => {
    test("waterVolume Missing Input Parameter Check", async() => {
        const res = await request(app).get('/waterVolume');
        expect(res.status).toEqual(403);
    })

    test("waterVolume Invalid Type of Input Parameter Check", async() => {
        const res = await request(app).get('/waterVolume?surface[]=4&surface[]=eight');
        expect(res.status).toEqual(403);
    })

    test("waterVolume Input Array With Irregular Surface Check", async() => {
        const res = await request(app).get('/waterVolume?surface[]=4&surface[]=1&surface[]=1&surface[]=0&surface[]=2&surface[]=3');
        expect(res.text).toEqual("8");
    })

    test("waterVolume Input Array With Flat Surface Check", async() => {
        const res = await request(app).get('/waterVolume?surface[]=3&surface[]=3&surface[]=3&surface[]=3&surface[]=3&surface[]=3');
        expect(res.text).toEqual("0");
    })

});