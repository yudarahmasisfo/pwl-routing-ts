import * as http from 'http';

const server = http.createServer((req, res) => {
 const url = req.url;
 const method = req.method;
 
 //routing manual
 if(url === "/" && method === "GET"){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(JSON.stringify({message: "Welcome to the homepage!"}));
 }
 else if(url === "/about" && method === "GET"){
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify({message: "This is the about page!"}));
 }
 else if(url?.startsWith("/users/") && method === "GET"){
     const id = url.split("/")[2];
     res.writeHead(200, {"Content-Type": "application/json"});
     res.end(JSON.stringify({message: `User with id ${id} found!`}));
 }
 else {
     res.writeHead(404, {"Content-Type": "application/json"});
     res.end(JSON.stringify({message: "Route not found!"})); 
 }
});

server.listen(3000, () => { console.log("Server is running on port 3000");
});


