const Model = require('../model/model');

/**
 * @description get Time slot from DB
 * @param {fromTime:String,toTime:String} request 
 * @param {sussess, error} response 
 */
exports.insertTimeslot = (request, response) => {
    if(request.body.fromTime && request.body.toTime) {
        Model.timeSlot.find({fromTime: request.body.fromTime}).then(dataRes => {
            if(dataRes.length == 0) {
                const model = new Model.timeSlot({
                    fromTime: request.body.fromTime,
                    toTime: request.body.toTime
                });
                model.save().then(res => {
                    response.send(res)
                }).catch(error => {
                    response.status(404).send({
                        ErrorMessage: 'Error in save'+ error? error :''
                    });
                })
            } else {
                response.send({
                    error: 'Time slot Exist'
                })
            }
           
        })
       
    }
}

/**
 * 
 * @param {fromTime:String} request 
 * @param {} response 
 */
exports.getTimeslot = (request, response) => {
    Model.timeSlot.find(request.body.filter).then(res => {
        response.send(res);
    }).catch(error => {
        response.status(404).send({
            ErrorMessage: 'Error in save'+ error? error :''
        });
    })
}