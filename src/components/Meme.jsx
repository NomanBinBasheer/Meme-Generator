import React from "react"

export default function Meme() {
    return (
        <main>
          <section className="form">
            <input type="text" placeholder="Top Text"/>
            <input type="text" placeholder="Bottom Text"/>
            <button type = "button">Get a new meme image  🖼</button>
          </section>         
        </main>
    )
}