function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const useLower = document.getElementById("lowerCase").checked;
    const useUpper = document.getElementById("upperCase").checked;
    const useSpecial = document.getElementById("specialCharacters").checked;
    const useNumbers = document.getElementById("numbers").checked;
  
    // Character sets
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    const numberChars = "0123456789";
  
    let allChars = "";
    let password = [];
  
    // Ensure at least one character from each selected type
    if (useLower) {
      allChars += lowerChars;
      password.push(randomChar(lowerChars));
    }
    if (useUpper) {
      allChars += upperChars;
      password.push(randomChar(upperChars));
    }
    if (useSpecial) {
      allChars += specialChars;
      password.push(randomChar(specialChars));
    }
    if (useNumbers) {
      allChars += numberChars;
      password.push(randomChar(numberChars));
    }
  
    // If no option selected
    if (allChars.length === 0) {
      alert("Please select at least one character type.");
      return;
    }
  
    // Fill the rest of the password
    while (password.length < length) {
      password.push(randomChar(allChars));
    }
  
    // Shuffle the password array to avoid predictable order
    password = shuffleArray(password);
  
    // Output the password
    document.getElementById("password").value = password.join("");
  }
  
  // Helper function: pick a random character from a string
  function randomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
  }
  
  // Helper function: shuffle characters in an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

//   Copy to clip board function
  function copyToClipboard() {
    const password = document.getElementById("password").value;
    navigator.clipboard.writeText(password)
      .then(() => alert("Password copied to clipboard!"))
      .catch(() => alert("Failed to copy password."));
  }
  
  
  