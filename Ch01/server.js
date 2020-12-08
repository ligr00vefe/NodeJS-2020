// http 상수 생성
const http = require("http");

// file system 
const fs = require("fs");

// http 서버에서 전달 받은 request에서 url과 method 값을 출력
const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);
    
    // 요청(request)이 왔을 때 파일을 읽음 readFile("파일 위치", 텍스트 타입, 콜백방식)
    fs.readFile("./index.html", null, (err, data) => {
        
        // 수신양호 코드 200
        response.writeHead(200, {
            "Content-Type" : "text/html"
        });

        response.write(data);
        response.end();

    })
});

// 포트
server.listen(3000);

// 서버 실행 구문은 terminal에서 node server.js를 입력하면 된다.

// npm init NodeJS 외에 설치된 다른 패키지가 있는지를 명시 
