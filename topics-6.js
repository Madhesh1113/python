// ---------- 6.1 Lists ----------
(function(){
  const t = createTopicShell("lists", "Grouping Data · 1 of 5", "Lists");

  t.insertAdjacentHTML('beforeend', `
    <p>So far, every variable has held just one piece of information. But often you need to store a whole group of related things — like a shopping list, or a list of your friends' names. That's what a <strong>list</strong> is for.</p>
    <p>A list is an ordered collection of items, written inside square brackets <code>[ ]</code>, separated by commas.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
fruits = [<span class="c-str">"apple"</span>, <span class="c-str">"banana"</span>, <span class="c-str">"mango"</span>]
<span class="c-kw">print</span>(fruits)

<span class="c-com"># Output:</span>
<span class="c-out">['apple', 'banana', 'mango']</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="440" height="130" viewBox="0 0 440 130" xmlns="http://www.w3.org/2000/svg">
        ${["apple","banana","mango"].map((f,i) => `
          <rect x="${20 + i*140}" y="30" width="120" height="55" rx="8" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
          <text x="${80 + i*140}" y="63" text-anchor="middle" fill="#F5F3FF" font-family="JetBrains Mono" font-size="13">"${f}"</text>
          <text x="${80 + i*140}" y="105" text-anchor="middle" fill="#FFD23F" font-family="JetBrains Mono" font-size="11">index ${i}</text>
        `).join('')}
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Accessing items by position</h3>
    <p>Just like with strings, list items are numbered starting from 0.</p>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">print</span>(fruits[<span class="c-num">0</span>])   <span class="c-com"># apple</span>
<span class="c-kw">print</span>(fruits[<span class="c-num">2</span>])   <span class="c-com"># mango</span></div>

    <h3>Changing, adding, and removing items</h3>
    <div class="code-block"><span class="tag">Python</span>
fruits[<span class="c-num">0</span>] = <span class="c-str">"orange"</span>       <span class="c-com"># change an item</span>
fruits.append(<span class="c-str">"grape"</span>)     <span class="c-com"># add to the end</span>
fruits.remove(<span class="c-str">"banana"</span>)     <span class="c-com"># remove a specific item</span>

<span class="c-kw">print</span>(fruits)
<span class="c-com"># Output:</span>
<span class="c-out">['orange', 'mango', 'grape']</span></div>

    <h3>Finding out how many items</h3>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">print</span>(<span class="c-kw">len</span>(fruits))
<span class="c-com"># Output:</span>
<span class="c-out">3</span></div>

    <h3>Looping through a list</h3>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">for</span> fruit <span class="c-kw">in</span> fruits:
    <span class="c-kw">print</span>(fruit)</div>

    <div class="callout"><strong>Plain English:</strong> A list is like a numbered shelf of items — you can look up, change, add, or remove things by their position, and the order is always remembered.</div>
  `);

  renderQuiz(t, {
    question: 'For fruits = ["apple", "banana", "mango"], what does fruits[1] give you?',
    options: ["apple", "banana", "mango"],
    correct: 1,
    explain: "Counting starts at 0, so position 1 is the second item: banana."
  });

  renderTopicNav(t, "lists");
})();

// ---------- 6.2 Tuples ----------
(function(){
  const t = createTopicShell("tuples", "Grouping Data · 2 of 5", "Tuples");

  t.insertAdjacentHTML('beforeend', `
    <p>A <strong>tuple</strong> is almost identical to a list — an ordered group of items — except for one key difference: <strong>once created, it can't be changed</strong>. No adding, removing, or editing items.</p>
    <p>Tuples use round brackets <code>( )</code> instead of square ones.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
coordinates = (<span class="c-num">10</span>, <span class="c-num">20</span>)
<span class="c-kw">print</span>(coordinates[<span class="c-num">0</span>])   <span class="c-com"># 10</span>

coordinates[<span class="c-num">0</span>] = <span class="c-num">99</span>   <span class="c-com"># this will cause an ERROR</span>
<span class="c-com"># TypeError: 'tuple' object does not support item assignment</span></div>

    <h3>Why would you want something unchangeable?</h3>
    <p>Some data genuinely shouldn't change once it's set — like a birth date, or fixed coordinates on a map. Using a tuple is a way of telling anyone reading your code (including future-you): "this data is locked, don't try to modify it."</p>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="440" height="120" viewBox="0 0 440 120" xmlns="http://www.w3.org/2000/svg">
        <text x="20" y="25" fill="#B8B3E0" font-family="Inter" font-size="12" font-weight="600">List [ ] — editable</text>
        <rect x="20" y="35" width="150" height="45" rx="8" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
        <text x="95" y="62" text-anchor="middle" fill="#4FD1C5" font-family="Inter" font-size="11">unlocked 🔓</text>

        <text x="250" y="25" fill="#B8B3E0" font-family="Inter" font-size="12" font-weight="600">Tuple ( ) — locked</text>
        <rect x="250" y="35" width="150" height="45" rx="8" fill="#2E2A5C" stroke="#FF6B9D" stroke-width="1.5"/>
        <text x="325" y="62" text-anchor="middle" fill="#FF6B9D" font-family="Inter" font-size="11">locked 🔒</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Reading from a tuple works just like a list</h3>
    <div class="code-block"><span class="tag">Python</span>
person = (<span class="c-str">"Madhesh"</span>, <span class="c-num">25</span>, <span class="c-str">"Chennai"</span>)
<span class="c-kw">print</span>(person[<span class="c-num">0</span>])   <span class="c-com"># Madhesh</span>
<span class="c-kw">for</span> item <span class="c-kw">in</span> person:
    <span class="c-kw">print</span>(item)</div>

    <div class="callout"><strong>Rule of thumb:</strong> Use a list when your data might change. Use a tuple when it shouldn't.</div>
  `);

  renderQuiz(t, {
    question: "What makes a tuple different from a list?",
    options: [
      "Tuples can only hold numbers",
      "Tuples cannot be changed after creation",
      "Tuples don't have positions/index numbers"
    ],
    correct: 1,
    explain: "The defining feature of a tuple is that it's locked — you can't add, remove, or edit items once it's created."
  });

  renderTopicNav(t, "tuples");
})();

// ---------- 6.3 Dictionaries ----------
(function(){
  const t = createTopicShell("dictionaries", "Grouping Data · 3 of 5", "Dictionaries");

  t.insertAdjacentHTML('beforeend', `
    <p>A list finds items by position (0, 1, 2...). But sometimes position isn't meaningful — you want to look things up by a <strong>label</strong> instead. That's a <strong>dictionary</strong>: a collection of <strong>key–value pairs</strong>, like a real dictionary where you look up a word (the key) to find its meaning (the value).</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
person = {
    <span class="c-str">"name"</span>: <span class="c-str">"Madhesh"</span>,
    <span class="c-str">"age"</span>: <span class="c-num">25</span>,
    <span class="c-str">"city"</span>: <span class="c-str">"Chennai"</span>
}

<span class="c-kw">print</span>(person[<span class="c-str">"name"</span>])
<span class="c-com"># Output:</span>
<span class="c-out">Madhesh</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="440" height="170" viewBox="0 0 440 170" xmlns="http://www.w3.org/2000/svg">
        ${[["name","\"Madhesh\""],["age","25"],["city","\"Chennai\""]].map(([k,v],i) => `
          <rect x="20" y="${20+i*45}" width="120" height="35" rx="6" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
          <text x="80" y="${43+i*45}" text-anchor="middle" fill="#FFD23F" font-family="JetBrains Mono" font-size="12">"${k}"</text>
          <path d="M140 ${37+i*45} L170 ${37+i*45}" stroke="#B8B3E0" stroke-width="1.5" marker-end="url(#arrowdict)"/>
          <rect x="175" y="${20+i*45}" width="140" height="35" rx="6" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
          <text x="245" y="${43+i*45}" text-anchor="middle" fill="#4FD1C5" font-family="JetBrains Mono" font-size="12">${v}</text>
        `).join('')}
        <text x="80" y="15" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">key</text>
        <text x="245" y="15" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">value</text>
        <defs><marker id="arrowdict" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#B8B3E0"/></marker></defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Adding, changing, and removing entries</h3>
    <div class="code-block"><span class="tag">Python</span>
person[<span class="c-str">"age"</span>] = <span class="c-num">26</span>              <span class="c-com"># change a value</span>
person[<span class="c-str">"job"</span>] = <span class="c-str">"Developer"</span>    <span class="c-com"># add a new key-value pair</span>
<span class="c-kw">del</span> person[<span class="c-str">"city"</span>]           <span class="c-com"># remove a pair</span>

<span class="c-kw">print</span>(person)
<span class="c-com"># Output:</span>
<span class="c-out">{'name': 'Madhesh', 'age': 26, 'job': 'Developer'}</span></div>

    <h3>Looping through a dictionary</h3>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">for</span> key, value <span class="c-kw">in</span> person.items():
    <span class="c-kw">print</span>(f<span class="c-str">"{key}: {value}"</span>)

<span class="c-com"># Output:</span>
<span class="c-out">name: Madhesh
age: 26
job: Developer</span></div>

    <div class="callout"><strong>Plain English:</strong> Where a list is "the 3rd item," a dictionary is "the thing labeled 'name'." You look things up by meaningful labels, not position.</div>
  `);

  renderQuiz(t, {
    question: 'In a dictionary like {"name": "Madhesh", "age": 25}, what is "name"?',
    options: ["A value", "A key", "An index number"],
    correct: 1,
    explain: '"name" is the label used to look up its associated value — that makes it a key.'
  });

  renderTopicNav(t, "dictionaries");
})();

// ---------- 6.4 Sets ----------
(function(){
  const t = createTopicShell("sets", "Grouping Data · 4 of 5", "Sets");

  t.insertAdjacentHTML('beforeend', `
    <p>A <strong>set</strong> is a collection like a list, but with one important rule: <strong>no duplicates allowed</strong>, and the order isn't guaranteed. If you're familiar with the idea of a "unique list," that's exactly what a set is for.</p>
  `);

  t.insertAdjacentHTML('beforeend', `
    <div class="code-block"><span class="tag">Python</span>
numbers = {<span class="c-num">1</span>, <span class="c-num">2</span>, <span class="c-num">2</span>, <span class="c-num">3</span>, <span class="c-num">3</span>, <span class="c-num">3</span>}
<span class="c-kw">print</span>(numbers)

<span class="c-com"># Output (duplicates automatically removed):</span>
<span class="c-out">{1, 2, 3}</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="440" height="140" viewBox="0 0 440 140" xmlns="http://www.w3.org/2000/svg">
        <text x="20" y="20" fill="#B8B3E0" font-family="Inter" font-size="11">Before: [1, 2, 2, 3, 3, 3]</text>
        ${[1,2,2,3,3,3].map((n,i)=>`<rect x="${20+i*35}" y="30" width="28" height="28" rx="6" fill="#2E2A5C" stroke="#FF6B9D"/><text x="${34+i*35}" y="49" text-anchor="middle" fill="#FF6B9D" font-family="JetBrains Mono" font-size="12">${n}</text>`).join('')}

        <text x="20" y="90" fill="#B8B3E0" font-family="Inter" font-size="11">After (a set): {1, 2, 3}</text>
        ${[1,2,3].map((n,i)=>`<rect x="${20+i*40}" y="100" width="32" height="32" rx="6" fill="#2E2A5C" stroke="#8AE68A" stroke-width="2"/><text x="${36+i*40}" y="121" text-anchor="middle" fill="#8AE68A" font-family="JetBrains Mono" font-size="13">${n}</text>`).join('')}
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Adding and removing from a set</h3>
    <div class="code-block"><span class="tag">Python</span>
colors = {<span class="c-str">"red"</span>, <span class="c-str">"green"</span>, <span class="c-str">"blue"</span>}
colors.add(<span class="c-str">"yellow"</span>)
colors.remove(<span class="c-str">"red"</span>)
<span class="c-kw">print</span>(colors)</div>

    <h3>A very common use: removing duplicates from a list</h3>
    <div class="code-block"><span class="tag">Python</span>
names = [<span class="c-str">"Alex"</span>, <span class="c-str">"Sam"</span>, <span class="c-str">"Alex"</span>, <span class="c-str">"Jo"</span>, <span class="c-str">"Sam"</span>]
unique_names = <span class="c-kw">list</span>(<span class="c-kw">set</span>(names))
<span class="c-kw">print</span>(unique_names)
<span class="c-com"># Output (order may vary):</span>
<span class="c-out">['Alex', 'Sam', 'Jo']</span></div>

    <div class="callout"><strong>Plain English:</strong> A set is like a list that automatically throws away repeats — perfect any time "no duplicates" matters more than order.</div>
  `);

  renderQuiz(t, {
    question: "What is the defining feature of a set?",
    options: [
      "It keeps items in a fixed order",
      "It automatically removes duplicate values",
      "It can't be changed once created"
    ],
    correct: 1,
    explain: "A set's key feature is that every value in it is unique — duplicates are dropped automatically."
  });

  renderTopicNav(t, "sets");
})();

// ---------- 6.5 List/dict comprehensions ----------
(function(){
  const t = createTopicShell("comprehensions", "Grouping Data · 5 of 5", "List & dict comprehensions");

  t.insertAdjacentHTML('beforeend', `
    <p>This one looks a little intimidating at first, but it's really just a shortcut. A <strong>comprehension</strong> lets you build a new list (or dictionary) in a single line, instead of writing a full loop with several lines.</p>

    <h3>The long way, with a regular loop</h3>
    <div class="code-block"><span class="tag">Python</span>
squares = []
<span class="c-kw">for</span> n <span class="c-kw">in</span> <span class="c-kw">range</span>(<span class="c-num">5</span>):
    squares.append(n * n)

<span class="c-kw">print</span>(squares)
<span class="c-com"># Output:</span>
<span class="c-out">[0, 1, 4, 9, 16]</span></div>

    <h3>The same thing, as a list comprehension</h3>
    <div class="code-block"><span class="tag">Python</span>
squares = [n * n <span class="c-kw">for</span> n <span class="c-kw">in</span> <span class="c-kw">range</span>(<span class="c-num">5</span>)]
<span class="c-kw">print</span>(squares)
<span class="c-com"># Output:</span>
<span class="c-out">[0, 1, 4, 9, 16]</span></div>

    <p>Same result, one line instead of four. Read it almost like English: "give me n times n, for every n in range(5)."</p>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="480" height="110" viewBox="0 0 480 110" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="90" height="40" rx="8" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="65" y="55" text-anchor="middle" fill="#FFD23F" font-family="JetBrains Mono" font-size="11">n * n</text>
        <text x="65" y="90" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="9">what to build</text>

        <rect x="130" y="30" width="90" height="40" rx="8" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
        <text x="175" y="55" text-anchor="middle" fill="#4FD1C5" font-family="JetBrains Mono" font-size="11">for n</text>
        <text x="175" y="90" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="9">loop variable</text>

        <rect x="240" y="30" width="130" height="40" rx="8" fill="#2E2A5C" stroke="#FF6B9D" stroke-width="1.5"/>
        <text x="305" y="55" text-anchor="middle" fill="#FF6B9D" font-family="JetBrains Mono" font-size="11">in range(5)</text>
        <text x="305" y="90" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="9">where to loop</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>Adding a condition</h3>
    <p>You can even filter while building, using an if at the end:</p>
    <div class="code-block"><span class="tag">Python</span>
evens = [n <span class="c-kw">for</span> n <span class="c-kw">in</span> <span class="c-kw">range</span>(<span class="c-num">10</span>) <span class="c-kw">if</span> n % <span class="c-num">2</span> == <span class="c-num">0</span>]
<span class="c-kw">print</span>(evens)
<span class="c-com"># Output:</span>
<span class="c-out">[0, 2, 4, 6, 8]</span></div>

    <h3>Dictionary comprehensions work the same way</h3>
    <div class="code-block"><span class="tag">Python</span>
squares_dict = {n: n * n <span class="c-kw">for</span> n <span class="c-kw">in</span> <span class="c-kw">range</span>(<span class="c-num">4</span>)}
<span class="c-kw">print</span>(squares_dict)
<span class="c-com"># Output:</span>
<span class="c-out">{0: 0, 1: 1, 2: 4, 3: 9}</span></div>

    <div class="callout"><strong>Not required, but common:</strong> You never have to use comprehensions — a regular loop always works too. But you'll see this shortcut everywhere in real Python code, so it's worth recognizing.</div>
  `);

  renderQuiz(t, {
    question: 'What does [n * 2 for n in range(3)] produce?',
    options: ["[0, 2, 4]", "[1, 2, 3]", "[0, 1, 2]"],
    correct: 0,
    explain: "range(3) gives 0, 1, 2. Doubling each gives 0, 2, 4."
  });

  renderTopicNav(t, "comprehensions");
})();
