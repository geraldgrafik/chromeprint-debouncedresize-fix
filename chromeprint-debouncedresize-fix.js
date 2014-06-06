/**
* This snippet fixes the Chrome Print Preview Window from closing automatically when the
* Debounced and Throttled Resize Events for jQuery Script is active -- https://github.com/louisremi/jquery-smartresize
* Note: matchMedia does not work on < IE 9 Browsers | < Chrome 9 | < Firefox (Gecko) 6.0 | < Opera 12.1 | < Safari 5.1
*/

if(!$('.lt-ie10')[0]){
   window.matchMedia("print").addListener(function() { $(window).off( "debouncedresize" ); console.log("Print Alive!"); })
}