// ---------- 3.1 Strings in detail ----------
(function(){
  const t = createTopicShell("strings", "Text Handling · 1 of 2", "Strings in detail");

  t.insertAdjacentHTML('beforeend', `
    <p>A <strong>string</strong> is just Python's word for "a piece of text." You already met strings briefly — anything inside quotes, like <code>"hello"</code>. Now let's see what you can actually do with them.</p>

    <h3>Joining strings together</h3>
    <p>You can stick two pieces of text together using <code>+</code>. This is called <strong>concatenation</strong> — a fancy word that just means "joining."</p>
    <div class="code-block"><span class="tag">Python</span>
first = <span class="c-str">"Python"</span>
second = <span class="c-str">"Basics"</span>
<span class="c-kw">print</span>(first + <span class="c-str">" "</span> + second)

<span class="c-com"># Output:</span>
<span class="c-out">Python Basics</span></div>

    <h3>Changing case</h3>
    <div class="code-block"><span class="tag">Python</span>
word = <span class="c-str">"Hello"</span>
<span class="c-kw">print</span>(word.upper())   <span class="c-com"># HELLO</span>
<span class="c-kw">print</span>(word.lower())   <span class="c-com"># hello</span></div>

    <h3>Finding the length</h3>
    <p><code>len()</code> tells you how many characters (letters, spaces, symbols) are in a string.</p>
    <div class="code-block"><span class="tag">Python</span>
word = <span class="c-str">"Python"</span>
<span class="c-kw">print</span>(<span class="c-kw">len</span>(word))

<span class="c-com"># Output:</span>
<span class="c-out">6</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="480" height="130" viewBox="0 0 480 130" xmlns="http://www.w3.org/2000/svg">
        <text x="20" y="30" fill="#B8B3E0" font-family="Inter" font-size="11">Each letter has a position, starting from 0:</text>
        ${["P","y","t","h","o","n"].map((ch,i) => `
          <rect x="${20 + i*60}" y="45" width="50" height="50" rx="8" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
          <text x="${45 + i*60}" y="76" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="18">${ch}</text>
          <text x="${45 + i*60}" y="112" text-anchor="middle" fill="#FFD23F" font-family="JetBrains Mono" font-size="11">${i}</text>
        `).join('')}
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Slicing — picking out parts of a string</h3>
    <p>Since every character has a position number (called an <strong>index</strong>), starting at 0, you can grab a single character or a range of characters.</p>
    <div class="code-block"><span class="tag">Python</span>
word = <span class="c-str">"Python"</span>

<span class="c-kw">print</span>(word[<span class="c-num">0</span>])      <span class="c-com"># first letter -&gt; P</span>
<span class="c-kw">print</span>(word[<span class="c-num">2</span>])      <span class="c-com"># third letter -&gt; t</span>
<span class="c-kw">print</span>(word[<span class="c-num">0</span>:<span class="c-num">3</span>])    <span class="c-com"># from position 0 up to (not including) 3 -&gt; Pyt</span></div>

    <div class="callout"><strong>Remember:</strong> Python starts counting from 0, not 1. So the "first" character is at position 0. This trips up almost every beginner at least once — now you know!</div>
  `);

  renderQuiz(t, {
    question: 'If word = "Python", what does word[0] give you?',
    options: ["P", "y", "n"],
    correct: 0,
    explain: "Python counts positions starting from 0, so word[0] is the very first character: P."
  });

  renderTopicNav(t, "strings");
})();

// ---------- 3.2 input() ----------
(function(){
  const t = createTopicShell("input", "Text Handling · 2 of 2", "input() — asking the user");

  t.insertAdjacentHTML('beforeend', `
    <p>So far, everything in our programs has been fixed — we typed the values ourselves. But real programs often need to ask the person using them for information. That's what <strong>input()</strong> is for.</p>
    <p>When Python runs an <code>input()</code> line, the program <strong>pauses</strong> and waits for the person to type something and press Enter. Whatever they type gets handed back to your program.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
name = <span class="c-kw">input</span>(<span class="c-str">"What is your name? "</span>)
<span class="c-kw">print</span>(f<span class="c-str">"Nice to meet you, {name}!"</span>)

<span class="c-com"># What happens when this runs:</span>
<span class="c-out">What is your name? Madhesh
Nice to meet you, Madhesh!</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="500" height="150" viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="45" width="140" height="55" rx="10" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="80" y="68" text-anchor="middle" fill="#FFD23F" font-family="Space Grotesk" font-size="12" font-weight="600">Program</text>
        <text x="80" y="85" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">asks a question</text>

        <path d="M155 72 L215 72" stroke="#4FD1C5" stroke-width="2" marker-end="url(#arrow3)"/>
        <text x="185" y="63" text-anchor="middle" fill="#4FD1C5" font-family="Inter" font-size="9">waits...</text>

        <rect x="220" y="45" width="140" height="55" rx="10" fill="#2E2A5C" stroke="#FF6B9D" stroke-width="1.5"/>
        <text x="290" y="68" text-anchor="middle" fill="#FF6B9D" font-family="Space Grotesk" font-size="12" font-weight="600">Person</text>
        <text x="290" y="85" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">types an answer</text>

        <path d="M365 72 L425 72" stroke="#8AE68A" stroke-width="2" marker-end="url(#arrow3)"/>

        <rect x="430" y="45" width="60" height="55" rx="10" fill="#2E2A5C" stroke="#8AE68A" stroke-width="1.5"/>
        <text x="460" y="78" text-anchor="middle" fill="#8AE68A" font-family="Inter" font-size="10">stored</text>

        <defs>
          <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#4FD1C5"/>
          </marker>
        </defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Important: input() always gives you text</h3>
    <p>Even if someone types a number, Python treats it as a string (text), not a number, unless you convert it. This surprises a lot of beginners.</p>
    <div class="code-block"><span class="tag">Python</span>
age = <span class="c-kw">input</span>(<span class="c-str">"How old are you? "</span>)
<span class="c-kw">print</span>(<span class="c-kw">type</span>(age))

<span class="c-com"># Output (even if you typed 25):</span>
<span class="c-out">&lt;class 'str'&gt;</span></div>

    <p>To do math with it, you need to convert it to a number using <code>int()</code> or <code>float()</code>:</p>
    <div class="code-block"><span class="tag">Python</span>
age = <span class="c-kw">input</span>(<span class="c-str">"How old are you? "</span>)
age = <span class="c-kw">int</span>(age)   <span class="c-com"># now it's a real number</span>
<span class="c-kw">print</span>(age + <span class="c-num">1</span>)   <span class="c-com"># now math works correctly</span></div>

    <div class="callout"><strong>Rule of thumb:</strong> If you plan to do math with an input, always convert it with <code>int()</code> or <code>float()</code> first.</div>
  `);

  renderQuiz(t, {
    question: "What type of data does input() always give you, before any conversion?",
    options: ["A number (int)", "Text (str)", "True or False (bool)"],
    correct: 1,
    explain: "input() always returns text (a string) — even if the person types digits, you must convert it to use it as a number."
  });

  renderTopicNav(t, "input");
})();
