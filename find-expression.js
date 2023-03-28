function findExpression(number) {
    const add4 = x => x + 4;
    const mul2 = x => x * 2;

    const queue = [{expr: "1", val: 1}];
    while (queue.length > 0) {
        const {expr, val} = queue.shift();
        if (val === number) {
            return expr;
        }
        if (val < number) {
            queue.push({expr: `${expr} +4`, val: add4(val)});
            queue.push({expr: `${expr} *2`, val: mul2(val)});
        }
    }
    return undefined;
}
