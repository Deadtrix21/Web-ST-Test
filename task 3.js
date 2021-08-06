let edit = document.getElementById('textBox')

function palindrome() {
        var str = edit.value; 
        let word;
        let revesedword = '';
        var fmt = /[^A-Za-z0-9]/g
        word = str.toLowerCase()
        word = word.replace(fmt, '')
        // could be written as 
        // str.toLowerCase().replace(fmt, '')
        // for testing purposes i wrote it like this to see if it works 
        // like it does in python 
        for (const key in word) {
            revesedword = word[key] + revesedword
        }
        if (revesedword === word)
        {
            edit.style.border = "solid 5px green"
        }
        else
        {
            edit.style.border = "solid 5px red"
        }
}
