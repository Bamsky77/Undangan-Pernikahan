    AOS.init();

    // Countdown
    const countdown = document.getElementById("countdown");
    const targetDate = new Date("Oct 11, 2025 10:00:00").getTime();
    const x = setInterval(function() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdown.innerHTML = days + " Hari " + hours + " Jam "
      + minutes + " Menit " + seconds + " Detik ";

      if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "Acara sudah dimulai!";
      }
    }, 1000);
