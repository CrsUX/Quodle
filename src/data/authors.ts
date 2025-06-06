// List of famous authors for the guessing game
export const famousAuthors = [
  'Albert Einstein',
  'Winston Churchill',
  'Maya Angelou',
  'Martin Luther King Jr.',
  'Mark Twain',
  'Socrates',
  'Aristotle',
  'Buddha',
  'Oscar Wilde',
  'Ralph Waldo Emerson',
  'Marcus Aurelius',
  'Walt Disney',
  'Robert Frost',
  'John Lennon',
  'Tony Robbins',
  'Thích Nhất Hạnh',
  'Anthony J. D\'Angelo',
  'Ralph Marston',
  'Ovid',
  'Napoleon Bonaparte',
  'Steve Jobs',
  'Gandhi',
  'Nelson Mandela',
  'Shakespeare',
  'Leonardo da Vinci',
  'Confucius',
  'Plato',
  'Benjamin Franklin',
  'Theodore Roosevelt',
  'Abraham Lincoln'
];

export const getRandomAuthors = (correctAuthor: string, count: number = 6): string[] => {
  const otherAuthors = famousAuthors.filter(author => author !== correctAuthor);
  const shuffled = otherAuthors.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count - 1);
};