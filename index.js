'use strict';

const express = require('express');

const app = express();

app.get('/:name', function(req, res) {

    var options = {
        root: __dirname + '/amp_push/',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var fileName = req.params.name;
    res.sendFile(fileName, options, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});
app.set('port', (process.env.PORT || 4041));
app.listen(app.get('port'), function() {
    console.log('Example app listening on port ' + app.get('port'));
})