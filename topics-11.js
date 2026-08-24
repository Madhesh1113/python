// ---------- 11.1 Simple calculator ----------
(function(){
  const t = createTopicShell("proj-calculator", "Practice Projects · 1 of 3", "Project: Simple Calculator");

  t.insertAdjacentHTML('beforeend', `
    <p>Time to put everything together. This project uses: <strong>variables</strong>, <strong>input()</strong>, <strong>if/elif/else</strong>, <strong>functions</strong>, and <strong>try/except</strong> — nearly everything you've learned so far.</p>
    <p>The goal: ask the user for two numbers and an operation, then calculate and show the result.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python — calculator.py</span>
<span class="c-kw">def</span> calculate(a, b, operation):
    <span class="c-kw">if</span> operation == <span class="c-str">"+"</span>:
        <span class="c-kw">return</span> a + b
    <span class="c-kw">elif</span> operation == <span class="c-str">"-"</span>:
        <span class="c-kw">return</span> a - b
    <span class="c-kw">elif</span> operation == <span class="c-str">"*"</span>:
        <span class="c-kw">return</span> a * b
    <span class="c-kw">elif</span> operation == <span class="c-str">"/"</span>:
        <span class="c-kw">if</span> b == <span class="c-num">0</span>:
            <span class="c-kw">return</span> <span class="c-str">"Error: cannot divide by zero"</span>
        <span class="c-kw">return</span> a / b
    <span class="c-kw">else</span>:
        <span class="c-kw">return</span> <span class="c-str">"Error: unknown operation"</span>

<span class="c-kw">try</span>:
    num1 = <span class="c-kw">float</span>(<span class="c-kw">input</span>(<span class="c-str">"Enter first number: "</span>))
    op = <span class="c-kw">input</span>(<span class="c-str">"Enter operation (+, -, *, /): "</span>)
    num2 = <span class="c-kw">float</span>(<span class="c-kw">input</span>(<span class="c-str">"Enter second number: "</span>))

    result = calculate(num1, num2, op)
    <span class="c-kw">print</span>(f<span class="c-str">"Result: {result}"</span>)

<span class="c-kw">except</span> ValueError:
    <span class="c-kw">print</span>(<span class="c-str">"Please enter valid numbers."</span>)

<span class="c-com"># Example run:</span>
<span class="c-out">Enter first number: 12
Enter operation (+, -, *, /): *
Enter second number: 4
Result: 48.0</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="480" height="150" viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg">
        ${["input() x3","calculate()","if/elif/else","try/except"].map((s,i) => `
          <rect x="${20+i*115}" y="30" width="100" height="55" rx="8" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
          <text x="${70+i*115}" y="62" text-anchor="middle" fill="#4FD1C5" font-family="JetBrains Mono" font-size="10">${s}</text>
        `).join('')}
        <text x="240" y="115" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">all working together in one program</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Try building on it yourself</h3>
    <ul>
      <li>Add support for <code>**</code> (power) as another operation</li>
      <li>Let the user keep calculating again in a loop, until they type "quit"</li>
      <li>Add a check so an invalid operation symbol gives a clear message before calculating</li>
    </ul>

    <div class="callout"><strong>How to actually run this:</strong> Copy the code into a file named <code>calculator.py</code>, then run it from your terminal with <code>python calculator.py</code> (or <code>python3 calculator.py</code>).</div>
  `);

  renderQuiz(t, {
    question: "In the calculator project, what happens if the user tries to divide by zero?",
    options: [
      "The program crashes immediately",
      "The calculate() function catches it and returns an error message instead of dividing",
      "Python automatically rounds to 1"
    ],
    correct: 1,
    explain: "The function checks 'if b == 0' before dividing, and returns a friendly error message instead of letting Python crash with a ZeroDivisionError."
  });

  renderTopicNav(t, "proj-calculator");
})();

// ---------- 11.2 Quiz game ----------
(function(){
  const t = createTopicShell("proj-quiz", "Practice Projects · 2 of 3", "Project: Quiz Game");

  t.insertAdjacentHTML('beforeend', `
    <p>This project uses: <strong>lists</strong>, <strong>dictionaries</strong>, <strong>for loops</strong>, <strong>if/else</strong>, and <strong>functions</strong> — a great way to see how grouped data and loops work together.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python — quiz_game.py</span>
questions = [
    {<span class="c-str">"question"</span>: <span class="c-str">"What does print() do?"</span>,
     <span class="c-str">"answer"</span>: <span class="c-str">"displays text"</span>},
    {<span class="c-str">"question"</span>: <span class="c-str">"What symbol starts a comment in Python?"</span>,
     <span class="c-str">"answer"</span>: <span class="c-str">"#"</span>},
    {<span class="c-str">"question"</span>: <span class="c-str">"What keyword creates a function?"</span>,
     <span class="c-str">"answer"</span>: <span class="c-str">"def"</span>},
]

score = <span class="c-num">0</span>

<span class="c-kw">for</span> q <span class="c-kw">in</span> questions:
    <span class="c-kw">print</span>(q[<span class="c-str">"question"</span>])
    user_answer = <span class="c-kw">input</span>(<span class="c-str">"Your answer: "</span>).strip().lower()

    <span class="c-kw">if</span> user_answer == q[<span class="c-str">"answer"</span>].lower():
        <span class="c-kw">print</span>(<span class="c-str">"Correct!"</span>)
        score = score + <span class="c-num">1</span>
    <span class="c-kw">else</span>:
        <span class="c-kw">print</span>(f<span class="c-str">"Nope, the answer was: {q['answer']}"</span>)
    <span class="c-kw">print</span>()

<span class="c-kw">print</span>(f<span class="c-str">"You scored {score} out of {len(questions)}"</span>)

<span class="c-com"># Example run:</span>
<span class="c-out">What does print() do?
Your answer: displays text
Correct!

...

You scored 2 out of 3</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="460" height="150" viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="420" height="30" rx="6" fill="#2E2A5C" stroke="#FFD23F"/>
        <text x="230" y="40" text-anchor="middle" fill="#FFD23F" font-family="JetBrains Mono" font-size="10">list of dictionaries: [{q1}, {q2}, {q3}]</text>
        <path d="M230 50 L230 68" stroke="#B8B3E0" stroke-width="2" marker-end="url(#arrowq)"/>
        <rect x="20" y="70" width="420" height="30" rx="6" fill="#2E2A5C" stroke="#4FD1C5"/>
        <text x="230" y="90" text-anchor="middle" fill="#4FD1C5" font-family="Inter" font-size="10">for loop goes through each question dictionary</text>
        <path d="M230 100 L230 118" stroke="#B8B3E0" stroke-width="2" marker-end="url(#arrowq)"/>
        <rect x="20" y="120" width="420" height="30" rx="6" fill="#2E2A5C" stroke="#8AE68A"/>
        <text x="230" y="140" text-anchor="middle" fill="#8AE68A" font-family="Inter" font-size="10">if/else checks the answer and updates score</text>
        <defs><marker id="arrowq" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0,0 L4,6 L8,0 Z" fill="#B8B3E0"/></marker></defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>What .strip().lower() is doing</h3>
    <p>This trims any accidental extra spaces the user typed, and converts everything to lowercase — so "Print" and "print" and " print " all count as the same correct answer.</p>

    <h3>Try building on it yourself</h3>
    <ul>
      <li>Add more questions to the list</li>
      <li>Show a different message depending on the final score (e.g. "Great job!" vs "Keep practicing")</li>
      <li>Shuffle the question order using <code>import random</code> and <code>random.shuffle(questions)</code></li>
    </ul>
  `);

  renderQuiz(t, {
    question: "In this project, what data structure holds all the questions together?",
    options: [
      "A single string",
      "A list of dictionaries — each dictionary holds one question and its answer",
      "A tuple of numbers"
    ],
    correct: 1,
    explain: "Each question is stored as a dictionary with 'question' and 'answer' keys, and all of them together are held in a list."
  });

  renderTopicNav(t, "proj-quiz");
})();

// ---------- 11.3 To-do list app ----------
(function(){
  const t = createTopicShell("proj-todo", "Practice Projects · 3 of 3", "Project: To-Do List App");

  t.insertAdjacentHTML('beforeend', `
    <p>This final project uses: <strong>lists</strong>, <strong>while loops</strong>, <strong>functions</strong>, <strong>if/elif/else</strong>, and touches on <strong>file handling</strong> — a nice capstone that feels like a real, usable program.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python — todo.py</span>
tasks = []

<span class="c-kw">def</span> show_tasks():
    <span class="c-kw">if</span> <span class="c-kw">not</span> tasks:
        <span class="c-kw">print</span>(<span class="c-str">"No tasks yet!"</span>)
    <span class="c-kw">for</span> i, task <span class="c-kw">in</span> <span class="c-kw">enumerate</span>(tasks, start=<span class="c-num">1</span>):
        <span class="c-kw">print</span>(f<span class="c-str">"{i}. {task}"</span>)

<span class="c-kw">while</span> <span class="c-kw">True</span>:
    <span class="c-kw">print</span>(<span class="c-str">"\\n1) Add task  2) Show tasks  3) Remove task  4) Quit"</span>)
    choice = <span class="c-kw">input</span>(<span class="c-str">"Choose an option: "</span>)

    <span class="c-kw">if</span> choice == <span class="c-str">"1"</span>:
        new_task = <span class="c-kw">input</span>(<span class="c-str">"Enter the task: "</span>)
        tasks.append(new_task)
        <span class="c-kw">print</span>(<span class="c-str">"Task added!"</span>)

    <span class="c-kw">elif</span> choice == <span class="c-str">"2"</span>:
        show_tasks()

    <span class="c-kw">elif</span> choice == <span class="c-str">"3"</span>:
        show_tasks()
        num = <span class="c-kw">int</span>(<span class="c-kw">input</span>(<span class="c-str">"Enter task number to remove: "</span>))
        <span class="c-kw">if</span> <span class="c-num">1</span> <= num <= <span class="c-kw">len</span>(tasks):
            removed = tasks.pop(num - <span class="c-num">1</span>)
            <span class="c-kw">print</span>(f<span class="c-str">"Removed: {removed}"</span>)
        <span class="c-kw">else</span>:
            <span class="c-kw">print</span>(<span class="c-str">"Invalid task number."</span>)

    <span class="c-kw">elif</span> choice == <span class="c-str">"4"</span>:
        <span class="c-kw">print</span>(<span class="c-str">"Goodbye!"</span>)
        <span class="c-kw">break</span>

    <span class="c-kw">else</span>:
        <span class="c-kw">print</span>(<span class="c-str">"Invalid option, try again."</span>)</div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="440" height="190" viewBox="0 0 440 190" xmlns="http://www.w3.org/2000/svg">
        <rect x="140" y="10" width="160" height="45" rx="22" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="220" y="37" text-anchor="middle" fill="#FFD23F" font-family="Inter" font-size="11">while True: show menu</text>

        <path d="M220 55 L220 78" stroke="#4FD1C5" stroke-width="2" marker-end="url(#arrowtodo)"/>

        <rect x="60" y="80" width="90" height="40" rx="8" fill="#2E2A5C" stroke="#4FD1C5"/>
        <text x="105" y="104" text-anchor="middle" fill="#4FD1C5" font-family="Inter" font-size="9">Add</text>

        <rect x="175" y="80" width="90" height="40" rx="8" fill="#2E2A5C" stroke="#4FD1C5"/>
        <text x="220" y="104" text-anchor="middle" fill="#4FD1C5" font-family="Inter" font-size="9">Show</text>

        <rect x="290" y="80" width="90" height="40" rx="8" fill="#2E2A5C" stroke="#4FD1C5"/>
        <text x="335" y="104" text-anchor="middle" fill="#4FD1C5" font-family="Inter" font-size="9">Remove</text>

        <path d="M105 120 Q105 150 200 30" stroke="#B8B3E0" stroke-width="1.5" fill="none" marker-end="url(#arrowtodo)" opacity="0.5"/>
        <text x="140" y="165" fill="#B8B3E0" font-family="Inter" font-size="9">loops back to menu</text>

        <rect x="175" y="150" width="90" height="35" rx="8" fill="#2E2A5C" stroke="#FF6B9D"/>
        <text x="220" y="172" text-anchor="middle" fill="#FF6B9D" font-family="Inter" font-size="9">Quit (break)</text>

        <defs><marker id="arrowtodo" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0,0 L4,6 L8,0 Z" fill="#B8B3E0"/></marker></defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>What's new here: enumerate()</h3>
    <p><code>enumerate(tasks, start=1)</code> goes through the list and also gives you a running number alongside each item — starting from 1 instead of 0, so the list looks natural to a person reading it (1, 2, 3... instead of 0, 1, 2...).</p>

    <h3>How the menu loop works</h3>
    <p>This program uses a <code>while True</code> loop — meaning "keep looping forever" — combined with <code>break</code> to stop it only when the user chooses to quit. This is an extremely common pattern for any program that keeps prompting a user with a menu.</p>

    <h3>Try building on it yourself</h3>
    <ul>
      <li>Save the task list to a file when the user quits, using what you learned about file handling</li>
      <li>Load saved tasks back in when the program starts</li>
      <li>Add a "mark task as done" option instead of only removing tasks</li>
    </ul>

    <div class="callout"><strong>You made it through all the basics!</strong> Between this and the calculator and quiz projects, you've now touched every core topic: variables, types, strings, decisions, loops, lists, dictionaries, functions, files, errors, and even a taste of classes. The best next step is simply to keep building small projects — that's how it all becomes second nature.</div>
  `);

  renderQuiz(t, {
    question: "What does the while True loop combined with break allow this program to do?",
    options: [
      "Run exactly once and stop",
      "Keep showing the menu repeatedly until the user specifically chooses to quit",
      "Automatically add a task every second"
    ],
    correct: 1,
    explain: "while True creates an endless loop, and break is the only way out — giving the user a menu they can use as many times as they like until they choose to quit."
  });

  renderTopicNav(t, "proj-todo");
})();
