/**
* Stream.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
		name: {
			type: 'string',
			required: true
		},
		unit: {
			type: 'string',
			required: true
		},
		value: {
			type: 'float',
			required: true
		}
  },
  
  //TREASURE DATA INTEGRATION VIA STDOUT
  afterCreate: function(newlyInsertedRecord, next){
  	console.log("TREASURE DATA SEND");
  	console.log('@[df14-heroku-iot-workshop.streams] '+ JSON.stringify(newlyInsertedRecord));
  	console.log('@['+newlyInsertedRecord.user+'.streams] '+ JSON.stringify(newlyInsertedRecord));
  	next();
  },
  afterUpdate: function(updatedRecord, next){
    console.log("TREASURE DATA SEND");
  	console.log('@[df14-heroku-iot-workshop.streams] '+ JSON.stringify(newlyInsertedRecord));
  	console.log('@['+updatedRecord.user+'.streams] '+ JSON.stringify(updatedRecord));
  	next();
  }
  
  
  
  
};

