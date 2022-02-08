def towSum(nums,target):
    # your code here
    
    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            if nums[i]+nums[j] == target:
                result=nums[i]+nums[j]
                return result
    
result = towSum([2, 11, 7, 15], 9)
print(result) # show [0, 2] because nums[0]+nums[2] is 9