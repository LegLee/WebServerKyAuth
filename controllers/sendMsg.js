const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User.js')
const keys = require('../config/keys.js')
const errorHandler = require('../utils/errorHandler.js')
const easyvk = require('easyvk');

module.exports.sendMsg = async function(req, res) {
    try{
        console.log('CONTROLLER: ' + req.body.msg + ' TokenVK '+ req.body.tokenVK + ' chatIdTG ' + req.body.chatIdTg + ' TokenTg ' + req.body.tokenTg )
        let chatIdT; chatIdT=req.body.chatIdTg
        let tokenBotT; tokenBotT=req.body.tokenTg
        const bodyParser = require("body-parser");
        let http = require("request");
        const urlencodedParser = bodyParser.urlencoded({extended: false});
        req.body.msg = encodeURI(req.body.msg);
        http.post('https://api.telegram.org/bot'+tokenBotT+'/sendMessage?chat_id='+chatIdT+'&parse_mode=html&text='+req.body.msg, function (error, response, body){
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
        });
        res.status(200).json({
            message: 'Msg was send to tg!'
        })

        //VK
        let tokenVK; tokenVK = req.body.tokenVK;

        easyvk({
            token: tokenVK
        }).then(async vk => {

            let getDialogs = await vk.call('messages.getConversations');


            console.log(getDialogs);
            var i;

            for (i = 0; i < getDialogs.count; i++) {
                res = await vk.call('messages.send', {
                    peer_id: getDialogs.items[i].conversation.peer.id,
                    message: req.body.msg,
                    random_id: easyvk.randomId()
                })
                console.log(res);
            }
        });

    } catch (err){
        errorHandler(res, error)
    }

}


