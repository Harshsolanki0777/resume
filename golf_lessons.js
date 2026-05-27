gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

// check login status (saved in localStorage)
   function openAuth() {
  document.getElementById("authPopup").style.display = "flex";
}

function closeAuth() {
  document.getElementById("authPopup").style.display = "none";
}

function handleAuth() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("authError");

  // 🔴 VALIDATION
  if (!name) {
    error.innerText = "Name is required!";
    return;
  }

  if (!email) {
    error.innerText = "Email is required!";
    return;
  }

  if (!email.includes("@")) {
    error.innerText = "Enter valid email!";
    return;
  }

  if (!password) {
    error.innerText = "Password is required!";
    return;
  }

  if (password.length < 4) {
    error.innerText = "Password must be at least 4 characters!";
    return;
  }

  // ✅ SAVE USER
  localStorage.setItem("loggedInUser", JSON.stringify({
    username: name,
    email: email
  }));

  // ✅ REDIRECT AFTER SUCCESS
  window.location.href = "book.html";
}

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});