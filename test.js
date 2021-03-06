// Generated by CoffeeScript 1.9.2
(function() {
  var resignal;

  resignal = require("./index");

  describe("resignal", function() {
    it("should report", function(done) {
      var observer;
      observer = resignal(3, 10);
      observer.on("report", function() {
        return done();
      });
      observer.log();
      observer.log();
      return setTimeout((function() {
        return observer.log();
      }), 30);
    });
    it("should not report", function(done) {
      var observer;
      observer = resignal(3, 10);
      observer.on("report", function() {
        return done("error");
      });
      observer.log();
      observer.log();
      return setTimeout(done, 50);
    });
    it("should not report", function(done) {
      var observer;
      observer = resignal(3, 0.02);
      observer.on("report", function() {
        return done("error");
      });
      observer.log();
      observer.log();
      setTimeout((function() {
        return observer.log();
      }), 40);
      return setTimeout(done, 60);
    });
    return it("should report twice", function(done) {
      var observer, times;
      observer = resignal(2, 10);
      times = 0;
      observer.on("report", function() {
        times += 1;
        if (times >= 2) {
          return done();
        }
      });
      observer.log();
      observer.log();
      observer.log();
      observer.log();
      return observer.log();
    });
  });

}).call(this);
