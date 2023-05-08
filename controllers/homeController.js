const Contacts = require('../model/contacts');

module.exports.home = async (req, res) => {
    try {
        const contacts = await Contacts.find()
        res.render("home", {
            title: "Contacts",
            contact_list: contacts,
        });
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports.create = async (req, res) => {
    try {
        await Contacts.create({
            name: req.body.name,
            phone: req.body.phone
        })
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports.update = async(req,res)=>{
    try{
        await Contacts.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            phone: req.body.phone
        });
        return res.redirect('/');
    }catch(err){
        res.redirect('/');
    return res.status(400).send(err);
    }
}

module.exports.update_contact = async (req,res)=>{
try{
    const contact = await Contacts.findById(req.params.id);
    return res.render('update',{
        title : "Update Contact",
        contact
    })
}catch (err) {
    res.redirect('/');
    return res.status(400).send(err);
}
}

module.exports.delete = async (req,res)=>{
    try{
        await Contacts.findByIdAndDelete(req.params.id);
        return res.redirect('/');
    }catch (err) {
        res.redirect('/');
        return res.status(400).send(err);
    }
};