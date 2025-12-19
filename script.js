function jumpscare() {
  document.body.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: black;
      z-index: 9999;
    ">
      <img src="scary.jpg" style="
        width: 100%;
        height: 100%;
        object-fit: cover;
      ">
      <audio autoplay>
        <source src="scream.mp3" type="audio/mpeg">
      </audio>
    </div>
  `;
}

