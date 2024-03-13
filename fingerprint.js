const captureBtn = document.getElementById("captureBtn");
const deviceBtn = document.getElementById("deviceBtn");
const BASE_URL = 'http://localhost:8081'
const captureUrl = '/v1/scanner/capture';
const deviceUrl = '/v1/scanner/devices'

captureBtn.addEventListener("click", () => {   
  sendRequest(BASE_URL + captureUrl)
      .then(data => {
          console.log(data);
      });
});

deviceBtn.addEventListener("click", () => {   
  sendRequest(BASE_URL + deviceUrl)
      .then(data => {
          console.log(data);
      });
});

async function sendRequest(url) {  
  console.log("start")
  const result = await fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });

    console.log("Result:", result);
    return result;
}
