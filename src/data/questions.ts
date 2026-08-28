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

    question: "Which symbol is used to create a set in Python?",

    options: [
      "A. []",
      "B. {}",
      "C. ()",
      "D. <>",
    ],

    answer: "B",

    explanation:
      "Sets are commonly created using curly braces {}. For example: fruits = {'apple', 'banana', 'orange'}.",
  },

  {
    id: 2,

    question: "Which of the following is a valid Python set?",

    options: [
      "A. [1, 2, 3]",
      "B. (1, 2, 3)",
      "C. {1, 2, 3}",
      "D. <1, 2, 3>",
    ],

    answer: "C",

    explanation:
      "A set can be created using curly braces with comma-separated values, such as {1, 2, 3}.",
  },

  {
    id: 3,

    question: "What is a major characteristic of a Python set?",

    options: [
      "A. It allows duplicate values",
      "B. It stores values in key-value pairs",
      "C. It does not allow duplicate values",
      "D. It can only contain strings",
    ],

    answer: "C",

    explanation:
      "Sets automatically remove duplicate values. Each value can appear only once in a set.",
  },

  {
    id: 4,

    question: "What will be the result of this code? numbers = {1, 2, 2, 3, 3}",

    options: [
      "A. {1, 2, 2, 3, 3}",
      "B. {1, 2, 3}",
      "C. [1, 2, 3]",
      "D. An error will occur",
    ],

    answer: "B",

    explanation:
      "Sets do not store duplicate values, so the repeated 2 and 3 are automatically removed.",
  },

  {
    id: 5,

    question: "Which method is used to add an item to a set?",

    options: [
      "A. add()",
      "B. append()",
      "C. insert()",
      "D. push()",
    ],

    answer: "A",

    explanation:
      "The add() method is used to add a new item to a set. For example: numbers.add(5).",
  },

  {
    id: 6,

    question: "Which method can be used to remove an item from a set?",

    options: [
      "A. delete()",
      "B. remove()",
      "C. erase()",
      "D. clearOne()",
    ],

    answer: "B",

    explanation:
      "The remove() method removes a specified item from a set. For example: fruits.remove('apple').",
  },

  {
    id: 7,

    question: "What does the len() function return when used with a set?",

    options: [
      "A. The largest value",
      "B. The smallest value",
      "C. The number of items in the set",
      "D. The total of all values",
    ],

    answer: "C",

    explanation:
      "The len() function returns the number of items contained in the set.",
  },

  {
    id: 8,

    question: "What will this code print? fruits = {'apple', 'banana'}; fruits.add('orange'); print(fruits)",

    options: [
      "A. Only apple and banana",
      "B. apple, banana, and orange",
      "C. An empty set",
      "D. An error",
    ],

    answer: "B",

    explanation:
      "The add() method adds 'orange' to the existing set, so the set will contain apple, banana, and orange.",
  },

  {
    id: 9,

    question: "Which keyword can be used to check if an item exists in a set?",

    options: [
      "A. has",
      "B. contains",
      "C. in",
      "D. exists",
    ],

    answer: "C",

    explanation:
      "The 'in' keyword checks whether a value exists in a set. For example: 'apple' in fruits.",
  },

  {
    id: 10,

    question: "What is a Python dictionary?",

    options: [
      "A. A collection of key-value pairs",
      "B. A collection that only stores numbers",
      "C. A programming function",
      "D. A type of loop",
    ],

    answer: "A",

    explanation:
      "A dictionary stores data as key-value pairs. For example: student = {'name': 'Favour', 'score': 85}.",
  },

  {
    id: 11,

    question: "Which brackets are used to create a Python dictionary?",

    options: [
      "A. []",
      "B. ()",
      "C. {}",
      "D. <>",
    ],

    answer: "C",

    explanation:
      "Python dictionaries are written using curly braces {} with keys and values separated by a colon.",
  },

  {
    id: 12,

    question: "In the dictionary below, what is 'name'? student = {'name': 'Favour', 'score': 85}",

    options: [
      "A. A value",
      "B. A key",
      "C. A function",
      "D. A variable",
    ],

    answer: "B",

    explanation:
      "'name' is the key, while 'Favour' is its corresponding value.",
  },

  {
    id: 13,

    question: "How can you access Favour's score in this dictionary? student = {'name': 'Favour', 'score': 85}",

    options: [
      "A. student[85]",
      "B. student('score')",
      "C. student['score']",
      "D. student.score()",
    ],

    answer: "C",

    explanation:
      "Dictionary values are accessed using their keys inside square brackets. Therefore, student['score'] returns 85.",
  },

  {
    id: 14,

    question: "What will this code print? student = {'name': 'Favour', 'score': 85}; print(student['name'])",

    options: [
      "A. name",
      "B. score",
      "C. Favour",
      "D. 85",
    ],

    answer: "C",

    explanation:
      "The key 'name' points to the value 'Favour', so student['name'] returns Favour.",
  },

  {
    id: 15,

    question: "How do you add a new key-value pair to a dictionary?",

    options: [
      "A. student.add('age', 16)",
      "B. student['age'] = 16",
      "C. student.append('age', 16)",
      "D. student.insert('age', 16)",
    ],

    answer: "B",

    explanation:
      "A new dictionary item can be added by assigning a value to a new key, such as student['age'] = 16.",
  },

  {
    id: 16,

    question: "Which method is used to remove a specified key-value pair from a dictionary?",

    options: [
      "A. remove()",
      "B. delete()",
      "C. pop()",
      "D. erase()",
    ],

    answer: "C",

    explanation:
      "The pop() method removes a specified key and its associated value. For example: student.pop('age').",
  },

  {
    id: 17,

    question: "Which dictionary method returns all the keys?",

    options: [
      "A. keys()",
      "B. values()",
      "C. items()",
      "D. getkeys()",
    ],

    answer: "A",

    explanation:
      "The keys() method returns a view containing all the keys in a dictionary.",
  },

  {
    id: 18,

    question: "Which dictionary method returns all the values?",

    options: [
      "A. keys()",
      "B. values()",
      "C. items()",
      "D. get()",
    ],

    answer: "B",

    explanation:
      "The values() method returns a view containing all the values in a dictionary.",
  },

  {
    id: 19,

    question: "What does the items() method return from a dictionary?",

    options: [
      "A. Only the keys",
      "B. Only the values",
      "C. Key-value pairs",
      "D. Only the first item",
    ],

    answer: "C",

    explanation:
      "The items() method returns the dictionary's key-value pairs, which can be useful when looping through a dictionary.",
  },

  {
    id: 20,

    question: "What will this code print? student = {'name': 'Favour', 'score': 85}; student['score'] = 90; print(student['score'])",

    options: [
      "A. 85",
      "B. 90",
      "C. score",
      "D. An error",
    ],

    answer: "B",

    explanation:
      "Assigning student['score'] = 90 updates the existing score from 85 to 90. Therefore, the program prints 90.",
  },
];