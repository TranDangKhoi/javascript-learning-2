function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      let current = arr[j];
      let next = arr[j + 1];
      if (current > next) {
        let temp = next;
        next = current;
        current = temp;
        console.log(temp);
      }
    }
  }
}

bubbleSort([23, 44, 12, 1, 10, 3, 6]);

// Sắp xếp nổi bọt:
// [3,6,1]: Kiểm tra xem 3 có lớn hơn 6 không, nếu không thì giũ nguyên
// [3,6,1]: Giữ nguyên, và xét tiếp 6 có lớn hơn 1 không
// [3,1,6]: 6 có lớn hơn 1 nên ta hoán vị 6 và 1
// [1,3,6]: Quay về vị trí đầu tiên, kiểm tra tiếp 3 có lớn hơn 1 không, nếu có thì hoán vị
// [1,3,6]: Chạy tiếp 1 lượt nữa để kiểm tra lần cuối và kết thúc
