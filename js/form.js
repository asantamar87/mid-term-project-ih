const addInfo = (preventForm) => {
    preventForm.preventDefault();
  
    let fullName = document.querySelector("#name").value;
    //   let email = document.querySelector("#name-2").value;
    //   let phone = document.querySelector("#name-3").value;
    let message = document.querySelector("#field").value;
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: fullName,
        userId: 1,
        body: message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "text/plain, application/json",
      },
    })
      .then((response) => response.json())
      .then((formData) => console.log(formData))
      .then(() => {
         let formDone =document.querySelector(".w-form-done");
        formDone.style.display = "block"
      })
      .then(() => inputs.reset())
      .catch((error) => {
        let formFail = document.querySelector(".w-form-fail")
        formFail.style.display ="block";
        console.log("Error");
      });
  };
  
  let inputs = document.querySelector("#email-form");
  inputs.addEventListener("submit", addInfo);