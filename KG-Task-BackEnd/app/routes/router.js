module.exports =(app) =>{
    const controller = require('../controller/controller');
    
    app.post('/insertTimeslot', controller.insertTimeslot);
    app.get('/getTimeslot', controller.getTimeslot);
}