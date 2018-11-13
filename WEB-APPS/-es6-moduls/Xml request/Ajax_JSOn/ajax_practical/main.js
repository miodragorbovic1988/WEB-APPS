let $searchUser = $('#searchUser');
let ourSearchUser = $searchUser.value;
let $buttonSearch = $('#buttonSearch');

var request = $.ajax({
    url: `https://api.github.com/search/users?q=${ourSearchUser}`,
    method: "POST",
    dataType: "html"
});

request.done(function (images) {
    console.log(images);
    for (let i = 0; i < items.length; i++) {

    }
})