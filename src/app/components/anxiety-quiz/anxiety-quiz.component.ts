import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Question {
  id: number;
  text: string;
  options: { text: string; value: number }[];
}

@Component({
  selector: 'app-anxiety-quiz',
  templateUrl: './anxiety-quiz.component.html',
  styleUrls: ['./anxiety-quiz.component.css']
})
export class AnxietyQuizComponent implements OnInit {
  currentQuestion = 0;
  answers: number[] = [];
  showResults = false;
  totalScore = 0;
  
  questions: Question[] = [
    {
      id: 1,
      text: 'הרגשתי עצבני, חרד או מתוח מאוד',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'כמה ימים', value: 1 },
        { text: 'יותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 2,
      text: 'לא הייתי מסוגל להפסיק לדאוג או לשלוט בדאגה',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'כמה ימים', value: 1 },
        { text: 'יותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 3,
      text: 'הייתי מודאג יותר מדי בנוגע לדברים שונים',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'כמה ימים', value: 1 },
        { text: 'יותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 4,
      text: 'התקשיתי להירגע',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'כמה ימים', value: 1 },
        { text: 'יותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 5,
      text: 'הייתי כל כך חסר מנוחה שהיה לי קשה לשבת מבלי לנוע',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'כמה ימים', value: 1 },
        { text: 'יותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 6,
      text: 'הייתי מתעצבן או מתרגז בקלות',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'כמה ימים', value: 1 },
        { text: 'יותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 7,
      text: 'פחדתי כאילו משהו נורא עלול לקרות',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'כמה ימים', value: 1 },
        { text: 'יותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
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
    // GAD-7 scoring: 0-4 minimal, 5-9 mild, 10-14 moderate, 15-21 severe
    if (this.totalScore <= 4) {
      return 'חרדה מינימלית או ללא תסמיני חרדה';
    } else if (this.totalScore <= 9) {
      return 'תסמיני חרדה קלה';
    } else if (this.totalScore <= 14) {
      return 'תסמיני חרדה משמעותית';
    } else {
      return 'תסמיני חרדה קשה';
    }
  }

  getResultSuggestion(): string {
    if (this.totalScore <= 4) {
      return 'לא זוהו תסמיני חרדה משמעותיים. המשיכי לשמור על הרגלי חיים בריאים ופני לעזרה מקצועית במידת הצורך.';
    } else if (this.totalScore <= 9) {
      return 'זוהו תסמיני חרדה קלים. מומלץ לשקול שיחת ייעוץ עם איש מקצוע.';
    } else if (this.totalScore <= 14) {
      return 'זוהו תסמיני חרדה בינוניים. מומלץ מאוד לפנות לטיפול מקצועי. טיפול יכול לעזור לך להתמודד עם התסמינים ולשפר את איכות חייך.';
    } else {
      return 'זוהו תסמיני חרדה חמורים. חשוב מאוד לפנות לעזרה מקצועית בהקדם. מומלץ לפנות לרופא המשפחה או לשירותי בריאות הנפש בהקדם האפשרי.';
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
