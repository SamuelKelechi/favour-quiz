export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export const questions: Question[] = [
  {
    id: 1,

    question: "What is the main purpose of a conditional statement in Python?",

    options: [
      "A. To repeat code",
      "B. To store multiple values",
      "C. To make decisions based on conditions",
      "D. To create a function",
    ],

    answer: "C",

    explanation:
      "Conditional statements allow a program to make decisions and execute different code depending on whether a condition is True or False.",
  },

  {
    id: 2,

    question: "Which keyword is used to execute code when a condition is True?",

    options: [
      "A. if",
      "B. when",
      "C. check",
      "D. condition",
    ],

    answer: "A",

    explanation:
      "The if keyword is used to check a condition and execute a block of code when that condition is True.",
  },

  {
    id: 3,

    question: "What is missing from this Python statement? if age >= 18:",

    options: [
      "A. A semicolon",
      "B. A colon",
      "C. A comma",
      "D. A bracket",
    ],

    answer: "B",

    explanation:
      "A colon (:) is required at the end of an if, elif, and else statement before the indented block of code.",
  },

  {
    id: 4,

    question: "Why is indentation important in Python?",

    options: [
      "A. It makes the program run faster",
      "B. It identifies which code belongs to a block",
      "C. It creates variables",
      "D. It converts text to numbers",
    ],

    answer: "B",

    explanation:
      "Python uses indentation to identify blocks of code that belong to statements such as if, elif, else, loops, and functions.",
  },

  {
    id: 5,

    question: "What does the == operator mean in Python?",

    options: [
      "A. Assign a value",
      "B. Not equal to",
      "C. Equal to",
      "D. Greater than",
    ],

    answer: "C",

    explanation:
      "The == operator compares two values and checks whether they are equal. It is different from =, which is used for assignment.",
  },

  {
    id: 6,

    question: "What does the != operator mean?",

    options: [
      "A. Equal to",
      "B. Greater than",
      "C. Less than",
      "D. Not equal to",
    ],

    answer: "D",

    explanation:
      "The != operator checks whether two values are different or not equal.",
  },

  {
    id: 7,

    question: "What will this code print? score = 75; if score >= 50: print('Pass')",

    options: [
      "A. Fail",
      "B. Pass",
      "C. 75",
      "D. Nothing",
    ],

    answer: "B",

    explanation:
      "75 is greater than or equal to 50, so the condition is True and Python prints Pass.",
  },

  {
    id: 8,

    question: "What is the purpose of the else statement?",

    options: [
      "A. To run code when the if condition is False",
      "B. To run code when the if condition is True",
      "C. To repeat an if statement",
      "D. To create a variable",
    ],

    answer: "A",

    explanation:
      "The else block runs when the condition checked by the if statement is False.",
  },

  {
    id: 9,

    question: "What will this code print? score = 40; if score >= 50: print('Pass'); else: print('Fail')",

    options: [
      "A. Pass",
      "B. Fail",
      "C. 40",
      "D. Error",
    ],

    answer: "B",

    explanation:
      "Since 40 is less than 50, the condition score >= 50 is False, so the else block runs and prints Fail.",
  },

  {
    id: 10,

    question: "Which keyword is used when there are multiple conditions to check?",

    options: [
      "A. multiple",
      "B. elif",
      "C. otherwise",
      "D. check",
    ],

    answer: "B",

    explanation:
      "elif means 'else if' and allows Python to check another condition when the previous if or elif condition was False.",
  },

  {
    id: 11,

    question: "What will this code print? score = 75; if score >= 80: print('A'); elif score >= 70: print('B'); else: print('F')",

    options: [
      "A. A",
      "B. B",
      "C. F",
      "D. 75",
    ],

    answer: "B",

    explanation:
      "75 is not greater than or equal to 80, but it is greater than or equal to 70. Therefore, the elif block prints B.",
  },

  {
    id: 12,

    question: "Which function is used to receive input from a user in Python?",

    options: [
      "A. get()",
      "B. receive()",
      "C. input()",
      "D. user()",
    ],

    answer: "C",

    explanation:
      "The input() function allows a Python program to receive information entered by the user.",
  },

  {
    id: 13,

    question: "Why do we use int() with input() when asking a user to enter a score?",

    options: [
      "A. To convert the input into a whole number",
      "B. To convert the input into a list",
      "C. To print the input",
      "D. To delete the input",
    ],

    answer: "A",

    explanation:
      "input() returns text. int() converts that text into a whole number so Python can perform numerical comparisons and calculations.",
  },

  {
    id: 14,

    question: "What will this code print? age = 20; if age >= 18: print('Adult')",

    options: [
      "A. Child",
      "B. Adult",
      "C. 18",
      "D. Error",
    ],

    answer: "B",

    explanation:
      "The value of age is 20, which is greater than or equal to 18, so the condition is True and Adult is printed.",
  },

  {
    id: 15,

    question: "Which logical operator requires both conditions to be True?",

    options: [
      "A. or",
      "B. not",
      "C. and",
      "D. if",
    ],

    answer: "C",

    explanation:
      "The and operator returns True only when both conditions are True.",
  },

  {
    id: 16,

    question: "Which logical operator is True when at least one of the conditions is True?",

    options: [
      "A. and",
      "B. or",
      "C. not",
      "D. if",
    ],

    answer: "B",

    explanation:
      "The or operator is True when at least one of the conditions being checked is True.",
  },

  {
    id: 17,

    question: "What does the not operator do?",

    options: [
      "A. Adds two values",
      "B. Reverses a Boolean condition",
      "C. Compares two numbers",
      "D. Creates a new variable",
    ],

    answer: "B",

    explanation:
      "The not operator reverses a Boolean value. For example, not True becomes False, while not False becomes True.",
  },

  {
    id: 18,

    question: "What is a nested if statement?",

    options: [
      "A. An if statement inside another if statement",
      "B. Two programs running at the same time",
      "C. An if statement without a condition",
      "D. An if statement inside a list",
    ],

    answer: "A",

    explanation:
      "A nested if is an if statement placed inside another if statement. It is useful when one decision depends on another decision.",
  },

  {
    id: 19,

    question: "What will this code print? age = 20; has_id = True; if age >= 18 and has_id: print('Access granted')",

    options: [
      "A. Access granted",
      "B. Access denied",
      "C. True",
      "D. Error",
    ],

    answer: "A",

    explanation:
      "Both conditions are True: age is at least 18 and has_id is True. Since and requires both conditions to be True, Access granted is printed.",
  },

  {
    id: 20,

    question: "What will this program print if the user enters 85? score = int(input('Enter score: ')); if score >= 80: print('Excellent'); elif score >= 50: print('Pass'); else: print('Fail')",

    options: [
      "A. Excellent",
      "B. Pass",
      "C. Fail",
      "D. Error",
    ],

    answer: "A",

    explanation:
      "The input 85 is converted to an integer using int(). Since 85 is greater than or equal to 80, the first condition is True and the program prints Excellent.",
  },
];