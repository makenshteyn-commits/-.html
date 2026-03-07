function findCommonElements(arr1, arr2) {
    const set2 = new Set(arr2);
    return [...new Set(arr1.filter(element => set2.has(element)))];
}
function countOccurrences(arr) {
    const countMap = new Map();
    
    for (const element of arr) {
        countMap.set(element, (countMap.get(element) || 0) + 1);
    }
    
    return countMap;
}
class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
}

function findLargestGroupSize(students) {
    const groupCounts = new Map();
    
    for (const student of students) {
        const group = student.group;
        groupCounts.set(group, (groupCounts.get(group) || 0) + 1);
    }
    
    let maxSize = 0;
    for (const count of groupCounts.values()) {
        if (count > maxSize) {
            maxSize = count;
        }
    }
    
    return maxSize;
}
