var merge = function(nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;
  let result = nums2.concat(nums1).sort((a, b) => a - b);
  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }
};