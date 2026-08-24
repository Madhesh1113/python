// ---------- 8.1 Modules and imports ----------
(function(){
  const t = createTopicShell("modules", "Organizing Bigger Programs · 1 of 3", "Modules and imports");

  t.insertAdjacentHTML('beforeend', `
    <p>You don't have to write every piece of code yourself. Python comes with a huge library of ready-made tools — things for math, dates, random numbers, and much more — organized into files called <strong>modules</strong>. You bring one into your program using <strong>import</strong>.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">import</span> math

<span class="c-kw">print</span>(math.sqrt(<span class="c-num">16</span>))     <span class="c-com"># square root -&gt; 4.0</span>
<span class="c-kw">print</span>(math.pi)            <span class="c-com"># -&gt; 3.14159...</span></div>

    <p>Here, <code>math</code> is a built-in module full of math-related tools. Once imported, you access its tools using a dot, like <code>math.sqrt(...)</code>.</p>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="460" height="140" viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="130" height="80" rx="10" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
        <text x="85" y="55" text-anchor="middle" fill="#4FD1C5" font-family="Space Grotesk" font-size="12" font-weight="600">math module</text>
        <text x="85" y="75" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="9">sqrt(), pi,</text>
        <text x="85" y="90" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="9">floor(), ...</text>

        <path d="M155 70 L230 70" stroke="#FFD23F" stroke-width="2" marker-end="url(#arrowmod)"/>
        <text x="192" y="60" text-anchor="middle" fill="#FFD23F" font-family="Inter" font-size="9">import</text>

        <rect x="235" y="30" width="200" height="80" rx="10" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="335" y="55" text-anchor="middle" fill="#FFD23F" font-family="Space Grotesk" font-size="12" font-weight="600">Your program</text>
        <text x="335" y="80" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="10">math.sqrt(16)</text>

        <defs><marker id="arrowmod" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#FFD23F"/></marker></defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>A few genuinely useful built-in modules</h3>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">import</span> random
<span class="c-kw">print</span>(random.randint(<span class="c-num">1</span>, <span class="c-num">10</span>))   <span class="c-com"># random number between 1 and 10</span>

<span class="c-kw">import</span> datetime
<span class="c-kw">print</span>(datetime.date.today())      <span class="c-com"># today's date</span></div>

    <h3>Importing just one tool from a module</h3>
    <p>If you only need one specific tool, you can import just that, so you don't need to type the module name every time.</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">from</span> math <span class="c-kw">import</span> sqrt

<span class="c-kw">print</span>(sqrt(<span class="c-num">25</span>))   <span class="c-com"># no need to write math.sqrt anymore</span></div>

    <div class="callout"><strong>Plain English:</strong> A module is a toolbox someone already built. import means "bring that toolbox into my program so I can use its tools."</div>
  `);

  renderQuiz(t, {
    question: "What does import do in Python?",
    options: [
      "Deletes unused code",
      "Brings in ready-made tools from another file (module) so you can use them",
      "Creates a new variable"
    ],
    correct: 1,
    explain: "import loads a module's tools into your program so you can use them without writing them yourself."
  });

  renderTopicNav(t, "modules");
})();

// ---------- 8.2 Basic file handling ----------
(function(){
  const t = createTopicShell("files", "Organizing Bigger Programs · 2 of 3", "Basic file handling");

  t.insertAdjacentHTML('beforeend', `
    <p>Programs often need to save information permanently, or read information someone else saved. Python can read from and write to plain text files on your computer.</p>

    <h3>Writing to a file</h3>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">with</span> <span class="c-kw">open</span>(<span class="c-str">"notes.txt"</span>, <span class="c-str">"w"</span>) <span class="c-kw">as</span> file:
    file.write(<span class="c-str">"Hello, this is saved to a file!"</span>)</div>

    <ul>
      <li><strong>open("notes.txt", "w")</strong> — open a file called notes.txt in "w" (write) mode</li>
      <li><strong>with ... as file</strong> — a safe way to open a file that automatically closes it when done</li>
      <li><strong>file.write(...)</strong> — actually put text into the file</li>
    </ul>

    <h3>Reading from a file</h3>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">with</span> <span class="c-kw">open</span>(<span class="c-str">"notes.txt"</span>, <span class="c-str">"r"</span>) <span class="c-kw">as</span> file:
    content = file.read()
    <span class="c-kw">print</span>(content)

<span class="c-com"># Output:</span>
<span class="c-out">Hello, this is saved to a file!</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="440" height="140" viewBox="0 0 440 140" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="140" height="70" rx="10" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="90" y="60" text-anchor="middle" fill="#FFD23F" font-family="Space Grotesk" font-size="12" font-weight="600">Your program</text>

        <path d="M165 55 L255 55" stroke="#8AE68A" stroke-width="2" marker-end="url(#arrowfile)"/>
        <text x="210" y="45" text-anchor="middle" fill="#8AE68A" font-family="Inter" font-size="9">write</text>

        <path d="M255 80 L165 80" stroke="#4FD1C5" stroke-width="2" marker-end="url(#arrowfile)"/>
        <text x="210" y="98" text-anchor="middle" fill="#4FD1C5" font-family="Inter" font-size="9">read</text>

        <rect x="260" y="30" width="140" height="70" rx="10" fill="#2E2A5C" stroke="#FF6B9D" stroke-width="1.5"/>
        <text x="330" y="60" text-anchor="middle" fill="#FF6B9D" font-family="Space Grotesk" font-size="11" font-weight="600">notes.txt</text>
        <text x="330" y="78" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="9">on your disk</text>

        <defs><marker id="arrowfile" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#B8B3E0"/></marker></defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>The mode letters matter</h3>
    <ul>
      <li><strong>"w"</strong> (write) — creates the file if it doesn't exist, and <strong>erases</strong> existing content before writing</li>
      <li><strong>"r"</strong> (read) — opens an existing file to read from; errors if the file doesn't exist</li>
      <li><strong>"a"</strong> (append) — adds new content to the end, without erasing what's already there</li>
    </ul>

    <div class="callout"><strong>Careful:</strong> "w" mode wipes the file's existing content first. If you want to add to a file without losing what's there, use "a" (append) instead.</div>
  `);

  renderQuiz(t, {
    question: 'What happens if you open a file with open("data.txt", "w") and it already has content?',
    options: [
      "The new content is added after the old content",
      "The old content is erased and replaced",
      "Python refuses to open it"
    ],
    correct: 1,
    explain: '"w" mode (write) clears existing content before writing new content. Use "a" (append) if you want to keep what\'s already there.'
  });

  renderTopicNav(t, "files");
})();

// ---------- 8.3 Dates and time ----------
(function(){
  const t = createTopicShell("datetime", "Organizing Bigger Programs · 3 of 3", "Working with dates and time");

  t.insertAdjacentHTML('beforeend', `
    <p>Almost every real program eventually needs to deal with dates or times — a timestamp, someone's birthday, how many days until an event. Python's built-in <code>datetime</code> module handles all of this.</p>

    <h3>Getting today's date</h3>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">import</span> datetime

today = datetime.date.today()
<span class="c-kw">print</span>(today)

<span class="c-com"># Output (will show the actual current date):</span>
<span class="c-out">2026-08-24</span></div>

    <h3>Getting the current date and time together</h3>
    <div class="code-block"><span class="tag">Python</span>
now = datetime.datetime.now()
<span class="c-kw">print</span>(now)

<span class="c-com"># Output:</span>
<span class="c-out">2026-08-24 15:42:10.123456</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="400" height="120" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="170" height="55" rx="10" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
        <text x="105" y="55" text-anchor="middle" fill="#4FD1C5" font-family="Space Grotesk" font-size="12" font-weight="600">date.today()</text>
        <text x="105" y="72" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="9">just the date</text>

        <rect x="210" y="30" width="170" height="55" rx="10" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="295" y="55" text-anchor="middle" fill="#FFD23F" font-family="Space Grotesk" font-size="12" font-weight="600">datetime.now()</text>
        <text x="295" y="72" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="9">date + exact time</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Doing math with dates</h3>
    <p>You can find the gap between two dates — Python figures out the difference in days automatically.</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">import</span> datetime

birthday = datetime.date(<span class="c-num">2026</span>, <span class="c-num">12</span>, <span class="c-num">25</span>)
today = datetime.date.today()

days_left = birthday - today
<span class="c-kw">print</span>(days_left.days)

<span class="c-com"># Output (example):</span>
<span class="c-out">123</span></div>

    <h3>Formatting a date nicely</h3>
    <div class="code-block"><span class="tag">Python</span>
today = datetime.date.today()
<span class="c-kw">print</span>(today.strftime(<span class="c-str">"%d %B %Y"</span>))

<span class="c-com"># Output (example):</span>
<span class="c-out">24 August 2026</span></div>

    <div class="callout"><strong>Plain English:</strong> date is for a calendar day, datetime is for a day plus exact clock time. Both let you calculate differences and format output however you like.</div>
  `);

  renderQuiz(t, {
    question: "Which gives you both the date AND the exact time?",
    options: ["datetime.date.today()", "datetime.datetime.now()", "datetime.strftime()"],
    correct: 1,
    explain: "datetime.datetime.now() returns the current date together with the precise time, while date.today() gives only the date."
  });

  renderTopicNav(t, "datetime");
})();
