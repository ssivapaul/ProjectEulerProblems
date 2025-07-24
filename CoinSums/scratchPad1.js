
let denom = [1, 2, 5, 10, 20, 50, 100, 200]

function countWaysToMakeChange(coins, target) {
  // Initialize dp array with 0s, and dp[0] as 1 (one way to make 0: no coins)
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  // Iterate through each coin denomination
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    // Iterate from the coin's value up to the target amount
    for (let j = coin; j <= target; j++) {
      // Add the ways to make j - coin to the ways to make j
      dp[j] += dp[j - coin];
    }
  }

  // The final result is the number of ways to make the target amount
  return dp[target];
}

// Coin denominations in pence
const coins = [1, 2, 5, 10, 20, 50, 100, 200];
// Example target: £2 (200 pence)
const targetAmount = 200;

const numberOfWays = countWaysToMakeChange(coins, targetAmount);
console.log(`Number of ways to make ${targetAmount}p: ${numberOfWays}`);