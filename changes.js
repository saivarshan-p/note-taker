

function renderSidebar() {
    ...
}

let menuTarget = null;

function contextPin() {
    if (!menuTarget) return;
    const idx = state.notes.indexOf(menuTarget);
    if (idx > -1) {
        state.notes[idx].pinned = !state.notes[idx].pinned;
        save();
        renderSidebar();
    }
    menuTarget = null;
    document.getElementById('contextMenu').style.display = 'none';
}

function contextDelete() {
    if (!menuTarget) return;
    const idx = state.notes.indexOf(menuTarget);
    if (idx === -1) {
        menuTarget = null;
        document.getElementById('contextMenu').style.display = 'none';
        return;
    }
    if (confirm('Delete this note?')) {
        state.notes.splice(idx, 1);
        if(state.notes.length === 0) state.notes.push({ title: '', content: '', folder: 'Notes', pinned: false });
        state.currentIdx = 0;
        save();
        loadNote();
        renderSidebar();
    }
    menuTarget = null;
    document.getElementById('contextMenu').style.display = 'none';
}