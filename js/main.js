Capatalize = () => {
  const UserInput = document.getElementById("userInputCase").value;
  CapCase = UserInput.replace(/\b\b\w/g, c => c.toUpperCase());
  var LowCase = CapCase.replace(/\B\B\w/g, l => l.toLowerCase());
  document.getElementById("userInputCase").value = LowCase;
}

UpCase = () => {
  const UserInput = document.getElementById("userInputCase").value;
  CapsLock = UserInput.toUpperCase();
  document.getElementById("userInputCase").value = CapsLock;
}

Lowercase = () => {
  const UserInput = document.getElementById("userInputCase").value;
  downcase = UserInput.toLowerCase();
  document.getElementById("userInputCase").value = downcase;
}

RemoveSpace = () => {
  const UserInput = document.getElementById("userInputCase").value;
  NoSpace = UserInput.replace(/\s/g, '');
  document.getElementById("userInputCase").value = NoSpace;
}

CharecterCount = () => {
  const UserInput = document.getElementById("userInputCase").value;
  const Count = UserInput.length;
  document.getElementById("CharecterCount").innerHTML = `Total Charecters: ${Count}`;
}

ResetForm = () => {
  document.getElementById("userInputCase").value = "";
  document.getElementById("CharecterCount").innerHTML = "";
} 

 