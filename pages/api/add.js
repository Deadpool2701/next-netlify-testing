export default function add(req, res) {
    if (req.method === "POST") {
      const reqBody =req?.body;
  
      console.log("req body", reqBody);
      
      return res.json({msg: "got it"});
  
    }
  
    return res.status(400).json({
      msg: "needs to be post"
    })
  }