export default {
    searchReddit: function(term, limit, sortBy, time) {
        fetch(`http://www.reddit.com/search.json?q=${search}&sort=${sortBy}&limit=${limit}`)
        .then( res => res.json())
        .then(data => data.data.children.map( results => results.data.selftext))
        .catch( err => console.log("error", err));
    }, 

    subredditSearch: function(query) {
        fetch(`http://www.reddit.com/subreddits/search.json?q=${query}`)
        .then( res => res.json())
        .then(data => data.data.children.map( results => results.data.public_description))
        .catch(err => console.log("error", err));
    }
}