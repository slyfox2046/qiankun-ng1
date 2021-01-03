// note that "js" is not capitalized in the name of the global variable.
// 导出生命周期到window下
window.inspect12 = singleSpaAngular1.default({
  angular: window.angular,
  domElementGetter: function () {
    return document.getElementById('inspect');
  },
  mainAngularModule: 'app',
  uiRouter: true,
  // preserveGlobal: true,
  // template: '<root />',
});


