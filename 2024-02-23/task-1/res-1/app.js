function validateEmail() {
  const emailInput = document.querySelector("#email");
  const promise = new Promise((resolve, reject) => {
    if (emailInput.value.includes("@") && emailInput.value.includes(".")) {
      resolve();
    } else {
      reject("Invalid email");
    }
  });

  promise.then(() => {
    const popup = document.createElement("div");
    popup.innerHTML = "Email valid!";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#fff";
    popup.style.padding = "10px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
    document.body.appendChild(popup);
    setTimeout(() => {
      popup.remove();
    }, 2000);
  }).catch((err) => {
    const popup = document.createElement("div");
    popup.innerHTML = "Email invalid!";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#ff0000"; // red background
    popup.style.padding = "10px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
    document.body.appendChild(popup);
    setTimeout(() => {
      popup.remove();
    }, 2000);
  });
}