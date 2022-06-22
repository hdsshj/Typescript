class User {
  private static x = 10;
  public static y = 20;

  static addOne(a: number) {
    User.x += a;
  }

  static printX() {
    console.log(User.x);
  }
}

User.addOne(32); //이렇게 하면 x가 3 더해져야함
User.addOne(4); //이렇게 하면 x가 4 더해져야함
User.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

class Square {
  width: number;
  height: number;
  color: string;

  constructor(w: number, h: number, c: string) {
    this.width = w;
    this.height = h;
    this.color = c;
  }

  draw() {
    let randomLeft = Math.floor(Math.random() * 400);
    let randomTop = Math.floor(Math.random() * 400);

    let style = `<div style="
    position:absolute;
    width:${this.width}px; 
    height:${this.height}px;
    top:${randomTop}px;
    left:${randomLeft}px;
    background:${this.color};
    ">
    </div>`;

    document.body.insertAdjacentHTML("beforeend", style);
  }
}

let addSquare = new Square(30, 30, "blue");

addSquare.draw();
addSquare.draw();
addSquare.draw();
addSquare.draw();
addSquare.draw();
addSquare.draw();
addSquare.draw();
addSquare.draw();
addSquare.draw();
addSquare.draw();
addSquare.draw();
