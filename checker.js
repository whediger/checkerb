

//var row = "12345678";
var row = "# # # # ";
var move = "";

for ( var i = 0; i < 4; i++ ) {
  //console.log("inital row: " + row);
  move = row.slice(7);
  //console.log("value of move: " + move);
  row = row.slice(0, 7);
  //console.log("row after slicing end off of row: " + row);
  row = move + row;
  console.log(row);
}

//test code commented out left in for reference.
