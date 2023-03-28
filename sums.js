function sums(n) {
    const partitions = new Set();
    const stack = [[[], n]];
  
    while (stack.length > 0) {
      const [currentPartition, remaining] = stack.pop();
  
      if (remaining === 0) {
        partitions.add(currentPartition.slice().sort((a, b) => a - b).join(','));
      } else {
        const start = currentPartition.length > 0 ? currentPartition[currentPartition.length - 1] : 1;
        for (let i = start; i <= remaining; i++) {
          stack.push([[...currentPartition, i], remaining - i]);
        }
      }
    }
  
    return Array.from(partitions, partition => partition.split(',').map(Number));
  }
  