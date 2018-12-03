
function allAnagrams (string) {
  let len = string.length;
  let res = [];

  function permutations(str) {
    if(str.length === 1) {
      res.push([string]);
    } else {
      permutations(str.slice(1));
      for(let j=0; j<str.length-1; j++) {
        let c=str[j];
        str[j]=str[i];
        str[i]=c;
      }
    }
  }

}


// 100 PROGRAM "Permutat.bas"
// 110 LET N=4 // Number of elements
// 120 NUMERIC T(1 TO N)
// 130 FOR I=1 TO N
// 140   LET T(I)=I
// 150 NEXT
// 160 LET S=0
// 170 CALL PERM(N)
// 180 PRINT "Number of permutations:";S
// 190 END
// 200 DEF PERM(I)
// 210   NUMERIC J,X
// 220   IF I=1 THEN
// 230     FOR X=1 TO N
// 240       PRINT T(X);
// 250     NEXT 
// 260     PRINT :LET S=S+1
// 270   ELSE
// 280     CALL PERM(I-1)
// 290     FOR J=1 TO I-1
// 300       LET C=T(J):LET T(J)=T(I):LET T(I)=C
// 310       CALL PERM(I-1)
// 320       LET C=T(J):LET T(J)=T(I):LET T(I)=C
// 330     NEXT
// 340   END IF
// 350 END DEF
