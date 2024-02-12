const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you this much! 😘";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjZ6NnRkZDh6Z3c3dWUzaThnbTlqOTVnOHRmYTZqb2E0cTExeDNlNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Oc81bl8C9ygcBKmdgm/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
