function isValidWalk(walk) {
    //insert brilliant code here
    let sum=0, n=0, s=0, w=0, e=0;
    for (let i = 0; i < walk.length; i++)
    {if (walk[i] == 'n') {n++;sum++;}
     else if (walk[i] == 's') {s++;sum++;}
     else if (walk[i] == 'w') {w++;sum++;}
     else if (walk[i] == 'e') {e++;sum++;}}
    if (n==s && w==e && sum==10)
      return "should return true"
  }
