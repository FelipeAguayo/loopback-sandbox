/**
 * Created by Felipe on 22-10-2015.
 */
var loopback = require('loopback');

module.exports = function(Model) {

	Model.validateAsync('email', function (onError, done){
		var instance = this;
		var regex = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		process.nextTick(function () {
	    if(regex.test(instance.email)){
	    	console.log('valid');
	    	done();
	    }else{
	    	console.log('invalid');
	    	onError('invalid');
	    }
	  });
  }, {
  	message: {
	  	invalid  : 'email is invalid',
	  	internal : 'Internal problem, try again.'
	  },
	  code : 'Model'
	});
};
