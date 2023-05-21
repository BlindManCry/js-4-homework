// დავალება1---------------------------------------------------------------------

var a = [
  2,
  3,
  "a",
  [5, 4, [], 15, [3, 4, 5], [2], 5, 6],
  "aaa",
  "bb",
  [5, [2], 4, [], 4],
];

for (var idx in a) {
  if (typeof a[idx] === "object") {
    for (var i in a[idx]) {
      if (typeof a[idx][i] === "object") {
        for (var x in a[idx][i]) {
          if (a[idx][i].length == 1) {
            a[idx][i][x] = 1000;
          }
          console.log(a[idx][i][x]);
        }
        if (!a[idx][i].length) {
          console.log("ცარიელი ელემენტი");
        }
      } else {
        console.log(a[idx][i]);
      }
    }
  } else {
    console.log(a[idx]);
  }
}

// დავალება2---------------------------------------------------------------------

var a = [5, 7, 6, 3, 4, 9, 110, 234, 3464, 443];

for (var idx in a) {
  if (a[idx] % 3 == 2) {
    console.log(a[idx]);
  }
}

// დავალება3-----------------------------------------------------------------------------

a = [1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 2, 9, 7, 5];

for (var idx in a) {
  if (a[idx] % 3 == 0) {
    console.log("სამის ჯერადი" + " " + Math.pow(a[idx], 3));
  } else if (a[idx] % 2 == 0) {
    console.log("ორის ჯერადი" + " " + Math.pow(a[idx], 2));
  } else if (a[idx] % 7 == 0) {
    delete a[idx];
  }
}
