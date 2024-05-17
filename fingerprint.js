const captureBtn = document.getElementById("captureBtn");
const deviceBtn = document.getElementById("deviceBtn");
const BASE_URL = "http://localhost:8282";
const captureUrl = "/v2/scanner/capture";
const deviceUrl = "/v2/scanner/devices";

captureBtn.addEventListener("click", () => {
  const requestBody = {
    formatFmd: "ISO_19794_2_2005",
    formatFid: "ISO_19794_4_2005",
  };
  sendCaptureRequest(BASE_URL + captureUrl, requestBody).then((data) => {
    console.log(data);
  });
});

deviceBtn.addEventListener("click", () => {
  sendRequest(BASE_URL + deviceUrl).then((data) => {
    console.log(data);
  });
});

async function sendRequest(url) {
  console.log("start");
  const result = await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });

  console.log("Result:", result);
  return result;
}

async function sendCaptureRequest(url, body) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    console.log("Result:", result);
    return result;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
}
