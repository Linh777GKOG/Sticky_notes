const notesContainer = document.getElementById('app');
const addNoteButton = notesContainer.querySelector('.add-note');

getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener('click', () => addNote());
