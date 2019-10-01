'use strict';
const Hapi = require('@hapi/hapi');
const callmeFeedback = require('./Feedback');
const Person = require('./Person');
const humanBeing = new Person("Kevin");
console.log(humanBeing.hello())


const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    
    const removeDuplicateValue = () => {
        var duplicateArray = ["Apple","Apple","Orange","Bananna","Bananna","StarFruit"],
        uniqueArray = [];
        
        // Loop through array values
        for(var value of duplicateArray){
            if(uniqueArray.indexOf(value) == -1){
                uniqueArray.push(value);
            }
        }
        console.log(uniqueArray);
    }

    server.route({
        method:'GET',
        path:'/',
        handler:(request,reply) => {
            var data = { 
                message:callmeFeedback.welcome("Kevin"),
                heyArray:callmeFeedback.callMeLoop(2,4,4,5,2,4,5),
              //  id:res.get('name')
            }
            return data;
        }
    });

    server.route({
        method:'GET',
        path:'/get/{id}',
        handler:(request,reply) => {
            const userObj = callmeFeedback.selectUser(request.params.id).then((rs)=>{
                var mp = [{
                    id: rs[0].id,
                    name: rs[0].name,
                    email: rs[0].email
                }];
                return mp.map(function(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        email: e.email
                    }
                })
            });
            return userObj;
            //return null;
            
            // var data = { 
            //     message:callmeFeedback.selectUser(id),
            // }
            // return data;
        }
    });

    server.route({
        method:'POST',
        path:'/add',
        handler: (request,reply) => {
            var data = { 
                message:callmeFeedback.insertUser(request)
            }
            return data;
        }
    });

    await server.start();
    console.log('Server running Ok %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();


