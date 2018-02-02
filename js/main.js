// Listen for form submit
document.getElementById('bookmarkForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e) {
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteURL').value;
    
    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    if(localStorage.getItem('bookmarks') === null) {
        var bookmarks = [];

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmark));
        console.log('Created first save!');
    } else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        console.log('Added to Local Storage!');
    }

    e.preventDefault();
}