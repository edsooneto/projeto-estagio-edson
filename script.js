const shareBtn = document.getElementById("share-btn");
const shareOptions = document.getElementById("share-options");

shareBtn.addEventListener("click", () => {
  shareOptions.classList.toggle("hidden");
});