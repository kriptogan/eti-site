import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Question {
  id: number;
  text: string;
  options: { text: string; value: number }[];
}

@Component({
  selector: 'app-depression-quiz',
  templateUrl: './depression-quiz.component.html',
  styleUrls: ['./depression-quiz.component.css']
})
export class DepressionQuizComponent implements OnInit {
  currentQuestion = 0;
  answers: number[] = [];
  finalAnswer: number | undefined;
  showResults = false;
  totalScore = 0;
  showFinalQuestion = false;
  
  questions: Question[] = [
    {
      id: 1,
      text: 'עניין או הנאה מועטים מעשיית דברים',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מספר ימים', value: 1 },
        { text: 'ביותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 2,
      text: 'תחושת דכדוך, דיכאון או חוסר תקווה',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מספר ימים', value: 1 },
        { text: 'ביותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 3,
      text: 'קשיים בהירדמות, או בשינה רציפה, או עודף שינה',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מספר ימים', value: 1 },
        { text: 'ביותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 4,
      text: 'תחושה של עייפות או אנרגיה מועטה',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מספר ימים', value: 1 },
        { text: 'ביותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 5,
      text: 'תיאבון מועט או אכילת יתר',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מספר ימים', value: 1 },
        { text: 'ביותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 6,
      text: 'מרגיש רע לגבי עצמך – מרגיש שאתה כישלון או שאכזבת את עצמך או את משפחתך',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מספר ימים', value: 1 },
        { text: 'ביותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 7,
      text: 'קושי להתרכז בדברים, כמו קריאה בעיתון או צפיה בטלוויזיה',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מספר ימים', value: 1 },
        { text: 'ביותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 8,
      text: 'היית מדבר או נע באיטיות עד כדי שאחרים הבחינו בכך, או להפך הייתי חסר שקט ומנוחה כך שהייתי צריך להסתובב יותר מהרגיל',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מספר ימים', value: 1 },
        { text: 'ביותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    },
    {
      id: 9,
      text: 'מחשבות שהיה עדיף לו הייתי מת או מחשבות על פגיעה בעצמך בדרך כל שהיא',
      options: [
        { text: 'כלל לא', value: 0 },
        { text: 'מספר ימים', value: 1 },
        { text: 'ביותר ממחצית הימים', value: 2 },
        { text: 'כמעט כל יום', value: 3 }
      ]
    }
  ];

  finalQuestion = {
    text: 'אם סימנת בעיות כלשהן, אנא סמן עד כמה בעיות אלו הקשו עליך לבצע את עבודתך, לטפל בדברים בבית או להסתדר עם אנשים אחרים:',
    options: [
      { text: 'לא הקשו כלל', value: 0 },
      { text: 'הקשו במידת מה', value: 1 },
      { text: 'הקשו מאוד', value: 2 },
      { text: 'הקשו באופן קיצוני', value: 3 }
    ]
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.answers = new Array(this.questions.length);
  }

  selectAnswer(value: number): void {
    if (this.showFinalQuestion) {
      this.finalAnswer = value;
    } else {
      this.answers[this.currentQuestion] = value;
    }
  }

  nextQuestion(): void {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    } else if (!this.showFinalQuestion) {
      // Check if any answer is greater than 0
      const hasSymptoms = this.answers.some(val => val > 0);
      if (hasSymptoms) {
        this.showFinalQuestion = true;
      } else {
        this.calculateResults();
      }
    } else {
      this.calculateResults();
    }
  }

  previousQuestion(): void {
    if (this.showFinalQuestion) {
      this.showFinalQuestion = false;
    } else if (this.currentQuestion > 0) {
      this.currentQuestion--;
    }
  }

  calculateResults(): void {
    this.totalScore = this.answers.reduce((sum, val) => sum + val, 0);
    this.showResults = true;
  }

  getResultMessage(): string {
    // PHQ-9 scoring: 0-4 minimal, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe
    if (this.totalScore <= 4) {
      return 'דיכאון מינימלי או ללא תסמיני דיכאון';
    } else if (this.totalScore <= 9) {
      return 'תסמיני דיכאון קלים';
    } else if (this.totalScore <= 14) {
      return 'תסמיני דיכאון בינוניים';
    } else if (this.totalScore <= 19) {
      return 'תסמיני דיכאון בינוניים-חמורים';
    } else {
      return 'תסמיני דיכאון חמורים';
    }
  }

  getResultSuggestion(): string {
    if (this.totalScore <= 4) {
      return 'לא זוהו תסמיני דיכאון משמעותיים. המשיכי לשמור על הרגלי חיים בריאים ופני לעזרה מקצועית במידת הצורך.';
    } else if (this.totalScore <= 9) {
      return 'זוהו תסמיני דיכאון קלים. מומלץ לשקול שיחת ייעוץ עם איש מקצוע.';
    } else if (this.totalScore <= 14) {
      return 'זוהו תסמיני דיכאון בינוניים. מומלץ מאוד לפנות לטיפול מקצועי. טיפול יכול לעזור לך להתמודד עם התסמינים ולשפר את איכות חייך.';
    } else if (this.totalScore <= 19) {
      return 'זוהו תסמיני דיכאון בינוניים-חמורים. חשוב מאוד לפנות לטיפול מקצועי בהקדם. ייתכן שיהיה צורך בשילוב של טיפול תרופתי וטיפול פסיכולוגי.';
    } else {
      return 'זוהו תסמיני דיכאון חמורים. חשוב ביותר לפנות לעזרה מקצועית בדחיפות. מומלץ לפנות לרופא המשפחה או לשירותי בריאות הנפש בהקדם האפשרי.';
    }
  }

  restartQuiz(): void {
    this.currentQuestion = 0;
    this.answers = new Array(this.questions.length);
    this.finalAnswer = undefined;
    this.showResults = false;
    this.showFinalQuestion = false;
    this.totalScore = 0;
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  get progress(): number {
    if (this.showFinalQuestion) {
      return 100;
    }
    return ((this.currentQuestion + 1) / this.questions.length) * 100;
  }

  get isAnswered(): boolean {
    if (this.showFinalQuestion) {
      return this.finalAnswer !== undefined;
    }
    return this.answers[this.currentQuestion] !== undefined;
  }

  get currentQuestionText(): string {
    if (this.showFinalQuestion) {
      return this.finalQuestion.text;
    }
    return this.questions[this.currentQuestion].text;
  }

  get currentOptions(): { text: string; value: number }[] {
    if (this.showFinalQuestion) {
      return this.finalQuestion.options;
    }
    return this.questions[this.currentQuestion].options;
  }

  get currentAnswer(): number | undefined {
    if (this.showFinalQuestion) {
      return this.finalAnswer;
    }
    return this.answers[this.currentQuestion];
  }

  get questionNumber(): string {
    if (this.showFinalQuestion) {
      return 'שאלה נוספת';
    }
    return `שאלה ${this.currentQuestion + 1} מתוך ${this.questions.length}`;
  }
}
