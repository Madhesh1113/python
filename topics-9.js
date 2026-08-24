// ---------- 9.1 Errors and exceptions ----------
(function(){
  const t = createTopicShell("errors", "Handling Problems · 1 of 3", "Errors and exceptions");

  t.insertAdjacentHTML('beforeend', `
    <p>Things go wrong sometimes — you might try to open a file that doesn't exist, divide by zero, or use a variable you never created. When this happens, Python stops and shows you an <strong>error</strong> (also called an <strong>exception</strong>).</p>
    <p>This isn't Python being difficult — it's Python telling you exactly what went wrong, so you can fix it.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">print</span>(<span class="c-num">10</span> / <span class="c-num">0</span>)

<span class="c-com"># Output:</span>
<span class="c-out">ZeroDivisionError: division by zero</span></div>

    <h3>Common error types you'll meet</h3>
    <ul>
      <li><strong>ZeroDivisionError</strong> — tried to divide a number by zero</li>
      <li><strong>NameError</strong> — used a variable that was never created</li>
      <li><strong>TypeError</strong> — mixed incompatible types, like adding text and a number directly</li>
      <li><strong>ValueError</strong> — the right type, but an invalid value, like <code>int("hello")</code></li>
      <li><strong>FileNotFoundError</strong> — tried to open a file that doesn't exist</li>
    </ul>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="480" height="150" viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="440" height="110" rx="10" fill="#14122E" stroke="#FF6B9D" stroke-width="1.5"/>
        <text x="40" y="45" fill="#FF6B9D" font-family="JetBrains Mono" font-size="11" font-weight="600">Traceback (most recent call last):</text>
        <text x="40" y="65" fill="#B8B3E0" font-family="JetBrains Mono" font-size="10">  File "app.py", line 1, in &lt;module&gt;</text>
        <text x="40" y="85" fill="#B8B3E0" font-family="JetBrains Mono" font-size="10">    print(10 / 0)</text>
        <text x="40" y="110" fill="#FF6B9D" font-family="JetBrains Mono" font-size="11" font-weight="600">ZeroDivisionError: division by zero</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>How to read an error message</h3>
    <p>An error message (called a <strong>traceback</strong>) usually tells you three things: which file, which line number, and what exactly went wrong (the last line, in bold-looking text). Always read the <strong>last line first</strong> — that's the actual problem.</p>

    <div class="callout"><strong>Plain English:</strong> An error isn't a punishment — it's Python's way of pointing directly at the problem so you don't have to guess. Reading the last line of the message is usually the fastest way to understand what went wrong.</div>
  `);

  renderQuiz(t, {
    question: "When reading a Python error message (traceback), which line should you read first to understand the problem?",
    options: ["The first line", "The last line", "It doesn't matter"],
    correct: 1,
    explain: "The last line of a traceback states the actual error type and message — that's the fastest way to understand what went wrong."
  });

  renderTopicNav(t, "errors");
})();

// ---------- 9.2 try / except ----------
(function(){
  const t = createTopicShell("try-except", "Handling Problems · 2 of 3", "try / except");

  t.insertAdjacentHTML('beforeend', `
    <p>An error will normally crash your program completely. But sometimes you expect that something <em>might</em> go wrong, and you want your program to handle it gracefully instead of crashing. That's what <strong>try / except</strong> is for.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">try</span>:
    number = <span class="c-kw">int</span>(<span class="c-kw">input</span>(<span class="c-str">"Enter a number: "</span>))
    <span class="c-kw">print</span>(<span class="c-num">10</span> / number)
<span class="c-kw">except</span>:
    <span class="c-kw">print</span>(<span class="c-str">"Something went wrong — please enter a valid, non-zero number."</span>)</div>

    <ul>
      <li><strong>try</strong> — "attempt this code, it might fail"</li>
      <li><strong>except</strong> — "if it fails, do this instead of crashing"</li>
    </ul>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="440" height="170" viewBox="0 0 440 170" xmlns="http://www.w3.org/2000/svg">
        <rect x="140" y="10" width="160" height="45" rx="8" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="220" y="37" text-anchor="middle" fill="#FFD23F" font-family="Inter" font-size="11">try this code</text>

        <path d="M180 55 L80 95" stroke="#8AE68A" stroke-width="2" marker-end="url(#arrowtry)"/>
        <text x="100" y="80" fill="#8AE68A" font-family="Inter" font-size="10">works fine</text>
        <path d="M260 55 L360 95" stroke="#FF6B9D" stroke-width="2" marker-end="url(#arrowtry)"/>
        <text x="330" y="80" fill="#FF6B9D" font-family="Inter" font-size="10">fails</text>

        <rect x="10" y="100" width="150" height="50" rx="8" fill="#2E2A5C" stroke="#8AE68A" stroke-width="1.5"/>
        <text x="85" y="130" text-anchor="middle" fill="#F5F3FF" font-family="Inter" font-size="10">continue normally</text>

        <rect x="280" y="100" width="150" height="50" rx="8" fill="#2E2A5C" stroke="#FF6B9D" stroke-width="1.5"/>
        <text x="355" y="130" text-anchor="middle" fill="#F5F3FF" font-family="Inter" font-size="10">run except block</text>

        <defs><marker id="arrowtry" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#B8B3E0"/></marker></defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Catching a specific error</h3>
    <p>It's usually better to catch a specific error type, rather than "anything at all," so you know exactly what you're handling.</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">try</span>:
    number = <span class="c-kw">int</span>(<span class="c-kw">input</span>(<span class="c-str">"Enter a number: "</span>))
    <span class="c-kw">print</span>(<span class="c-num">10</span> / number)
<span class="c-kw">except</span> ZeroDivisionError:
    <span class="c-kw">print</span>(<span class="c-str">"You can't divide by zero!"</span>)
<span class="c-kw">except</span> ValueError:
    <span class="c-kw">print</span>(<span class="c-str">"That wasn't a valid number."</span>)</div>

    <p>Now the program gives a specific, helpful message depending on exactly what went wrong.</p>

    <div class="callout"><strong>Plain English:</strong> try/except is like saying "attempt this, but if it blows up, here's a backup plan instead of crashing completely."</div>
  `);

  renderQuiz(t, {
    question: "What is the purpose of try/except?",
    options: [
      "To make code run faster",
      "To attempt code that might fail, and handle the failure gracefully instead of crashing",
      "To repeat code multiple times"
    ],
    correct: 1,
    explain: "try/except lets your program attempt something risky and respond sensibly if it fails, rather than crashing entirely."
  });

  renderTopicNav(t, "try-except");
})();

// ---------- 9.3 Debugging tips ----------
(function(){
  const t = createTopicShell("debugging", "Handling Problems · 3 of 3", "Reading error messages & debugging tips");

  t.insertAdjacentHTML('beforeend', `
    <p><strong>Debugging</strong> just means finding and fixing what's wrong in your code. Every programmer, no matter how experienced, spends a lot of time doing this — it's completely normal, not a sign you're bad at this.</p>

    <h3>A simple approach when something breaks</h3>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="480" height="230" viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg">
        ${[
          ["1. Read the last line of the error", "#FFD23F"],
          ["2. Find the line number it points to", "#4FD1C5"],
          ["3. Look at that exact line closely", "#FF6B9D"],
          ["4. Print variable values nearby to check them", "#8AE68A"]
        ].map((s,i) => `
          <rect x="30" y="${10+i*52}" width="420" height="42" rx="8" fill="#2E2A5C" stroke="${s[1]}" stroke-width="1.5"/>
          <text x="50" y="${36+i*52}" fill="${s[1]}" font-family="Inter" font-size="12">${s[0]}</text>
        `).join('')}
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Using print() to investigate</h3>
    <p>One of the simplest, most effective debugging tools is just printing variable values at different points to see what's actually happening.</p>
    <div class="code-block"><span class="tag">Python</span>
total = <span class="c-num">0</span>
items = [<span class="c-num">10</span>, <span class="c-num">20</span>, <span class="c-num">30</span>]

<span class="c-kw">for</span> item <span class="c-kw">in</span> items:
    total = total + item
    <span class="c-kw">print</span>(f<span class="c-str">"item: {item}, running total: {total}"</span>)  <span class="c-com"># debug line</span>

<span class="c-com"># Output:</span>
<span class="c-out">item: 10, running total: 10
item: 20, running total: 30
item: 30, running total: 60</span></div>
    <p>Seeing the values at each step often reveals exactly where your assumption was wrong.</p>

    <h3>Common beginner mistakes to check for first</h3>
    <ul>
      <li>Mismatched indentation (Python cares about this — always be consistent)</li>
      <li>Using <code>=</code> when you meant <code>==</code></li>
      <li>Forgetting quotes around text</li>
      <li>Off-by-one mistakes with list positions (remember: counting starts at 0)</li>
      <li>Typos in variable or function names (Python is case-sensitive)</li>
    </ul>

    <div class="callout"><strong>Mindset:</strong> An error message is a clue, not a wall. Read it slowly, check the line it points to, and don't be afraid to add a few print() statements to see what your program is actually doing.</div>
  `);

  renderQuiz(t, {
    question: "What's a quick and effective way to see what's happening inside your program while debugging?",
    options: [
      "Delete the code and start over",
      "Add print() statements to check variable values at different points",
      "Ignore the error and run it again"
    ],
    correct: 1,
    explain: "Printing variable values at key points is one of the simplest and most effective ways to understand what your program is actually doing."
  });

  renderTopicNav(t, "debugging");
})();
