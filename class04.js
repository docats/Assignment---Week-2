function twoSum(nums, target){
    // your code here
        for (let i=0; i<nums.length; i++){
            // console.log("i:",nums[i]);
            // console.log("i目前是:",i)
            for(let j=i+1;j<nums.length;j++){
                // console.log("  j目前是:",j)
                // console.log("j:",nums[j]);
                if(nums[i]+nums[j] == target){
                    let result=nums[i]+nums[j];
                    return result;
                }
            }
        }
        
    }
    // twoSum([2, 11, 7, 15], 9);
    let result=twoSum([2, 11, 7, 15], 9);
    console.log(result); // show [0, 2] because nums[0]+nums[2] is 9