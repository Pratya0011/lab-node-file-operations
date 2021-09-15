var value = require('./data.js')
var fs = require('fs')
const crypto = require('crypto');
const secret = 'f61a89be62891ce83afb2ac9d165f4e3566cadec3481d50d7f03630f796af55e'
const password = crypto.createHmac('sha256', secret).update('Prograd').digest('hex');


var userdata= value.data("Prograd",2020,"BE")


fs.writeFileSync('message.txt',`Prograd Details \nUserId->1000
Name-> ${JSON.stringify(userdata.name)}\nYear->${JSON.stringify(userdata.Year)}\nQualification->${JSON.stringify(userdata.Qualification)}
\nUserName->Pratya\nPassword->${password}`)
