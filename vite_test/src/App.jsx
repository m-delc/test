import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { build } from 'vite'

function App() {
  const [count, setCount] = useState(0)
  const [myInput, setMyInput] = useState()
  // const [letterNumber, setLetterNumber] = useState()

  // const getNumber = 

  // const prayTheGayArray = []


  const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }

  const exampleArray = ['r', 'o', 'b', 'e', 'r', 't', 'a']

    // Converts obj1 to an array
    const asArray = Object.entries(obj1)

  const tet = exampleArray.filter(letter => letter === asArray.key)

  // const tet = exampleArray.map(x => asArray.filter(c => c === x))
  // const tet = asArray.filter()

  console.log(tet)

  // probably don't need this
  // const obj2 = [
  //   {a: 1},
  //   {b: 2},
  //   {c: 3},
  //   {d: 4},
  //   {e: 5},
  //   {f: 6},
  //   {g: 7},
  //   {h: 8},
  //   {i: 9},
  //   {j: 10},
  //   {k: 11},
  //   {l: 12},
  //   {m: 13},
  //   {n: 14},
  //   {o: 15},
  //   {p: 16},
  //   {q: 17},
  //   {r: 18},
  //   {s: 19},
  //   {t: 20},
  //   {u: 21},
  //   {v: 22},
  //   {w: 23},
  //   {x: 24},
  //   {y: 25},
  //   {z: 26}
  // ]

  // const map1 = new Map ([
  //   [a, 1],
  //   [b, 2],
  //   [c, 3]
  // ])

    // const map1 = [
    //   {}
    // ]
    // [a, 1],
    // [b, 2],
    // [c, 3]
  

  // const map1 = new Map(myInput)


  // THIS ONLY WORKS FOR ONE LETTER AT A TIME
  // THIS ONLY WORKS FOR ONE LETTER AT A TIME
  // THIS ONLY WORKS FOR ONE LETTER AT A TIME 
  // // Converts obj1 to an array
  // const asArray = Object.entries(obj1)
  // filters asArray for the key which exactly equals myInput (this works ONLY for a single letter at a time)
  const popo = myInput ? myInput.split('') : null
  const filtered = asArray.filter(([key, value]) => key === myInput)


  // this works
  // const map1 = popo ? popo.map(x => `${x}p`) : null
  // const map1 = popo ? popo.map(x => {
  //   console.log (x + 2)
  // }) : null
  // console.log(map1)
  
  // const asArrayFlat = asArray.flat()

  // const map1 = popo ? popo.map(letter => letter.key).filter : null

// const f2 = asArray.filter(key => {

// })

// const a = popo ? popo.map(x => x === asArray.filter(c => c.key)) : null
// const b = popo ? asArray.filter(c => c.keys === popo.map(x => x)) : null

// console.log(b)






  // for (i = 0; i < popo.length; i++) {
  //   console.log(asArray.filter(([key, value]) => key === i))
  // }

  // for (i = 0; i < popo.length; i++) {
  //   console.log(popo)
  // }


  // const filtered = asArray.filter([key, value]) => {
  //  for (i=0; i < asArray.length; i++) {
  //   console.log(i === key)
  //  } key === myInput;}
  
  // converts filtered into an object
  const justStrings = Object.fromEntries(filtered)
  // gives the value (number) of the key from justStrings
  const whatsTheNumber = Object.values(justStrings)
  // console.log(popo)

  // const inputArray = Array.from(myInput)
  // const split = inputArray.split(' ')


  // const filterTest = inputArray.filter(([key, value]) =>)


  // const jkl = {myInput}
  // const filterTest = inputArray.filter((x => x === x))

  // const spread = filtered[0]
  // const gh = spread ? console.log(spread[1]) : null

  // for (const [key, value] of Object.entries(obj1)) {
  //   console.log(`${key}: ${value}`);
  // }

  // const asArray2 = Object.entries(obj1)

  // for (const [key, value] of Object.entries(obj1)) {
  //   console.log(`${value}`)
  // }

//   const atLeast9Wins = _.flow([
//     Object.entries,
//     arr => arr.filter(([key, value]) => value >= 9),
//     Object.fromEntries
// ])(numWins);

// const xxx = pipe(
//   Object.entries
// )


// for (let i = 0; i < inputArray.length; i++) {
//   console.log(inputArray[i])
// }

// const arr1 = ''
// for (let i = 0; i < inputArray.length; i++) {
//  const j = asArray.filter(x => x.keys === inputArray.keys)
//  console.log(inputArray)
// }

// Object.entries(obj1).forEach(([key, value]) => console.log(value))

// const yyy = inputArray.forEach(v => Object.entries(obj1).find(v => v.value))
// console.log(yyy)

// const uuu = obj2.map(v => {
//   if (v === inputArray){
//     return v;
//   }
// })
// console.log(uuu)

// const guessingGame = inputArray.map(index => index.value)
// console.log(guessingGame)

// console.log(inputArray[2])

// for (let i = 0; i < inputArray.length; i++) {
//   let klj = asArray.find(e => e == inputArray[i])
//   console.log(inputArray)
//   return klj
// }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React michael</h1>
      <div>

      <label>
        jajaja: <input 
                  name="myInput"
                  onChange={(e) => setMyInput(e.target.value)} />
      </label>

      <div>{myInput}</div>
      <div>{whatsTheNumber}</div>

      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
