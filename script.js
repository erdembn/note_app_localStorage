const note = document.getElementById('note-input');
const submitBtn = document.getElementById('submit');
const notesContainer = document.getElementById('notes-container');

let notes = [];

if (localStorage.getItem('notes')) {
    notes = JSON.parse(localStorage.getItem('notes'));
    renderNotes();
}

submitBtn.addEventListener('click', () => {
    if (note.value) {
        notes.push(note.value);
        localStorage.setItem('notes', JSON.stringify(notes));
        note.value = '';
        notesContainer.textContent = '';
        renderNotes();
    }
});



function renderNotes() {
    for (let i = 0; i < notes.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('note');
        const newNote = document.createElement('p');
        newNote.textContent = notes[i];
        newDiv.appendChild(newNote);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';
        newDiv.appendChild(deleteBtn);
        notesContainer.appendChild(newDiv);
        deleteBtn.addEventListener('click', () => {
            newDiv.remove();
            notes.splice(i, 1);
            localStorage.setItem('notes', JSON.stringify(notes));
        });
    }
}

