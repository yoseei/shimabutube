
const KEY = 'AIzaSyCIEI8VbS2mGN4J1AQIaxeWin2nD4NAz-o'; 
let url = 'https://www.googleapis.com/youtube/v3/search?';
url += 'type=video';  
url += '&part=snippet';         
url += '&q=しまぶー';              
url += '&videoEmbeddable=true'; 
url += '&videoSyndicated=true'; 
url += '&maxResults=50';       
url += '&key=' + KEY;         


$(function() {
  
  $.ajax({
    url: url,
    dataType : 'jsonp'
  }).done(function(data) {
    if (data.items) {
      setData(data);
    } else {
      console.log(data);
      alert('該当するデータが見つかりませんでした');
    }
  }).fail(function(data) {
    alert('通信に失敗しました');
  });
});


function setData(data) {
  let result = '';
  let video  = '';
 
  for (let i = 0; i < data.items.length; i++) {
    video  = '<iframe src="https://www.youtube.com/embed/';
    video  +=  data.items[i].id.videoId;
    video  += '" allowfullscreen></iframe>';
    result += '<div class="video">' + video + '</div>'
  }
  
  $('#videoList').html(result);
}

const PageTopBtn = document.getElementById('js-scroll-top');
PageTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});