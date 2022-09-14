export default function home(req, res) {
  if (req.mwthod === "POST") {
    const reqBody =req?.body;

    console.log("req body", reqBody);
    
    return res.json({msg: "got it"});

  }

  return res.status(500).json({
    msg: "needs to be post"
  })
}