function getYouTubeChannelInfo(apiKey,channelId) {

  // Construct the API request URL
  var apiUrl = 'https://www.googleapis.com/youtube/v3/channels' +
      '?part=snippet,statistics' + '&id=' + channelId + '&key=' + apiKey;

  try {
    var response = UrlFetchApp.fetch(apiUrl);
    var data = JSON.parse(response.getContentText());

    if (data.items && data.items.length > 0) {
      const channel = data.items[0];
      const title = channel.snippet.title;
      const description = channel.snippet.description;
      var subscriberCount = channel.statistics.subscriberCount;
      var viewCount = channel.statistics.viewCount;
      var videoCount = channel.statistics.videoCount;

      // Write to Google Sheet
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName('Sheet1'); // Replace with your sheet name
      sheet.appendRow([channelId, title, description, subscriberCount, viewCount, videoCount]);

      Logger.log('Channel info written to sheet.');
      return channel; // Return the channel object if needed

    } else {
      Logger.log('Channel not found or error: ' + JSON.stringify(data));
      return null;
    }

  } catch (error) {
    Logger.log('Error fetching YouTube data: ' + error);
    return null;
  }
}


// Example usage:
function testGetYouTubeChannelInfo() {
  const apiKey = API_KEY; // Replace with the actual API key
  const channelId = CHANNEL_ID; // Replace with the actual channel ID
  getYouTubeChannelInfo(apiKey,channelId);
}
