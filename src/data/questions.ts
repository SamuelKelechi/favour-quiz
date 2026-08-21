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
    question: "What is Python?",
    options: [
      "A. A programming language",
      "B. A web browser",
      "C. An operating system",
      "D. A database",
    ],
    answer: "A",
    explanation:
      "Python is a high-level programming language used for software development, automation, data analysis, AI, and many other applications.",
  },

  {
    id: 2,
    question: "Which function is used to display output in Python?",
    options: [
      "A. input()",
      "B. print()",
      "C. output()",
      "D. display()",
    ],
    answer: "B",
    explanation:
      "The print() function is used to display text, numbers, variables, and other information on the screen.",
  },

  {
    id: 3,
    question: "Which data type is used to store text?",
    options: [
      "A. int",
      "B. float",
      "C. str",
      "D. bool",
    ],
    answer: "C",
    explanation:
      "The str data type represents strings, which are used to store text such as names and sentences.",
  },

  {
    id: 4,
    question: "Which data type stores True or False?",
    options: [
      "A. str",
      "B. bool",
      "C. float",
      "D. int",
    ],
    answer: "B",
    explanation:
      "A Boolean (bool) value can only be True or False.",
  },

  {
    id: 5,
    question: "Which symbol is used to create a list?",
    options: [
      "A. ()",
      "B. {}",
      "C. []",
      "D. <>",
    ],
    answer: "C",
    explanation:
      "Python lists are created using square brackets, for example: scores = [75, 80, 90].",
  },

  {
    id: 6,
    question: "What is the index of the first item in a Python list?",
    options: [
      "A. 0",
      "B. 1",
      "C. -1",
      "D. 2",
    ],
    answer: "A",
    explanation:
      "Python uses zero-based indexing, meaning the first item has index 0.",
  },

  {
    id: 7,
    question: "Which method adds an item to the end of a list?",
    options: [
      "A. add()",
      "B. insert()",
      "C. append()",
      "D. push()",
    ],
    answer: "C",
    explanation:
      "The append() method adds a new item to the end of a Python list.",
  },

  {
    id: 8,
    question: "Which function returns the number of items in a list?",
    options: [
      "A. count()",
      "B. size()",
      "C. length()",
      "D. len()",
    ],
    answer: "D",
    explanation:
      "The len() function returns the number of items in a list.",
  },

  {
    id: 9,
    question: "Which function finds the highest value in a list?",
    options: [
      "A. high()",
      "B. max()",
      "C. highest()",
      "D. top()",
    ],
    answer: "B",
    explanation:
      "The max() function returns the largest value in a collection of values.",
  },

  {
    id: 10,
    question: "Which function calculates the total of numbers in a list?",
    options: [
      "A. total()",
      "B. add()",
      "C. sum()",
      "D. calculate()",
    ],
    answer: "C",
    explanation:
      "The sum() function adds together the numeric values in an iterable such as a list.",
  },

  {
    id: 11,
    question: "Which data structure cannot be changed after creation?",
    options: [
      "A. List",
      "B. Tuple",
      "C. Set",
      "D. Variable",
    ],
    answer: "B",
    explanation:
      "Tuples are immutable, meaning their contents cannot be changed after they are created.",
  },

  {
    id: 12,
    question: "Which data structure stores only unique values?",
    options: [
      "A. List",
      "B. Tuple",
      "C. Set",
      "D. String",
    ],
    answer: "C",
    explanation:
      "A Python set stores unique values and automatically removes duplicates.",
  },

  {
    id: 13,
    question: "Which brackets are commonly used to create a tuple?",
    options: [
      "A. []",
      "B. {}",
      "C. ()",
      "D. <>",
    ],
    answer: "C",
    explanation:
      "Tuples are commonly written using parentheses, for example: student = ('Favour', 15).",
  },

  {
    id: 14,
    question: "Which method adds an item to a set?",
    options: [
      "A. append()",
      "B. add()",
      "C. insert()",
      "D. push()",
    ],
    answer: "B",
    explanation:
      "The add() method is used to add an item to a Python set.",
  },

  {
    id: 15,
    question: "Which operator is used for multiplication?",
    options: [
      "A. +",
      "B. /",
      "C. *",
      "D. %",
    ],
    answer: "C",
    explanation:
      "The asterisk (*) is the multiplication operator in Python.",
  },

  {
    id: 16,
    question: "What does the == operator do?",
    options: [
      "A. Assigns a value",
      "B. Compares two values",
      "C. Multiplies two values",
      "D. Creates a list",
    ],
    answer: "B",
    explanation:
      "The == operator checks whether two values are equal.",
  },

  {
    id: 17,
    question: "Which statement is used to make a decision?",
    options: [
      "A. if",
      "B. print",
      "C. input",
      "D. list",
    ],
    answer: "A",
    explanation:
      "The if statement allows a program to execute code based on whether a condition is true.",
  },

  {
    id: 18,
    question: "Which keyword is used when the if condition is false?",
    options: [
      "A. otherwise",
      "B. else",
      "C. wrong",
      "D. except",
    ],
    answer: "B",
    explanation:
      "The else block runs when the preceding if condition is false.",
  },

  {
    id: 19,
    question: "What does input() do?",
    options: [
      "A. Displays information",
      "B. Deletes information",
      "C. Receives information from the user",
      "D. Creates a list",
    ],
    answer: "C",
    explanation:
      "The input() function allows a Python program to receive information typed by the user.",
  },

  {
    id: 20,
    question: "What does len(scores) return?",
    options: [
      "A. The highest score",
      "B. The lowest score",
      "C. The total score",
      "D. The number of items",
    ],
    answer: "D",
    explanation:
      "len(scores) returns the number of items contained in the scores list.",
  },
];