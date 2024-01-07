let heartNum = 0
let heartInterval = 0
const text = {
  one: 'Heart’s passion for painting shines through in her artwork and extends even to her luxury bags. With each stroke of her brush, she transforms these bags into unique masterpieces, infused with her creativity and love for art. It’s evident that Heart wholeheartedly embraces the world of art and is deeply fascinated by it, making it an integral part of her creative journey. Her commitment to her craft is truly inspiring, and her painted bags are a testament to her artistic prowess. Keep following Heart’s artistic career to witness more of her captivating creations.'
  ,two: 'Love Maria Payawal Ongpauco-Escudero or simply known as Ms. Heart Evangelista. She is a famous fashion influencer and artist. Heart Evangelista was very good when it came to fashion, and she is also famous because of luxury collections. She is well known as independent and hardworking woman as she stated that she doesn’t want to be “Ms. Hingi.” She is working hard to buy the things she wants.'
}
document.addEventListener("DOMContentLoaded", function() {
  initHearty()
  autoHearty()
});

function initHearty() {
  const hearty = document.getElementsByClassName('hearty')
  for(let i=0;i<hearty.length;i++) {
    hearty[i].addEventListener('click',(e)=> {
      const id = e.currentTarget.id
      const p = document.getElementById('heart-text')
      const img = document.getElementById('hearty')
      const path = './resources'
      switch(id) {
        case 'slide2':
          img.src = `${path}/slide1.jpg`
          heartNum = 1
          break;
        case 'slide3':
          img.src = `${path}/slide2.jpg`
          heartNum = 2
          break;
        case 'slide4':
          img.src = `${path}/slide3.jpg`
          heartNum = 3
          break;
        case 'slide5':
          img.src = `${path}/slide4.webp`
          heartNum = 4
          break;
        default: 
          img.src = `${path}/heart.avif`
          heartNum = 0
      }
      p.textContent = heartNum < 2 ? text.two : text.one
      clearInterval(heartInterval)
      autoHearty()
    })
  }
}

function autoHearty() {
  heartInterval = setInterval(()=> {
    const img = document.getElementById('hearty')
    const path = './resources'
    const hearty = document.getElementsByClassName('hearty')
    const p = document.getElementById('heart-text')
    switch(heartNum) {
      case 0:
        heartNum = 1
        img.src = `${path}/slide1.jpg`
        break;
      case 1:
        heartNum = 2
        img.src = `${path}/slide2.jpg`
        break;
      case 2:
        heartNum = 3
        img.src = `${path}/slide3.jpg`
        break;
      case 3:
        img.src = `${path}/slide4.webp`
        heartNum = 4
        break;
      default: 
        img.src = `${path}/heart.avif`
        heartNum = 0
    }
    p.textContent = heartNum < 2 ? text.two : text.one
    hearty[heartNum].checked = true
  }, 5000)
}