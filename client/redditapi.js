export default {
    search: function(search, limit, sortBy, time) {
        fetch(`http://www.reddit.com/search.json?q=${search}&sort=${sortBy}&limit=${limit}&t=${time}`)
        .then( res => res.json())
        .then(data => data.data.children.map( results => console.log(results.data.selftext)))
        .catch( err => console.log("error", err));
    }, 

    subredditSearch: function(query) {
        fetch(`http://www.reddit.com/subreddits/search.json?q=${query}`)
        .then( res => res.json())
        .then(data => data.data.children.map( results => console.log(results.data.public_description)))
        .catch(err => console.log("error", err));
    }
}