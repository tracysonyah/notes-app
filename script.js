const containerEle = document.querySelector(".container")
const formEle = document.querySelector(".form");
const textArea = document.getElementById("note-area");
const saveBtn = document.querySelector(".save-button button");

formEle.addEventListener("submit", (e) => {
    e.preventDefault();
    saveNotes();
    displayNotes();
});

function saveNotes() {
    const text = textArea.value;
    const currentDate = new Date(Date.now());
    // console.log(currentDate);

    const notes = [
        {
          text: text,
          date: currentDate,

        }
    ];

    newNote = {
      text: text,
      date: currentDate,
    };
    console.log(newNote);

    notes.push(newNote);


    localStorage.setItem("noteInfo", JSON.stringify(notes));

    // console.log(JSON.parse(localStorage.getItem("noteInfo")));

}


//page 2
// console.log(JSON.parse(localStorage.getItem("noteInfo")));

function displayNotes() {
    notes = JSON.parse(localStorage.getItem("noteInfo"));

    notes.forEach((note) => {
        const noteHTML = `<form class="form">
                            <div class="note-area">
                                <textarea name="note" id="note-area" placeholder="Your notes here..."></textarea>
                            </div>
                            <div class="save-button">
                                <button id="save">Save</button>
                            </div>
                        </form>
                        <button onclick="deleteNote()">Delete</button>
                    `;

        containerEle.insertAdjacentHTML("beforeend", noteHTML);
    });

}

function deleteNote() {
    notes = JSON.parse(localStorage.getItem("noteInfo"));
}

function deleteNotes() {
    localStorage.clear()
}