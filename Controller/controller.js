const Link = require('../index')

const redirect = async (req,res)=>{
    let title = req.params.title
    try {
     let docs = await Link.findOne({title})
      res.send(docs)
    } catch (error) {
         res.send('ERROR')
    }
}

const addLink = async(req,res)=>{
   const link = new Link(req.body) 

   try {
        let doc = await link.save()
        res.send(doc)
   } catch (error) {
        console.log(error)
   }
}

module.exports = {redirect,addLink}