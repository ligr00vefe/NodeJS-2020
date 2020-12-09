// 서버 요청 4가지
// 읽기(GET)
// 쓰기(POST)
// 수정(PUT)
// 삭제(DELETE)

// 터미널에 npm init 명령어를 입력하면
// package.json을 생성해줌
// 어떤 라이브러리를 썼는지 기록해줌

// express 상수에 express 라이브러리 첨부
const express = require('express');

// express 라이브러리를 새로운 객체에 저장(생성)
const app = express();

// 서버 오픈(포트번호, 해당 포트로 접속했을 때 실행할 작업) - 약 6만개의 포트가 있음
app.listen(3000, function(){
    console.log("The server is running on Port 3000");
});

// 읽기 요청 - 서버객체.get('경로', 해당작업(요청, 응답) {})
app.get('/', function(요청, 응답) {
    응답.sendFile(__dirname + '/index.html');
});

app.get('/write', function(요청, 응답) {
    응답.sendFile(__dirname + '/write.html');
});

// nodemon 설치 후 보안 오류발생 시
// window powershell 관리자 권한으로 실행(파란색 cmd창)
// executionpolicy -> restricted라고 나오면
// set-executionpolicy unrestricted 입력
// y입력

// nodemon extension (확장자 확대)
// nodemon server.js --ext .js, .hbs
// 이후 nodemon server 로 실행가능
