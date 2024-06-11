const fs = require('fs')

// directory path
const dir = './ygshoes188/s188/'

let list=[]
// list all files in the directory
let files=fs.readdirSync(dir, (err, files) => {
  if (err) {
    throw err
  }

  




})

// files object contains all files names
  // log them on console
  files.forEach(file => {
    list.push({folder:file})
  })

  list.forEach((o,i) => {
    let li=list[i]
    let ll=[]
    li.list=ll
    let d=dir+o.folder+'/'
   let fff= fs.readdirSync(d,(e,f)=>{
        
     

    })
    fff.forEach(e=>{
        ll.push({"imgUrl":e})
    })
})

console.log(JSON.stringify(list))

