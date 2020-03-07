let express = require('express');
let app = express();
app.post('\test', function(req,res) {
    res.send("Подключение произошло успешно!");
});
app.listen('3000', )