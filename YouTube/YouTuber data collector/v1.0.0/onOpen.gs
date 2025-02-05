function onOpen(){
  const ui = SpreadsheetApp.getUi();
  const subMenu1 = ui.createMenu('fetch')
                      .addItem('fetch Youtuber\'s info','testGetYouTubeChannelInfo');
  ui.createMenu('Custom Menu')
    .addSubMenu(subMenu1)
    .addToUi();
}
