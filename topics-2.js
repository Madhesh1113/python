// ---------- 2.1 Variables ----------
(function(){
  const t = createTopicShell("variables", "Storing Information · 1 of 4", "Variables");

  t.insertAdjacentHTML('beforeend', `
    <p>A <strong>variable</strong> is simply a labeled box where you can store a piece of information, so you can use it again later without retyping it.</p>
    <p>Imagine you have a box, you write a name on it like "age", and you put the number 25 inside. Any time you want to know or use that number, you just say "age" instead of "25".</p>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="560" height="170" viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="40" width="140" height="90" rx="10" fill="#2E2A5C" stroke="#FFD23F" stroke-width="2"/>
        <text x="100" y="30" text-anchor="middle" fill="#FFD23F" font-family="Space Grotesk" font-size="13" font-weight="600">age</text>
        <text x="100" y="92" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="22" font-weight="600">25</text>

        <rect x="220" y="40" width="140" height="90" rx="10" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="2"/>
        <text x="290" y="30" text-anchor="middle" fill="#4FD1C5" font-family="Space Grotesk" font-size="13" font-weight="600">name</text>
        <text x="290" y="92" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="16" font-weight="600">"Madhesh"</text>

        <rect x="410" y="40" width="140" height="90" rx="10" fill="#2E2A5C" stroke="#FF6B9D" stroke-width="2"/>
        <text x="480" y="30" text-anchor="middle" fill="#FF6B9D" font-family="Space Grotesk" font-size="13" font-weight="600">is_student</text>
        <text x="480" y="92" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="16" font-weight="600">True</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <p>Each box above is a variable: a name on the outside, a value stored inside. In Python, you create a variable using a single equals sign <code>=</code>, which means "store this value in this name."</p>
    <div class="code-block"><span class="tag">Python</span>
age = <span class="c-num">25</span>
name = <span class="c-str">"Madhesh"</span>
is_student = <span class="c-kw">True</span>

<span class="c-kw">print</span>(age)
<span class="c-kw">print</span>(name)

<span class="c-com"># Output:</span>
<span class="c-out">25
Madhesh</span></div>

    <h3>Rules for naming variables</h3>
    <ul>
      <li>Names can have letters, numbers, and underscores — but can't start with a number</li>
      <li>No spaces allowed (use <code>my_age</code>, not <code>my age</code>)</li>
      <li>Names are case-sensitive: <code>Age</code> and <code>age</code> are two different variables</li>
      <li>Pick names that describe what's stored — <code>score</code> is better than <code>x</code></li>
    </ul>

    <h3>Variables can change</h3>
    <p>The word "variable" literally means "able to vary" — the value inside the box can be replaced at any time.</p>
    <div class="code-block"><span class="tag">Python</span>
score = <span class="c-num">10</span>
<span class="c-kw">print</span>(score)   <span class="c-com"># shows 10</span>

score = <span class="c-num">50</span>
<span class="c-kw">print</span>(score)   <span class="c-com"># now shows 50</span></div>
  `);

  renderQuiz(t, {
    question: "What does a variable do?",
    options: [
      "Deletes information permanently",
      "Stores a value under a name so you can reuse it",
      "Only works with numbers"
    ],
    correct: 1,
    explain: "A variable is a named box that holds a value you can reuse or change later."
  });

  renderTopicNav(t, "variables");
})();

// ---------- 2.2 Data types ----------
(function(){
  const t = createTopicShell("data-types", "Storing Information · 2 of 4", "Data types");

  t.insertAdjacentHTML('beforeend', `
    <p>Not all information is the same kind. A number behaves differently from a word, and a word behaves differently from a yes/no answer. Python needs to know what <strong>kind</strong> — or <strong>type</strong> — of information it's dealing with, so it knows what you're allowed to do with it.</p>
    <p>Here are the four basic types you'll use constantly:</p>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="600" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="130" height="80" rx="10" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
        <text x="75" y="35" text-anchor="middle" fill="#4FD1C5" font-family="Space Grotesk" font-size="12" font-weight="600">int</text>
        <text x="75" y="55" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="14">42</text>
        <text x="75" y="75" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="9">whole numbers</text>

        <rect x="155" y="10" width="130" height="80" rx="10" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="220" y="35" text-anchor="middle" fill="#FFD23F" font-family="Space Grotesk" font-size="12" font-weight="600">float</text>
        <text x="220" y="55" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="14">3.14</text>
        <text x="220" y="75" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="9">decimal numbers</text>

        <rect x="300" y="10" width="130" height="80" rx="10" fill="#2E2A5C" stroke="#FF6B9D" stroke-width="1.5"/>
        <text x="365" y="35" text-anchor="middle" fill="#FF6B9D" font-family="Space Grotesk" font-size="12" font-weight="600">str</text>
        <text x="365" y="55" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="13">"hello"</text>
        <text x="365" y="75" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="9">text</text>

        <rect x="445" y="10" width="130" height="80" rx="10" fill="#2E2A5C" stroke="#8AE68A" stroke-width="1.5"/>
        <text x="510" y="35" text-anchor="middle" fill="#8AE68A" font-family="Space Grotesk" font-size="12" font-weight="600">bool</text>
        <text x="510" y="55" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="14">True</text>
        <text x="510" y="75" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="9">yes / no</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>The four basics</h3>
    <ul>
      <li><strong>int (integer)</strong> — a whole number, no decimal point. Example: <code>7</code>, <code>200</code>, <code>-5</code></li>
      <li><strong>float</strong> — a number with a decimal point. Example: <code>3.14</code>, <code>0.5</code>, <code>99.99</code></li>
      <li><strong>str (string)</strong> — text, always wrapped in quotes. Example: <code>"hello"</code>, <code>"Python"</code></li>
      <li><strong>bool (boolean)</strong> — only two possible values: <code>True</code> or <code>False</code>. Used for yes/no, on/off type answers.</li>
    </ul>

    <div class="code-block"><span class="tag">Python</span>
age = <span class="c-num">25</span>            <span class="c-com"># int</span>
price = <span class="c-num">19.99</span>       <span class="c-com"># float</span>
city = <span class="c-str">"Chennai"</span>    <span class="c-com"># str</span>
is_open = <span class="c-kw">True</span>       <span class="c-com"># bool</span></div>

    <h3>Checking a type yourself</h3>
    <p>If you're ever unsure what type something is, Python can tell you directly using <code>type()</code>.</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">print</span>(<span class="c-kw">type</span>(<span class="c-num">25</span>))
<span class="c-com"># Output:</span>
<span class="c-out">&lt;class 'int'&gt;</span></div>

    <div class="callout"><strong>Why it matters:</strong> Python treats numbers and text very differently. <code>5 + 5</code> gives you <code>10</code>, but <code>"5" + "5"</code> gives you <code>"55"</code> (it just joins the text together). Knowing the type prevents confusing mistakes.</div>
  `);

  renderQuiz(t, {
    question: 'Which data type is "Chennai"?',
    options: ["int", "bool", "str"],
    correct: 2,
    explain: '"Chennai" is text wrapped in quotes, which makes it a string (str).'
  });

  renderTopicNav(t, "data-types");
})();

// ---------- 2.3 Math operations ----------
(function(){
  const t = createTopicShell("math-ops", "Storing Information · 3 of 4", "Basic math operations");

  t.insertAdjacentHTML('beforeend', `
    <p>Python can do arithmetic just like a calculator. You use familiar symbols, with a couple of small differences from what you might expect.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <h3>The operators</h3>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">print</span>(<span class="c-num">10</span> + <span class="c-num">3</span>)   <span class="c-com"># addition        -&gt; 13</span>
<span class="c-kw">print</span>(<span class="c-num">10</span> - <span class="c-num">3</span>)   <span class="c-com"># subtraction     -&gt; 7</span>
<span class="c-kw">print</span>(<span class="c-num">10</span> * <span class="c-num">3</span>)   <span class="c-com"># multiplication  -&gt; 30</span>
<span class="c-kw">print</span>(<span class="c-num">10</span> / <span class="c-num">3</span>)   <span class="c-com"># division        -&gt; 3.333...</span>
<span class="c-kw">print</span>(<span class="c-num">10</span> // <span class="c-num">3</span>)  <span class="c-com"># floor division  -&gt; 3 (drops the decimal)</span>
<span class="c-kw">print</span>(<span class="c-num">10</span> % <span class="c-num">3</span>)   <span class="c-com"># remainder       -&gt; 1</span>
<span class="c-kw">print</span>(<span class="c-num">10</span> ** <span class="c-num">2</span>)  <span class="c-com"># power (10 squared) -&gt; 100</span></div>

    <h3>What "remainder" (%) actually means</h3>
    <p>This one confuses beginners the most, so here's a plain picture: if you divide 10 things into groups of 3, you get 3 full groups, with 1 left over. That leftover amount is what <code>%</code> gives you.</p>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="500" height="140" viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg">
        ${[0,1,2].map(g => `<g>
          <rect x="${20 + g*140}" y="20" width="120" height="60" rx="8" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
          <text x="${80 + g*140}" y="55" text-anchor="middle" fill="#4FD1C5" font-family="JetBrains Mono" font-size="13">●●●</text>
        </g>`).join('')}
        <rect x="440" y="20" width="45" height="60" rx="8" fill="#2E2A5C" stroke="#FF6B9D" stroke-width="1.5" stroke-dasharray="4"/>
        <text x="462" y="55" text-anchor="middle" fill="#FF6B9D" font-family="JetBrains Mono" font-size="13">●</text>
        <text x="250" y="110" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="11">3 full groups of 3, with 1 left over → 10 % 3 = 1</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Order of operations</h3>
    <p>Python follows the same math rules you learned in school — multiplication and division happen before addition and subtraction, unless you use brackets to control the order.</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">print</span>(<span class="c-num">2</span> + <span class="c-num">3</span> * <span class="c-num">4</span>)    <span class="c-com"># -&gt; 14 (3*4 happens first)</span>
<span class="c-kw">print</span>((<span class="c-num">2</span> + <span class="c-num">3</span>) * <span class="c-num">4</span>)  <span class="c-com"># -&gt; 20 (brackets happen first)</span></div>
  `);

  renderQuiz(t, {
    question: "What does 10 % 3 give you in Python?",
    options: ["3.33", "1", "3"],
    correct: 1,
    explain: "10 divided by 3 is 3 full groups, with 1 left over — that leftover is what % (remainder) gives you."
  });

  renderTopicNav(t, "math-ops");
})();

// ---------- 2.4 f-strings ----------
(function(){
  const t = createTopicShell("fstrings", "Storing Information · 4 of 4", "f-strings");

  t.insertAdjacentHTML('beforeend', `
    <p>Very often, you'll want to mix plain text with a variable's value — like saying "Hello, Madhesh!" where "Madhesh" comes from a variable. Python's cleanest way to do this is called an <strong>f-string</strong>.</p>
    <p>You write the letter <code>f</code> right before the opening quote, and then put any variable inside curly braces <code>{ }</code> wherever you want its value to appear.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
name = <span class="c-str">"Madhesh"</span>
age = <span class="c-num">25</span>

<span class="c-kw">print</span>(f<span class="c-str">"Hello, {name}! You are {age} years old."</span>)

<span class="c-com"># Output:</span>
<span class="c-out">Hello, Madhesh! You are 25 years old.</span></div>

    <h3>Why not just glue text together?</h3>
    <p>Before f-strings, people joined text and variables with <code>+</code>, but that only works with text, and gets messy fast:</p>
    <div class="code-block"><span class="tag">Older, clunkier way</span>
<span class="c-kw">print</span>(<span class="c-str">"Hello, "</span> + name + <span class="c-str">"! You are "</span> + <span class="c-kw">str</span>(age) + <span class="c-str">" years old."</span>)</div>
    <p>f-strings avoid all that. You just write the sentence naturally and drop variables in with curly braces — no gluing, no converting numbers to text by hand.</p>

    <h3>You can even do quick math inside</h3>
    <div class="code-block"><span class="tag">Python</span>
price = <span class="c-num">100</span>
tax = <span class="c-num">18</span>
<span class="c-kw">print</span>(f<span class="c-str">"Total: {price + tax}"</span>)

<span class="c-com"># Output:</span>
<span class="c-out">Total: 118</span></div>

    <div class="callout"><strong>Rule of thumb:</strong> Whenever you want to combine words and variable values into one readable sentence, reach for an f-string.</div>
  `);

  renderQuiz(t, {
    question: 'If name = "Amogaa", what does f"Hi {name}!" produce?',
    options: ["Hi {name}!", "Hi Amogaa!", "It causes an error"],
    correct: 1,
    explain: "f-strings replace {name} with the actual value stored in the variable — here, Amogaa."
  });

  renderTopicNav(t, "fstrings");
})();
