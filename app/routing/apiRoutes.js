// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

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
                    if (difference) {

                        totalDifference.push(difference);
                    }
                    var sum = totalDifference.reduce(add, 0);

                    function add(a, b) {
                        return a + b;
                    }

                }
                if (sum != 0) {
                    console.log("Difference with " + friendsData[x].name + ": " + sum);
                }
                console.log("================================");

            }

            console.log(friendsData[i]);

        }

    })
}











                // Try this to add up totalDifference array
                // Outlined here: http://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers

                // var sum = [1, 2, 3].reduce(add, 0);

                // function add(a, b) {
                //     return a + b;
                // }

                // console.log(sum);



                //       // Compares each users's first score with that of other users:
                //         for (var x = 1; x < friendsData.length; x++) {
                //             var difference = Math.abs(friendsData[i].scores[i] - friendsData[x].scores[i]);
                //             if (difference) {
                //                 console.log("Difference between scores: " + difference);
                //                 console.log("i Score: " + friendsData[i].scores[i]);
                //                 console.log("x Score: " + friendsData[x].scores[i]);
                //             }
                //         }
                //         console.log("================================");
                //     }
                // })
                // };


                // CONSULT: this page for multiple variables in a for loop: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator

                // NOTES: We're now able to compare all scores in the [0] position, and log any differences between them. Next: Iterate through the entire score and calculate the difference between each score's index.

                // Determine the user's most compatible friend using the following as a guide:

                // Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).

                // With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

                // Example:
                // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
                // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

                // Total Difference: 2 + 1 + 2 = 5

                // Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.

                // The closest match will be the user with the least amount of difference.

                // see this page for absolute value: https://www.w3schools.com/jsref/jsref_abs.asp

                // https://www.npmjs.com/package/compare-func
