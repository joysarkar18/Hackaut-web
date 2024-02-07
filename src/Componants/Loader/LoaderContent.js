export const LoaderContent = [
    "Did you know Ada Lovelace was the first computer programmer in the 1800s?",
    "The QWERTY keyboard layout was designed to prevent typewriter jams in the 1870s.",
    "ENIAC, the first electronic computer, weighed over 27 tons in the 1940s.",
    "Moore's Law predicts transistor doubling every two years since 1965.",
    "The first computer virus, 'Creeper,' appeared in the 1970s on ARPANET.",
    "Cloud computing's term originates from network diagrams featuring a cloud symbol.",
    "Tim Berners-Lee invented the World Wide Web in 1989 at CERN.",
    "The moth found in Harvard's Mark II coined the term 'bug' in 1947.",
    "Shannon introduced the concept of a 'bit' in his 1937 master's thesis.",
    "Alan Turing broke the German Enigma code, aiding Allied victory in WWII."
]

const randomElement = LoaderContent[Math.floor(Math.random() * LoaderContent.length)];

console.log(randomElement)