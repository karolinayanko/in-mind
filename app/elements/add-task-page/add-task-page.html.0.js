Polymer({
  publish: {
    notes: null
  },
  ready: function(){

    this.newNote = {
      header: "",
      id: Date.now(),
      type: "note",
      contents: [],
      labels: []
    }

  },
  updateModel: function(){

  },
  willPrepare: function() {
    this.super();
    // Reset the scroller so every time the user comes to the add page
    // they see the top of the form
    this.$.headerPanel.scroller.scrollTop = 0;

  },

  goBack: function(){
  	var pages = document.querySelector('#pages');

  	pages.selected = 0;
  },

  saveNote: function(event, detail, sender){
    var note = sender.templateInstance.model.newNote;

    console.log("Note Labels is: ", note.labels);

    note.labels.typeOf === "string" ? note.labels = note.labels.split(', ') : note.labels;

    note.contents ? note.contents = [note.contents] : note.contents = [];

    console.log("New Note ", note)

    this.$.service.addNote(note);

    this.goBack();
  }
});