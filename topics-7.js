// ---------- 7.1 Functions ----------
(function(){
  const t = createTopicShell("functions", "Reusable Code · 1 of 3", "Functions");

  t.insertAdjacentHTML('beforeend', `
    <p>You've already used functions without realizing it — <code>print()</code>, <code>len()</code>, <code>input()</code> are all functions Python already built for you. A <strong>function</strong> is simply a named, reusable block of instructions that you can "call" (run) whenever you need it, instead of rewriting the same code over and over.</p>

    <h3>Creating your own function</h3>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">def</span> greet():
    <span class="c-kw">print</span>(<span class="c-str">"Hello there!"</span>)

greet()   <span class="c-com"># calling the function runs its code</span>
greet()   <span class="c-com"># call it again, as many times as you want</span>

<span class="c-com"># Output:</span>
<span class="c-out">Hello there!
Hello there!</span></div>

    <ul>
      <li><strong>def</strong> — short for "define," starts a new function</li>
      <li><strong>greet</strong> — the name you're giving this function (you choose it)</li>
      <li><strong>()</strong> — round brackets, where inputs go (empty here)</li>
      <li>The indented lines below are the function's "body" — what it does when called</li>
    </ul>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="480" height="150" viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="20" width="160" height="60" rx="10" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="110" y="45" text-anchor="middle" fill="#FFD23F" font-family="Space Grotesk" font-size="12" font-weight="600">def greet():</text>
        <text x="110" y="65" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">a recipe, written once</text>

        <path d="M195 50 L280 50" stroke="#4FD1C5" stroke-width="2" marker-end="url(#arrowfn)"/>

        <rect x="285" y="20" width="90" height="35" rx="8" fill="#2E2A5C" stroke="#4FD1C5"/>
        <text x="330" y="42" text-anchor="middle" fill="#4FD1C5" font-family="JetBrains Mono" font-size="11">greet()</text>

        <rect x="285" y="65" width="90" height="35" rx="8" fill="#2E2A5C" stroke="#4FD1C5"/>
        <text x="330" y="87" text-anchor="middle" fill="#4FD1C5" font-family="JetBrains Mono" font-size="11">greet()</text>

        <text x="330" y="125" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">call it as many times as needed</text>

        <defs><marker id="arrowfn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4FD1C5"/></marker></defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <div class="callout"><strong>Why bother?</strong> If you ever need to change how greeting works, you only fix it in one place (inside the function) — not everywhere you copy-pasted it.</div>
  `);

  renderQuiz(t, {
    question: "What keyword do you use to create a function in Python?",
    options: ["func", "def", "function"],
    correct: 1,
    explain: '"def" (short for define) is how you start creating a new function in Python.'
  });

  renderTopicNav(t, "functions");
})();

// ---------- 7.2 Parameters and return values ----------
(function(){
  const t = createTopicShell("params-return", "Reusable Code · 2 of 3", "Parameters and return values");

  t.insertAdjacentHTML('beforeend', `
    <p>A function becomes far more useful when you can give it information to work with, and get a result back. That's what <strong>parameters</strong> (input) and <strong>return values</strong> (output) are for.</p>

    <h3>Parameters — giving information in</h3>
    <p>A parameter is a placeholder name inside the brackets that receives a value when the function is called.</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">def</span> greet(name):
    <span class="c-kw">print</span>(f<span class="c-str">"Hello, {name}!"</span>)

greet(<span class="c-str">"Madhesh"</span>)
greet(<span class="c-str">"Amogaa"</span>)

<span class="c-com"># Output:</span>
<span class="c-out">Hello, Madhesh!
Hello, Amogaa!</span></div>
    <p>Same function, different result each time, because you fed it different information.</p>

    <h3>Return values — getting information out</h3>
    <p>So far our functions have just printed things. But often you want a function to <strong>calculate</strong> something and hand the result back to you, so you can use it elsewhere. That's what <code>return</code> does.</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">def</span> add(a, b):
    <span class="c-kw">return</span> a + b

result = add(<span class="c-num">3</span>, <span class="c-num">5</span>)
<span class="c-kw">print</span>(result)

<span class="c-com"># Output:</span>
<span class="c-out">8</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="480" height="140" viewBox="0 0 480 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="45" width="100" height="45" rx="8" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="60" y="72" text-anchor="middle" fill="#FFD23F" font-family="JetBrains Mono" font-size="12">3, 5</text>
        <text x="60" y="30" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">in (parameters)</text>

        <path d="M115 67 L175 67" stroke="#4FD1C5" stroke-width="2" marker-end="url(#arrowret)"/>

        <rect x="180" y="45" width="120" height="45" rx="8" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
        <text x="240" y="72" text-anchor="middle" fill="#4FD1C5" font-family="JetBrains Mono" font-size="11">add(a, b)</text>
        <text x="240" y="30" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">the function</text>

        <path d="M305 67 L365 67" stroke="#8AE68A" stroke-width="2" marker-end="url(#arrowret)"/>

        <rect x="370" y="45" width="90" height="45" rx="8" fill="#2E2A5C" stroke="#8AE68A" stroke-width="1.5"/>
        <text x="415" y="72" text-anchor="middle" fill="#8AE68A" font-family="JetBrains Mono" font-size="12">8</text>
        <text x="415" y="30" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">out (return)</text>

        <defs><marker id="arrowret" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#B8B3E0"/></marker></defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>print() vs return — a common confusion</h3>
    <p><code>print()</code> just displays something on screen; the function doesn't hand anything back to your code. <code>return</code> actually sends the value back so you can store it, reuse it, or do more math with it.</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">def</span> add_v1(a, b):
    <span class="c-kw">print</span>(a + b)   <span class="c-com"># just shows it, doesn't give it back</span>

<span class="c-kw">def</span> add_v2(a, b):
    <span class="c-kw">return</span> a + b  <span class="c-com"># actually hands the result back</span>

x = add_v1(<span class="c-num">2</span>, <span class="c-num">3</span>)   <span class="c-com"># prints 5, but x becomes None</span>
y = add_v2(<span class="c-num">2</span>, <span class="c-num">3</span>)   <span class="c-com"># y becomes 5, usable later</span></div>

    <div class="callout"><strong>Plain English:</strong> Parameters are the ingredients you hand the function. return is the dish it hands back to you when it's done.</div>
  `);

  renderQuiz(t, {
    question: "What is the purpose of the return keyword in a function?",
    options: [
      "It prints text to the screen",
      "It sends a result back out of the function so it can be used elsewhere",
      "It deletes the function"
    ],
    correct: 1,
    explain: "return hands a value back out of the function, so you can store it in a variable or use it in further calculations."
  });

  renderTopicNav(t, "params-return");
})();

// ---------- 7.3 Scope ----------
(function(){
  const t = createTopicShell("scope", "Reusable Code · 3 of 3", "Scope");

  t.insertAdjacentHTML('beforeend', `
    <p><strong>Scope</strong> is about where a variable "lives," and where in your code you're allowed to use it. A variable created inside a function generally only exists <strong>inside</strong> that function — it disappears once the function finishes.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">def</span> make_message():
    message = <span class="c-str">"Hello!"</span>   <span class="c-com"># only exists inside this function</span>
    <span class="c-kw">print</span>(message)

make_message()
<span class="c-kw">print</span>(message)   <span class="c-com"># ERROR: message doesn't exist out here</span>

<span class="c-com"># Output:</span>
<span class="c-out">Hello!
NameError: name 'message' is not defined</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="440" height="180" viewBox="0 0 440 180" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="400" height="140" rx="12" fill="none" stroke="#B8B3E0" stroke-width="1" stroke-dasharray="4"/>
        <text x="35" y="15" fill="#B8B3E0" font-family="Inter" font-size="10">Outside (main program)</text>

        <rect x="60" y="45" width="320" height="90" rx="10" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="75" y="40" fill="#FFD23F" font-family="Inter" font-size="10">Inside the function</text>
        <text x="220" y="90" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="12">message = "Hello!"</text>
        <text x="220" y="112" text-anchor="middle" fill="#8AE68A" font-family="Inter" font-size="10">visible only in here</text>

        <text x="220" y="150" text-anchor="middle" fill="#FF6B9D" font-family="Inter" font-size="10">can't see "message" out here ✕</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Why this is actually a good thing</h3>
    <p>It might seem inconvenient, but this protects you. Different functions can use the same variable name (like <code>message</code> or <code>total</code>) without clashing or overwriting each other's work, because each one is contained in its own space.</p>

    <h3>Variables created outside functions</h3>
    <p>A variable created outside any function (at the "top level") is called a <strong>global</strong> variable, and functions can read it — though it's generally best practice to pass values in as parameters rather than relying on globals.</p>
    <div class="code-block"><span class="tag">Python</span>
app_name = <span class="c-str">"OneBundle"</span>   <span class="c-com"># global, exists everywhere</span>

<span class="c-kw">def</span> show_app():
    <span class="c-kw">print</span>(app_name)   <span class="c-com"># can read the global variable fine</span>

show_app()
<span class="c-com"># Output:</span>
<span class="c-out">OneBundle</span></div>

    <div class="callout"><strong>Plain English:</strong> Think of each function as its own private room. Variables created inside stay inside, unless you deliberately hand them out with return.</div>
  `);

  renderQuiz(t, {
    question: "A variable created inside a function can normally be used...",
    options: [
      "Anywhere in the whole program",
      "Only inside that function",
      "Only inside loops"
    ],
    correct: 1,
    explain: "Variables created inside a function are local to it — they exist only while that function is running, and disappear afterward."
  });

  renderTopicNav(t, "scope");
})();
