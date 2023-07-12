function searchUsername() {
    var emails = [];
    var username = $("#username").val();
    var url = "https://api.github.com/users/username-to-here/events/public";
    url = url.replace("username-to-here", username);

    $.ajax({
        type: "GET",
        url: url,
        dataType: "jsonp",
        success: function (result) {
            if (result.data.length === undefined || result.data.length === 0) {
                if (result.data.message) {
                    $("#response").val("There is no username like that.");
                } else {
                    $("#response").val("There is no data for that user.");
                }
            } else {
                result.data.forEach(function (item) {
                    if (item.payload.commits) {
                        var commits = item.payload.commits;
                        commits.forEach(function (element) {
                            emails.push("\n" + element.author.email);
                        });
                    }
                });
                if (emails.length > 0) {
                    let uniqueEmails = emails.filter((entity, index) => {
                        return emails.indexOf(entity) === index;
                    });
                    $("#response").val(uniqueEmails);
                } else {
                    $("#response").val("There is no e-mail info for that user.");
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#response").val("An error happens during call the service.");
        }
    });
}