const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data;

    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;
    let concat_alpha = '';

    data.forEach(item => {
        if (/^\d+$/.test(item)) {
            const num = parseInt(item);
            sum += num;
            if (num % 2 === 0) even_numbers.push(item);
            else odd_numbers.push(item);
        } else if (/^[a-zA-Z]+$/.test(item)) {
            alphabets.push(item.toUpperCase());
            concat_alpha += item;
        } else {
            special_characters.push(item);
        }
    });

    let concat_string = '';
    concat_alpha = concat_alpha.split('').reverse();
    for (let i = 0; i < concat_alpha.length; i++) {
        concat_string += i % 2 === 0
            ? concat_alpha[i].toUpperCase()
            : concat_alpha[i].toLowerCase();
    }

    const response = {
        is_success: true,
        user_id: "surajadde",
        email: "surajadde876.be22@chitkara.edu.in",
        roll_number: "2210990876",
        odd_numbers,
        even_numbers,
        alphabets,
        special_characters,
        sum: sum.toString(),
        concat_string
    };

    res.status(200).json(response);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
