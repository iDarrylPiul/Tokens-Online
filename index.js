const fs = require('fs')
const eris = require('eris')
let arr = []

fs.readFileSync('tokens.txt').toString().split('\n').forEach(t => {
	arr.push(new eris(t))
})

for (let i = 0; i < arr.length; i++) {
	const b = arr[i]
	b.on('hello', function () { 
    console.log(`token #${i+1}`)
    b.editStatus(
      status = ['idle', 'online', 'dnd'][Math.floor(Math.random() * 3)],
      {
     name: "TMR1",
     url: "https://www.twitch.tv/iww1234"
      }
    );
  })
	b.on('error', function () { b.disconnect() })
	b.connect()
}
