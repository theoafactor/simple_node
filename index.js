const http = require("http");

//set the hostname
const hostname = "127.0.0.1"
const port = 2123;

const server = http.createServer(function(request, response){

    const page = request.url

   
    response.setHeader('Content-Type', 'text/plain');
    if(page === "/contact"){
        response.statusCode = 200;
        response.end("Contact Us Page")
        
    }else if(page === "/about-us"){
        response.statusCode = 200;
        response.end("About Us Page")
    }
    else{
        response.statusCode = 404;
        response.end("404: Page not found")
    }


    

})


server.listen(port, hostname, function(){
    console.log('Server is working fine');
})
