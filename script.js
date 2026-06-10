const startBtn = document.getElementById("startBtn");
const bgm = document.getElementById("bgm");

startBtn.addEventListener("click", () => {
  // เล่นเพลง (ต้องเกิดจาก user click เท่านั้นถึงจะได้)
  bgm.play();

  // หน่วงนิดนึงให้เพลงติดก่อน
  setTimeout(() => {
    window.location.href = "info.html";
  }, 300);
});
