Polymer({
  // методи handleFavorite і handleRemove
  // пов'язують data-card з data-service
  // для внесення змін в даних у відповідь
  // на поведінку користувача
	handleFavorite: function(event, detail, sender) {
    var data = sender.templateInstance.model.data;

    data.favorite = !data.favorite;

    this.$.service.setFavorite(data.id, data.favorite);

    console.log("Data id is ", data.id, "data favorite is", data.favorite);
  },
  handleRemove: function(event, detail, sender) {
  	var data = sender.templateInstance.model.data;

    this.$.service.removeItem(data.id, data);

    console.log("Remove data id is ", data.id);
  }
});