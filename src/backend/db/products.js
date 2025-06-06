import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id:"1",
    title: "The Great Gatsby",
    image: "https://i.ibb.co/fkHsjnG/1-The-Great-Gatsby-Cover-1925-Retouched.jpg",
    author: "F. Scott Fitzgerald",
    price: 1099,
    newPrice: 899,
    discount: 18,
    Pages: 250,
    Language: "English",
    rating: 4.5,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Fiction"
  },
  {
    _id: "2",
    title: "To Kill a Mockingbird",
    image: "https://i.ibb.co/gF7rWJj/book-cover-To-Kill-a-Mockingbird-many-1961.webp",
    author: "Harper Lee",
    price: 1299,
    newPrice: 999,
    discount: 23,
    Pages: 320,
    Language: "English",
    rating: 3.8,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Fiction"
  },
  {
    _id: "3",
    title: "1984",
    image: "https://i.ibb.co/mTjWQS4/3-71-Nvk-Zxn-f-L-AC-UF1000-1000-QL80.jpg",
    author: "George Orwell",
    price: 1199,
    newPrice: 999,
    discount: 17,
    Pages: 328,
    Language: "English",
    rating: 2.7,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Fiction"
  },
  {
    _id: "4",
    title: "The Lord of the Rings",
    image: "https://i.ibb.co/0X49MXc/4-33.jpg",
    author: "J.R.R. Tolkien",
    price: 249,
    newPrice: 199,
    discount: 20,
    Pages: 1178,
    Language: "English",
    rating: 1.9,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Fantasy"
  },
  {
    _id: "5",
    title: "Pride and Prejudice",
    image: "https://i.ibb.co/JH7fztq/5-780143454229.jpg",
    author: "Jane Austen",
    price: 999,
    newPrice: 799,
    discount: 20,
    Pages: 432,
    Language: "English",
    rating: 4.5,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Non-Fiction"
  },
  {
    _id: "6",
    title: "The Catcher in the Rye",
    image: "https://i.ibb.co/tYkz6HP/6-download.jpg",
    author: "J.D. Salinger",
    price: 899,
    newPrice: 699,
    discount: 22,
    Pages: 224,
    Language: "English",
    rating: 3.3,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Fiction"
  },
  {
    _id: "7",
    title: "Sapiens: A Brief History of Humankind",
    image: "https://i.ibb.co/V9tZPtR/751-Sn8-PEXwc-L.jpg",
    author: "Yuval Noah Harari",
    price: 149,
    newPrice: 119,
    discount: 20,
    Pages: 464,
    Language: "English",
    rating: 3.8,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Non-Fiction"
  },
  {
    _id: "8",
    title: "The Hobbit",
    image: "https://i.ibb.co/0Y0pkpF/8-The-Hobbit-trilogy-dvd-cover.jpg",
    author: "J.R.R. Tolkien",
    price: 999,
    newPrice: 799,
    discount: 20,
    Pages: 320,
    Language: "English",
    rating: 3.6,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Fantasy"
  },
  {
    _id: "9",
    title: "Harry Potter and the Philosopher's Stone",
    image: "https://i.ibb.co/TKLv0zN/95165-He67-NEL.jpg",
    author: "J.K. Rowling",
    price: 1199,
    newPrice: 999,
    discount: 17,
    Pages: 336,
    Language: "English",
    rating: 2.9,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Non-Fiction"
  },
  {
    _id: "10",
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    image: "https://i.ibb.co/R22xSwC/10p90695-p-v8-aj.jpg",
    author: "C.S. Lewis",
    price: 8.99,
    newPrice: 6.99,
    discount: 22,
    Pages: 208,
    Language: "English",
    rating: 4.4,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Fantasy"
  },
  {
    _id: "11",
    title: "The Book Thief",
    image: "https://i.ibb.co/SwQYvW0/1141-Lu-Ulddrh-L.jpg",
    author: "Markus Zusak",
    price: 109,
    newPrice: 89,
    discount: 18,
    Pages: 576,
    Language: "English",
    rating: 4.7,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Fiction"
  },
  {
    _id: "12",
    title: "Brave New World",
    image: "https://i.ibb.co/tpnVPBr/12-Brave-New-World-First-Edition.jpg",
    author: "Aldous Huxley",
    price: 999,
    newPrice: 799,
    discount: 20,
    Pages: 288,
    Language: "English",
    rating: 4.3,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Fiction"
  },
  {
    _id: "13",
    title: "The Da Vinci Code",
    image: "https://i.ibb.co/dcSN4qH/13the-da-vinci-code-589f9cee3df78c4758a2d9e7.jpg",
    author: "Dan Brown",
    price: 1299,
    newPrice: 999,
    discount: 23,
    Pages: 592,
    Language: "English",
    rating: 4.5,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Mystery"
  },
  {
    _id: "14",
    title: "The Girl on the Train",
    image: "https://i.ibb.co/TtkrnhR/14-The-Girl-On-The-Train-by-Paula-Hawkins-1200x1859.jpg",
    author: "Paula Hawkins",
    price: 899,
    newPrice: 699,
    discount: 22,
    Pages: 336,
    Language: "English",
    rating: 4.2,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Mystery"
  },
  {
    _id: "15",
    title: "Gone Girl",
    image: "https://i.ibb.co/FHjYFGT/159780753827666.jpg",
    author: "Gillian Flynn",
    price: 999,
    newPrice: 799,
    discount: 20,
    Pages: 432,
    Language: "English",
    rating: 4.6,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Mystery"
  },
  {
    _id: "16",
    title: "The Hunger Games",
    image: "https://i.ibb.co/6sJS9G2/162767052-SY475.jpg",
    author: "Suzanne Collins",
    price: 119,
    newPrice: 99,
    discount: 17,
    Pages: 384,
    Language: "English",
    rating: 4.7,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Mystery"
  },
  {
    _id: "17",
    title: "The Fault in Our Stars",
    image: "https://i.ibb.co/HD31dGV/17-F0945-E34-FBAA-4515-B625-4-E5-D27010518-Img400.jpg",
    author: "John Green",
    price: 109,
    newPrice: 89,
    discount: 18,
    Pages: 336,
    Language: "English",
    rating: 4.5,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Mystery"
  },
  {
    _id: "18",
    title: "The Harry Potter series",
    image: "https://i.ibb.co/DfxNywn/18images.jpg",
    author: "J.K. Rowling",
    price: 699,
    newPrice: 499,
    discount: 29,
    Pages: 4160,
    Language: "English",
    rating: 4.9,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Fantasy"
  },
  {
    _id: "19",
    title: "The Power of Now",
    image: "https://i.ibb.co/ZKBzgxN/19download.jpg",
    author: "Eckhart Tolle",
    price: 139,
    newPrice: 109,
    discount: 21,
    Pages: 236,
    Language: "English",
    rating: 4.6,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Non-Fiction"
  },
  {
    _id: "20",
    title: "The Lean Startup",
    image: "https://i.ibb.co/myFNkkY/20-The-Lean-Startup-Eric-Ries-Buy-Online-Bookbins-1.png",
    author: "Eric Ries",
    price: 159,
    newPrice: 119,
    discount: 25,
    Pages: 336,
    Language: "English",
    rating: 4.4,
    cashOnDelivery:false,
    fastDelivery:true,
    categoryName: "Fantasy"
  },
  {
    _id: 21,
    title: "Atomic Habits",
    image: "https://i.ibb.co/VBqFkfT/21-Atomic-Habits-James-Clear.jpg",
    author: "James Clear",
    price: 399,
    newPrice: 349,
    discount: 12,
    Pages: 320,
    Language: "English",
    rating: 4.8,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Non-Fiction"
  },
  {
    _id: 22,
    title: "Becoming",
    image: "https://i.ibb.co/8YVR2Qk/22-Becoming-Michelle-Obama.jpg",
    author: "Michelle Obama",
    price: 499,
    newPrice: 449,
    discount: 10,
    Pages: 448,
    Language: "English",
    rating: 4.9,
    cashOnDelivery: false,
    fastDelivery: true,
    categoryName: "Biography"
  },
  {
    _id: 23,
    title: "Educated",
    image: "https://i.ibb.co/qFfTdBJ/23-Educated-Tara-Westover.jpg",
    author: "Tara Westover",
    price: 299,
    newPrice: 249,
    discount: 17,
    Pages: 352,
    Language: "English",
    rating: 4.7,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Biography"
  },
  {
    _id: 24,
    title: "The Subtle Art of Not Giving a F*ck",
    image: "https://i.ibb.co/Z6PTQ0g/24-The-Subtle-Art.jpg",
    author: "Mark Manson",
    price: 349,
    newPrice: 299,
    discount: 14,
    Pages: 224,
    Language: "English",
    rating: 4.4,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Self-Help"
  },
  {
    _id: 25,
    title: "Thinking, Fast and Slow",
    image: "https://i.ibb.co/HTZwdRR/25-Thinking-Fast-and-Slow.jpg",
    author: "Daniel Kahneman",
    price: 599,
    newPrice: 549,
    discount: 8,
    Pages: 512,
    Language: "English",
    rating: 4.5,
    cashOnDelivery: false,
    fastDelivery: true,
    categoryName: "Psychology"
  },
  {
    _id: 26,
    title: "Man's Search for Meaning",
    image: "https://i.ibb.co/q5LF5Ym/26-Man-s-Search-for-Meaning.jpg",
    author: "Viktor E. Frankl",
    price: 199,
    newPrice: 179,
    discount: 10,
    Pages: 200,
    Language: "English",
    rating: 4.6,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Philosophy"
  },
  {
    _id: 27,
    title: "The Alchemist",
    image: "https://i.ibb.co/L8GjKk8/27-The-Alchemist.jpg",
    author: "Paulo Coelho",
    price: 299,
    newPrice: 249,
    discount: 16,
    Pages: 208,
    Language: "English",
    rating: 4.7,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Fiction"
  },
  {
    _id: 28,
    title: "The Power of Habit",
    image: "https://i.ibb.co/1qXNWWF/28-The-Power-of-Habit.jpg",
    author: "Charles Duhigg",
    price: 349,
    newPrice: 299,
    discount: 14,
    Pages: 371,
    Language: "English",
    rating: 4.3,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Self-Help"
  },
  {
    _id: 29,
    title: "The Four Agreements",
    image: "https://i.ibb.co/JKf0LgV/29-The-Four-Agreements.jpg",
    author: "Don Miguel Ruiz",
    price: 149,
    newPrice: 129,
    discount: 13,
    Pages: 160,
    Language: "English",
    rating: 4.8,
    cashOnDelivery: false,
    fastDelivery: true,
    categoryName: "Philosophy"
  },
  {
    _id: 30,
    title: "The 7 Habits of Highly Effective People",
    image: "https://i.ibb.co/0rcF1KK/30-The-7-Habits.jpg",
    author: "Stephen R. Covey",
    price: 399,
    newPrice: 349,
    discount: 13,
    Pages: 381,
    Language: "English",
    rating: 4.6,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Self-Help"
  },
  {
    _id: 31,
    title: "The Psychology of Money",
    image: "https://i.ibb.co/TKKqVt4/31-The-Psychology-of-Money.jpg",
    author: "Morgan Housel",
    price: 299,
    newPrice: 249,
    discount: 16,
    Pages: 252,
    Language: "English",
    rating: 4.9,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Finance"
  },
  {
    _id: 32,
    title: "Can't Hurt Me",
    image: "https://i.ibb.co/YcxfpNt/32-Can-t-Hurt-Me.jpg",
    author: "David Goggins",
    price: 499,
    newPrice: 449,
    discount: 10,
    Pages: 364,
    Language: "English",
    rating: 4.8,
    cashOnDelivery: false,
    fastDelivery: true,
    categoryName: "Self-Help"
  },
  {
    _id: 33,
    title: "Grit: The Power of Passion and Perseverance",
    image: "https://i.ibb.co/jrNqHHW/33-Grit.jpg",
    author: "Angela Duckworth",
    price: 349,
    newPrice: 299,
    discount: 14,
    Pages: 352,
    Language: "English",
    rating: 4.4,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Psychology"
  },
  {
    _id: 34,
    title: "Outliers: The Story of Success",
    image: "https://i.ibb.co/DYhRt2m/34-Outliers.jpg",
    author: "Malcolm Gladwell",
    price: 399,
    newPrice: 349,
    discount: 12,
    Pages: 309,
    Language: "English",
    rating: 4.6,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Non-Fiction"
  },
  {
    _id: 35,
    title: "How to Win Friends and Influence People",
    image: "https://i.ibb.co/8BXp3T1/35-How-to-Win-Friends.jpg",
    author: "Dale Carnegie",
    price: 199,
    newPrice: 169,
    discount: 15,
    Pages: 291,
    Language: "English",
    rating: 4.8,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Self-Help"
  },
  {
    _id: 36,
    title: "Start with Why",
    image: "https://i.ibb.co/j4Qxmn1/36-Start-with-Why.jpg",
    author: "Simon Sinek",
    price: 449,
    newPrice: 399,
    discount: 11,
    Pages: 256,
    Language: "English",
    rating: 4.7,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Business"
  },
  {
    _id: 37,
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    image: "https://i.ibb.co/dBtXnT9/37-Deep-Work.jpg",
    author: "Cal Newport",
    price: 349,
    newPrice: 299,
    discount: 14,
    Pages: 304,
    Language: "English",
    rating: 4.8,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Productivity"
  },
  {
    _id: 38,
    title: "The War of Art",
    image: "https://i.ibb.co/kGWjM2g/38-The-War-of-Art.jpg",
    author: "Steven Pressfield",
    price: 199,
    newPrice: 179,
    discount: 10,
    Pages: 192,
    Language: "English",
    rating: 4.5,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Creativity"
  },
  {
    _id: 39,
    title: "The Lean Startup",
    image: "https://i.ibb.co/F5XrM8P/39-The-Lean-Startup.jpg",
    author: "Eric Ries",
    price: 499,
    newPrice: 449,
    discount: 10,
    Pages: 336,
    Language: "English",
    rating: 4.6,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Business"
  },
  {
    _id: 40,
    title: "Sapiens: A Brief History of Humankind",
    image: "https://i.ibb.co/vcvHfXB/40-Sapiens.jpg",
    author: "Yuval Noah Harari",
    price: 599,
    newPrice: 549,
    discount: 8,
    Pages: 498,
    Language: "English",
    rating: 4.7,
    cashOnDelivery: false,
    fastDelivery: true,
    categoryName: "History"
  },
  {
    _id: 41,
    title: "The Miracle Morning",
    image: "https://i.ibb.co/XF3Bj6M/41-The-Miracle-Morning.jpg",
    author: "Hal Elrod",
    price: 299,
    newPrice: 259,
    discount: 13,
    Pages: 196,
    Language: "English",
    rating: 4.5,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Self-Help"
  },
  {
    _id: 42,
    title: "The Lean Mindset",
    image: "https://i.ibb.co/ZGvP0Jb/42-The-Lean-Mindset.jpg",
    author: "Mary Poppendieck",
    price: 349,
    newPrice: 309,
    discount: 11,
    Pages: 320,
    Language: "English",
    rating: 4.6,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Business"
  },
  {
    _id: 43,
    title: "Essentialism: The Disciplined Pursuit of Less",
    image: "https://i.ibb.co/F80NQGp/43-Essentialism.jpg",
    author: "Greg McKeown",
    price: 399,
    newPrice: 349,
    discount: 12,
    Pages: 288,
    Language: "English",
    rating: 4.7,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Productivity"
  },
  {
    _id: 44,
    title: "Range: Why Generalists Triumph in a Specialized World",
    image: "https://i.ibb.co/JtL0KnD/44-Range.jpg",
    author: "David Epstein",
    price: 499,
    newPrice: 449,
    discount: 10,
    Pages: 352,
    Language: "English",
    rating: 4.5,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Business"
  },
  {
    _id: 45,
    title: "The Art of Thinking Clearly",
    image: "https://i.ibb.co/5FR0gpK/45-The-Art-of-Thinking-Clearly.jpg",
    author: "Rolf Dobelli",
    price: 299,
    newPrice: 259,
    discount: 13,
    Pages: 384,
    Language: "English",
    rating: 4.6,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Psychology"
  },
  {
    _id: 46,
    title: "Daring Greatly",
    image: "https://i.ibb.co/MpqXTmM/46-Daring-Greatly.jpg",
    author: "Brené Brown",
    price: 349,
    newPrice: 309,
    discount: 11,
    Pages: 320,
    Language: "English",
    rating: 4.7,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Self-Help"
  },
  {
    _id: 47,
    title: "The Productivity Project",
    image: "https://i.ibb.co/N6h3RJG/47-The-Productivity-Project.jpg",
    author: "Chris Bailey",
    price: 299,
    newPrice: 259,
    discount: 13,
    Pages: 304,
    Language: "English",
    rating: 4.5,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Productivity"
  },
  {
    _id: 48,
    title: "Drive: The Surprising Truth About What Motivates Us",
    image: "https://i.ibb.co/0hwzcVD/48-Drive.jpg",
    author: "Daniel H. Pink",
    price: 349,
    newPrice: 309,
    discount: 11,
    Pages: 272,
    Language: "English",
    rating: 4.6,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Psychology"
  },
  {
    _id: 49,
    title: "The Power of Now",
    image: "https://i.ibb.co/hs7P95M/49-The-Power-of-Now.jpg",
    author: "Eckhart Tolle",
    price: 399,
    newPrice: 359,
    discount: 10,
    Pages: 236,
    Language: "English",
    rating: 4.7,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Spirituality"
  },
  {
    _id: 50,
    title: "The Confidence Code",
    image: "https://i.ibb.co/MDzFmMg/50-The-Confidence-Code.jpg",
    author: "Katty Kay",
    price: 299,
    newPrice: 269,
    discount: 10,
    Pages: 256,
    Language: "English",
    rating: 4.6,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Self-Help"
  },
  {
    _id: 51,
    title: "Mindset: The New Psychology of Success",
    image: "https://i.ibb.co/S60F3mj/51-Mindset.jpg",
    author: "Carol S. Dweck",
    price: 399,
    newPrice: 349,
    discount: 12,
    Pages: 320,
    Language: "English",
    rating: 4.8,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Psychology"
  },
  {
    _id: 52,
    title: "Genius Foods",
    image: "https://i.ibb.co/zsf7yXv/52-Genius-Foods.jpg",
    author: "Max Lugavere",
    price: 499,
    newPrice: 449,
    discount: 10,
    Pages: 400,
    Language: "English",
    rating: 4.6,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Health"
  },
  {
    _id: 53,
    title: "The Art of War",
    image: "https://i.ibb.co/kSzg8Mt/53-The-Art-of-War.jpg",
    author: "Sun Tzu",
    price: 249,
    newPrice: 219,
    discount: 12,
    Pages: 273,
    Language: "English",
    rating: 4.5,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Strategy"
  },
  {
    _id: 54,
    title: "The Innovator's Dilemma",
    image: "https://i.ibb.co/NFvgFsN/54-The-Innovators-Dilemma.jpg",
    author: "Clayton M. Christensen",
    price: 599,
    newPrice: 549,
    discount: 8,
    Pages: 336,
    Language: "English",
    rating: 4.6,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Business"
  },
  {
    _id: 55,
    title: "Good to Great",
    image: "https://i.ibb.co/g7SRnyW/55-Good-to-Great.jpg",
    author: "Jim Collins",
    price: 499,
    newPrice: 459,
    discount: 8,
    Pages: 320,
    Language: "English",
    rating: 4.7,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Business"
  },
  {
    _id: 56,
    title: "The Happiness Advantage",
    image: "https://i.ibb.co/7v5mT8y/56-The-Happiness-Advantage.jpg",
    author: "Shawn Achor",
    price: 399,
    newPrice: 359,
    discount: 10,
    Pages: 256,
    Language: "English",
    rating: 4.8,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Psychology"
  },
  {
    _id: 57,
    title: "The 5 Love Languages",
    image: "https://i.ibb.co/WntFdpv/57-The-5-Love-Languages.jpg",
    author: "Gary Chapman",
    price: 349,
    newPrice: 309,
    discount: 11,
    Pages: 208,
    Language: "English",
    rating: 4.9,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Relationships"
  },
  {
    _id: 58,
    title: "Crucial Conversations",
    image: "https://i.ibb.co/CJQxF7N/58-Crucial-Conversations.jpg",
    author: "Kerry Patterson",
    price: 299,
    newPrice: 269,
    discount: 10,
    Pages: 272,
    Language: "English",
    rating: 4.7,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Self-Help"
  },
  {
    _id: 59,
    title: "How to Win Friends and Influence People",
    image: "https://i.ibb.co/nkqkFQr/59-How-to-Win-Friends.jpg",
    author: "Dale Carnegie",
    price: 249,
    newPrice: 229,
    discount: 8,
    Pages: 288,
    Language: "English",
    rating: 4.8,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Self-Help"
  },
  {
    _id: 60,
    title: "Grit: The Power of Passion and Perseverance",
    image: "https://i.ibb.co/KLPQHsb/60-Grit.jpg",
    author: "Angela Duckworth",
    price: 399,
    newPrice: 359,
    discount: 10,
    Pages: 368,
    Language: "English",
    rating: 4.7,
    cashOnDelivery: true,
    fastDelivery: true,
    categoryName: "Self-Help"
  }
];
