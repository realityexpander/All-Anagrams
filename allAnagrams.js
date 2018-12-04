console.log(allAnagrams("abc"));

//string permutation
function allAnagrams(string, start='') {

  if (string.length == 1) {
    return [start + string];
    // base
  } else {
    var res = [];
    for (var i = 0; i < string.length; i++) {
      var result = allAnagrams(string.substr(0, i) + string.substr(i + 1), string[i]);
      for (var j = 0; j < result.length; j++) {
        let val = start + result[j];
        if(res.indexOf(val) < 0)
          res.push(val);
      }
    }
    return res;
  }
}
