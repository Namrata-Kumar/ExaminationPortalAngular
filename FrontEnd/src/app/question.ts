export class Question {
  id: number;
  examLevel: number;
  description: string;
  optionOne: string;
  optionTwo: string;
  optionThree: string;  
  optionFour: string;
  answer: string;

  constructor(args: any) {
    this.id = args.id;
    this.examLevel = args.examLevel || 0;
    this.description = args.description || '';
    this.optionOne = args.optionOne;
    this.optionThree = args.optionTwo;
    this.optionThree = args.optionThree;
    this.optionFour = args.optionFour;
    this.answer = args.answer;
  }
}
