export const getArraysOfRoundItems = (data) => {
    const array = data.items.split(',');
    const lengthOfItems = array.length / +data.height;
    const flattedArray = [];
    while (array.length > 0) flattedArray.push(array.splice(0, lengthOfItems));
    const gameArray = [...Array(+data.height)].map(() => []);
    flattedArray.forEach((rawValue, rowIndex) => {
        rawValue.forEach((rawItem, itemRowIndex) => {
            if (rawItem === '4') {
                if ((flattedArray[rowIndex - 1] && flattedArray[rowIndex - 1][itemRowIndex]) !== rawItem) {
                    let count = 0;
                    flattedArray.forEach((tempArray) => {
                        if(tempArray[itemRowIndex] === '4') count++;
                    })
                    gameArray[rowIndex].push({ value: rawItem, rawSpan: count});
                } else {
                    gameArray[rowIndex].push({value: null});
                }
            } else {
                gameArray[rowIndex].push({ value: rawItem, rawSpan: 1});
            }
        });
    });
    return gameArray;
};
