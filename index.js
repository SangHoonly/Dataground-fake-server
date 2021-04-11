const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");

const app = express();
const upload = multer({ dest: "./" });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// 임시적인 다운로드 url, 데이터셋
app.get("/download/1", (req, res) => {
  res.download(__dirname + "/dataset.zip");
});

app.get("/problem/:id", (req, res) => {
  // console.log(req.params.id);
  res.send({
    problemTitle: "수능 성적 예측하기",
    problemDescription: "다양한 학생들의 수능 성적을 예측하여 봅니다.",
    rating: null,
  });
});

app.post("/api/rating", upload.single("uploadFile"), (req, res) => {
  // 1. 파일 받음
  // 2. 점수 계산
  // 3. 계산된 값 돌려줌 (임시적인 값)
  const result = {
    score: 98,
    incorrectPredictions: [{ id: 32 }, { id: 75 }],
  };
  res.send(result);
  console.log(req.file); // 프론트에서 파일 받았나 확인용
});

app.listen(8000);
