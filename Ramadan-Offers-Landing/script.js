const pad = (n) => String(n).padStart(2, "0");

function startCountdown(section) {
  const deadline = new Date(section.dataset.deadline);
  if (Number.isNaN(deadline.getTime())) {
    section.hidden = true;
    return;
  }

  const fields = {};
  section.querySelectorAll("[data-unit]").forEach((el) => {
    fields[el.dataset.unit] = el;
  });

  const title = section.querySelector("h2");
  const note = section.querySelector(".deadline-text");
  if (note) {
    note.dateTime = section.dataset.deadline;
    note.textContent = new Intl.DateTimeFormat("ar-SA-u-ca-gregory-nu-latn", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(deadline);
  }

  let timer = null;

  const tick = () => {
    const left = deadline.getTime() - Date.now();

    if (left <= 0) {
      Object.values(fields).forEach((el) => {
        el.textContent = "00";
      });
      section.classList.add("is-over");
      if (title) title.textContent = "انتهت العروض، شكراً لكم";
      if (timer) clearInterval(timer);
      return false;
    }

    const total = Math.floor(left / 1000);
    fields.days.textContent = pad(Math.floor(total / 86400));
    fields.hours.textContent = pad(Math.floor((total % 86400) / 3600));
    fields.minutes.textContent = pad(Math.floor((total % 3600) / 60));
    fields.seconds.textContent = pad(total % 60);
    return true;
  };

  if (tick()) timer = setInterval(tick, 1000);
}

const countdown = document.querySelector(".countdown[data-deadline]");
if (countdown) startCountdown(countdown);
