function sym(...args) {
  if (args.length === 1) return [];

  if (args.length === 2) {
    const result = [];
    const length = Math.max(args[0].length, args[1].length);

    for (let i = 0; i < length; i++) {
      if (args[0][i])
        if (!args[1].includes(args[0][i]) && !result.includes(args[0][i])) {
          result.push(args[0][i]);
        }

      if (args[1][i])
        if (!args[0].includes(args[1][i]) && !result.includes(args[1][i])) {
          result.push(args[1][i]);
        }
    }
    return result.sort();
  }

  return sym(sym(...args.slice(0, 2)), ...args.slice(2));
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
