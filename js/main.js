const Capatalize = document.getElementById('Capatalize')
Capatalize.addEventListener('click', 
  CapatalizeText = () => {
    const UserInput = document.getElementById("userInputCase").value;
    CapCase = UserInput.replace(/\b\b\w/g, c => c.toUpperCase());
    var LowCase = CapCase.replace(/\B\B\w/g, l => l.toLowerCase());
    document.getElementById("userInputCase").value = LowCase;
  }
)

const UpCase = document.getElementById('UpCase')
UpCase.addEventListener('click',
  UpCaseText = () => {
    const UserInput = document.getElementById("userInputCase").value;
    CapsLock = UserInput.toUpperCase();
    document.getElementById("userInputCase").value = CapsLock;
  }
)

const Lowercase = document.getElementById('Lowercase')
Lowercase.addEventListener('click',
  LowercaseText = () => {
    const UserInput = document.getElementById("userInputCase").value;
    downcase = UserInput.toLowerCase();
    document.getElementById("userInputCase").value = downcase;
  }
)

const RemoveSpace = document.getElementById('RemoveSpace')
RemoveSpace.addEventListener('click',
  RemoveSpaceText = () => {
    const UserInput = document.getElementById("userInputCase").value;
    NoSpace = UserInput.replace(/\s/g, '');
    document.getElementById("userInputCase").value = NoSpace;
  }
)

const CharecterCount = document.getElementById('CharecterCounter')
CharecterCount.addEventListener('click',
  CharecterCountText = () => {
    const UserInput = document.getElementById("userInputCase").value;
    const Count = UserInput.length;
    document.getElementById("CharecterCount").innerHTML = `Total Charecters: ${Count}`;
  }
)

const FileScrub = document.getElementById('FileScrub')
FileScrub.addEventListener('click',
  cleanAudioName = () => {
    const UserInput = document.getElementById("userInputCase").value;
    const songNameScrub = UserInput.replace(/\b0[1-9] \b|\b1[10-99] \b|(^\s*)|(\s+-\s+).*|(.wav)|(.WAV)|(.mp3)|(.MP3)/g, '')
    //const ArtistNameScrub = UserInput.replace(/(0[1-9] )|([10-99] )|(.wav)|(.WAV)|(.mp3)|(.MP3)/g, '')
    document.getElementById("userInputCase").value = `${songNameScrub}`;
  }
)

const ResetForm = document.getElementById('ResetForm')
ResetForm.addEventListener('click',
  ResetFormText = () => {
    document.getElementById("userInputCase").value = "";
    document.getElementById("CharecterCount").innerHTML = "";
  } 
)

 