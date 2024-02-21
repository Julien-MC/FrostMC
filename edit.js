/// edit.js
javascript:window.onkeydown = function(event) {   if (event.keyCode === 192) {    javascript: (function () {  if (document.body.contentEditable === 'true') {    document.body.contentEditable = 'false';    document.designMode = 'off';  } else {    document.body.contentEditable = 'true';    document.designMode = 'on';  }}())  }};
