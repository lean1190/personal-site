export function shuffle<T>(originalArray: T[]): T[] {
    const shuffledArray = structuredClone(originalArray);
    let currentIndex = shuffledArray.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
            shuffledArray[randomIndex], shuffledArray[currentIndex]
        ];
    }

    return shuffledArray;
}
