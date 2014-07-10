step1(function(result1) {
  step2(function(result2) {
    step3(function(result3) {
      step4(function(result4) {
        //...
      });
    });
  });
});

q.fcall(step1)
  .then(step2)
  .then(step3)
  .then(step3)
  .finally(lastStep);