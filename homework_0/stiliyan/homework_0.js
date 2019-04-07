'use strict';

function test() {
    console.log('Test');
    const object = { x: 1, y: 2 };
    const { x, y } = object;
    const foo = { bar: 1, baz: () => {} };
    foo
        .bar
        .baz();
}
test();
