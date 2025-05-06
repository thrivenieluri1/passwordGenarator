# passwordGenarator

generatePassword()
This function creates a random password based on selected options.

Steps:
Get User Inputs:

Reads length and checkbox states (lowerCase, upperCase, specialCharacters, numbers).

Character Pools:

Defines strings of characters (e.g., abcdefghijklmnopqrstuvwxyz).

Builds a combined pool (allChars) based on which boxes are checked.

Also ensures at least one character from each selected type is included in the password.

Build the Password:

Fills the remaining characters randomly from allChars.

Shuffle the Characters:

Uses shuffleArray() to randomize character order (prevents predictable patterns).

Display the Result:

Joins characters and places the result in the password input box.

🔧 randomChar(str)
A helper function that picks and returns a random character from a given string.

🔄 shuffleArray(array)
A helper function that randomly rearranges elements in an array (Fisher-Yates algorithm).

📋 copyToClipboard()
This function copies the password to the clipboard.

Uses either:

document.execCommand("copy") (older method),

or navigator.clipboard.writeText() (modern method).

Shows an alert if the password was copied successfully.
