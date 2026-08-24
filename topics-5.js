// ---------- 5.1 for loops ----------
(function(){
  const t = createTopicShell("for-loops", "Repeating Things · 1 of 3", "for loops");

  t.insertAdjacentHTML('beforeend', `
    <p>Imagine you had to print "Hello" five times. You could write <code>print("Hello")</code> five separate times — but that's tedious, and what if you needed it 500 times? A <strong>loop</strong> lets you repeat an action without retyping it.</p>
    <p>A <strong>for loop</strong> repeats an action a specific number of times, or once for every item in a group.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">for</span> i <span class="c-kw">in</span> <span class="c-kw">range</span>(<span class="c-num">5</span>):
    <span class="c-kw">print</span>(<span class="c-str">"Hello"</span>)

<span class="c-com"># Output:</span>
<span class="c-out">Hello
Hello
Hello
Hello
Hello</span></div>

    <h3>Breaking it down</h3>
    <ul>
      <li><strong>for</strong> — start a loop</li>
      <li><strong>i</strong> — a temporary name that holds the current value each time around (you can name it anything)</li>
      <li><strong>range(5)</strong> — means "count from 0 up to, but not including, 5" — so 0,1,2,3,4 (five numbers total)</li>
      <li>The indented line underneath runs once for every value</li>
    </ul>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="520" height="150" viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg">
        ${[0,1,2,3,4].map(i => `
          <rect x="${20 + i*95}" y="30" width="70" height="60" rx="10" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
          <text x="${55 + i*95}" y="55" text-anchor="middle" fill="#FFD23F" font-family="JetBrains Mono" font-size="13">i = ${i}</text>
          <text x="${55 + i*95}" y="75" text-anchor="middle" fill="#8AE68A" font-family="Inter" font-size="9">print</text>
        `).join('')}
        <text x="260" y="125" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="11">the loop body runs once per value of i</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Using i inside the loop</h3>
    <p>You can actually use that changing value. This is often more useful than just repeating the same line:</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">for</span> i <span class="c-kw">in</span> <span class="c-kw">range</span>(<span class="c-num">5</span>):
    <span class="c-kw">print</span>(f<span class="c-str">"Count: {i}"</span>)

<span class="c-com"># Output:</span>
<span class="c-out">Count: 0
Count: 1
Count: 2
Count: 3
Count: 4</span></div>

    <h3>Looping over a list</h3>
    <p>You'll learn lists properly in the next section, but here's a preview: a for loop can also go through every item in a group, one at a time.</p>
    <div class="code-block"><span class="tag">Python</span>
fruits = [<span class="c-str">"apple"</span>, <span class="c-str">"banana"</span>, <span class="c-str">"mango"</span>]

<span class="c-kw">for</span> fruit <span class="c-kw">in</span> fruits:
    <span class="c-kw">print</span>(fruit)

<span class="c-com"># Output:</span>
<span class="c-out">apple
banana
mango</span></div>

    <div class="callout"><strong>Plain English:</strong> A for loop means "do this once for every item in this collection" — whether that collection is a range of numbers or a list of things.</div>
  `);

  renderQuiz(t, {
    question: "What does range(5) produce inside a for loop?",
    options: [
      "The numbers 1 through 5",
      "The numbers 0 through 4 (five numbers total)",
      "The number 5 only"
    ],
    correct: 1,
    explain: "range(5) counts from 0 up to, but not including, 5 — giving five numbers: 0, 1, 2, 3, 4."
  });

  renderTopicNav(t, "for-loops");
})();

// ---------- 5.2 while loops ----------
(function(){
  const t = createTopicShell("while-loops", "Repeating Things · 2 of 3", "while loops");

  t.insertAdjacentHTML('beforeend', `
    <p>A <strong>for loop</strong> is great when you know exactly how many times to repeat something. But sometimes you don't know that in advance — you just want to "keep going until something changes." That's what a <strong>while loop</strong> is for.</p>
    <p>A while loop keeps repeating <strong>as long as</strong> a condition stays true.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
count = <span class="c-num">0</span>

<span class="c-kw">while</span> count < <span class="c-num">5</span>:
    <span class="c-kw">print</span>(count)
    count = count + <span class="c-num">1</span>

<span class="c-com"># Output:</span>
<span class="c-out">0
1
2
3
4</span></div>

    <h3>Reading this step by step</h3>
    <ul>
      <li>Start with count = 0</li>
      <li>Check: is count < 5? Yes → print it, then add 1 to count</li>
      <li>Check again: is count < 5? Keep repeating...</li>
      <li>Once count reaches 5, the condition becomes false, and the loop stops</li>
    </ul>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="380" height="220" viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg">
        <rect x="130" y="10" width="120" height="45" rx="22" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="190" y="37" text-anchor="middle" fill="#FFD23F" font-family="Inter" font-size="11">count &lt; 5 ?</text>

        <path d="M190 55 L190 78" stroke="#8AE68A" stroke-width="2" marker-end="url(#arrow5)"/>
        <text x="205" y="70" fill="#8AE68A" font-family="Inter" font-size="10">True</text>

        <rect x="110" y="80" width="160" height="50" rx="10" fill="#2E2A5C" stroke="#8AE68A" stroke-width="1.5"/>
        <text x="190" y="102" text-anchor="middle" fill="#F5F3FF" font-family="Inter" font-size="10">print(count)</text>
        <text x="190" y="118" text-anchor="middle" fill="#F5F3FF" font-family="Inter" font-size="10">count += 1</text>

        <path d="M110 105 Q40 105 40 50 Q40 20 130 30" stroke="#4FD1C5" stroke-width="2" fill="none" marker-end="url(#arrow5)"/>
        <text x="45" y="70" fill="#4FD1C5" font-family="Inter" font-size="9">loop back</text>

        <path d="M250 32 L300 32" stroke="#FF6B9D" stroke-width="2" marker-end="url(#arrow5)"/>
        <text x="300" y="20" fill="#FF6B9D" font-family="Inter" font-size="10">False</text>
        <rect x="270" y="45" width="90" height="40" rx="8" fill="#2E2A5C" stroke="#FF6B9D" stroke-width="1.5"/>
        <text x="315" y="70" text-anchor="middle" fill="#FF6B9D" font-family="Inter" font-size="10">stop</text>

        <defs>
          <marker id="arrow5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#B8B3E0"/>
          </marker>
        </defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>The danger: infinite loops</h3>
    <p>If you forget to change the condition inside the loop, it will <strong>never stop</strong> — your program will freeze, repeating forever. Always make sure something inside the loop eventually makes the condition false.</p>
    <div class="code-block"><span class="tag">⚠ Dangerous — never do this</span>
count = <span class="c-num">0</span>
<span class="c-kw">while</span> count < <span class="c-num">5</span>:
    <span class="c-kw">print</span>(<span class="c-str">"forever..."</span>)
    <span class="c-com"># forgot to increase count — this never stops!</span></div>

    <div class="callout"><strong>When to use which:</strong> Use a for loop when you know how many times to repeat. Use a while loop when you're repeating "until something happens" and you're not sure exactly when that will be.</div>
  `);

  renderQuiz(t, {
    question: "What causes an infinite loop in a while loop?",
    options: [
      "Using range() instead of a number",
      "The condition never becomes false because nothing inside the loop changes it",
      "Printing text inside the loop"
    ],
    correct: 1,
    explain: "If nothing inside the loop changes the variable being checked, the condition stays true forever and the loop never stops."
  });

  renderTopicNav(t, "while-loops");
})();

// ---------- 5.3 break and continue ----------
(function(){
  const t = createTopicShell("break-continue", "Repeating Things · 3 of 3", "break and continue");

  t.insertAdjacentHTML('beforeend', `
    <p>Sometimes you want more control inside a loop — to stop it early, or to skip just one round without stopping entirely. That's what <strong>break</strong> and <strong>continue</strong> do.</p>

    <h3>break — stop the loop completely</h3>
    <p>break immediately exits the loop, even if it hasn't finished all its planned repeats.</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">for</span> i <span class="c-kw">in</span> <span class="c-kw">range</span>(<span class="c-num">10</span>):
    <span class="c-kw">if</span> i == <span class="c-num">5</span>:
        <span class="c-kw">break</span>
    <span class="c-kw">print</span>(i)

<span class="c-com"># Output:</span>
<span class="c-out">0
1
2
3
4</span></div>
    <p>Even though range(10) planned for 10 rounds, the loop stopped completely the moment i became 5.</p>

    <h3>continue — skip just this one round</h3>
    <p>continue skips the rest of the current round and jumps straight to the next one — the loop keeps going, it just skips one step.</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">for</span> i <span class="c-kw">in</span> <span class="c-kw">range</span>(<span class="c-num">5</span>):
    <span class="c-kw">if</span> i == <span class="c-num">2</span>:
        <span class="c-kw">continue</span>
    <span class="c-kw">print</span>(i)

<span class="c-com"># Output:</span>
<span class="c-out">0
1
3
4</span></div>
    <p>Notice 2 is missing — it was skipped, but the loop still continued on to 3 and 4 afterward.</p>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="500" height="140" viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="20" fill="#B8B3E0" font-family="Inter" font-size="11" font-weight="600">break: stops everything</text>
        ${[0,1,2].map(i => `<rect x="${10+i*40}" y="30" width="30" height="30" rx="6" fill="#2E2A5C" stroke="#8AE68A"/>`).join('')}
        <rect x="130" y="30" width="30" height="30" rx="6" fill="#2E2A5C" stroke="#FF6B9D" stroke-width="2"/>
        <text x="145" y="50" text-anchor="middle" fill="#FF6B9D" font-family="Inter" font-size="9">✕</text>
        <text x="200" y="50" fill="#B8B3E0" font-family="Inter" font-size="10">← loop ends here</text>

        <text x="10" y="95" fill="#B8B3E0" font-family="Inter" font-size="11" font-weight="600">continue: skips just one</text>
        ${[0,1].map(i => `<rect x="${10+i*40}" y="105" width="30" height="30" rx="6" fill="#2E2A5C" stroke="#8AE68A"/>`).join('')}
        <rect x="90" y="105" width="30" height="30" rx="6" fill="#2E2A5C" stroke="#FFD23F" stroke-dasharray="3"/>
        <text x="105" y="125" text-anchor="middle" fill="#FFD23F" font-family="Inter" font-size="9">skip</text>
        ${[0,1].map(i => `<rect x="${130+i*40}" y="105" width="30" height="30" rx="6" fill="#2E2A5C" stroke="#8AE68A"/>`).join('')}
        <text x="260" y="125" fill="#B8B3E0" font-family="Inter" font-size="10">← loop keeps going after</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <div class="callout"><strong>Plain English:</strong> break = "I'm done, leave the loop entirely." continue = "Skip this one, but keep going with the rest."</div>
  `);

  renderQuiz(t, {
    question: "What's the difference between break and continue?",
    options: [
      "They do the same thing",
      "break exits the loop completely; continue skips only the current round and keeps looping",
      "break skips one round; continue exits completely"
    ],
    correct: 1,
    explain: "break stops the whole loop immediately, while continue just skips the rest of the current round and moves to the next one."
  });

  renderTopicNav(t, "break-continue");
})();
