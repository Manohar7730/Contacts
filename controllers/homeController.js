let contacts = [{ name: "Manohar", phone: 856223549 }];

module.exports.home = async (req, res) => {
    try {
        return res.render("home", {
            title: "Contacts",
            contact_list: contacts,
        });
    } catch (err) {
        return res.status(400).send(err);
    }
};