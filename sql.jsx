console.dir(require('child_process'))
// var sqlite3 = require('sqlite3').verbose();

// export default var db = {
// 	init: function () {
// 		var db = new sqlite3.Database('db.db');
// 		var sql = "INSERT INTO users(username,password,email,add_time) VALUES(?,?,?,?)";
// 		db.run(sql,['user1','pass1','user1@qq.com',new Date().toString()],function(){
// 		    // 获取插入id
// 		    console.log(this.lastID);
// 		    // 获取改变行数
// 		    console.log(this.changes)
// 		});
// 	}
// }

class DB {
	constructor () {
		var db = new sqlite3.Database('db.db');
		var sql = "INSERT INTO users(username,password,email,add_time) VALUES(?,?,?,?)";
		db.run(sql,['user1','pass1','user1@qq.com',new Date().toString()],function(){
		    // 获取插入id
		    console.log(this.lastID);
		    // 获取改变行数
		    console.log(this.changes)
		});
	}
}
export default DB

