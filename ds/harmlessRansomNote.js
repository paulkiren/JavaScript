
function harmlessRansomNote(noteText, magazineText) {
    let notesArray = noteText.split(' '), magazineArray = magazineText.split(' ');
    let magazineWords = {};
     // Big O(n);
    magazineArray.forEach(word => {
        if (!magazineWords[word]) magazineWords[word] = 0;
        magazineWords[word] += 1;
    });
    let isAvalidNote = true;
    // Big O(m);
    notesArray.forEach(note_word => {
        if (magazineWords[note_word]) {
            magazineWords[note_word] -= 1;
            if (magazineWords[note_word] < 0) isAvalidNote = false;

        } else isAvalidNote = false;

    });
    return isAvalidNote;

}

// Time complexity O(n + m);
harmlessRansomNote('this is a secret note for you from a secret admirer', 'es as they are far from populated areas but it is worth the effort a tip i have for you is to go ');