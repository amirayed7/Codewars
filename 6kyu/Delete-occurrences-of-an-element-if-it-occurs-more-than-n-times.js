function deleteNth(arr,n){
  let count = {}
  return arr.filter( item => {
    count[item] = (count[item] || 0 ) + 1
    return count[item] <= n
  })
}
