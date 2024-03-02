  let textareaField = document.querySelector("#word_space");
  let countBtn = document.querySelector("#count_btn");
  let resetBtn = document.querySelector("#reset_btn");
  let countWords = document.querySelector(".word_count span")

  countBtn.addEventListener("click", () => {
    let words = textareaField.value;
    let wordsTrimmed = words.replace(/\s+/g, " ").trim()
    let splitWords = wordsTrimmed.split(" ");
    let numOfWords = splitWords.length;
     if(splitWords[0] == ""){
        numOfWords = 0;
     }
     else{
      alert("welldone")
     }
    countWords.innerHTML = numOfWords;
  })

  resetBtn.onclick = () => {
    textareaField.value = "";
    countWords.innerHTML = 0;
  }