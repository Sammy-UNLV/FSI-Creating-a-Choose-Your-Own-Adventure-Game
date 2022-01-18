let firstAnswer = window.prompt('Do you head left or right?')
console.log(firstAnswer)
if (firstAnswer === 'left') {
    let secondAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole, just large enough for you ti crawl through. Dou follow it, or continue on your path?')
    console.log(secondAnswer)
    if (secondAnswer === 'follow') {
        let thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
        console.log(thirdAnswer)
        if (thirdAnswer === "stay") {
            window.prompt('You live happily amongst the cats for the rest of your days.')
            console.log(thirdAnswer)
        } else if (thirdAnswer === "spread the word") {
            window.prompt("After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.")
        }
        window.prompt('')
    }else if(secondAnswer === "continue"){
        let thirdAnswer = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take? Ladder or Staircase')
        console.log(thirdAnswer)
        if (thirdAnswer === "Ladder"){
            window.prompt("After acscending a few feet up the ladder, one of it's rung snaps, and you comically fall through each of the rungs below. Sheepish, you return home.")
        } else if(thirdAnswer === "Staircase"){
            window.prompt("After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.")
        }
    }
} else if (firstAnswer === 'right') {
    let secondAnswer = window.prompt('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take?')
    console.log(secondAnswer)
    if (secondAnswer === "Pass the dragon"){
        let thirdAnswwer = window.prompt("The dragon wakes up and sits upright. Yo uonly have a momne tto respond to stay or run.")
        console.log(thirdAnswer)
        if (thirdAnswer === "stay"){
            window.prompt("You and the dragon have an uplifting conversation about local politicsand becocme lifelong friends.") 
        } else if(thirdAnswer === "run"){
            window.prompt("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
            
        }
    }else if (secondAnswer === "Away from the dragon"){
        let thirdAnswwer = window.prompt("After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?")
        console.log(thirdAnswer)
        if(thirdAnswer === "draw it"){
           window.prompt("You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.")
        } else if (thirdAnswer === "pick it")
            window.prompt("You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.")
    }
}