function searchUsername() {
    var username = $("#username").val();

    if (username != null || username != "") {
        var url = "https://api.github.com/users/xxxxxxxx/events/public";
        url = url.replace("xxxxxxxx", username);

        $.getJSON(url, function (data) {
            try {
                if (data != null) {

                } else {

                }
            } catch {

            }
        });
    }
    else {
        alert("You need to enter an username to be able to searching.");
    }
}