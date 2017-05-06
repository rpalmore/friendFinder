// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendsData = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(request, response) {
        response.json(friendsData);
    });

    app.post("/api/friends", function(request, response) {
        friendsData.push(request.body);
        response.json(friendsData);

        for (var i = 0; i < friendsData.length; i++) {
            var scores = friendsData[i].scores.map(Number);
            console.log(friendsData[i].name);
            console.log(scores);

            for (var x = 1; x < friendsData.length; x++) {
                var totalDifference = [];

                for (var y = 0; y < 10; y++) {

                    var difference = Math.abs(friendsData[i].scores[y] - friendsData[x].scores[y]);
                    // if (difference) {

                        totalDifference.push(difference);
                    // }
                    var sum = totalDifference.reduce(add, 0);

                    function add(a, b) {
                        return a + b;
                    }

                }
                
                    console.log("Difference with " + friendsData[x].name + ": " + sum);
                
                }
                console.log("================================");

        }

    })
}



// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).

// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// Total Difference: 2 + 1 + 2 = 5

// The closest match will be the user with the least amount of difference.

