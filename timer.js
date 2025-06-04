// window.timerSteps = [
//   {
//     label: "Introduction",
//     description: "Welcome, explain the experiment, introduce footballs and pressure.",
//     duration: 5 * 60 // 5 min
//   },
//   {
//     label: "Experiment Video",
//     description: "Watch the experiment video and team footage.",
//     duration: 2 * 60 // 2 min
//   },
//   {
//     label: "Experiment Outline",
//     description: "Visual cue, outline experiment steps.",
//     duration: 0 // 0 min
//   },
//   {
//     label: "Active Experiment - Part 1",
//     description: "Groups drop and record bounces for first ball.",
//     duration: 3 * 60 // 3 min
//   },
//   {
//     label: "Swap Balls",
//     description: "Blow whistle, swap balls.",
//     duration: 30 // 30 sec
//   },
//   {
//     label: "Active Experiment - Part 2",
//     description: "Groups drop and record bounces for second ball.",
//     duration: 3 * 60 // 3 min
//   },
//   {
//     label: "Swap Balls",
//     description: "Blow whistle, swap balls.",
//     duration: 30 // 30 sec
//   },
//   {
//     label: "Return Balls",
//     description: "Students return balls.",
//     duration: 60 // 1 min
//   },
//   {
//     label: "Graph Plotting",
//     description: "Groups plot info on graph.",
//     duration: 3 * 60 // 3 min
//   },
//   {
//     label: "Discussion Questions",
//     description: "Discuss questions in groups.",
//     duration: 4 * 60 // 4 min
//   },
//   {
//     label: "Show Graph & Discussion",
//     description: "Show online graph and whole group discussion.",
//     duration: 5 * 60 // 5 min
//   },
//   {
//     label: "Extra Content",
//     description: "Discussion about research methodology.",
//     duration: 10 * 60 // 10 min
//   },
//   {
//     label: "End",
//     description: "Wrap up and finish.",
//     duration: 3 * 60 // 3 min
//   }
// ];

// // sectionIds should match your main sections
// const sectionIds = [
//   "introduction",
//   "experiment",
//   "theory-outline",
//   "conclusions-questions"
// ];

// // Call this whenever the timer updates
// function updateFootballClockDisplay(seconds) {
//   const min = Math.floor(seconds / 60).toString().padStart(2, '0');
//   const sec = (seconds % 60).toString().padStart(2, '0');
//   const clock = document.getElementById('clock-time');
//   if (clock) clock.textContent = `${min}:${sec}`;
// }

// // Call this on every timer tick
// function moveFootballGradually(timerIndex, timerRemaining) {
//   const icon = document.getElementById('football-icon');
//   const section = document.getElementById(sectionIds[timerIndex]);
//   if (!icon || !section) return;

//   const rect = section.getBoundingClientRect();
//   const scrollTop = window.scrollY || document.documentElement.scrollTop;
//   const sectionTop = rect.top + scrollTop;
//   const sectionHeight = rect.height;

//   // Get total duration for this step
//   const total = window.timerSteps[timerIndex].duration || 1;
//   const elapsed = total - timerRemaining;
//   // Clamp progress between 0 and 1
//   const progress = Math.min(Math.max(elapsed / total, 0), 1);

//   // Move football from top to bottom of section as time passes
//   const iconTop = sectionTop + progress * (sectionHeight - 20); // 20 = icon height
//   icon.style.top = `${iconTop}px`;
// }

// // Example: in your timer interval
// // updateFootballClockDisplay(timerRemaining);
// // moveFootballGradually(timerIndex, timerRemaining);

// window.timer = {
//   timerIndex: 0,
//   timerInterval: null,
//   timerRemaining: 0,

//   renderSteps: function() {
//     const list = document.getElementById('timer-step-list');
//     if (!list) return;
//     list.innerHTML = '';
//     window.timerSteps.forEach((step, i) => {
//       const btn = document.createElement('button');
//       btn.textContent = `${step.label} (${step.duration ? Math.floor(step.duration/60) + 'm' : '0m'})`;
//       btn.className = (i === this.timerIndex) ? 'active' : '';
//       btn.onclick = () => this.selectStep(i);
//       list.appendChild(btn);
//     });
//   },

//   selectStep: function(i) {
//     this.timerIndex = i;
//     this.timerRemaining = window.timerSteps[i].duration;
//     this.updateDisplay();
//     this.renderSteps();
//     this.pause();
//     updateFootballClockDisplay(this.timerRemaining);
//     moveFootballGradually(this.timerIndex, this.timerRemaining);
//   },

//   updateDisplay: function() {
//     const step = window.timerSteps[this.timerIndex];
//     document.getElementById('timer-label').textContent = step.label;
//     document.getElementById('timer-desc').textContent = step.description;
//     updateFootballClockDisplay(this.timerRemaining);
//   },

//   start: function() {
//     if (this.timerInterval) return;
//     this.timerInterval = setInterval(() => {
//       if (this.timerRemaining > 0) {
//         this.timerRemaining--;
//         this.updateDisplay();
//         updateFootballClockDisplay(this.timerRemaining);
//         moveFootballGradually(this.timerIndex, this.timerRemaining);
//       } else {
//         this.pause();
//         // Optionally auto-advance to next step
//         // this.next();
//       }
//     }, 1000);
//   },

//   pause: function() {
//     clearInterval(this.timerInterval);
//     this.timerInterval = null;
//   },

//   next: function() {
//     if (this.timerIndex < window.timerSteps.length - 1) {
//       this.selectStep(this.timerIndex + 1);
//     }
//   },

//   prev: function() {
//     if (this.timerIndex > 0) {
//       this.selectStep(this.timerIndex - 1);
//     }
//   }
// };

// // 6. Attach controls after DOM is loaded
// window.addEventListener('DOMContentLoaded', () => {
//   window.timer.selectStep(0);
//   window.timer.renderSteps();
//   document.getElementById('timer-start').onclick = () => window.timer.start();
//   document.getElementById('timer-pause').onclick = () => window.timer.pause();
//   document.getElementById('timer-next').onclick = () => window.timer.next();
//   document.getElementById('timer-prev').onclick = () => window.timer.prev();
// });
