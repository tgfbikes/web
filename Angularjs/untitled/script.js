(function() {

var createWorker = function () {

    var workCount = 0;

    var job1 = function () {
        workCount += 1;
        console.log('job 1 ' + workCount);
    };
    var job2 = function () {
        workCount += 1;
        console.log('job 2 ' + workCount);
    };
    return {
        job1: job1,
        job2: job2
    };
};

    var worker1 = createWorker();
    var worker2 = createWorker();

    worker1.job1();
    worker2.job2();
    worker2.job2();
    worker2.job2();

}.call(this));