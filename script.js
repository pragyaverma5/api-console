const sendBtn = document.getElementById("sendBtn");

const historyList = document.getElementById("history");

// Load saved history
function loadHistory() {
  const history = JSON.parse(localStorage.getItem("apiHistory")) || [];
  historyList.innerHTML = "";

  history.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.method} - ${item.url}`;

    li.addEventListener("click", () => {
      document.getElementById("method").value = item.method;
      document.getElementById("url").value = item.url;
    });

    historyList.appendChild(li);
  });
}

// Save request
function saveHistory(method, url) {
  let history = JSON.parse(localStorage.getItem("apiHistory")) || [];

  history = history.filter(item => item.url !== url);
history.unshift({ method, url });
  history = history.slice(0, 5); // keep last 5

  localStorage.setItem("apiHistory", JSON.stringify(history));
}

sendBtn.addEventListener("click", async () => {
  const method = document.getElementById("method").value;
  const url = document.getElementById("url").value;
  const body = document.getElementById("body").value;
  const responseBox = document.getElementById("response");
  const statusBox = document.getElementById("status");

  responseBox.textContent = "";
  statusBox.textContent = "⏳ Sending request...";

  try {
    let options = {
      method: method,
      headers: {
        "Content-Type": "application/json"
      }
    };

    if (method === "POST" && body) {
      options.body = body;
    }

    const start = Date.now();

    const res = await fetch(url, options);
    const time = Date.now() - start;

    const data = await res.json();

    saveHistory(method, url);
    loadHistory();

    responseBox.textContent = JSON.stringify(data, null, 2);
    statusBox.textContent = `✅ Status: ${res.status} | Time: ${time} ms`;

  } catch (error) {
    responseBox.textContent = "Unable to fetch data. This API may not allow browser requests (CORS issue).";
    statusBox.textContent = "❌ Request Failed";
  }
});
loadHistory();

const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {
  const text = document.getElementById("response").textContent;

  navigator.clipboard.writeText(text);

  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
  }, 1500);
});