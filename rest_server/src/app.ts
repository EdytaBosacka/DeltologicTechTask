import express from 'express';
const app = express();

app.get('/waterVolume', (req, res) => {
    const { surface = [] } = req.query;

    let waterVolume = 0;

    if (Array.isArray(surface) && surface.length > 0) {
        surface.forEach((element, index) => {
           if (isNaN(parseInt(element as string))) {
                res.status(403).send("Invalid input parameter. User must provide surface parameter as array of Integers");
           }
        });

        let leftMaxHeight = Array(surface.length).fill(0);
        let rightMaxHeight = Array(surface.length).fill(0);
        let leftMax = 0;

        surface.forEach((element, index) => {
            let value = Number(element);
            leftMaxHeight[index] = leftMax;
            if (leftMax < value) leftMax = value;
        })

        let rightMax = 0;
        for (let i = surface.length - 1; i >= 0; i--) {
            let value = Number(surface[i]);
            rightMaxHeight[i] = rightMax;
            if (rightMax < value) rightMax = value;
        }

        surface.forEach((element, index) => {
            if (Math.min(leftMaxHeight[index], rightMaxHeight[index]) > Number(element)) {
                waterVolume += Math.min(leftMaxHeight[index], rightMaxHeight[index]) - Number(element);
            }
        })
        res.status(200).send(String(waterVolume));
    } else {
        res.status(403).send("Invalid input parameter. User must provide surface parameter as array of Integers");
    }

    
});

export default app;