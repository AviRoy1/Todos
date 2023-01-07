const http = requir('http')
let PORT = 3000

const server = http.createServer(function exec(request,response) {

});

server.listen(PORT , function(){
    console.log("strat the port ",PORT);
});