//Enums in TypeScript are a way to define a set of named constants. They can be numeric or string-based and provide better readability and maintainability in your code.
export enum Direction {
    Up,     // 0
    Down,   // 1
    Left,   // 2
    Right   // 3
  }
  
  let direction: Direction = Direction.Up;
  console.log(direction); // Output: 0 (numeric value of Direction.Up)
  