'use strict';
var assert = require('assert');
var fs = require('fs');
var gutil = require('gulp-util');
var sftp = require('./index');

before(function (done) {
	/*mockServer = new Server();

	mockServer.init({
		user: 'test',
		pass: 'test'
	});

	mockServer.on('stdout', process.stdout.write.bind(process.stdout));
	mockServer.on('stderr', process.stderr.write.bind(process.stderr));
*/
	setTimeout(done, 500);
});

after(function () {
	//mockServer.stop();
});

it('should upload files to SFTP-server', function (cb) {
	var base = __dirname + '/fixture/';
	var file1 = base + 'fixture.txt';
	var file2 = base + 'fixture2.txt';

	var stream = sftp({
		host: 'agencysite.dev.22squared.com',
		port: 22,
		user: 'gtg092x',
		pass: 'duck1313',
		remotePath:'/home/gtg092x/test'
	});
	this.timeout(5001);
	setTimeout(function () {		
		//assert(fs.existsSync(file1));
		//assert(fs.existsSync(file2));
		//fs.unlinkSync(file1);
		//fs.unlinkSync(file2);
		//fs.rmdirSync(base);
		cb();
	}, 5000);

	stream.write(new gutil.File({
		cwd: __dirname,
		base: base,
		path: file1,
		contents: new Buffer('hello world')
	}));

	stream.write(new gutil.File({
		cwd: __dirname,
		base: base,
		path: file2,
		contents: new Buffer('hello world')
	}));
});
