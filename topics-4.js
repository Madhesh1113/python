// ---------- 4.1 if / else / elif ----------
(function(){
  const t = createTopicShell("if-else", "Making Decisions · 1 of 3", "if / else / elif");

  t.insertAdjacentHTML('beforeend', `
    <p>Real life is full of decisions: "If it's raining, take an umbrella. Otherwise, don't." Programs need to make decisions too — and in Python, that's done with <strong>if</strong>.</p>
    <p>An <code>if</code> statement checks whether something is true. If it is, the program does one thing. If not, it can do something else instead.</p>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="440" height="220" viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">
        <rect x="150" y="10" width="140" height="50" rx="25" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="220" y="40" text-anchor="middle" fill="#FFD23F" font-family="Inter" font-size="12" font-weight="600">Is it raining?</text>

        <path d="M190 60 L110 100" stroke="#8AE68A" stroke-width="2" marker-end="url(#arrow4)"/>
        <text x="130" y="80" fill="#8AE68A" font-family="Inter" font-size="10">Yes</text>
        <path d="M250 60 L330 100" stroke="#FF6B9D" stroke-width="2" marker-end="url(#arrow4)"/>
        <text x="300" y="80" fill="#FF6B9D" font-family="Inter" font-size="10">No</text>

        <rect x="30" y="105" width="150" height="55" rx="10" fill="#2E2A5C" stroke="#8AE68A" stroke-width="1.5"/>
        <text x="105" y="138" text-anchor="middle" fill="#F5F3FF" font-family="Inter" font-size="11">Take an umbrella</text>

        <rect x="260" y="105" width="150" height="55" rx="10" fill="#2E2A5C" stroke="#FF6B9D" stroke-width="1.5"/>
        <text x="335" y="138" text-anchor="middle" fill="#F5F3FF" font-family="Inter" font-size="11">Leave it at home</text>

        <defs>
          <marker id="arrow4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#B8B3E0"/>
          </marker>
        </defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
is_raining = <span class="c-kw">True</span>

<span class="c-kw">if</span> is_raining:
    <span class="c-kw">print</span>(<span class="c-str">"Take an umbrella"</span>)
<span class="c-kw">else</span>:
    <span class="c-kw">print</span>(<span class="c-str">"Leave it at home"</span>)

<span class="c-com"># Output:</span>
<span class="c-out">Take an umbrella</span></div>

    <h3>Notice the indentation</h3>
    <p>The line under <code>if</code> is pushed in slightly (indented). Python uses this indentation to know which lines "belong" to the if. This isn't optional style — it's required, and Python will give an error if you skip it.</p>

    <h3>More than two options: elif</h3>
    <p>What if there are more than two possibilities? That's where <code>elif</code> (short for "else if") comes in — you can chain as many checks as you need.</p>
    <div class="code-block"><span class="tag">Python</span>
score = <span class="c-num">75</span>

<span class="c-kw">if</span> score >= <span class="c-num">90</span>:
    <span class="c-kw">print</span>(<span class="c-str">"Grade: A"</span>)
<span class="c-kw">elif</span> score >= <span class="c-num">70</span>:
    <span class="c-kw">print</span>(<span class="c-str">"Grade: B"</span>)
<span class="c-kw">elif</span> score >= <span class="c-num">50</span>:
    <span class="c-kw">print</span>(<span class="c-str">"Grade: C"</span>)
<span class="c-kw">else</span>:
    <span class="c-kw">print</span>(<span class="c-str">"Grade: F"</span>)

<span class="c-com"># Output:</span>
<span class="c-out">Grade: B</span></div>

    <p>Python checks each condition top to bottom, and runs the first one that matches. If none match, it falls through to <code>else</code>.</p>
    <div class="callout"><strong>In plain terms:</strong> if = "check this first." elif = "if that wasn't true, check this instead." else = "if nothing above was true, do this."</div>
  `);

  renderQuiz(t, {
    question: "What does elif mean?",
    options: [
      "Repeat the previous check again",
      "Else if — check another condition if the first one wasn't true",
      "End the program"
    ],
    correct: 1,
    explain: "elif lets you check an additional condition if the earlier if (or elif) wasn't true."
  });

  renderTopicNav(t, "if-else");
})();

// ---------- 4.2 Comparison operators ----------
(function(){
  const t = createTopicShell("comparisons", "Making Decisions · 2 of 3", "Comparison operators");

  t.insertAdjacentHTML('beforeend', `
    <p>To make decisions, Python needs a way to <strong>compare</strong> two things — is this bigger, smaller, or equal to that? These comparisons always give back a <code>True</code> or <code>False</code> answer (a boolean, which you met earlier).</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">print</span>(<span class="c-num">5</span> == <span class="c-num">5</span>)   <span class="c-com"># equal to           -&gt; True</span>
<span class="c-kw">print</span>(<span class="c-num">5</span> != <span class="c-num">3</span>)   <span class="c-com"># not equal to       -&gt; True</span>
<span class="c-kw">print</span>(<span class="c-num">5</span> > <span class="c-num">3</span>)    <span class="c-com"># greater than       -&gt; True</span>
<span class="c-kw">print</span>(<span class="c-num">5</span> < <span class="c-num">3</span>)    <span class="c-com"># less than          -&gt; False</span>
<span class="c-kw">print</span>(<span class="c-num">5</span> >= <span class="c-num">5</span>)   <span class="c-com"># greater or equal   -&gt; True</span>
<span class="c-kw">print</span>(<span class="c-num">5</span> <= <span class="c-num">3</span>)   <span class="c-com"># less than or equal -&gt; False</span></div>

    <div class="callout"><strong>The most common beginner mistake:</strong> using a single <code>=</code> when you mean "is this equal to." A single <code>=</code> means "store this value" (like we used in variables). Double <code>==</code> means "check if these are equal." Mixing them up is one of the most common early errors — Python will usually give an error to help you catch it.</div>

    <h3>Using comparisons inside if statements</h3>
    <div class="code-block"><span class="tag">Python</span>
age = <span class="c-num">20</span>

<span class="c-kw">if</span> age >= <span class="c-num">18</span>:
    <span class="c-kw">print</span>(<span class="c-str">"You can vote"</span>)
<span class="c-kw">else</span>:
    <span class="c-kw">print</span>(<span class="c-str">"You cannot vote yet"</span>)

<span class="c-com"># Output:</span>
<span class="c-out">You can vote</span></div>
  `);

  renderQuiz(t, {
    question: "What does the == symbol check?",
    options: [
      "It stores a new value into a variable",
      "It checks whether two things are equal",
      "It adds two numbers"
    ],
    correct: 1,
    explain: "Double equals (==) compares two values and returns True or False — it never stores anything."
  });

  renderTopicNav(t, "comparisons");
})();

// ---------- 4.3 and / or / not ----------
(function(){
  const t = createTopicShell("logical-ops", "Making Decisions · 3 of 3", "and / or / not");

  t.insertAdjacentHTML('beforeend', `
    <p>Sometimes one condition isn't enough — you need to combine several. That's what <strong>and</strong>, <strong>or</strong>, and <strong>not</strong> are for. They work almost exactly like they do in everyday English.</p>

    <h3>and — both must be true</h3>
    <div class="code-block"><span class="tag">Python</span>
age = <span class="c-num">25</span>
has_ticket = <span class="c-kw">True</span>

<span class="c-kw">if</span> age >= <span class="c-num">18</span> <span class="c-kw">and</span> has_ticket:
    <span class="c-kw">print</span>(<span class="c-str">"You may enter"</span>)
<span class="c-kw">else</span>:
    <span class="c-kw">print</span>(<span class="c-str">"You may not enter"</span>)

<span class="c-com"># Output:</span>
<span class="c-out">You may enter</span></div>
    <p>Both conditions had to be true at the same time for the message to show. If either one had been false, it would've printed the "else" message instead.</p>

    <h3>or — at least one must be true</h3>
    <div class="code-block"><span class="tag">Python</span>
is_weekend = <span class="c-kw">False</span>
is_holiday = <span class="c-kw">True</span>

<span class="c-kw">if</span> is_weekend <span class="c-kw">or</span> is_holiday:
    <span class="c-kw">print</span>(<span class="c-str">"No work today!"</span>)
<span class="c-kw">else</span>:
    <span class="c-kw">print</span>(<span class="c-str">"It's a work day"</span>)

<span class="c-com"># Output:</span>
<span class="c-out">No work today!</span></div>
    <p>Only one of the two needed to be true. Since it's a holiday (even though it's not a weekend), the message still prints.</p>

    <h3>not — flips true to false, and false to true</h3>
    <div class="code-block"><span class="tag">Python</span>
is_raining = <span class="c-kw">False</span>

<span class="c-kw">if</span> <span class="c-kw">not</span> is_raining:
    <span class="c-kw">print</span>(<span class="c-str">"Great day for a walk"</span>)

<span class="c-com"># Output:</span>
<span class="c-out">Great day for a walk</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="420" height="150" viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="20" fill="#B8B3E0" font-family="Inter" font-size="11" font-weight="600">and — needs BOTH true</text>
        <circle cx="50" cy="55" r="22" fill="#4FD1C5" opacity="0.3" stroke="#4FD1C5"/>
        <circle cx="80" cy="55" r="22" fill="#4FD1C5" opacity="0.3" stroke="#4FD1C5"/>
        <text x="65" y="90" text-anchor="middle" fill="#4FD1C5" font-family="Inter" font-size="10">overlap = True</text>

        <text x="200" y="20" fill="#B8B3E0" font-family="Inter" font-size="11" font-weight="600">or — needs EITHER true</text>
        <circle cx="240" cy="55" r="22" fill="#FFD23F" opacity="0.3" stroke="#FFD23F"/>
        <circle cx="270" cy="55" r="22" fill="#FFD23F" opacity="0.15" stroke="#FFD23F" stroke-dasharray="3"/>
        <text x="255" y="90" text-anchor="middle" fill="#FFD23F" font-family="Inter" font-size="10">either = True</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <div class="callout"><strong>Plain English versions:</strong><br>
    "and" = both conditions must hold<br>
    "or" = at least one condition must hold<br>
    "not" = reverses whatever True/False you had
    </div>
  `);

  renderQuiz(t, {
    question: 'If age = 15 and has_ticket = True, what does "age >= 18 and has_ticket" evaluate to?',
    options: ["True", "False", "It causes an error"],
    correct: 1,
    explain: "With 'and', both parts must be true. Since age >= 18 is False, the whole expression becomes False, even though has_ticket is True."
  });

  renderTopicNav(t, "logical-ops");
})();
