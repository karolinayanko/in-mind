function Item(obj){
	this.id = Date.now();
	this.type = "";
	this.header = obj ? obj.header : "";
	this.labels = obj ? obj.labels : [];
	this.creatingDate = new Date();
	this.timestamp = dateToShortString(this.creatingDate);
	this.favorite = obj ? obj.favorite : false;
}

function Note(obj){
	Item.apply(this, arguments);
	this.type = "note";
	this.contents = obj ? obj.contents : "";
}
Note.prototype = Object.create(Item.prototype);

function Notification(obj){
	Item.apply(this, arguments);
	this.type = "notify";
	this.contents = obj ? obj.contents : "";
}
Notification.prototype = Object.create(Item.prototype);

function Task(obj){
	Item.apply(this, arguments);
	this.type = "Task";
	this.contents = obj ? obj.contents : [];
}
Task.prototype = Object.create(Item.prototype);

var obj = {header: "",
      id: Date.now(),
      type: "note",
      contents: "",
      labels: []}

var note = new Note(obj);
var notify = new Notification(obj);
console.log(note, notify);

function dateToShortString (date) {
	var day = date.getDay(),
			month = date.getMonth() + 1,
			year = date.getFullYear(),
			time = getTime(date);

	return day + '.' + month + '.' + year + ' ' + time;
}

function getTime (date) {
	var hours = date.getHours(),
			minutes = date.getMinutes();

	if (minutes < 10){
		minutes = "0" + minutes;
	}
	return hours + ":" + minutes;
}

function updateData (service){
	chrome.storage.sync.get('notes', function(data){

		if (!data)
			return;

		var arr  = data.notes.forEach(function(el){
			el = new Note(el);
		});

		console.log("updateData(), data", data.notes, arr);

		service.datas = data.notes || [];

	});
}

function checkNotification(timeOfNotify){
	var interval = setInterval(function(){
		var timeNow = new Date();
		console.log('Interval works. Notify time', dateToShortString(timeOfNotify), 'Time now',dateToShortString(timeNow));

		if (timeOfNotify < timeNow){
		  chrome.notifications.create('reminder', {
		    type: 'basic',
		    iconUrl: '/assets/icon_128.png',
		    title: 'Don\'t forget!',
		    message: 'You have to do some things at ' + dateToShortString(timeOfNotify) +'. Wake up, dude!',
		    buttons: [{ title: "Close"}]
		  });
		  clearInterval(interval);
		  console.log('Interval not works.');
		}
	}, 6000);
}

// var notify = new Date('06.03.2015 21:27');
// checkNotification(notify);

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (key in changes) {
    var storageChange = changes[key];
    console.log('Storage key "%s" in namespace "%s" changed. ' +
                'Old value was "%s", new value is "%s".',
                key,
                namespace,
                storageChange.oldValue,
                storageChange.newValue);
  }
});

Polymer({
	created: function() {
		// при створенні компонента data-service
		// створюємо масив об'єктів datas
		var service = this;
		service.datas = [];
		// перевіряємо чи є у користувача дані
		// якщо так - записуємо їх у масив
		// якщо ні - повертаємо пустий масив
		updateData(service);
	},
	// запис значення favorite у об'єкт
	// який змінив користувач
	setFavorite: function(id, isFavorite) {
		var found = this.datas.filter(function(index, el){
			return el.id == id;
		});
		if (found && found.length > 0){
			found[0].favorite = isFavorite;
		}
		// оновлення даних в chrome.storage
		chrome.storage.sync.set({'notes': this.datas});
		// логування дій
		console.log('Favorite changed: ' + id + ", now: " + isFavorite);
	},
	// метод створення нової картки
	// додає новий об'єкт в початок списку datas
	addNote: function(note){
		this.datas.unshift(note);
		// оновлення даних в chrome.storage
		chrome.storage.sync.set({'notes': this.datas});
		// логування дій
		console.log("addNote(), datas is: ", this.datas);
	},
	// видалення об'єкту
	removeItem: function(id, data){
		var found = this.datas.filter(function(index, el){
			return el.id == id;
		});
		if (found && found.length > 0){
			console.log("found ", found[0]);
		}
		this.datas.pop(note);
		chrome.storage.sync.set({'notes': this.datas});
	}
});
