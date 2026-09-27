"use strict";

// Two Faces sound effects, synthesised with the Web Audio API (no audio files). Used by two-faces-play.js via SFX.play(name, arg).
// The audio context starts on the first click (browsers block sound before a user gesture). Mute is remembered per browser.

const SFX = (() => {
  let ctx = null;
  let muted = false;
  try {
    muted = localStorage.getItem("tf-muted") === "1";
  } catch (e) {}

  const audio = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  };

  // A tone with an attack/decay envelope; `to` glides the pitch.
  function tone({ freq, to = freq, type = "sine", start = 0, dur = 0.15, vol = 0.2 }) {
    const a = audio();
    const t = a.currentTime + start;
    const osc = a.createOscillator();
    const gain = a.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(to, t + dur);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain).connect(a.destination);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }

  // Filtered white noise: swishes, snaps, hisses, drum skins.
  function noise({ start = 0, dur = 0.15, vol = 0.2, filter = "bandpass", freq = 1500, to = freq, q = 1 }) {
    const a = audio();
    const t = a.currentTime + start;
    const buf = a.createBuffer(1, Math.ceil(a.sampleRate * dur), a.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const src = a.createBufferSource();
    const f = a.createBiquadFilter();
    const gain = a.createGain();
    src.buffer = buf;
    f.type = filter;
    f.Q.value = q;
    f.frequency.setValueAtTime(freq, t);
    f.frequency.exponentialRampToValueAtTime(to, t + dur);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(gain).connect(a.destination);
    src.start(t);
  }

  const SOUNDS = {
    // Recruit / tuck a card: paper swish.
    tuck: () => noise({ dur: 0.18, vol: 0.25, freq: 800, to: 3000, q: 0.8 }),
    // Scheme: a softer, lower swish.
    scheme: () => noise({ dur: 0.3, vol: 0.18, freq: 500, to: 1200, q: 0.7 }),
    // Street run draw: card snap; pitch rises with heat (ratio = heat / limit).
    draw: (ratio = 0) => {
      noise({ dur: 0.06, vol: 0.3, filter: "highpass", freq: 2500 });
      tone({ freq: 300 + 700 * ratio, to: 350 + 900 * ratio, type: "triangle", dur: 0.12, vol: 0.12 });
    },
    // Caught: two-tone siren blip.
    caught: () => [0, 0.18, 0.36].forEach((s, i) => tone({ freq: i % 2 ? 330 : 470, type: "square", start: s, dur: 0.16, vol: 0.07 })),
    // Stim: quick hiss.
    stim: () => noise({ dur: 0.25, vol: 0.2, filter: "highpass", freq: 4000, to: 7000 }),
    // Uprising result: drum hit, then a rising chord.
    uprising: () => {
      tone({ freq: 140, to: 45, dur: 0.35, vol: 0.5 });
      noise({ dur: 0.12, vol: 0.2, filter: "lowpass", freq: 900 });
      [523, 659, 784].forEach((f, i) => tone({ freq: f, type: "triangle", start: 0.25 + i * 0.08, dur: 0.5, vol: 0.12 }));
    },
    // Rise on the Spire: two ascending notes; Citizen higher than Outcast.
    rise: (k) => {
      const [a, b] = k === "cit" ? [660, 880] : [440, 587];
      tone({ freq: a, type: "sine", dur: 0.12, vol: 0.15 });
      tone({ freq: b, type: "sine", start: 0.1, dur: 0.18, vol: 0.15 });
    },
    // New player's turn: a small bell (two partials, long decay).
    turn: () => {
      tone({ freq: 1320, type: "sine", dur: 0.6, vol: 0.12 });
      tone({ freq: 1980, type: "sine", dur: 0.4, vol: 0.05 });
    },
    // Characters meet / game over: short fanfare.
    fanfare: () => [392, 523, 659, 784].forEach((f, i) => tone({ freq: f, type: "triangle", start: i * 0.12, dur: i === 3 ? 0.6 : 0.16, vol: 0.15 })),
  };

  return {
    play(name, arg) {
      if (muted || !SOUNDS[name]) return;
      try {
        SOUNDS[name](arg);
      } catch (e) {} // sound must never break the game
    },
    get muted() {
      return muted;
    },
    toggle() {
      muted = !muted;
      try {
        localStorage.setItem("tf-muted", muted ? "1" : "0");
      } catch (e) {}
      if (!muted) SOUNDS.tuck();
      return muted;
    },
  };
})();
