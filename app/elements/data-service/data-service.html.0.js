
		Polymer({
			created: function() {
		      this.datas = [];
		    },
		    datasLoaded: function() {
		      // Make a copy of the loaded data
		      console.log('ok');
		      this.datas = this.$.userData.response.slice(0);
		    },
		    requestFailed: function(){
		    	console.log('error');
		    }
		});
