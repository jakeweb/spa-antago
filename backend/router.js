var path = require('path');


var router = {
    init: function init(app) {
        app.get('*', function(req, res) {
            res.status(200).sendFile(path.resolve('frontend/app/index.html'));
        });
    }
};

module.exports = router;
