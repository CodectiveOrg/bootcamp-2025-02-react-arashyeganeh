(function () {
    const name: string = "arash";

    function minues1(a: number, b: number): number {
        return a - b;
    };

    const minues2 = (a: number, b: number): number => a - b;

    class Circle {
        private radius: number;

        public constructor(radius: number) {
            this.radius = radius;
        }

        public calculatorSurface() {
            return Math.PI * Math.pow(this.radius, 2);
        }

    }

    const circle = new Circle(10);
    console.log(circle.calculatorSurface());
})();