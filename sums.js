function generatePartitions(n, max, partition, partitions) {
    if (n === 0) {
      partitions.add(partition.slice());
    } else {
      for (let i = Math.min(max, n); i >= 1; i--) {
        partition.push(i);
        generatePartitions(n - i, i, partition, partitions);
        partition.pop();
      }
    }
  }
  
  function sums(n) {
    const partitions = new Set();
    if (n === 0) {
      partitions.add([]);
    } else {
      generatePartitions(n, n, [], partitions);
    }
    return Array.from(partitions);
  }
  