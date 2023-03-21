// code your solution here
function superbowlWin(record){
    const result = record.find(({result}) => result === "W")
    if (typeof result === "undefined"){
        return undefined;
    } else {
        return result.year;
    }

}