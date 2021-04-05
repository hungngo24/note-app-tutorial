class BaseController {
    /// GET - home page
    index(req, res) {
        res.send(" Page Index");
    }

    //// POST -- create page
    create(req, res) {
        res.render("Page create");
    }

    //// POST --req save
    store(req, res) {
        res.render("Method store");
    }

    //// GET  -- detail page
    show(req, res) {
        res.render("Detail Page");
    }

    //// GET  ---  edit page
    edit(req, res) {
        res.render("Edit Page");
    }

    //// PUT/PATCH --req update
    update(req, res) {
        res.render("Method update");
    }

    //// DELETE --req DELETE
    destroy(req, res) {
        res.render(" Method destroy");
    }
}

module.exports = new BaseController();
