var mongoose = require('mongoose');

var db = function () {
        mongoose.connect('mongodb://localhost/multivision');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('multivision db opened');
    });
    var messageSchema = mongoose.Schema({message: String});
    var Message = mongoose.model('Message', messageSchema);
    var mongoMessage;
    Message.findOne().exec(function (err, messageDoc) {
        mongoMessage = messageDoc.message;
    });
};

module.exports = db;
