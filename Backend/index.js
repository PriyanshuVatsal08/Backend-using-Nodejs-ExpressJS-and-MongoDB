const express = require("express");
const app = express();
const cors=require("cors");

app.use(cors({
    origin:"http://localhost:5173"
}));

app.use(express.json());

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Programmer Joke",
            joke: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            id: 2,
            title: "Math Joke",
            joke: "Why was 6 afraid of 7? Because 7, 8, 9!"
        },
        {
            id: 3,
            title: "Computer Joke",
            joke: "Why did the computer go to the doctor? Because it had a virus!"
        },
        {
            id: 4,
            title: "Student Joke",
            joke: "Why did the student eat his homework? Because the teacher said it was a piece of cake!"
        },
        {
            id: 5,
            title: "JavaScript Joke",
            joke: "Why did the JavaScript developer go broke? Because he lost his cache!"
        }
    ];

    res.json(jokes);
})

app.listen(3000,function(){
    console.log("Server started...");
    
})