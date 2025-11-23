import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Question {
  id: number;
  text: string;
  options: { text: string; value: number }[];
}

@Component({
  selector: 'app-self-esteem-quiz',
  templateUrl: './self-esteem-quiz.component.html',
  styleUrls: ['./self-esteem-quiz.component.css']
})
export class SelfEsteemQuizComponent implements OnInit {
  currentQuestion = 0;
  answers: number[] = [];
  showResults = false;
  totalScore = 0;
  
  questions: Question[] = [
    {
      id: 1,
      text: 'שאלה 1 - [נא למלא את התוכן]',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מעט', value: 1 },
        { text: 'במידה בינונית', value: 2 },
        { text: 'הרבה', value: 3 }
      ]
    },
    {
      id: 2,
      text: 'שאלה 2 - [נא למלא את התוכן]',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מעט', value: 1 },
        { text: 'במידה בינונית', value: 2 },
        { text: 'הרבה', value: 3 }
      ]
    },
    {
      id: 3,
      text: 'שאלה 3 - [נא למלא את התוכן]',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מעט', value: 1 },
        { text: 'במידה בינונית', value: 2 },
        { text: 'הרבה', value: 3 }
      ]
    },
    {
      id: 4,
      text: 'שאלה 4 - [נא למלא את התוכן]',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מעט', value: 1 },
        { text: 'במידה בינונית', value: 2 },
        { text: 'הרבה', value: 3 }
      ]
    },
    {
      id: 5,
      text: 'שאלה 5 - [נא למלא את התוכן]',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מעט', value: 1 },
        { text: 'במידה בינונית', value: 2 },
        { text: 'הרבה', value: 3 }
      ]
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.answers = new Array(this.questions.length);
  }

  selectAnswer(value: number): void {
    this.answers[this.currentQuestion] = value;
  }

  nextQuestion(): void {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    } else {
      this.calculateResults();
    }
  }

  previousQuestion(): void {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
    }
  }

  calculateResults(): void {
    this.totalScore = this.answers.reduce((sum, val) => sum + val, 0);
    this.showResults = true;
  }

  getResultMessage(): string {
    const maxScore = this.questions.length * 3;
    const percentage = (this.totalScore / maxScore) * 100;
    
    if (percentage < 25) {
      return 'התוצאות מצביעות על רמת ביטחון עצמי גבוהה';
    } else if (percentage < 50) {
      return 'התוצאות מצביעות על רמת ביטחון עצמי בינונית-גבוהה';
    } else if (percentage < 75) {
      return 'התוצאות מצביעות על רמת ביטחון עצמי בינונית-נמוכה';
    } else {
      return 'התוצאות מצביעות על רמת ביטחון עצמי נמוכה';
    }
  }

  getResultSuggestion(): string {
    const maxScore = this.questions.length * 3;
    const percentage = (this.totalScore / maxScore) * 100;
    
    if (percentage < 25) {
      return 'נראה שיש לך ביטחון עצמי טוב. המשך לשמור על הרגלים חיוביים ופנה לעזרה במידת הצורך.';
    } else if (percentage < 50) {
      return 'תוצאות אלו מצביעות על ביטחון עצמי סביר. מומלץ לעבוד על חיזוק הביטחון העצמי.';
    } else if (percentage < 75) {
      return 'תוצאות אלו מצביעות על קשיים בביטחון עצמי. מומלץ מאוד לפנות לטיפול מקצועי.';
    } else {
      return 'תוצאות אלו מצביעות על קשיים משמעותיים בביטחון עצמי. חשוב מאוד לפנות לעזרה מקצועית.';
    }
  }

  restartQuiz(): void {
    this.currentQuestion = 0;
    this.answers = new Array(this.questions.length);
    this.showResults = false;
    this.totalScore = 0;
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  get progress(): number {
    return ((this.currentQuestion + 1) / this.questions.length) * 100;
  }

  get isAnswered(): boolean {
    return this.answers[this.currentQuestion] !== undefined;
  }
}
