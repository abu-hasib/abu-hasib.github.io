//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);


//function saveBookmark
function saveBookmark(e) {
  var siteName = document.getElementById('siteName').value
  var siteUrl = document.getElementById('siteUrl').value

  if (!validate(siteName, siteUrl)) {
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  if (localStorage.getItem('bookmarks') === null) {
    //Init array
    var bookmarks = [];
    //insert new bookmark into bookmark array
    bookmarks.push(bookmark)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  document.getElementById('myForm').reset();

  //re-fetch bookmarks
  fetchBookmarks();

  //prevent form from submitting
  e.preventDefault()
}


function deleteBoomark(url) {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  console.log(url)
  //loop through bookmarks
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url === url) {
      bookmarks.splice(i, 1);
      console.log('deleted')
    }
  }
  //reset storage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  //re-fetch bookmarks
  fetchBookmarks();
};

function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  var bookmark = document.getElementById('bookmarks');

  bookmark.innerHTML = '';
  //build output 
  bookmarks.forEach(element => {
    bookmark.innerHTML += '<div class="bar"' +
      '<h3>' + element.name + '</h3>' +
      '<a class="btn" target="_blank" href="' + element.url + '">Visit</a>' +
      '<a onclick="deleteBoomark(\'' + element.url + '\')" class="btn-red" href="#">Delete</a>' +
      '</div>';
  });
}

function validate(siteName, siteUrl) {
  if (!siteName || !siteUrl) {
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert('Please enter a valid url');
    return false;
  }

  return true;
}