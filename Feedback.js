const db = require('./db')
var md5 = require('md5');
const moment = require('moment')
const Feedback = {
    welcome:(param) => {
        return "Welcome to " + param;
    },

    callMeLoop:(...iAmArray) => {
        let total = 0;
        for(let arr in iAmArray) {
            total += iAmArray[arr];
        }
        return total
    },

    selectUser:(id)=>{
        return db('users').where({
            'id':id
        });
    },

    insertUser:(req) => {
        const now = moment().format('YYYY-MM-DD HH:mm:ss');
        try {
            return  db('users').insert([
                {
                    'name':'Mommy Jerry',
                    'email':'henlohuman@gmail.com',
                    'email_verified_at':now,
                    'password':md5('helloworld'),
                    'remember_token':'Ssdil3alkdfalksdfjoi3uos43',
                    'created_at':now,
                    'updated_at':now
                }
            ]).then(function(res){
                if(res) return 'ok';
                else return 'error';
            })
            
        } catch (err) {
            console.log(err);
        }
        
    }
}

module.exports = Feedback