import React from "react"
import { useState, useEffect } from "react"

export default function Meme() {

  const [meme, setMeme] = useState({
       topText: "",
       bottomText: "",
       randomImage: "http://i.imgflip.com/1bij.jpg" 
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage(){
      const randomNumber = Math.floor(Math.random() * allMemes.length)
      const url = allMemes[randomNumber].url
      setMeme(prevMeme => {
        return {
          ...prevMeme,
          randomImage: url
        }
      })
      console.log(url)
  }

  function handleChange(event){
     const {name, value} = event.target
     setMeme(prevMeme => {
        return {
          ...prevMeme,
          [name] : value
        }
     })
     console.log(meme)
  }
   
    return (
        <main>
          <section className="form">
            <input 
            type="text" 
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            />
            <input 
            type="text" 
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />
            <button 
            
            onClick={getMemeImage}
            >Get a new meme image  🖼
            </button>
           
          </section>
          <div className="meme">
              <img src= {meme.randomImage} alt="Hi" className="memeImage" />
              <h2 className="memeText top" >{meme.topText}</h2>
              <h2 className="memeText bottom" >{meme.bottomText}</h2>
            </div>       
        </main>
    )
}