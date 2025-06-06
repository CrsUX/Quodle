import { Quote } from '../types';
import { emotions } from './emotions';

export const quotes: Quote[] = [
  // Unmotivated quotes
  {
    id: '1',
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    authorBio: "American entrepreneur and pioneer of the American animation industry who created Mickey Mouse and founded The Walt Disney Company.",
    emotion: emotions.find(e => e.id === 'unmotivated')!
  },
  {
    id: '2',
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    authorBio: "British Prime Minister who led Britain to victory in World War II and won the Nobel Prize in Literature.",
    emotion: emotions.find(e => e.id === 'unmotivated')!
  },
  {
    id: '3',
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    authorBio: "American author, coach, and speaker known for his infomercials, seminars, and self-help books.",
    emotion: emotions.find(e => e.id === 'unmotivated')!
  },
  {
    id: '4',
    text: "A year from now you may wish you had started today.",
    author: "Karen Lamb",
    authorBio: "Author and motivational speaker known for her insights on personal development and taking action.",
    emotion: emotions.find(e => e.id === 'unmotivated')!
  },
  {
    id: '5',
    text: "You don't have to be great to get started, but you have to get started to be great.",
    author: "Les Brown",
    authorBio: "American motivational speaker, author, and former politician known for his energetic speaking style.",
    emotion: emotions.find(e => e.id === 'unmotivated')!
  },

  // Anxious quotes
  {
    id: '6',
    text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    author: "Marcus Aurelius",
    authorBio: "Roman Emperor and Stoic philosopher known for his personal writings on philosophy and leadership.",
    emotion: emotions.find(e => e.id === 'anxious')!
  },
  {
    id: '7',
    text: "The present moment is the only time over which we have dominion.",
    author: "Thích Nhất Hạnh",
    authorBio: "Vietnamese Buddhist monk, peace activist, and founder of the Plum Village movement.",
    emotion: emotions.find(e => e.id === 'anxious')!
  },
  {
    id: '8',
    text: "Anxiety is the dizziness of freedom.",
    author: "Søren Kierkegaard",
    authorBio: "Danish philosopher, theologian, and poet regarded as the father of existentialism.",
    emotion: emotions.find(e => e.id === 'anxious')!
  },
  {
    id: '9',
    text: "Nothing can bring you peace but yourself.",
    author: "Ralph Waldo Emerson",
    authorBio: "American essayist, lecturer, philosopher, and poet who led the transcendentalist movement.",
    emotion: emotions.find(e => e.id === 'anxious')!
  },
  {
    id: '10',
    text: "Worry does not empty tomorrow of its sorrow, it empties today of its strength.",
    author: "Corrie ten Boom",
    authorBio: "Dutch Christian who helped many Jews escape the Holocaust and later became a speaker and author.",
    emotion: emotions.find(e => e.id === 'anxious')!
  },

  // Discouraged quotes
  {
    id: '11',
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    authorBio: "Ancient Greek philosopher whose writings cover many subjects including logic, ethics, politics, and natural sciences.",
    emotion: emotions.find(e => e.id === 'discouraged')!
  },
  {
    id: '12',
    text: "The only way out is through.",
    author: "Robert Frost",
    authorBio: "American poet known for his realistic depictions of rural life and mastery of American colloquial speech.",
    emotion: emotions.find(e => e.id === 'discouraged')!
  },
  {
    id: '13',
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    authorBio: "German-born theoretical physicist widely regarded as one of the greatest physicists of all time.",
    emotion: emotions.find(e => e.id === 'discouraged')!
  },
  {
    id: '14',
    text: "Fall seven times, stand up eight.",
    author: "Japanese Proverb",
    authorBio: "Traditional Japanese wisdom emphasizing resilience and perseverance in the face of adversity.",
    emotion: emotions.find(e => e.id === 'discouraged')!
  },
  {
    id: '15',
    text: "The comeback is always stronger than the setback.",
    author: "Unknown",
    authorBio: "This wisdom comes from the collective experience of those who have overcome challenges.",
    emotion: emotions.find(e => e.id === 'discouraged')!
  },

  // Lonely quotes
  {
    id: '16',
    text: "The greatest gift you can give yourself is a little bit of your own attention.",
    author: "Anthony J. D'Angelo",
    authorBio: "Author and founder of Collegiate EmPowerment Company, inspiring students worldwide.",
    emotion: emotions.find(e => e.id === 'lonely')!
  },
  {
    id: '17',
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    authorBio: "Irish poet and playwright known for his wit, flamboyant style, and tragic imprisonment.",
    emotion: emotions.find(e => e.id === 'lonely')!
  },
  {
    id: '18',
    text: "Loneliness is not lack of company, loneliness is lack of purpose.",
    author: "Guillermo Maldonado",
    authorBio: "Honduran-American evangelical pastor and author known for his teachings on spiritual growth.",
    emotion: emotions.find(e => e.id === 'lonely')!
  },
  {
    id: '19',
    text: "The soul that sees beauty may sometimes walk alone.",
    author: "Johann Wolfgang von Goethe",
    authorBio: "German writer and statesman whose works span the fields of poetry, drama, literature, and science.",
    emotion: emotions.find(e => e.id === 'lonely')!
  },
  {
    id: '20',
    text: "You cannot be lonely if you like the person you're alone with.",
    author: "Wayne Dyer",
    authorBio: "American self-help author and motivational speaker known for his work in self-development.",
    emotion: emotions.find(e => e.id === 'lonely')!
  },

  // Overwhelmed quotes
  {
    id: '21',
    text: "You don't have to see the whole staircase, just take the first step.",
    author: "Martin Luther King Jr.",
    authorBio: "American Baptist minister and activist who was a leader in the civil rights movement.",
    emotion: emotions.find(e => e.id === 'overwhelmed')!
  },
  {
    id: '22',
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    authorBio: "American writer, humorist, and lecturer known for his novels including Tom Sawyer and Huckleberry Finn.",
    emotion: emotions.find(e => e.id === 'overwhelmed')!
  },
  {
    id: '23',
    text: "One day at a time—this is enough. Do not look back and grieve over the past, for it is gone.",
    author: "Ida Scott Taylor",
    authorBio: "American author and poet known for her inspirational writings on daily living and mindfulness.",
    emotion: emotions.find(e => e.id === 'overwhelmed')!
  },
  {
    id: '24',
    text: "You are not required to set yourself on fire to keep other people warm.",
    author: "Unknown",
    authorBio: "This wisdom reminds us of the importance of self-care and setting healthy boundaries.",
    emotion: emotions.find(e => e.id === 'overwhelmed')!
  },
  {
    id: '25',
    text: "Progress, not perfection.",
    author: "Unknown",
    authorBio: "A simple reminder that small steps forward are more valuable than waiting for perfect conditions.",
    emotion: emotions.find(e => e.id === 'overwhelmed')!
  },

  // Uncertain quotes
  {
    id: '26',
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    authorBio: "Classical Greek philosopher credited as one of the founders of Western philosophy.",
    emotion: emotions.find(e => e.id === 'uncertain')!
  },
  {
    id: '27',
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
    authorBio: "English singer, songwriter, and peace activist who gained worldwide fame as a founder of The Beatles.",
    emotion: emotions.find(e => e.id === 'uncertain')!
  },
  {
    id: '28',
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
    authorBio: "American essayist, lecturer, philosopher, and poet who led the transcendentalist movement.",
    emotion: emotions.find(e => e.id === 'uncertain')!
  },
  {
    id: '29',
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    authorBio: "American political figure, diplomat, and activist who served as First Lady of the United States.",
    emotion: emotions.find(e => e.id === 'uncertain')!
  },
  {
    id: '30',
    text: "Uncertainty is the only certainty there is, and knowing how to live with insecurity is the only security.",
    author: "John Allen Paulos",
    authorBio: "American professor of mathematics known for his popular books on mathematics and logic.",
    emotion: emotions.find(e => e.id === 'uncertain')!
  },

  // Angry quotes
  {
    id: '31',
    text: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
    author: "Buddha",
    authorBio: "Spiritual teacher who founded Buddhism and is believed by Buddhists to be an enlightened being.",
    emotion: emotions.find(e => e.id === 'angry')!
  },
  {
    id: '32',
    text: "Peace cannot be kept by force; it can only be achieved by understanding.",
    author: "Albert Einstein",
    authorBio: "German-born theoretical physicist widely regarded as one of the greatest physicists of all time.",
    emotion: emotions.find(e => e.id === 'angry')!
  },
  {
    id: '33',
    text: "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.",
    author: "Mark Twain",
    authorBio: "American writer, humorist, and lecturer known for his novels and wit.",
    emotion: emotions.find(e => e.id === 'angry')!
  },
  {
    id: '34',
    text: "For every minute you remain angry, you give up sixty seconds of peace of mind.",
    author: "Ralph Waldo Emerson",
    authorBio: "American essayist, lecturer, philosopher, and poet who led the transcendentalist movement.",
    emotion: emotions.find(e => e.id === 'angry')!
  },
  {
    id: '35',
    text: "The best fighter is never angry.",
    author: "Lao Tzu",
    authorBio: "Ancient Chinese philosopher and writer, traditionally credited as the founder of Taoism.",
    emotion: emotions.find(e => e.id === 'angry')!
  },

  // Tired quotes
  {
    id: '36',
    text: "Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit. Then get back to work.",
    author: "Ralph Marston",
    authorBio: "Author and publisher of The Daily Motivator, inspiring millions with daily motivational messages.",
    emotion: emotions.find(e => e.id === 'tired')!
  },
  {
    id: '37',
    text: "Take rest; a field that has rested gives a bountiful crop.",
    author: "Ovid",
    authorBio: "Roman poet best known for his narrative poem Metamorphoses and his collection of love poems.",
    emotion: emotions.find(e => e.id === 'tired')!
  },
  {
    id: '38',
    text: "Almost everything will work again if you unplug it for a few minutes, including you.",
    author: "Anne Lamott",
    authorBio: "American novelist and non-fiction writer known for her progressive political activism and humor.",
    emotion: emotions.find(e => e.id === 'tired')!
  },
  {
    id: '39',
    text: "Sleep is the best meditation.",
    author: "Dalai Lama",
    authorBio: "Spiritual leader of Tibet and Nobel Peace Prize winner known for his teachings on compassion.",
    emotion: emotions.find(e => e.id === 'tired')!
  },
  {
    id: '40',
    text: "Your future self is watching you right now through memories.",
    author: "Aubrey de Grey",
    authorBio: "British biomedical gerontologist known for his research on life extension and aging.",
    emotion: emotions.find(e => e.id === 'tired')!
  },

  // Grateful quotes
  {
    id: '41',
    text: "Gratitude is not only the greatest of virtues, but the parent of all others.",
    author: "Cicero",
    authorBio: "Roman statesman, lawyer, scholar, and Academic Skeptic who was one of Rome's greatest orators.",
    emotion: emotions.find(e => e.id === 'grateful')!
  },
  {
    id: '42',
    text: "Be thankful for what you have; you'll end up having more.",
    author: "Oprah Winfrey",
    authorBio: "American talk show host, television producer, actress, author, and philanthropist.",
    emotion: emotions.find(e => e.id === 'grateful')!
  },
  {
    id: '43',
    text: "Gratitude turns what we have into enough.",
    author: "Anonymous",
    authorBio: "This wisdom reminds us that appreciation can transform our perspective on abundance.",
    emotion: emotions.find(e => e.id === 'grateful')!
  },
  {
    id: '44',
    text: "The unthankful heart discovers no mercies; but the thankful heart will find, in every hour, some heavenly blessings.",
    author: "Henry Ward Beecher",
    authorBio: "American Congregationalist clergyman, social reformer, and speaker known for his support of abolition.",
    emotion: emotions.find(e => e.id === 'grateful')!
  },
  {
    id: '45',
    text: "A father is someone you look up to no matter how tall you grow.",
    author: "Unknown",
    authorBio: "This wisdom comes from the collective experience of fathers and children throughout history.",
    emotion: emotions.find(e => e.id === 'grateful')!
  },

  // Inspired quotes
  {
    id: '46',
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    authorBio: "American political figure, diplomat, and activist who served as First Lady of the United States.",
    emotion: emotions.find(e => e.id === 'inspired')!
  },
  {
    id: '47',
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    authorBio: "American business magnate and co-founder of Apple Inc., known for revolutionizing technology.",
    emotion: emotions.find(e => e.id === 'inspired')!
  },
  {
    id: '48',
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    authorBio: "American business magnate and co-founder of Apple Inc., known for revolutionizing technology.",
    emotion: emotions.find(e => e.id === 'inspired')!
  },
  {
    id: '49',
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
    authorBio: "German-born theoretical physicist widely regarded as one of the greatest physicists of all time.",
    emotion: emotions.find(e => e.id === 'inspired')!
  },
  {
    id: '50',
    text: "Your limitation—it's only your imagination.",
    author: "Unknown",
    authorBio: "A reminder that our biggest barriers are often the ones we create in our minds.",
    emotion: emotions.find(e => e.id === 'inspired')!
  },

  // Heartbroken quotes
  {
    id: '51',
    text: "Grief is the price we pay for love.",
    author: "Queen Elizabeth II",
    authorBio: "Queen of the United Kingdom and other Commonwealth realms, the longest-reigning British monarch.",
    emotion: emotions.find(e => e.id === 'heartbroken')!
  },
  {
    id: '52',
    text: "The wound is the place where the Light enters you.",
    author: "Rumi",
    authorBio: "13th-century Persian poet, Islamic scholar, and Sufi mystic whose works transcend cultural boundaries.",
    emotion: emotions.find(e => e.id === 'heartbroken')!
  },
  {
    id: '53',
    text: "What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.",
    author: "Helen Keller",
    authorBio: "American author and activist who was deaf and blind, known for her advocacy and inspirational life.",
    emotion: emotions.find(e => e.id === 'heartbroken')!
  },
  {
    id: '54',
    text: "The heart was made to be broken.",
    author: "Oscar Wilde",
    authorBio: "Irish poet and playwright known for his wit, flamboyant style, and tragic imprisonment.",
    emotion: emotions.find(e => e.id === 'heartbroken')!
  },
  {
    id: '55',
    text: "Tears are words that need to be written.",
    author: "Paulo Coelho",
    authorBio: "Brazilian lyricist and novelist, best known for his novel The Alchemist.",
    emotion: emotions.find(e => e.id === 'heartbroken')!
  },

  // Proud quotes
  {
    id: '56',
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    authorBio: "British Prime Minister who led Britain to victory in World War II and won the Nobel Prize in Literature.",
    emotion: emotions.find(e => e.id === 'proud')!
  },
  {
    id: '57',
    text: "The expert in anything was once a beginner.",
    author: "Helen Hayes",
    authorBio: "American actress whose career spanned 80 years, known as the 'First Lady of American Theatre'.",
    emotion: emotions.find(e => e.id === 'proud')!
  },
  {
    id: '58',
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    authorBio: "American humorist, writer, teacher, television host, and journalist known for his wit and wisdom.",
    emotion: emotions.find(e => e.id === 'proud')!
  },
  {
    id: '59',
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    authorBio: "British Prime Minister who led Britain to victory in World War II and won the Nobel Prize in Literature.",
    emotion: emotions.find(e => e.id === 'proud')!
  },
  {
    id: '60',
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    authorBio: "American author, coach, and speaker known for his infomercials, seminars, and self-help books.",
    emotion: emotions.find(e => e.id === 'proud')!
  },

  // Jealous quotes
  {
    id: '61',
    text: "Comparison is the thief of joy.",
    author: "Theodore Roosevelt",
    authorBio: "26th President of the United States, known for his energetic personality and progressive policies.",
    emotion: emotions.find(e => e.id === 'jealous')!
  },
  {
    id: '62',
    text: "Jealousy is a disease, love is a healthy condition. The immature mind often mistakes one for the other.",
    author: "Robert A. Heinlein",
    authorBio: "American science fiction writer known for his hard science fiction and libertarian themes.",
    emotion: emotions.find(e => e.id === 'jealous')!
  },
  {
    id: '63',
    text: "Don't waste time on jealousy. Sometimes you're ahead, sometimes you're behind.",
    author: "Mary Schmich",
    authorBio: "American journalist and columnist known for her essay 'Advice, like youth, probably just wasted on the young'.",
    emotion: emotions.find(e => e.id === 'jealous')!
  },

  // Hopeful quotes
  {
    id: '64',
    text: "Hope is being able to see that there is light despite all of the darkness.",
    author: "Desmond Tutu",
    authorBio: "South African Anglican cleric and theologian known for his work as an anti-apartheid activist.",
    emotion: emotions.find(e => e.id === 'hopeful')!
  },
  {
    id: '65',
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
    authorBio: "American poet, essayist, and journalist known for his collection Leaves of Grass.",
    emotion: emotions.find(e => e.id === 'hopeful')!
  },
  {
    id: '66',
    text: "Tomorrow is the first day of the rest of your life.",
    author: "Abbie Hoffman",
    authorBio: "American political and social activist who co-founded the Youth International Party.",
    emotion: emotions.find(e => e.id === 'hopeful')!
  },

  // Fearful quotes
  {
    id: '67',
    text: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    authorBio: "32nd President of the United States who led the nation during the Great Depression and World War II.",
    emotion: emotions.find(e => e.id === 'fearful')!
  },
  {
    id: '68',
    text: "Courage is not the absence of fear, but action in spite of it.",
    author: "Mark Twain",
    authorBio: "American writer, humorist, and lecturer known for his novels and wit.",
    emotion: emotions.find(e => e.id === 'fearful')!
  },
  {
    id: '69',
    text: "Fear is the mind-killer.",
    author: "Frank Herbert",
    authorBio: "American science fiction author best known for his novel Dune.",
    emotion: emotions.find(e => e.id === 'fearful')!
  },

  // Excited quotes
  {
    id: '70',
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    authorBio: "American entrepreneur and pioneer of the American animation industry.",
    emotion: emotions.find(e => e.id === 'excited')!
  },
  {
    id: '71',
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
    authorBio: "American author and activist who was deaf and blind, known for her advocacy and inspirational life.",
    emotion: emotions.find(e => e.id === 'excited')!
  },

  // Peaceful quotes
  {
    id: '72',
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
    authorBio: "Spiritual teacher who founded Buddhism and is believed by Buddhists to be an enlightened being.",
    emotion: emotions.find(e => e.id === 'peaceful')!
  },
  {
    id: '73',
    text: "In the midst of winter, I found there was, within me, an invincible summer.",
    author: "Albert Camus",
    authorBio: "French philosopher, author, and journalist known for his contributions to existentialism.",
    emotion: emotions.find(e => e.id === 'peaceful')!
  },

  // Confused quotes
  {
    id: '74',
    text: "The important thing is not to stop questioning.",
    author: "Albert Einstein",
    authorBio: "German-born theoretical physicist widely regarded as one of the greatest physicists of all time.",
    emotion: emotions.find(e => e.id === 'confused')!
  },
  {
    id: '75',
    text: "I know that I know nothing.",
    author: "Socrates",
    authorBio: "Classical Greek philosopher credited as one of the founders of Western philosophy.",
    emotion: emotions.find(e => e.id === 'confused')!
  },

  // Additional quotes for comprehensive coverage
  {
    id: '76',
    text: "The days are long, but the years are short.",
    author: "Gretchen Rubin",
    authorBio: "American author, blogger, and speaker known for her books about happiness and human nature.",
    emotion: emotions.find(e => e.id === 'overwhelmed')!
  },
  {
    id: '77',
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    authorBio: "26th President of the United States, known for his energetic personality and progressive policies.",
    emotion: emotions.find(e => e.id === 'hopeful')!
  },
  {
    id: '78',
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    authorBio: "Ancient Chinese wisdom emphasizing the importance of taking action despite past delays.",
    emotion: emotions.find(e => e.id === 'unmotivated')!
  },
  {
    id: '79',
    text: "What doesn't kill you makes you stronger.",
    author: "Friedrich Nietzsche",
    authorBio: "German philosopher known for his critique of traditional European morality and religion.",
    emotion: emotions.find(e => e.id === 'discouraged')!
  },
  {
    id: '80',
    text: "Be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
    authorBio: "Indian lawyer and activist who led India to independence through nonviolent resistance.",
    emotion: emotions.find(e => e.id === 'inspired')!
  }
];

// Enhanced search function for quotes
export const searchQuotes = (searchTerm: string): Quote[] => {
  if (!searchTerm || searchTerm.length === 0) return [];
  
  const term = searchTerm.toLowerCase().trim();
  
  return quotes.filter(quote => {
    // Search in quote text
    if (quote.text.toLowerCase().includes(term)) return true;
    
    // Search in author name
    if (quote.author.toLowerCase().includes(term)) return true;
    
    // Search in author bio
    if (quote.authorBio.toLowerCase().includes(term)) return true;
    
    // Search in emotion name
    if (quote.emotion.name.toLowerCase().includes(term)) return true;
    
    // Search in emotion keywords
    if (quote.emotion.keywords && quote.emotion.keywords.some(keyword => 
      keyword.toLowerCase().includes(term) || term.includes(keyword.toLowerCase())
    )) return true;
    
    return false;
  }).sort((a, b) => {
    // Prioritize author name matches
    if (a.author.toLowerCase().includes(term) && !b.author.toLowerCase().includes(term)) return -1;
    if (b.author.toLowerCase().includes(term) && !a.author.toLowerCase().includes(term)) return 1;
    
    // Then prioritize quote text matches
    if (a.text.toLowerCase().includes(term) && !b.text.toLowerCase().includes(term)) return -1;
    if (b.text.toLowerCase().includes(term) && !a.text.toLowerCase().includes(term)) return 1;
    
    return 0;
  });
};