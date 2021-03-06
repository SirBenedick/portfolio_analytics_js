// ------------------------------------------------------------
QUnit.module('Ratios module', {
});

QUnit.test('Gain to pain ratio computation', function(assert) {    
  assert.deepEqual(PortfolioAnalytics.gainToPainRatio([100]), NaN, 'Gain to pain ratio #1');
  assert.equal(PortfolioAnalytics.gainToPainRatio([100, 100, 109.5, 108.405, 109.48905, 108.3941595, 107.8521887]), 3.1999999961252454, 'Gain to pain ratio #2');
  assert.deepEqual(PortfolioAnalytics.gainToPainRatio([100, 110]), NaN, 'Gain to pain ratio #3'); 
});