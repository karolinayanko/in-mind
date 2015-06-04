/**
 * Listens for the app launching then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */


function launch() {
  chrome.app.window.create(
    'app/index.html',
    {
      id: 'in-mind',
      width: 560,
      height: 540,
      minWidth: 360,
      minHeight: 540
      // bounds: {width: 800, height: 600}
    }
  );
}

chrome.app.runtime.onLaunched.addListener(launch);

chrome.notifications.onClicked.addListener(function() {
  launch();
});

