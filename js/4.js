/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin) {
    var result = null
    if (pre.length > 1) {
        let root = pre[0]
        let vinRootIndex = vin.indexOf(root)
        let leftVin = vin.slice(0, vinRootIndex)
        let rightVin = vin.slice(vinRootIndex + 1, vin.length)
        pre.shift()
        let leftPre = pre.slice(0, leftVin.length)
        let rightPre = pre.slice(leftVin.length, pre.length)
        result = {
            root: root,
            left: reConstructBinaryTree(leftPre, leftVin),
            right: reConstructBinaryTree(rightPre, rightVin)
        }
    } else if (pre.length == 1) {
        result = {
            root: pre[0],
            left: null,
            right: null
        }
    }
    return result
}
let pre = [1, 2, 3, 4, 5, 6, 7],
    vin = [3, 2, 4, 1, 6, 5, 7]
let tree = reConstructBinaryTree(pre, vin)
console.log(tree)

function getAft(tree, aft) {
    let left = tree.left,
        right = tree.right,
        root = tree.root
    left && getAft(left, aft)
    right && getAft(right, aft)
    aft.push(root)
    return aft
}
console.log(getAft(tree, []))