function uncascade(w) {
   var leftOffset = 10;
   var cascadedLeft = w.left;
   chrome.windows.update(w.id, {left: cascadedLeft - leftOffset});
}

chrome.windows.onCreated.addListener(uncascade);
