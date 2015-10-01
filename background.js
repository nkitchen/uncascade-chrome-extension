function uncascade(w) {
   var leftOffset = 10;
   var topOffset = 10;
   var newLeft = w.left - leftOffset;
   var newTop = w.top - topOffset;
   chrome.windows.update(w.id, {left: newLeft, top: newTop});
}

chrome.windows.onCreated.addListener(uncascade);
