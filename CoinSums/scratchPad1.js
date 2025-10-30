
let denom = [1, 2, 5, 10, 20, 50, 100, 200]

function countWaysToMakeChange(coins, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i] 
    for (let j = coin; j <= target; j++) {
      dp[j] += dp[j - coin];
    }
  }
  return dp[target];



  
}

const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const targetAmount = 200;
const numberOfWays = countWaysToMakeChange(coins, targetAmount);

console.time("coinSums")
console.log(`Number of ways to make ${targetAmount}p: ${numberOfWays}`);
console.timeEnd("coinSums")