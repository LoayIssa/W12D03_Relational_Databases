const db = require("../../db/db");

const createNewComment = (req, res) => {
	const article_id = req.params.id;
    
	const { comment,  commenter_id } = req.body;
	const query = `INSERT INTO comments (comment, article_id, commenter_id) VALUES(?,?,?)`;
	const data =[comment,article_id, commenter_id];
	db.query(query,data,(err,result)=>{
	if(err) throw err
		res.status(201).json(result)
		
	})
	
};

module.exports = {
	createNewComment,
};
