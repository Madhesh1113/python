// ===== TOPIC CONTENT RENDERER =====
// Each topic is a function that builds its DOM and appends to #topicsContainer

const topicsContainer = document.getElementById('topicsContainer');

function createTopicShell(id, eyebrow, title){
  const div = document.createElement('div');
  div.className = 'topic';
  div.id = 'topic-' + id;
  div.innerHTML = `<div class="eyebrow">${eyebrow}</div><h1>${title}</h1>`;
  topicsContainer.appendChild(div);
  return div;
}

// ---------- 1.1 What is Python? ----------
(function(){
  const t = createTopicShell("what-is-python", "Getting Started · 1 of 3", "What is Python?");

  t.insertAdjacentHTML('beforeend', `
    <p>Think of your computer as a machine that only understands one language: electrical signals, 1s and 0s. You and I don't speak that language. So we need a translator in between — something that takes words we can write and turns them into instructions the computer can follow.</p>
    <p><strong>Python is one of those translators.</strong> It's a way of writing instructions in something close to plain English, which then gets turned into commands the computer actually understands.</p>

    <h3>Why people choose Python</h3>
    <ul>
      <li><strong>It reads like English.</strong> A line of Python code often looks like a sentence, not a secret code.</li>
      <li><strong>It's used everywhere.</strong> Websites, apps, data analysis, automating boring tasks, even controlling robots.</li>
      <li><strong>It's beginner-friendly.</strong> It was designed to be easy to pick up, without needing to know how computers work internally.</li>
    </ul>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="620" height="180" viewBox="0 0 620 180" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="60" width="150" height="60" rx="10" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
        <text x="85" y="85" text-anchor="middle" fill="#F5F3FF" font-family="Space Grotesk" font-size="13" font-weight="600">You</text>
        <text x="85" y="103" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">"print hello"</text>

        <path d="M165 90 L235 90" stroke="#FFD23F" stroke-width="2" marker-end="url(#arrow1)"/>

        <rect x="240" y="55" width="150" height="70" rx="10" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="315" y="82" text-anchor="middle" fill="#FFD23F" font-family="Space Grotesk" font-size="13" font-weight="600">Python</text>
        <text x="315" y="99" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">translates it</text>
        <text x="315" y="113" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">into machine code</text>

        <path d="M395 90 L465 90" stroke="#FFD23F" stroke-width="2" marker-end="url(#arrow1)"/>

        <rect x="470" y="60" width="140" height="60" rx="10" fill="#2E2A5C" stroke="#FF6B9D" stroke-width="1.5"/>
        <text x="540" y="85" text-anchor="middle" fill="#F5F3FF" font-family="Space Grotesk" font-size="13" font-weight="600">Computer</text>
        <text x="540" y="103" text-anchor="middle" fill="#8AE68A" font-family="JetBrains Mono" font-size="10">hello</text>

        <defs>
          <marker id="arrow1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#FFD23F"/>
          </marker>
        </defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <div class="callout"><strong>In plain terms:</strong> You write instructions that sound like English. Python quietly converts them into something the machine can run. You never have to touch the machine's language directly.</div>
  `);

  renderQuiz(t, {
    question: "What is Python, in simple terms?",
    options: [
      "A brand of computer hardware",
      "A translator that turns human-readable instructions into something a computer can run",
      "A type of website"
    ],
    correct: 1,
    explain: "Python takes instructions written in a readable way and converts them into commands the computer can execute."
  });

  renderTopicNav(t, "what-is-python");
})();

// ---------- 1.2 How a program runs ----------
(function(){
  const t = createTopicShell("how-python-runs", "Getting Started · 2 of 3", "How a program runs");

  t.insertAdjacentHTML('beforeend', `
    <p>A Python <strong>program</strong> is just a text file full of instructions, written one after another. When you run it, Python reads the file <strong>from top to bottom</strong>, one line at a time, and carries out each instruction in order — like following a recipe step by step.</p>

    <h3>The recipe idea</h3>
    <p>Imagine a recipe card: "Step 1: boil water. Step 2: add pasta. Step 3: wait 10 minutes." You don't jump to step 3 first — you follow it in order. Python programs work the same way, unless you specifically tell it to skip around (which we'll cover later with decisions and loops).</p>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="360" height="220" viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="10" width="300" height="40" rx="8" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
        <text x="180" y="35" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="12">Line 1: say hello</text>

        <path d="M180 50 L180 68" stroke="#FFD23F" stroke-width="2" marker-end="url(#arrow2)"/>

        <rect x="30" y="70" width="300" height="40" rx="8" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
        <text x="180" y="95" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="12">Line 2: ask your name</text>

        <path d="M180 110 L180 128" stroke="#FFD23F" stroke-width="2" marker-end="url(#arrow2)"/>

        <rect x="30" y="130" width="300" height="40" rx="8" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
        <text x="180" y="155" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="12">Line 3: greet you back</text>

        <path d="M180 170 L180 188" stroke="#FFD23F" stroke-width="2" marker-end="url(#arrow2)"/>

        <text x="180" y="205" text-anchor="middle" fill="#8AE68A" font-family="Inter" font-size="12" font-weight="600">Program ends</text>

        <defs>
          <marker id="arrow2" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto">
            <path d="M0,0 L4,6 L8,0 Z" fill="#FFD23F"/>
          </marker>
        </defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Where you write and run it</h3>
    <p>You write Python code in a plain text file, usually saved with the ending <strong>.py</strong> — like <code>my_first_program.py</code>. Then you run that file, and Python reads it top to bottom and does what it says.</p>
    <div class="callout"><strong>Key idea:</strong> No instruction runs before the one above it finishes (unless you tell Python to loop or jump — topics for later). Order matters.</div>
  `);

  renderQuiz(t, {
    question: "In what order does Python normally read a program's instructions?",
    options: [
      "Randomly, whichever line it picks first",
      "From bottom to top",
      "From top to bottom, one line at a time"
    ],
    correct: 2,
    explain: "Just like reading a recipe, Python goes through instructions in order from the top of the file to the bottom."
  });

  renderTopicNav(t, "how-python-runs");
})();

// ---------- 1.3 print() ----------
(function(){
  const t = createTopicShell("print", "Getting Started · 3 of 3", "print() — showing output");

  t.insertAdjacentHTML('beforeend', `
    <p>The very first thing most people learn in any programming language is how to make it "say" something. In Python, that's done with a command called <strong>print()</strong>.</p>
    <p>Whatever you put inside the round brackets — as long as it's in quotes — will be displayed on the screen when the program runs.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">print</span>(<span class="c-str">"Hello, world!"</span>)

<span class="c-com"># What you'll see on screen:</span>
<span class="c-out">Hello, world!</span></div>
  `);

  t.insertAdjacentHTML('beforeend', `
    <h3>Breaking it down</h3>
    <ul>
      <li><strong>print</strong> — the command that means "show this on screen"</li>
      <li><strong>( )</strong> — the round brackets hold whatever you want to show</li>
      <li><strong>" "</strong> — quotes tell Python "this is plain text, not an instruction"</li>
    </ul>
    <p>You can print as many lines as you like. Each print() shows on its own new line, one after another.</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">print</span>(<span class="c-str">"Good morning!"</span>)
<span class="c-kw">print</span>(<span class="c-str">"Today we are learning Python."</span>)

<span class="c-com"># Output:</span>
<span class="c-out">Good morning!
Today we are learning Python.</span></div>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="callout"><strong>Think of it like:</strong> print() is your program's mouth. Anything you want the program to "say out loud" to the person running it, you wrap in print().</div>
  `);

  renderQuiz(t, {
    question: 'What will print("I love pizza") do?',
    options: [
      "Nothing, it needs more setup",
      "Display the text: I love pizza",
      "Ask the user a question"
    ],
    correct: 1,
    explain: "print() displays whatever text is inside the quotes, exactly as written."
  });

  renderTopicNav(t, "print");
})();
