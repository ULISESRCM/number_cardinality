function number_cardinality(num) {
    switch (true) {
      case num % 10 === 0:
        return "zero";
      case num % 10 === 5:
        return "five";
      case num % 2 === 0:
        return "even";
      default:
        return "odd";
    }
  }
  
  console.log(number_cardinality(100));
  console.log(number_cardinality(88));
  console.log(number_cardinality(155));
  console.log(number_cardinality(99));
  