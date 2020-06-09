window.onload = function() {
    this.initSearchBar()
}
function initSearchBar() {
    document.getElementById("search-bar-input").value = ""
    document.getElementById("search-bar-input").focus()
    
    document.getElementById("search-bar-input").addEventListener("keypress", (event) => {
        if (event.key != 'Enter') return

        googleSearchUrl = "https://www.google.co.uk/search?q="
        query = document.getElementById("search-bar-input").value.replace(/\ /g, "+")
        document.location = googleSearchUrl + query
    })
}
//www.reddit.com/r/startpages/comments/gvg79x/followed_uvallodes_tutorial_put_my_own_small_spin/fspwyct?utm_source=share&utm_medium=web2x
