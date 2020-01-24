const admin = 'Jessie Tarrosa';
const place = 'Cebu City';
const university = 'Cebu Technological University - Tuburan Campus';
const bDegree = 'Bachelor of Science in Information and Communication Technology';

const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    `Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>`,
  about:
    `Hello there,<br>I'm ${admin} and a web developer currently living in ${place}.`,
  skills:
    `<span class="code">Languages:</span> HTML, CSS, JavaScript, PHP<br><span class="code">Technologies:</span> Adobe Photoshop, Illustrator, Indesign, Git, SQL, VSCODE`,
  education:
    `${university}<br>Bachelor Degree — ${bDegree}`,
  experience: `Work Experience`,
  contact:
    `You can contact me on any of following links:<br><a href='https://www.facebook.com/tarrosa.jessie' class='success link'>Facebook</a> ,<a href='https://www.instagram.com/majessietic' class='success link'>Instagram</a>, <a href='https://www.twitter.com/majessietic' class='success link'>Twitter</a>`
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("Keyboard").focus();
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">'${input}' is not recognized as an internal or external command</div>`;
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
