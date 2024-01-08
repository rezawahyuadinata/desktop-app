const { app, BrowserWindow, protocol } = require("electron");
const url = require("url");
const path = require("path");
function createMainWindow() {
	const mainWindow = new BrowserWindow({
		title: "Application-Management",
		width: 1000,
		height: 600,
	});

	const startServe = url.format({
		pathname: path.join(__dirname, "index.html"),
		protocol: "file",
	});

	mainWindow.loadURL(startServe);
}
app.whenReady().then(createMainWindow);
