//Time Complexity: O(mn)
//Space Complexity: O(n)


const numDistinct = (s, t) => {
  //Creating DP array containing possible results for each char in t
    let dp = Array(t.length+1).fill(0);
    
    //Base case - empty string 1 result
    dp[0] = 1;
    
    //Iterate s string
    for (let i = 0; i < s.length; i++) {
        //Iterate t string (from end to start so we don't process data that we've just inputed)
        for (let j = dp.length-1; j >= 0; j--) {
          //Finding char match  
            if (s[i] === t[j]) {
                //Adding  char count to next position
                dp[j+1] += dp[j]
            }
        }
    }
    
    return dp[t.length];
};


/*
Success
Details 
Runtime: 108 ms, faster than 79.55% of JavaScript online submissions for Distinct Subsequences.
Memory Usage: 41.7 MB, less than 84.37% of JavaScript online submissions for Distinct Subsequences.
*/
