---
title: 'Clojure as a competitive advantage'
date: '2021-11-17'
---

## Background

### Tweet

[![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fpublic-simon-el-nahas%2FqvmSSjKUTI.png?alt=media&token=4d0a6573-9251-4b26-a417-196ccc70694d)](https://twitter.com/simonelnahas/status/1447241868765503491)

### Programming languages

In April 2021 I co-founded our startup
[MoveNation](https://www.movenationnow.com/) as
the CTO. Our mission is to help people find a
better place to live for less. We want to do that
by creating a search engine that can crunch
through massive amounts of data that are relevant
to deciding where to live and match it to each
persons lifestyle preferences and financial
situation.

This is a very big and complex problem that will
require every ounce of technical skill to
accomplish.

Embarking on this journey I took time to think and
consult people that were already successful. I
wanted to make a decision on what tools I needed
to pack so to increase our chances of success and
even give us a competitive advantage. More
concretely I had to choose our tech stack.

The programming language is arguably one of the
most important aspects of the tech stack, since it
is probably also the hardest one to change later
on. I have used a lot of different programming
languages (Java, Python, R, Swift, VHDL, C#, F#,
OCaml, ReasonML, Prolog, C, C++, JavaScript,
TypeScript) and I even implemented the compiler
for a new security oriented language. So what
convinced me that Clojure was superior? And why
did I choose to use it for my startup?

Let's first rewind a little and let me tell you
how I discovered Clojure

### What is Clojure?

Lisp (List Programming) was
[invented](http://jmc.stanford.edu/articles/lisp.html)
by John McCarthy in 1958. Clojure is Todays most
popular implementation of Lisp. Clojure and Lisp
will be used interchangeably throughout this
article.

## Why should I learn Clojure?

### How I found Clojure

Paul Graham graduated with a PhD in programming
languages from
[Harvard in 1990](https://dl.acm.org/doi/book/10.5555/917233).
He then went on to start ViaWeb in 1995 and sold
it to Yahoo in 1998 for 49M USD. But he has
probably made the biggest impact by co-founding
and leading Y Combinator, which is the most
successful startup accelerator with a lead count
of over
[25 unicorn companies](https://www.ycombinator.com/topcompanies/).
In other words, he had my attention. So I decided
to read his book
[Hackers and Painters](http://www.paulgraham.com/hackpaint.html).
Apart from describing why nerds are unpopular, he
also describes the benefits the Lisp gave his
startup in a very intellectual and entertaining
way. This was my first encounter with the language
and Paul Graham had succeeded in getting me
curious about it.

Robert C. Martin more commonly known as Uncle Bob
co-authored the agile manifesto, which shaped an
entire industry. Later he published several books
on software craftsmanship and is still more than
20 years later a leader in the software industry
for best practices with Clean Code as his mantra.
Uncle bob has written several blog posts on
Clojure, but most profound is his statement here:

> My favorite language of all, the language that I
> think will outlast all the others, the language
> that I believe will eventually become the
> standard language that all programmers use... is
> Lisp.
>
> —[Why Clojure by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2019/08/22/WhyClojure.html)

As I dove deeper to find companies using Clojure
Today, I realized that
[RoamResearch](https://roamresearch.com/),
[Pitch](https://pitch.com/) and
[Shortcut](https://shortcut.com/) (formerly
Clubhouse)–which all had sprung up lately–all
where using it as their core technology.

### Highest paid developers

Having the skills of the future can be tough in
the present moment if those skills aren't in
demand. But luckily this is not the case with
Clojure. In fact Clojure is the highest paying
language according to
[StackOverflows Developer Surveys](https://insights.stackoverflow.com/survey/2021#top-paying-technologies-programming-scripting-and-markup-languages).

### Dynamic typing

#### From Dynamic to Static and back to Dynamic typing

I had recently gone from JavaScript which is a
dynamically typed language to TypeScript which
adds static typing to JavaScript. So when I
realized that Clojure was dynamically typed I was
at first quite skeptical. With TypeScript and
other static languages we get a lot of help in
preventing run time bugs. But static typing
becomes a problem when the compiler prevents
experimentation, then we wrestle the compiler to
satisfy type constraints. Since Clojure itself can
be extended with macros it doesn't **have to** be
part of the core language, but when needed it can
be implemented or imported with a library such as
clojure.spec.

#### Use TDD not static typing

The developer knows best the when to do which
checks and tests. This can't be predicted by a
compiler since the most accurate representation of
the programs intended behavior is stored in the
mind of the programmer. Therefore when the
programmer describes the intended behavior with
tests–**types become obsolete**:

> You see, when a Java programmer gets used to
> TDD, they start asking themselves a very
> important question: “Why am I wasting time
> satisfying the type constraints of Java when my
> unit tests are already checking everything?”
> Those programmers begin to realize that they
> could become **much** more productive by
> switching to a dynamically typed language
>
> —[TypeWars by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html)

### REPL driven development

With REPL driven development small parts of the
code are run in isolation similar to creating
several small unit tests before adding it to the
bigger program. In this way we can test our units,
before putting them together. Similar to how we
check the condition of a strawberry before adding
it into a smoothie. The focus is on shortening the
feedback loop by seeing the result of changes in
the code immediately.

See an entertaining example
[here](https://www.youtube.com/watch?v=KZjFVdU8VLI)
of REPL driven development (also called
[interactive programming](https://clojureverse.org/t/misconceptions-about-repl-driven-development/6988/21))
with the beloved flappy bird.

### Macros

Macros make it possible to write code that writes
code. Doing this one can extend the language to
suit the specific problem at hand, wherein other
languages you would have to wait for a new version
of the language to introduce the needed feature.
In the previous example I explained how this could
be applied to add type checks.

Another example of this is in JavaScript where
async `await` was introduced in ECMAScript 2017,
developers could finally simplify a lot of their
code. But in the world of Clojure this would be
implemented as a macro that any developer could
implement themselves. In fact ClojureScript
developers can even develop a new language feature
like `await` with a macro and deploy it to all
browsers on the same day. In fact they already had
and were using this functionality (`core.async`
and `go`) long before async `await` was published.
See
[this talk](https://youtu.be/TVJa-V6U-XI?t=1601)
by David Nolen about it.

Similarly I have previously enjoyed using
`F#`/`OCaml`'s `match` statements, which is not a
part the core Clojure language. But luckily it can
be imported as a macro and be used in programs on
equal grounds as all other Clojure keywords. This
is not possible in other languages since it is a
part of the language. See Sam Tobin-Hochstadts
article on
[arXiv.org](https://arxiv.org/pdf/1106.2578.pdf).

### FP vs OO

Clojure is a functional programming language, but
it also has polymorphism. There is not a tradeoff
between Functional Programming and Object Oriented
Programming, since they are orthogonal and can
therefore easily coexist. This means that if you
are coming from OO you don't have to leave
polymorphism behind.

> OO and FP are **orthogonal**, they are not
> mutually exclusive.
>
> —[FP vs OO by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2018/04/13/FPvsOO.html)

### Clojure can be used anywhere

Clojure is running on the Java's JVM and is mostly
used for backend services, whereas ClojureScript
compiles to JavaScript and is mostly used for the
frontend together with React through a thin
wrapper called Reagent.

ClojureScript is almost equal to Clojure, unlike
JavaScript that is distant to Java.

This makes Clojure the most practical language to
learn, since it obtains the biggest reach of any
language by combining the reach of Java and
JavaScript.

### Does it deliver?

Since Clojure ticked all my boxes on paper I
decided to learn it and test it out first hand.
Even if I didn't end up liking it, I'm sure some
of the concepts could be usable in other contexts
and make me a better programmer in general.

I went through the book on
www.learn-clojurescript.com recommended by
[Conor White-Sullivan](https://twitter.com/Conaw)
CEO & Founder of
[RoamResearch](https://roamresearch.com/). Then I
decided to try it out on my own.

Implementing a simple TicTacToe game I was very
impressed by the succinctness of the language and
REPL driven development made it super fast to
experiment with potential solutions.

Clojure had passed my initial tests and my
confidence in the language had grown tremendously.

Shortly after came the time for me to decide on
the tech stack of our startup. In doing that I
wanted to

## Why use Clojure in a startup?

### Hiring considerations

In deciding the tech stack of a startup there are
more considerations to take into account than what
made myself productive.

As mentioned earlier one of the reasons I wanted
to learn Clojure was because it was a top paying
technology. But at the same time one might argue
that this is exactly why I shouldn't base my
startup on it. Since we will pay a premium for
hiring Clojure developers. But that would be
faulty reasoning, since people are not equally
productive in all languages. Programming languages
vary in power and so even though we would
potentially pay more for a Clojure programmer it
would still be cheaper to develop the same
program, ultimately requiring less funding.

Potential trainable hires will be betting their
career on learning a programming language. So we
will need to have convincing arguments explaining
why Clojure is a sensible choice. If they are
eager to learn it we can then provide the
necessary training for them to be productive. In
[this talk](https://www.youtube.com/watch?v=zK9y1nvmft8)
Marcus Rydberg Founder & CTO of
[Luminare](https://www.luminaremed.com/) argues
that since Clojure is such a small language, it is
easy to learn.

#### Niche benefits

On the other hand the developers already within
this niche are very passionate about the language.
There are a lot of people using it for hobby
projects, which hope to one day spend their whole
day developing in Clojure. It might even be easier
to hire within the community since developer
aren't as picky with other job factors as long as
they can use a language they like. Many companies
struggle with hiring developers, since their only
lever is cash compensation. Using a niche
technology and leveraging its community might be a
viable strategy for overcoming this struggle.
Especially if you can manage to choose a growing
community and benefit from its growth as you
scale.

> [...] the most accurate measure of the relative
> power of programming languages might be the
> percentage of people who know the language who
> will take any job where they get to use that
> language, regardless of the application domain.
>
> —[Succinctness is Power by Paul Graham](http://www.paulgraham.com/power.html)

An additional benefit of the Clojure community is
the fact that Clojure developers are often quite
senior. Clojure is seldom someones first language,
since one often needs to experience the
shortcomings of other languages to be motivated to
overcome the initial learning curve of Clojure.
This makes the average Clojurian (a person within
Clojure community) quite knowledgeable. Having a
high average level of knowledge among employees is
very beneficial in running a company.

#### The backup plan

Of course there are no guarantees, so we still
wanted to have a backup plan, in case it was
impossible to hire or train developers. Luckily
since ClojureScript compiles to JavaScript it is
possible to use any JavaScript library within it.
In fact it would be possible to build parts of the
application in JavaScript and other parts in
ClojureScript, due to the tight integration. This
would not be the ideal solution, but at least we
could build on top of the existing software
independent of hiring problems with JavaScript
developers.

### Beating the averages.

In
[Beating the Averages](http://www.paulgraham.com/avg.html),
Paul Graham describes his reasoning behind
choosing Lisp as core technology for a startup.
His key ideas are: The average startup fails, so
**don't be average**. Using a different language
could be a core differentiator against
competitors. His second most key idea is the
**Blub Paradox**. If Lisp is so great then why
doesn't everyone use it? It is due to the fact
that programmers can only compare the power of
programming languages they know. Learning new
languages requires changing our habit of thought,
which is a very slow process. As a result it will
also take a long time before we adopt the most
powerful one.

### Successful startups using Lisp

If this language is so powerful and it has existed
for so long there must be a lot of great examples
of companies who has used it successfully. In fact
there is and here I have listed a few of them. A
surprisingly similar story unfolds for each of
them. Often it is a small startup beating a much
larger company in their own game. The Lisp startup
is mentioned last.

- Google Slides vs PowerPoint vs Pitch

- Evernote vs OneNote vs RoamResearch

- MS Word vs Google Docs vs Grammarly

- Asana vs Shortcut (formerly Clubhouse)

- Expedia vs ITA

> You can write little glue programs in Lisp too
> (I use it as a desktop calculator), but the
> biggest win for languages like Lisp is at the
> other end of the spectrum, where you need to
> write sophisticated programs to solve hard
> problems in the face of fierce competition. A
> good example is the airline fare search
> program that ITA Software licenses to Orbitz.
> These guys entered a market already dominated by
> two big, entrenched competitors, Travelocity and
> Expedia, and seem to have just humiliated them
> technologically. The core of ITA's application
> is a 200,000 line Common Lisp program that
> searches many orders of magnitude more
> possibilities than their competitors, who
> apparently are still using mainframe-era
> programming techniques. (Though ITA is also in a
> sense using a mainframe-era programming
> language.) I have never seen any of ITA's code,
> but according to one of their top hackers they
> use a lot of macros, and I am not surprised to
> hear it.
>
> —[Revenge of the Nerds by Paul Graham](http://www.paulgraham.com/icad.html)

To elaborate on the last example, since the name
might not be commonly known anymore: ITA was sold
to Google for
[700M USD](https://www.google.com/press/ita/)
in 2010.

A question relevant when a startups grows is
scaling the technology. But there is no need to
worry, since Clojure is also used in bigger
companies such as Facebook, Amazon, Apple,
Netflix, Google, DBS Bank, Deutsche Bank and
[many more](https://clojure.org/community/companies).
For the curios check out more success stories on
[clojure.org](https://clojure.org/community/companies)
or
[lisp-lang.org](https://lisp-lang.org/success/).

### Community support

Contrarily to many other programming languages the
community doesn't live on StackOverflow, but
rather on the Clojurians Slack. Here senior
developers often respond in less than 10 minutes.
The is again one of the great benefits other
languages doesn't offer. It has already helped me
tremendously getting started and solving problems
and i'm sure that our company could benefit from
this even as we get more experts in house.

## Conclusion

We will encounter many unsolved problems in
helping people find a better place to live for
less. So we should use the sharpest tools at our
disposal that will give us the greatest leverage
in comprehending and solving the problems with
high productivity. Clojure could be the language
that delivers on these promises and therefore
giving us a competitive advantage. This is why I
choose Clojure for our startup–MoveNation.

## References

[http://jmc.stanford.edu/articles/lisp.html](http://jmc.stanford.edu/articles/lisp.html)

[https://dl.acm.org/doi/book/10.5555/917233](https://dl.acm.org/doi/book/10.5555/917233)

[https://www.ycombinator.com/topcompanies/](https://www.ycombinator.com/topcompanies/)

[http://www.paulgraham.com/hackpaint.html](http://www.paulgraham.com/hackpaint.html)

[https://blog.cleancoder.com/uncle-bob/2019/08/22/WhyClojure.html](https://blog.cleancoder.com/uncle-bob/2019/08/22/WhyClojure.html)

[https://www.cognitect.com/blog/2016/4/22/the-new-normal-everything-relies-on-sharp-tools](https://www.cognitect.com/blog/2016/4/22/the-new-normal-everything-relies-on-sharp-tools)

[https://insights.stackoverflow.com/survey/2021#section-top-paying-technologies-top-paying-technologies](https://insights.stackoverflow.com/survey/2021#section-top-paying-technologies-top-paying-technologies)

[https://insights.stackoverflow.com/survey/2021#top-paying-technologies-programming-scripting-and-markup-languages](https://insights.stackoverflow.com/survey/2021#top-paying-technologies-programming-scripting-and-markup-languages)

[https://youtu.be/TVJa-V6U-XI?t=1601](https://youtu.be/TVJa-V6U-XI?t=1601)

[https://www.youtube.com/watch?v=KZjFVdU8VLI](https://www.youtube.com/watch?v=KZjFVdU8VLI)

[https://samth.github.io/match-ifl-full.pdf](https://samth.github.io/match-ifl-full.pdf)

[https://www.youtube.com/watch?v=zK9y1nvmft8](https://www.youtube.com/watch?v=zK9y1nvmft8)

[https://www.google.com/press/ita/](https://www.google.com/press/ita/)

[http://www.paulgraham.com/icad.html](http://www.paulgraham.com/icad.html)

[https://clojure.org/community/companies](https://clojure.org/community/companies)

[https://lisp-lang.org/success/](https://lisp-lang.org/success/)

**Thanks** to the following great people for
providing comments of this:

- Peter Strömberg - Founder of
  [Calva](https://calva.io/)
- Rupert Ede - Co-founder & CTO of
  [All Street](https://www.sevva.ai/)
- Peter Trydeman - Co-founder & CEO of
  [MoveNation](https://www.movenationnow.com/)
- Adam Renklint - Co-founder & CTO of
  [Pitch](https://pitch.com/)
- Andrew Meredith - Author of
  [learn-clojurescript.com](learn-clojurescript.com)
- John Stevenson - Author of
  [practical.li](practical.li)
