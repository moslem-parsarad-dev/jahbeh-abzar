const { app, BrowserWindow } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    frame:false,
    width: 1280,
    height: 720,
    minHeight : 700,
    minWidth : 1200,

  });

  mainWindow.maximize()
  


  const { app, Menu } = require('electron')

  const isMac = process.platform === 'darwin'

  const template = [
    // { role: 'appMenu' }
    ...(isMac ? [{
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    }] : []),
    // { role: 'fileMenu' }
    {
      label: 'فایل',
      submenu: [
        isMac ? { role: 'close', label: 'خروج' } : { role: 'quit', label: 'خروج' }
      ]
    },
    // { role: 'editMenu' }
    {
      label: 'ویرایش',
      submenu: [
        { role: 'undo', label: 'برگشت' },
        { role: 'redo' , label: 'رفتن به یک مرحله بعد' },
        { type: 'separator' },
        {role: 'DevTools', label: 'انتقال'},
        { role: 'cut', label: 'انتقال'},
        { role: 'copy', label: 'کپی'},
        { role: 'paste' , label: 'جاگذاری'},
        ...(isMac ? [
          { role: 'pasteAndMatchStyle' },
          { role: 'delete' },
          { role: 'selectAll' },
          { type: 'separator' },
          {
            label: 'Speech',
            submenu: [
              { role: 'startSpeaking' },
              { role: 'stopSpeaking' }
            ]
          }
        ] : [
          { role: 'delete' , label: 'حذف' },
          { type: 'separator' },
          { role: 'selectAll', label: 'انتخاب همه'}
        ])
      ]
    },
    // { role: 'viewMenu' }
    {
      label: 'دیدن',
      submenu: [
        { role: 'reload', label: 'تازه سازی' },
        { type: 'separator', label: '' },
        { role: 'togglefullscreen', label: 'حالت تمام صفحه' },
      ]
    },
    // { role: 'windowMenu' }
    // {
    //   label: 'Window',
    //   submenu: [
    //     { role: 'minimize' , label: 'کوچک کردن صفحه'},
    //     ...(isMac ? [
    //       { type: 'separator' },
    //       { role: 'front' },
    //       { type: 'separator' },
    //       { role: 'window' }
    //     ] : [
    //       { role: 'close', label: 'بستن' }
    //     ])
    //   ]
    // },
    // {
    //   role: 'help',
    //   submenu: [
    //     {
    //       label: 'Learn More',
    //       click: async () => {
    //         global.open('music.html', '_blank')
    //       }
    //     }
    //   ]
    // }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)




  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
