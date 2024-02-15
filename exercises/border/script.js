const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");
const ans5 = document.getElementById("ans5");
const ans6 = document.getElementById("ans6");
const ans7 = document.getElementById("ans7");
const ans8 = document.getElementById("ans8");
const ans9 = document.getElementById("ans9");
const ans10 = document.getElementById("ans10");

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const box10 = document.getElementById("box10");

ans1.addEventListener("click", () => {
  box1.innerHTML =
    '<div id="ans_1_1" style="border-radius: 10px; width: 100px; height: 100px; background-color: gray;"></div>';

  const ans_1_1 = document.getElementById("ans_1_1");

  ans_1_1.addEventListener("mouseover", () => {
    box1.innerHTML =
      "<pre style='color: #fff; background-color: #262626; padding: 8px;width: 250px; border-radius: 10px;'>#ans_1_1 {<br>border-radius: 10px;<br>width: 100px;<br>height: 100px;<br>background-color: gray;<br>}<br></pre>";
  });
});

ans2.addEventListener("click", () => {
  box2.innerHTML =
    '<div id="ans_2_1" style="border-radius: 50%; width: 100px; height: 100px; background-color: gray;"></div>';

  const ans_2_1 = document.getElementById("ans_2_1");

  ans_2_1.addEventListener("mouseover", () => {
    box2.innerHTML =
      "<pre style='color: #fff; background-color: #262626; padding: 8px;width: 250px; border-radius: 10px;'>#ans_2_1 {<br>border-radius: 50%;<br>width: 100px;<br>height: 100px;<br>background-color: gray;<br>}<br></pre>";
  });
});

ans3.addEventListener("click", () => {
  box3.innerHTML =
    '<div id="ans_3_1" style="border-radius: 10px 50%; width: 100px; height: 100px; background-color: gray;"></div>';

  const ans_3_1 = document.getElementById("ans_3_1");

  ans_3_1.addEventListener("mouseover", () => {
    box3.innerHTML =
      "<pre style='color: #fff; background-color: #262626; padding: 8px;width: 250px; border-radius: 10px;'>#ans_3_1 {<br>border-radius: 10px 50%;<br>width: 100px;<br>height: 100px;<br>background-color: gray;<br>}<br></pre>";
  });
});

ans4.addEventListener("click", () => {
  box4.innerHTML =
    '<div id="ans_4_1" style="border-radius: 10px 50% 10px 50%; width: 100px; height: 100px; background-color: gray; border: 1px solid black;"></div>';

  const ans_4_1 = document.getElementById("ans_4_1");

  ans_4_1.addEventListener("mouseover", () => {
    box4.innerHTML =
      "<pre style='color: #fff; background-color: #262626; padding: 8px;width: 250px; border-radius: 10px;'>#ans_4_1 {<br>border-radius: 10px 50% 10px 50%;<br>width: 100px;<br>height: 100px;<br>background-color: gray;<br>border: 1px solid black;<br>}<br></pre>";
  });
});

ans5.addEventListener("click", () => {
  box5.innerHTML =
    '<div id="ans_5_1" style="border-radius: 10px 50% 10px 50%; width: 100px; height: 100px; background-color: red; border: 1px solid black;"></div>';

  const ans_5_1 = document.getElementById("ans_5_1");

  ans_5_1.addEventListener("mouseover", () => {
    box5.innerHTML =
      "<pre style='color: #fff; background-color: #262626; padding: 8px;width: 250px; border-radius: 10px;'>#ans_5_1 {<br>border-radius: 10px 50% 10px 50%;<br>width: 100px;<br>height: 100px;<br>background-color: red;<br>border: 1px solid black;<br>}<br></pre>";
  });
});

ans6.addEventListener("click", () => {
  box6.innerHTML =
    '<div id="ans_6_1" style="border-radius: 10px 50% 10px 50%; width: 100px; height: 100px; background-color: red; border: 1px solid black; box-shadow: 10px 10px 5px grey;"></div>';

  const ans_6_1 = document.getElementById("ans_6_1");

  ans_6_1.addEventListener("mouseover", () => {
    box6.innerHTML =
      "<pre style='color: #fff; background-color: #262626; padding: 8px;width: 250px; border-radius: 10px;'>#ans_6_1 {<br>border-radius: 10px 50% 10px 50%;<br>width: 100px;<br>height: 100px;<br>background-color: red;<br>border: 1px solid black;<br>box-shadow: 10px 10px 5px grey;<br>}<br></pre>";
  });
});

ans7.addEventListener("click", () => {
  box7.innerHTML =
    '<div id="ans_7_1" style="border-radius: 10px 50% 10px 50%; width: 100px; height: 100px; background-color: red; border: 1px solid black; box-shadow: 10px 10px 5px grey; cursor: pointer;"></div>';

  const ans_7_1 = document.getElementById("ans_7_1");

  ans_7_1.addEventListener("mouseover", () => {
    box7.innerHTML =
      "<pre style='color: #fff; background-color: #262626; padding: 8px;width: 250px; border-radius: 10px;cursor: pointer;'>#ans_7_1 {<br>border-radius: 10px 50% 10px 50%;<br>width: 100px;<br>height: 100px;<br>background-color: red;<br>border: 1px solid black;<br>box-shadow: 10px 10px 5px grey;<br>cursor: pointer;<br>}<br></pre>";
  });
});

ans8.addEventListener("click", () => {
  box8.innerHTML = `<div id="ans_8_1" style="border-radius: 10px 50% 10px 50%; width: 100px; height: 100px; background-color: red; border: 1px solid black; box-shadow: 10px 10px 5px grey; cursor: pointer; transition: 0.3s;"></div>`;

  const ans_8_1 = document.getElementById("ans_8_1");

  ans_8_1.addEventListener("mouseover", () => {
    box8.innerHTML = `<pre style='color: #fff; background-color: #262626; padding: 8px;width: 250px; border-radius: 10px; transition: 0.3s;'>#ans_8_1 {<br>border-radius: 10px 50% 10px 50%;<br>width: 100px;<br>height: 100px;<br>background-color: red;<br>border: 1px solid black;<br>box-shadow: 10px 10px 5px grey;<br>cursor: pointer;<br>transition: 0.3s;<br>}<br></pre>`;
  });
});

ans9.addEventListener("click", () => {
  box9.innerHTML = `<div id="ans_9_1" style="border-radius: 10px 50% 10px 50%; width: 100px; height: 100px; background-color: red; border: 1px solid black; box-shadow: 10px 10px 5px grey; cursor: pointer; transition: 0.3s;"></div>`;

  const ans_9_1 = document.getElementById("ans_9_1");

  ans_9_1.addEventListener("mouseover", () => {
    box9.innerHTML = `<pre id="pre_9_1" style='color: #fff; padding: 8px;width: 250px; border-radius: 10px; transition: 0.3s;'>#ans_9_1 {<br>border-radius: 10px 50% 10px 50%;<br>width: 100px;<br>height: 100px;<br>background-color: red;<br>border: 1px solid black;<br>box-shadow: 10px 10px 5px grey;<br>cursor: pointer;<br>transition: 0.3s;<br>}<br>#ans_9_1:hover {<br>background-color: blue;<br>}<br></pre>`;
  });
});

ans10.addEventListener("click", () => {
  box10.innerHTML = `<div id="ans_10_1" style="border-radius: 10px 50% 10px 50%; width: 100px; height: 100px; background-color: red; border: 1px solid black; box-shadow: 10px 10px 5px grey; cursor: pointer; transition: 0.3s;"></div>`;

  const ans_10_1 = document.getElementById("ans_10_1");

  ans_10_1.addEventListener("mouseover", () => {
    box10.innerHTML = `<pre id="pre_10_1" style='color: #fff; padding: 8px;width: 250px; border-radius: 10px; transition: 0.3s;'>#ans_10_1 {<br>border-radius: 10px 50% 10px 50%;<br>width: 100px;<br>height: 100px;<br>background-color: red;<br>border: 1px solid black;<br>box-shadow: 10px 10px 5px grey;<br>cursor: pointer;<br>transition: 0.3s;<br>}<br>#ans_10_1:hover {<br>background-color: blue;<br>}<br>#ans_10_1:active {<br>background-color: green;<br>}<br></pre>`;

    const pre_10_1 = document.getElementById("pre_10_1");

    pre_10_1.addEventListener("click", () => {
      pre_10_1.style.backgroundColor = "green";
    });
  });
});
