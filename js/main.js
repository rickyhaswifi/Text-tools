Capatalize = () => {
  var UserOutArea = document.getElementById("userOutputCase");
  UserOutArea.classList.remove("hidden");
  var UserInput = document.getElementById("userInputCase").value;
  CapCase = UserInput.replace(/\b\b\w/g, c => c.toUpperCase());
  document.getElementById("userOutputCase").value = CapCase;
}

UpCase = () => {
  var UserOutArea = document.getElementById("userOutputCase");
  UserOutArea.classList.remove("hidden");
  var UserInput = document.getElementById("userInputCase").value;
  CapsLock = UserInput.toUpperCase();
  document.getElementById("userOutputCase").value = CapsLock;
}

Lowercase = () => {
  var UserOutArea = document.getElementById("userOutputCase");
  UserOutArea.classList.remove("hidden");
  var UserInput = document.getElementById("userInputCase").value;
  downcase = UserInput.toLowerCase();
  document.getElementById("userOutputCase").value = downcase;
}

RemoveSpace = () => {
  var UserOutArea = document.getElementById("userOutputCase");
  UserOutArea.classList.remove("hidden");
  var UserInput = document.getElementById("userInputCase").value;
  NoSpace = UserInput.replace(/\s/g, '');
  document.getElementById("userOutputCase").value = NoSpace;
}

ResetForm = () => {
  document.getElementById("userInputCase").value = "";
  document.getElementById("userOutputCase").value = "";
  var UserOutArea = document.getElementById("userOutputCase");
  UserOutArea.className += "hidden";
} 
