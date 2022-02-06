def maxProduct(nums):
    # 請用你的程式補完這個函式的區塊
    #預設第一次for 外+內 跑出來的第一個數字
    temp = nums[0]*nums[1] 
    # data=nums[1]-nums[0]
    for i in range(len(nums)):
        
        # print("nums[i]:",nums[i])
        for j in range(i+1,len(nums)):
            # print("nums[j]:",nums[j])
            sum=nums[i]*nums[j]
            if sum>=temp:
                temp=sum
    print("MAX:",max(temp,sum))
        
# maxProduct([5, 20, 2, 6]) # 得到 120
maxProduct([10, -20, 0, 3]) # 得到 30
# maxProduct([-1, 2]) # 得到 -2
# maxProduct([-1, 0, 2]) # 得到 0