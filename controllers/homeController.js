module.exports.home = async(req,res)=>{
    try{
        return res.end('home');
    }catch(err){
        return res.status(400).send(err);
    }
}