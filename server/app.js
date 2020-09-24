const express = require("express");
// 创建express对象
const app = express();
// 加载cors模块
const cors = require("cors");
// 引入中间件body
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// 加载mysql模块
const mysql = require("mysql");
const { connect } = require("http2");
// 创建数据库连接池
const pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "scenicspot",
  charset: "utf8",
  connectionLimit: 20,
});
//指定监听端口号
let port = 3000;
app.listen(port, () => {
  console.log("server is running...", ` ${port}`);
});
// 使用cors模块
app.use(
  cors({
    origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
  })
);
// 获取分类模块
app.get("/sort", (req, res) => {
  // res.send("sort");
  let sql = "select so_id,so_name,so_img from sc_sort";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
// 必玩模块
app.get("/play", (req, res) => {
  // res.send("play");
  let sql = "select pid,de_id,p_name,p_dt,p_rank,p_img from sc_play";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
// 轮播图模块
app.get("/carousel", (req, res) => {
  // res.send("carousel");
  let sql = "select ca_id,ca_img from sc_carousel";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
// 详情页数据
app.get("/list", (req, res) => {
//  let cid = req.query.id;
  // console.log(cid);
  let sql =
    "select so_id,de_id,de_name,de_des,de_score,de_locate,childPri,adultPri,de_img from sc_details";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
//用户注册的接口
app.post('/register',(req,res)=>{
  //获取客户提交的用户名和密码
  let phone=req.body.phone;
  let upwd=req.body.upwd;
  //以当前的用户名为条件进行查找操作，如果没有找到的话，则将用户信息写入数据表（还需要将密码变成md5的结果）
  let sql='select phone,upwd from sc_user where phone=?';
  pool.query(sql,[phone],(err,results)=>{
    if(err) throw err;
    if(results.length==0){
      sql='INSERT INTO sc_user(phone,upwd) VALUES(?,MD5(?))';
      //根据用户信息写入数据表（还需要注意将密码变成md5的结果
      pool.query(sql,[phone,upwd],(err,results)=>{
        if(err) throw err;
        res.send({message:"注册成功",code:1})
      })
    }else{
      res.send({message:"用户名已经存在",code:0})
    }
  })
  //如果找到的话就直接提示错误信息
})

//用户登录的接口
app.post('/login', (req, res) => {
  //1.获取用户名及密码信息
  let phone= req.body.phone;
  let upwd = req.body.upwd;
  //2.以电话和密码为条件进行查找
  let sql = 'SELECT phone FROM sc_user WHERE phone=? AND upwd=MD5(?)';
  pool.query(sql, [phone, upwd], (err, results) => {
    if (err) throw err;
    if (results.length == 0) {
      res.send({ message: '登录失败', code: 0 });
    } else {
      res.send({ message: '登录成功', code: 1 });
    }
  });
});
//详情页数据
app.get('/details', (req, res) => {
  let id=req.query.id;//query获取?的形态
//  console.log(id);
  let sql=' select s.de_id,co_det,co_address,co_intr,co_traffic,co_phone,de_name,de_des,de_score,de_locate,childPri,adultPri from sc_content as s inner join sc_details as d on s.de_id=d.de_id where s.de_id=?;';
  pool.query(sql,[id],(err,results)=>{
    if(err) throw err;
    res.send({message:'查询成功',code:1,result:results[0]});
  })
});
//详情页图片
app.get('/img',(req,res)=>{
	let id=req.query.id;
//	console.log(id);
})
//详情数据
app.get("/demo1", (req, res) => {
  let sql =
    "select so_id,de_id,de_name,de_des,de_score,de_locate,childPri,adultPri,de_img from sc_details where so_id=1";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.get("/demo2", (req, res) => {
  let sql =
    "select so_id,de_id,de_name,de_des,de_score,de_locate,childPri,adultPri,de_img from sc_details where so_id=2";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.get("/demo3", (req, res) => {
  let sql =
    "select so_id,de_id,de_name,de_des,de_score,de_locate,childPri,adultPri,de_img from sc_details where so_id=3";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.get("/demo4", (req, res) => {
  let sql =
    "select so_id,de_id,de_name,de_des,de_score,de_locate,childPri,adultPri,de_img from sc_details where so_id=4";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.get("/demo5", (req, res) => {
  let sql =
    "select so_id,de_id,de_name,de_des,de_score,de_locate,childPri,adultPri,de_img from sc_details where so_id=5";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});


