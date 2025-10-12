export const mockPosts = [
  {
    id: 1,
    authorName: 'Rohan Joshi',
    authorRole: 'mentee',
    timestamp: '2 hours ago',
    title: 'How do I handle pointers in C without causing memory leaks?',
    content: 'I\'m working on a project and I keep running into segmentation faults. I think it\'s related to how I\'m using malloc() and free(). Can anyone share some best practices or common pitfalls to avoid? My code structure is...',
    votes: 28,
    comments: [
      { id: 101, authorName: 'Priya Sharma', authorRole: 'mentor', text: 'Great question! A common mistake is "double freeing" memory. Make sure you set your pointer to NULL after freeing it to prevent this.' },
      { id: 102, authorName: 'Aditya Rao', authorRole: 'mentee', text: 'I used to have this problem a lot. Using a tool like Valgrind really helped me find memory leaks during development. Highly recommend it!' },
    ],
  },
  {
    id: 2,
    authorName: 'Anjali Mehta',
    authorRole: 'mentor',
    timestamp: '1 day ago',
    title: 'Pro Tip: Understanding the Java Virtual Machine (JVM)',
    content: 'For all the Java learners out there, don\'t just learn the syntax. Take some time to understand how the JVM works. It will make you a much better developer when it comes to performance tuning and debugging. I recommend the book "Java Performance: The Definitive Guide".',
    votes: 52,
    comments: [
      { id: 201, authorName: 'Isha Nair', authorRole: 'mentee', text: 'This is so true! I just started learning about garbage collection and it\'s fascinating.' },
    ],
  },
];