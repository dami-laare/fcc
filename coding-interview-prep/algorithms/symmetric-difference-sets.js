function sym(...args) {
  if (args.length < 2) return [];

  return args.reduce((acc, curr, index) => {
    let setA;
    let setB;
    if (index === args.length - 1) return acc;
    if (index === 0) {
      setA = new Set(curr);
    } else {
      setA = new Set(acc);
    }
    setB = new Set(args[index + 1]);

    const uniqueA = [...setA].filter((x) => !setB.has(x));
    const uniqueB = [...setB].filter((x) => !setA.has(x));

    return [...uniqueA, ...uniqueB].sort((a, b) => a - b);
  }, []);
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
