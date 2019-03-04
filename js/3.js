/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
    let arr = []
    while (head != null) {
        arr.unshift(head.val)
        head = head.next
    }
    return arr
}