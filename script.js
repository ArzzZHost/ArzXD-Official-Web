// ---- Music overlay controls ---- //
(function() {
  const audio = document.getElementById('siteAudio');
  const playBtn = document.getElementById('musicPlayBtn');
  const stopBtn = document.getElementById('musicStopBtn');
  const titleEl = document.getElementById('musicTitle');
  const statusEl = document.getElementById('musicStatus');
  const overlayEl = document.getElementById('musicOverlay');

  if (!audio || !playBtn || !stopBtn) return; // safety

  // Optional: atur title dari atribut data (jika ingin ubah dinamis)
  // titleEl.textContent = audio.getAttribute('data-title') || titleEl.textContent;

  function updateStatus() {
    if (audio.paused) {
      statusEl.textContent = 'Stopped';
      overlayEl.classList.remove('playing');
      playBtn.textContent = '▶';
      playBtn.setAttribute('aria-label', 'Play');
    } else {
      statusEl.textContent = 'Playing';
      overlayEl.classList.add('playing');
      playBtn.textContent = '❚❚'; // pause icon
      playBtn.setAttribute('aria-label', 'Pause');
    }
  }

  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => {
        // Some browsers require user interaction; show error in status
        statusEl.textContent = 'Play blocked — tap again';
      });
    } else {
      audio.pause();
    }
    updateStatus();
  });

  stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    updateStatus();
  });

  // update UI on events
  audio.addEventListener('play', updateStatus);
  audio.addEventListener('pause', updateStatus);
  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    updateStatus();
  });

  // init status
  updateStatus();

  // Optional: keyboard shortcuts (Space toggles play/pause when overlay focused)
  overlayEl.tabIndex = 0;
  overlayEl.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      playBtn.click();
    } else if (e.code === 'KeyS') {
      stopBtn.click();
    }
  });
})();