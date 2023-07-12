const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/') {
    res.end('welcome to gomepage');
    }
    else if(req.url === '/about') {
        res.end('about page');
    }
    else
        res.end(`
            <h1>OOpsss</h1>
            <p>naat found</p>
            <a href="/"> back home</a>
            `);
})


server.listen(5000);

server.on('error', (err) => {
    console.error('Server error:', err);
});