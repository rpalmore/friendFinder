// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsData = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(request, response) {
        response.json(friendsData);
    });

    app.post("/api/friends", function(request, response) {
        friendsData.push(request.body);
        response.json(friendsData);

        // Loop through data to print each score
        for (var i = 0; i < friendsData.length; i++) {
            var scores = friendsData[i].scores.map(Number);
            console.log(friendsData[i].name);
            console.log(scores);

            // Calculate difference between each score in friendsArray
            for (var x = 0; x < friendsData.length; x++) {

                var totalDifference = [];

                for (var y = 0; y < 10; y++) {

                    var difference = Math.abs(friendsData[i].scores[y] - friendsData[x].scores[y]);

                    totalDifference.push(difference);

                    var sum = totalDifference.reduce(add, 0);

                    function add(a, b) {
                        return a + b;
                    }

                }

                if (x != i) {
                    console.log("Difference with " + friendsData[x].name + ": " + sum);
                    if (sum <= x) {
                        console.log("Best match: " + friendsData[x].name);
                    }
                }

            }
            console.log("================================");
        }

    })
}



// The closest match will be the user with the least amount of difference.

