document.getElementById('fillForm').addEventListener('click', function(){
    chrome.tabs.executeScript({
      code: ";"
    });
  });
  document.getElementById('fillForm').addEventListener('click', function(){
    chrome.tabs.executeScript({
      file: "index.js"
    });
  });
  
  document.getElementById('fillForm').click();

 
