function lengthOfLastWord(s: string): number {
    const arr: string[]  = s.split(' ');
    const filteredArr : string[] = arr.filter(element => {
        return element !== '';
    })
    return filteredArr[filteredArr.length -1].length;
};
