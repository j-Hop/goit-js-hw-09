function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  let color = null;

  const refs = {
    btnStart: document.querySelector("button[data-start]"),
    btnStop: document.querySelector("button[data-stop]"),
    body: document.querySelector("body"),
  };

  refs.btnStop.disabled = true;
  refs.btnStart.addEventListener("click", onStartColor);
  refs.btnStop.addEventListener("click", onStopColor);

  function changeColor(bool) {
    refs.btnStart.disabled = bool;
    refs.btnStop.disabled = !bool;
  }

  function onStartColor() {
    changeColor(true);
  
    color = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
  function onStopColor() {
    changeColor(false);
    clearInterval(color);
  }


  function onStopColor() {
    refs.btnStart.disabled = !true;
    refs.btnStop.disabled = true;

    clearInterval(color);
  }