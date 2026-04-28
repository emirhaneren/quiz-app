const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizQuestions = async (difficulty, amount) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await ((await fetch(endpoint)).json());
    return data.results.map((dt) => ({
        ...dt,
        answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer])
    }))
}