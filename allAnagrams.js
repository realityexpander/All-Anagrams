

function allAnagrams(str, index=0, storage=[]) {
    if (typeof str == "string")
        str = str.split("");
    if (index >= str.length)
        return storage;
    for (var i = index; i < str.length; i++)
        storage.push(ToggleLetters(str, index, i));
    return allAnagrams(str, index + 1, storage);
}

function ToggleLetters(str, index1, index2) {
    if (index1 != index2) {
        var temp = str[index1];
        str[index1] = str[index2];
        str[index2] = temp;
    }
    return str.join("");
}
