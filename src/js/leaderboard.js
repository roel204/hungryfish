import { Actor } from 'excalibur';

export class Leaderboard extends Actor {
    scores = [];

    constructor() {
        super();
    }
//e
    addScore(name, score) {
        const savedScores = localStorage.getItem('leaderboard');
        if (savedScores) {
            this.scores = JSON.parse(savedScores);
        }

        const newScore = {
            name: name,
            score: score,
        };

        this.scores.push(newScore);
        this.scores.sort((a, b) => b.score - a.score); // Sort scores in descending order
        this.scores = this.scores.slice(0, 10); // Keep only the top 10 scores

        localStorage.setItem('leaderboard', JSON.stringify(this.scores));
    }

    getFormattedTopScores() {
        const savedScores = localStorage.getItem('leaderboard');
        const topScores = savedScores ? JSON.parse(savedScores) : [];

        let highScoreText = '';
        if (topScores && topScores.length > 0) {
            highScoreText = 'Top 10 Scores:\n\n';
            topScores.forEach((score, index) => {
                highScoreText += `${index + 1}. ${score.name}: ${score.score}\n\n`;
            });
        }

        return highScoreText;
    }
}
