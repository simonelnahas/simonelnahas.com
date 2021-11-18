---
title: 'Why You Should Learn Clojure'
date: '2021-11-17'
---

## What is Clojure?

Lisp (List Programming) was
[invented](http://www-formal.stanford.edu/jmc/history/lisp/node2.html#SECTION00020000000000000000)
by John McCarthy in 1958. Clojure is today's most
popular implementation of Lisp. Clojure and Lisp
will be used interchangeably throughout this
article.

## How I found Clojure

Paul Graham graduated with a Ph.D. in programming
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
also describes the benefits Lisp gave his startup
in a very intellectual and entertaining way. This
was my first encounter with the language and Paul
Graham had succeeded in getting me curious about
it.

Robert C. Martin more commonly known as Uncle Bob
co-authored the agile manifesto, which shaped an
entire industry. Later he published several books
on software craftsmanship and is still more than
20 years later a leader in the software industry
for best practices with Clean Code as his mantra.
Uncle Bob has written several blog posts on
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
[Pitch](https://pitch.com/), and
[Shortcut](https://shortcut.com/) (formerly
Clubhouse)–which all had sprung up lately–all were
using it as their core technology.

## Highest paid developers

Having the skills of the future can be tough in
the present moment if those skills aren't in
demand. But luckily this is not the case with
Clojure. In fact, Clojure is the highest paying
language according to
[StackOverflow's Developer Surveys](https://insights.stackoverflow.com/survey/2021#top-paying-technologies-programming-scripting-and-markup-languages).

## Dynamic typing

### From Dynamic to Static and back to Dynamic typing

I had recently gone from JavaScript which is a
dynamically typed language to TypeScript which
adds static typing to JavaScript. So when I
realized that Clojure was dynamically typed I was
at first quite skeptical. With TypeScript and
other static languages, we get a lot of help in
preventing run-time bugs. But static typing
becomes a problem when the compiler prevents
experimentation, then we wrestle the compiler to
satisfy type constraints. Since Clojure itself can
be extended with macros it doesn't **have to** be
part of the core language, but when needed it can
be implemented or imported with a library such as
clojure.spec.

### Use TDD not static typing

The developer knows best when to do which checks
and tests. This can't be predicted by a compiler
since the most accurate representation of the
program's intended behavior is stored in the mind
of the programmer. Therefore when the programmer
describes the intended behavior with tests–**types
become obsolete**:

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

## REPL driven development

With REPL driven development small parts of the
code (all the way down to each expression/form)
are run in isolation similar to creating several
small unit tests before adding the function to the
bigger program. In this way, we can test our
units, before putting them together. Similar to
how you would smell a strawberry before adding it
into a smoothie. The focus is on shortening the
feedback loop by seeing the result of changes in
the code immediately.

See an entertaining example
[here](https://www.youtube.com/watch?v=KZjFVdU8VLI)
of REPL driven development (also referred to as
[interactive programming](https://clojureverse.org/t/misconceptions-about-repl-driven-development/6988/21))
with the beloved flappy bird.

## Macros

Macros make it possible to write code that writes
code. Doing this one can extend the language to
suit the specific problem at hand, where in other
languages you would have to wait for a new version
of the language to introduce the needed feature.
In the previous example, I explained how this
could be applied to add type checks.

Another example of this is in JavaScript where
async `await` was introduced in ECMAScript 2017,
developers could finally simplify a lot of their
code. In Clojure this could be implemented as a
macro. In fact they already had and were using
this functionality (`core.async` and `go`) long
before async `await` was published, as it can be
seen in
[this talk](https://youtu.be/TVJa-V6U-XI?t=1601)
by David Nolen.

Similarly, I have previously enjoyed using F# or
OCaml's `match` statements, which is not a part of
the core Clojure language. But luckily it can be
imported as a macro and be used in programs on
equal grounds as all other Clojure keywords. This
is not possible in other languages. See Sam
Tobin-Hochstadts publication about `match` on
arXiv.org
[here](https://arxiv.org/pdf/1106.2578.pdf).

## FP vs OO

Clojure is a functional programming language, but
it also has polymorphism. This means that if you
are coming from OO you don't have to leave
polymorphism behind.

> OO and FP are **orthogonal**, they are not
> mutually exclusive.
>
> —[FP vs OO by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2018/04/13/FPvsOO.html)

## Clojure can be used anywhere

Clojure is running on Java's JVM and is mostly
used for backend services, whereas ClojureScript
compiles to JavaScript and is mostly used for the
frontend together with React through a thin
wrapper called Reagent. ClojureScript is almost
equal to Clojure, unlike JavaScript that is
distant from Java. This makes Clojure the most
practical language to learn since it obtains the
biggest reach of any language by combining the
reach of Java and JavaScript.

## Does it deliver?

Since Clojure ticked all my boxes on paper I
decided to learn it and test it out first hand.
Even if I didn't end up liking it, I'm sure some
of the concepts could be usable in other contexts
and make me a better programmer in general.

I went through the book on
[www.learn-clojurescript.com](www.learn-clojurescript.com)
recommended by
[Conor White-Sullivan](https://twitter.com/Conaw)
CEO & Founder of
[RoamResearch](https://roamresearch.com/). Then I
decided to try it out on my own. Implementing a
simple TicTacToe game I was very impressed by the
succinctness of the language and REPL driven
development made it super fast to experiment with
potential solutions. Clojure had passed my initial
tests and my confidence in the language had grown
tremendously.

Shortly after this experience I was co-founding
the startup
[MoveNation](https://www.movenationnow.com?utm_source=simons-blog&utm_campaign=why-clojure)
as the CTO. It was time to decide on the tech
stack. Read my exploration on the topic in
[Clojure as a Competitive Advantage](/posts/clojure-startup).

## References

[LISP prehistory - Summer 1956 through Summer 1958 by John McCarthy](http://www-formal.stanford.edu/jmc/history/lisp/node2.html#SECTION00020000000000000000)

[The state of a program and its uses. Ph.D. Dissertation. by Paul Graham](https://dl.acm.org/doi/book/10.5555/917233)

[Y Combinator Top Companies List](https://www.ycombinator.com/topcompanies/)

[Hackers & Painters by Paul Graham](http://www.paulgraham.com/hackpaint.html)

[Why Clojure by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2019/08/22/WhyClojure.html)

[TypeWars by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html)

[The New Normal: Everything Relies on Sharp Tools by Michael Nygard](https://www.cognitect.com/blog/2016/4/22/the-new-normal-everything-relies-on-sharp-tools)

[Stack Overflow Developer Survey 2021](https://insights.stackoverflow.com/survey/2021#section-top-paying-technologies-top-paying-technologies)

[Everything I Have Learned I Have Learned From Someone Else by David Nolen](https://www.youtube.com/watch?v=TVJa-V6U-XI&t=1601s)

[Interactive programming Flappy Bird in ClojureScript - YouTube](https://www.youtube.com/watch?v=KZjFVdU8VLI)

[Extensible Pattern Matching in an Extensible Language by Sam Tobin-Hochstadt](https://arxiv.org/pdf/1106.2578.pdf)

**Thanks** to the following great people for
reading drafts and providing comments on this:

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
