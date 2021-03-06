// express -> NodeJS의 웹 어플리케이션 프레임워크

const express = require("express");
const hbs = require("express-handlebars");
const server = express();

server.engine("hbs", hbs({
    extname:"hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts",
    // 반복적인 코드를 partialsDir 디렉토리에 넣어서 꺼내 쓸 수 있음
    partialsDir: __dirname + "/views/partials"
}));

server.set("view engine", "hbs");

// template Engine
// 미들웨어 생성(use)
server.use(express.static(__dirname + "/public"));

server.use((req, res, next)=>{
    // config
    next();
});

server.get("/", (req, res)=> {
    // __dirname  -> root 경로이름
    // __filename -> 파일이름
    // statusCode(수신 상태 코드) -> 200 수신 양호
    // status로 변환
    res.status(200).render("index.hbs", {
        name: "홍길동",
        home: true
    }); // index.hbs는 index만 써도됨
});

server.get("/features", (req, res) => {
    res.status(200).render("features", {
        features: true
    })
})

server.get("/contact", (req, res) => {
    // staus(200)은 기본값이기 때문에 지워도 됨
    res.render("contact", {
        contact: true,
        list: ["Danny", "Jenny", "Max", "Tom"]
    })
})

server.listen(3000, ()=> {
    console.log("The server is running on Port 3000");
});

// nodemon 설치
// 서버가 업데이트 될 경우 자동으로 재시작해주는 라이브러리
// npm i -g nodemon
// i(install), -g(global) - 글로벌로 설치하면 해당 폴더 이외의 폴더에서도 사용 가능
// 실행문: nodemon server

// express-handlebars 설치
// npm install express-handlebars

// handlebarsjs.com 참조