function maxProduct(nums){
    // 請用你的程式補完這個函式的區塊
   let sum=Number.NEGATIVE_INFINITY;
   let max=Number.NEGATIVE_INFINITY;
   for(let i=0; i<nums.length;i++){
       console.log("外面的i:",i);
        for(let j=i+1;j<nums.length;j++){
            sum=nums[i]*nums[j]
            console.log('i:',i,'j:',j,'sum:',sum);
            max=Math.max(sum,max);
             }     
        }  
        console.log(max);
        return max;
};
  
// maxProduct([5, 20, 2, 6]) // 得到 120
maxProduct([10, -20, 0, 3]) // 得到 30
// maxProduct([-1, 2]) // 得到 -2
// maxProduct([-1, 0, 2]) // 得到 0

