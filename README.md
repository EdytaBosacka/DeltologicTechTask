# DeltologicTechTask
## Description
Implementation of a REST server which exposes a single endpoint. This endpoint accepts an array
as its input and returns a number representing the volume of water stored after a rainfall over a
surface represented by the given array.
![image](https://github.com/EdytaBosacka/DeltologicTechTask/assets/33400631/cdad02d3-849d-462f-b1c9-eca4531d1eee)

## How to build and run an app locally:
Download a repository and go to rest_server folder:
```
cd rest_server
```
Install all required dependencies:
```
npm install
```
Build and run the server:
```
npm start
```
The server will be available at localhost:3000.
<br/>
You can run the unit tests using command:
```
npm test
```
## How to build and run an app on docker.
Build docker image with following command:
```
docker build . -t deltologic
```
Run the docker image as a container:
```
docker run -p 3000:3000 deltologic
```
The server will also be available at localhost:3000.

## How to communicate with the endpoint.
The endpoint is called "waterVolume". It is a GET endpoint that expects a single parameter called "surface" (an array of integers).
<br/>
The example of a correct request in Postman is attached below:
![image](https://github.com/EdytaBosacka/DeltologicTechTask/assets/33400631/bcd844f7-260e-4813-b3b8-2db8099e280d)

