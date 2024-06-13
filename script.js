const containerEle = document.querySelector(".container")
const formEle = document.querySelector(".form");
const textArea = document.getElementById("note-area");
// const saveBtn = document.querySelector(".save-button button");
// const saveBtn = document.getElementById("save");
const displayNotesEle = document.querySelector(".display-notes");

formEle.addEventListener("submit", (e) => {
    e.preventDefault();
    saveNotes();
    displayNotes();
});

function saveNotes() {
    const text = textArea.value;
    const currentDate = new Date().toLocaleString();
    console.log(currentDate);

    const notes = [
        // {
        //   text: text,
        //   date: currentDate,

        // }
    ];

    newNote = {
      text: text,
      date: currentDate,
    };
    // console.log(newNote);

    notes.push(newNote);


    localStorage.setItem("noteInfo", JSON.stringify(notes));

    
    // textArea.value = "";
}


//page 2

function displayNotes() {
    notes = JSON.parse(localStorage.getItem("noteInfo"));
    // console.log(notes);

    displayNotesEle.innerHTML = "";

    notes.forEach((note, index) => {
        const noteHTML = `
            <div class="notes">
                <p>${note.text}</p>
                <p>${note.date}</p>
                <button type="button" onclick="deleteNote(${index})">Delete</button>
            </div>
                    `;

        containerEle.insertAdjacentHTML("beforeend", noteHTML);
    });

    localStorage.setItem("noteInfo", JSON.stringify(notes));

}

function deleteNote(index) {
    notes = JSON.parse(localStorage.getItem("noteInfo"));
    notes.splice(index, 1);
    localStorage.setItem("noteInfo", JSON.stringify(notes));
    displayNotes();
}