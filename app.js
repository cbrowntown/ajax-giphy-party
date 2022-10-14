async function getGiphyImage(searchTerm) {
    const res = await axios.get('http://api.giphy.com/v1/gifs/search?', {
        params: {
            q: searchTerm, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    });
    const numResults = res.data.data.length;
    if (numResults) {
        const randomId = Math.floor(Math.random() * numResults);
        const giphyImages = document.querySelector("#giphyImages");
        const newImage = document.createElement('img');
        newImage.src = res.data.data[randomId].images.original.url;
        giphyImages.append(newImage);
    }
}

const searchText = document.querySelector('#searchText');
const form = document.querySelector('#submitForm');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    getGiphyImage(searchText.value);
    searchText.value = '';
});

const removeButton = document.querySelector('#RemoveImgs');
removeButton.addEventListener('click', function (event) {
    // event.preventDefault(); - do I need this?
    const giphyImages = document.querySelector("#giphyImages");
    giphyImages.innerHTML = '';
});

// why does chrome sometimes use cache for console?
// last button in a form is the one that submits 
