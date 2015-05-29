Polymer({
	handleFavorite: function(event, detail, sender) {
      var data = sender.templateInstance.model.data;
      // console.log("Data from data-list ", data);

      data.favorite = !data.favorite;

      this.$.service.setFavorite(data.id, data.favorite);

      console.log("Data id is ", data.id, "data favorite is", data.favorite);
    }
});