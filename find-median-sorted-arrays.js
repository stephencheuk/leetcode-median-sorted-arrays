/*
4. Median of Two Sorted Arrays
Hard

Share
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/


var findMedianSortedArrays = function(nums1, nums2) {
  var len = (nums1.length + nums2.length) / 2;
  var count = 0;
  var n;
  var watchdog = nums1.length + nums2.length;

  var nextNum = function (){
    if(nums1.length > 0 && nums2.length > 0 && nums1[0] < nums2[0]){

      return { 'n' : nums1.shift(), 'cnt' : ++count };

    }else if(nums2.length){

      return { 'n' : nums2.shift(), 'cnt' : ++count };

    }else if(nums1.length){

      return { 'n' : nums1.shift(), 'cnt' : ++count };

    }
    return null;
  }

  while(n = nextNum()){
    if(n.cnt > len){
      return n.n;
    }else if(n.cnt == len){
      return (n.n + nextNum().n) / 2;
    }
    if(!watchdog--){ break }
  }

  return null;

};

var Method1 = findMedianSortedArrays;

var output = function (){
  var argv = [];
  for(var i=0; i<arguments.length; i++) argv.push(arguments[i]);
  console.log(argv);
}

var check = function (ans, res){
  try{
    return res == ans ? 'Right' : 'Wrong';
  }catch(e){
    return "Check Fail";
  }
}
console.log('Method 1');
console.log('test 1 : ', ans = 2, " vs ", res = Method1([1, 3], [2]), check(ans, res));
console.log('test 2 : ', ans = 2.5, " vs ", res = Method1([1, 2], [3, 4]), check(ans, res));
console.log('test 3 : ', ans = 1, " vs ", res = Method1([1, 1, 1, 2], [1, 1, 1, 3, 4]), check(ans, res));
console.log('test 4 : ', ans = 3, " vs ", res = Method1([1,1,1,1,1,1,1,1,1,1,4,4], [1,3,4,4,4,4,4,4,4,4,4]), check(ans, res));

//1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4
//1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23

//1, 1, 1, 1, 1, 1, 2, 3, 4
//1  2  3  4  5  6  7  8  9

//console.log('test 3 : ', ans = 3, " vs ", res = Method1("pwwkew"),   check(ans, res));
//console.log('test 3 : ', ans = 2, " vs ", res = Method1("aab"),      check(ans, res));
//console.log('test 3 : ', ans = 3, " vs ", res = Method1("dvdf"),      check(ans, res));
//console.log('test 3 : ', ans = 3, " vs ", res = Method1("aabaab!bb"),      check(ans, res));

