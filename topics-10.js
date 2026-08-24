// ---------- 10.1 What is a class/object ----------
(function(){
  const t = createTopicShell("classes-intro", "Intro to Objects · 1 of 2", "What a class and object are");

  t.insertAdjacentHTML('beforeend', `
    <p>Everything so far has stored data (variables, lists, dictionaries) and separately, code that acts on data (functions). A <strong>class</strong> lets you bundle both together — data and the actions that belong with it — into one reusable blueprint.</p>
    <p>Think of a class as a <strong>blueprint</strong> or template — like a blueprint for a house. The blueprint itself isn't a house you can live in; but you can use it to build as many actual houses as you like. Each house built from that blueprint is called an <strong>object</strong> (or an "instance" of the class).</p>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky alt">
      <svg width="480" height="170" viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="50" width="140" height="70" rx="10" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="90" y="80" text-anchor="middle" fill="#FFD23F" font-family="Space Grotesk" font-size="12" font-weight="600">Blueprint</text>
        <text x="90" y="98" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">(the class)</text>

        <path d="M165 65 L235 30" stroke="#4FD1C5" stroke-width="1.5" marker-end="url(#arrowcls)"/>
        <path d="M165 85 L235 85" stroke="#4FD1C5" stroke-width="1.5" marker-end="url(#arrowcls)"/>
        <path d="M165 105 L235 140" stroke="#4FD1C5" stroke-width="1.5" marker-end="url(#arrowcls)"/>

        <rect x="240" y="10" width="110" height="40" rx="8" fill="#2E2A5C" stroke="#4FD1C5"/>
        <text x="295" y="34" text-anchor="middle" fill="#4FD1C5" font-family="Inter" font-size="10">House A</text>

        <rect x="240" y="65" width="110" height="40" rx="8" fill="#2E2A5C" stroke="#4FD1C5"/>
        <text x="295" y="89" text-anchor="middle" fill="#4FD1C5" font-family="Inter" font-size="10">House B</text>

        <rect x="240" y="120" width="110" height="40" rx="8" fill="#2E2A5C" stroke="#4FD1C5"/>
        <text x="295" y="144" text-anchor="middle" fill="#4FD1C5" font-family="Inter" font-size="10">House C</text>

        <text x="400" y="88" fill="#B8B3E0" font-family="Inter" font-size="10">each is an</text>
        <text x="400" y="103" fill="#B8B3E0" font-family="Inter" font-size="10">"object"</text>

        <defs><marker id="arrowcls" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4FD1C5"/></marker></defs>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>A very simple class</h3>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">class</span> Dog:
    <span class="c-kw">def</span> __init__(self, name):
        self.name = name

    <span class="c-kw">def</span> bark(self):
        <span class="c-kw">print</span>(f<span class="c-str">"{self.name} says woof!"</span>)</div>

    <ul>
      <li><strong>class Dog:</strong> — starts the blueprint, named "Dog"</li>
      <li><strong>__init__</strong> — a special function that runs automatically whenever a new Dog object is created; it sets up the starting data</li>
      <li><strong>self</strong> — refers to "this particular dog" — it's how each object keeps track of its own data separately</li>
      <li><strong>bark</strong> — an action this class can perform</li>
    </ul>

    <h3>Creating actual objects from the blueprint</h3>
    <div class="code-block"><span class="tag">Python</span>
dog1 = Dog(<span class="c-str">"Rex"</span>)
dog2 = Dog(<span class="c-str">"Bella"</span>)

dog1.bark()
dog2.bark()

<span class="c-com"># Output:</span>
<span class="c-out">Rex says woof!
Bella says woof!</span></div>

    <p>Same blueprint, two separate objects, each remembering its own name.</p>

    <div class="callout"><strong>Plain English:</strong> A class is the design. An object is an actual thing built from that design — and you can build as many as you need, each with its own data.</div>
  `);

  renderQuiz(t, {
    question: "What is the relationship between a class and an object?",
    options: [
      "They are the same thing",
      "A class is a blueprint; an object is a specific thing built from that blueprint",
      "An object contains many classes"
    ],
    correct: 1,
    explain: "A class defines the structure and behavior. An object is a concrete instance created from that class, with its own data."
  });

  renderTopicNav(t, "classes-intro");
})();

// ---------- 10.2 Why classes are useful ----------
(function(){
  const t = createTopicShell("classes-why", "Intro to Objects · 2 of 2", "Why classes are useful");

  t.insertAdjacentHTML('beforeend', `
    <p>You might be wondering — why not just use variables and functions separately, like we've been doing? Here's the problem classes solve: keeping related data and actions <strong>organized together</strong>, especially once your program manages many similar "things."</p>

    <h3>Without a class — messy and error-prone</h3>
    <div class="code-block"><span class="tag">Python — the hard way</span>
name1 = <span class="c-str">"Rex"</span>
breed1 = <span class="c-str">"Labrador"</span>

name2 = <span class="c-str">"Bella"</span>
breed2 = <span class="c-str">"Poodle"</span>

<span class="c-com"># Now imagine tracking 50 dogs this way... it falls apart fast</span></div>

    <h3>With a class — organized and scalable</h3>
    <div class="code-block"><span class="tag">Python</span>
<span class="c-kw">class</span> Dog:
    <span class="c-kw">def</span> __init__(self, name, breed):
        self.name = name
        self.breed = breed

    <span class="c-kw">def</span> describe(self):
        <span class="c-kw">print</span>(f<span class="c-str">"{self.name} is a {self.breed}"</span>)

dogs = [Dog(<span class="c-str">"Rex"</span>, <span class="c-str">"Labrador"</span>), Dog(<span class="c-str">"Bella"</span>, <span class="c-str">"Poodle"</span>)]

<span class="c-kw">for</span> dog <span class="c-kw">in</span> dogs:
    dog.describe()

<span class="c-com"># Output:</span>
<span class="c-out">Rex is a Labrador
Bella is a Poodle</span></div>
  `);

  const diagramWrap = document.createElement('div');
  diagramWrap.className = 'diagram-wrap';
  diagramWrap.innerHTML = `
    <div class="sticky">
      <svg width="480" height="130" viewBox="0 0 480 130" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="200" height="90" rx="10" fill="#2E2A5C" stroke="#4FD1C5" stroke-width="1.5"/>
        <text x="120" y="45" text-anchor="middle" fill="#4FD1C5" font-family="Space Grotesk" font-size="12" font-weight="600">One Dog object</text>
        <text x="120" y="68" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">data: name, breed</text>
        <text x="120" y="86" text-anchor="middle" fill="#B8B3E0" font-family="Inter" font-size="10">action: describe()</text>

        <text x="250" y="70" fill="#FFD23F" font-family="Inter" font-size="20">→</text>

        <rect x="290" y="20" width="170" height="90" rx="10" fill="#2E2A5C" stroke="#FFD23F" stroke-width="1.5"/>
        <text x="375" y="50" text-anchor="middle" fill="#FFD23F" font-family="Inter" font-size="10">everything about</text>
        <text x="375" y="68" text-anchor="middle" fill="#FFD23F" font-family="Inter" font-size="10">one dog stays</text>
        <text x="375" y="86" text-anchor="middle" fill="#FFD23F" font-family="Inter" font-size="10">bundled together</text>
      </svg>
    </div>
  `;
  t.appendChild(diagramWrap);

  t.insertAdjacentHTML('beforeend', `
    <h3>The practical benefits</h3>
    <ul>
      <li><strong>Organization</strong> — related data and actions live together, not scattered across separate variables</li>
      <li><strong>Reusability</strong> — write the blueprint once, create as many objects as you need</li>
      <li><strong>Clarity</strong> — <code>dog.bark()</code> reads naturally, clearly showing which dog is barking</li>
      <li><strong>Scalability</strong> — managing 2 dogs or 2,000 dogs uses the exact same code structure</li>
    </ul>

    <div class="callout"><strong>Where you'll see this in real life:</strong> Almost every larger Python project — websites, apps, games — uses classes constantly to represent things like Users, Products, Orders, or Messages. This basic idea underpins a huge amount of real-world Python code.</div>
  `);

  renderQuiz(t, {
    question: "What's the main practical benefit of using a class instead of separate variables?",
    options: [
      "Classes make code run faster automatically",
      "Related data and actions stay organized together, and the same blueprint can create many objects easily",
      "Classes remove the need for functions entirely"
    ],
    correct: 1,
    explain: "Classes bundle related data and behavior together, and let you create as many similar objects as needed from one consistent blueprint."
  });

  renderTopicNav(t, "classes-why");
})();
