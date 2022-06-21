let title = document.querySelector("#title");

// narrowing #1
if (title !== null) {
  title.innerHTML = "제목 바꿈";
}

// narrowing #2
if (title instanceof Element) {
  title.innerHTML = "제목 또 바꿈";
}

// narrowing #3
let titleAs = document.querySelector("#title") as Element;
if (titleAs) {
  titleAs.innerHTML = "제목 또또 바꿈";
}

// narrowing #4 optional chaining
if (title?.innerHTML) {
  title.innerHTML = "제목 optional chaining으로 바꿈";
}

// narrowing #5
// tsconfig.json 에서 strictNullChecks false 설정
// title.innerHTML = "제목 바꿈";

let newLink = document.querySelector(".link");
if (newLink instanceof HTMLAnchorElement) {
  newLink.href = "https://kakao.com";
}

let button = document.querySelector("#button");
let image = document.querySelector("#image");

button?.addEventListener("click", () => {
  if (image instanceof HTMLImageElement) {
    console.log();
    if (image.src.split("/").pop() === "test.jpg") {
      image.src = "dev.jpg";
    } else {
      image.src = "test.jpg";
    }
  }
});

let naverLink = document.querySelectorAll(".naver");

console.log(naverLink);
naverLink.forEach((el) => {
  if (el instanceof HTMLAnchorElement) {
    el.href = "https://kakao.com";
  }
});
