/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
    // lol
};

/**
 * argumentsLength(1, 2, 3); // 3
 */