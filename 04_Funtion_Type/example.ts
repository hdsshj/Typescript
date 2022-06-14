function test(x: number | string): void {
  let array: number[] = [];

  array[0] = x as number;
  console.log(array);
}

test(1);
