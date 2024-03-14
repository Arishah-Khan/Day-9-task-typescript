// Day 9

// Question no 25

// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)


// conditional statement:

// if statement:

// Version That Passes:

let alien_colors:string = "yellow";

if (alien_colors == "yellow") {
    console.log("The player just earned 5 points");
}


// Version that Fails: (no output)


alien_colors = "grren";

if (alien_colors == "yellow") {
    // no output b/c condition is false
}

//Question no 26

// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.


let alien_color: string = "yellow";

// if block 

if (alien_color === "yellow") {
    console.log("The player just earned 5 points.");
} else {
    console.log("The player just earned 10 points.")
}

// else block

   alien_color = "grren";

if (alien_color === "yellow") {
    console.log("The player just earned 5 points.");
} else {
    console.log("The player just earned 10 points.")
}


// Question no 27

// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColor:string = "green";

// if block:

if(alienColor === "green") {
    console.log("The player just earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("The player just earned 10 points.");
} else if (alienColor === "red") {
    console.log("The player just earned 15 points.");
}


// else block:

  alienColor = "yellow";

if(alienColor === "green") {
    console.log("The player just earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("The player just earned 10 points.");
} else if (alienColor === "red") {
    console.log("The player just earned 15 points.");
}

// else if block:

    alienColor = "red";

if(alienColor === "green") {
    console.log("The player just earned 5 points.");
} else if (alienColor === "yellow") {
    console.log("The player just earned 10 points.");
} else if (alienColor === "red") {
    console.log("The player just earned 15 points.");
}






