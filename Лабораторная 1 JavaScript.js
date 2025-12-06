function findAutomorphs(a, b) {
    if (a > b || !Number.isInteger(a) || !Number.isInteger(b)) {
        console.log("Неверно: a ≤ b.");
        return [];
    }

    const automorphicNumbers = [];
    
    for (let n = Math.max(1, a); n <= b; n++) {
        if (isAutomorphic(n)) {
            automorphicNumbers.push(n);
        }
    }
    
    return automorphicNumbers;
}
