---
title: 'Clojure as a Competitive Advantage'
date: '2021-11-18'
---

## Tweet

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">6 months ago I co-founded a startup and based my entire tech stack on a programming language invented in 1958. Today due to the help of a niche community we have launched the MVP, been accepted into an accelerator and are hiring. Follow me if you want to know what happens next.</p>&mdash; Simon El Nahas (@simonelnahas) <a href="https://twitter.com/simonelnahas/status/1447241868765503491?ref_src=twsrc%5Etfw">October 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Our mission

In April 2021 I co-founded our startup
[MoveNation](https://www.movenationnow.com?utm_source=simons-blog&utm_campaign=clojure-startup)
as the CTO. Our mission is to help people find a
better place to live for less. We want to do that
by creating a search engine that can crunch
through massive amounts of data that are relevant
to deciding where to live and match it to each
person's lifestyle preferences and financial
situation.

This is a very big and complex problem that will
require every ounce of technical skill to
accomplish.

Embarking on this journey I took time to think and
I consulted people that were already successful. I
wanted to decide on what tools I needed to pack so
to increase our leverage and even give us a
competitive advantage. More concretely I had to
choose our tech stack.

## Programming languages

The programming language is arguably one of the
most important aspects of the tech stack since it
is probably also the hardest one to change later
on. I have used a lot of different programming
languages (Java, Python, R, Swift, VHDL, C#, F#,
OCaml, ReasonML, Prolog, C, C++, JavaScript, and
TypeScript) and I even implemented the compiler
for a new security-oriented language. So what
convinced me that Clojure was superior? And why
did I choose to use it for my startup?

To clarify Clojure is the most popular
implementation of Lisp and they will be used
interchangeably throughout this article.

## Hiring considerations

In my blog post
[Why You Should Learn Clojure](https://simonelnahas.com/posts/why-clojure)
I explore how Clojure made me productive and why
it is a very powerful and productive language. In
deciding the tech stack of a startup there are
more considerations to take into account than what
made me productive, for example hiring.

As mentioned in my previous post one of the
reasons, I wanted to learn Clojure was because it
was a top paying technology. But at the same time,
one might argue that this is exactly why I
shouldn't base my startup on it. Since we will pay
a premium for hiring Clojure developers. But that
would be faulty reasoning since people are not
equally productive in all languages. Programming
languages vary in power and so even though we
would potentially pay more for a Clojure
programmer it would still be cheaper to develop
the same program, ultimately requiring less
funding.

Potential trainable hires will be betting their
career on learning a programming language. So we
will need to have convincing arguments explaining
why Clojure is a sensible choice. If they are
eager to learn it we can then provide the
necessary training for them to be productive. In
[this talk](https://www.youtube.com/watch?v=zK9y1nvmft8),
Marcus Rydberg Founder & CTO of
[Luminare](https://www.luminaremed.com/) argues
that since Clojure is such a small language, it is
easy to learn.

### Niche benefits

The developers already within this niche are very
passionate about the language. There are a lot of
people using it for hobby projects, which hope to
one day spend their whole day developing in
Clojure. It might even be easier to hire within
the community since developers aren't as picky
with other job factors as long as they can use a
language they like. Many companies struggle with
hiring developers since their only lever is cash
compensation. Using a niche technology and
leveraging its community might be a viable
strategy for overcoming this struggle. Especially
if you can manage to choose a growing community
like the Clojure community and benefit from its
growth as you scale.

> [...] the most accurate measure of the relative
> power of programming languages might be the
> percentage of people who know the language who
> will take any job where they get to use that
> language, regardless of the application domain.
>
> —[Succinctness is Power by Paul Graham](http://www.paulgraham.com/power.html)

An additional benefit of the Clojure community is
the fact that Clojure developers are often quite
senior. Clojure is seldom someones first language
since one often needs to experience the
shortcomings of other languages to be motivated to
overcome the steep but short learning curve of
Clojure. This makes the average Clojurian (a
person within the Clojure community) quite
knowledgeable. Having a high average level of
knowledge among employees is very beneficial in
running a company.

### The backup plan

Of course, there are no guarantees in hiring, so
we still wanted to have a backup plan, in case it
was impossible to hire or train developers.
Luckily since ClojureScript compiles to JavaScript
it is possible to use any JavaScript library
within it. It would be possible to build parts of
the application in JavaScript and other parts in
ClojureScript, due to the tight integration. This
would not be the ideal solution, but at least we
could build on top of the existing software
independent of hiring problems with JavaScript
developers.

## Beating the averages.

In
[Beating the Averages](http://www.paulgraham.com/avg.html),
Paul Graham describes his reasoning behind
choosing Lisp as the core technology for a
startup. His key ideas are: The average startup
fails, so _don't be average_. Using a different
language could be a core differentiator against
competitors. Secondly he describes the Blub
Paradox: If Lisp is so great then why doesn't
everyone use it? It is because programmers can
only compare the power of programming languages
they know. Learning new languages requires
changing a habit of thought, which is a very slow
process. As a result, it will also take a long
time before we adopt the most powerful one.

## Successful startups using Lisp

If this language is so powerful and it has existed
for so long there must be a lot of great examples
of companies who have used it successfully.
Despite the Blub Paradox there are already great
examples and here I have listed a few of them. A
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

It is important for us that Clojure can scale with
our demand, since we expect to eventually need to
handle demand close to the sum of all real estate
sites. Luckily there is no need to worry since
Clojure is also used in bigger companies such as
Facebook, Amazon, Apple, Netflix, Google, DBS
Bank, Deutsche Bank, and
[many more](https://clojure.org/community/companies).
For the curious check out more success stories on
[clojure.org](https://clojure.org/community/companies)
or
[lisp-lang.org](https://lisp-lang.org/success/).

## Community support

Contrarily to many other programming languages the
community doesn't live on StackOverflow, but
rather on the Clojurians Slack. Here senior
developers often respond in less than 10 minutes.
The is again one of the great benefits other
languages don't offer. It has already helped me
tremendously getting started and solving problems
and I'm sure that our company could benefit
greatly from this even as we get more experts
in-house.

## Conclusion

We will encounter many unsolved problems in
helping people find a better place to live for
less. So we should use the sharpest tools at our
disposal that will give us the greatest leverage
in comprehending and solving the problems with
high productivity. Clojure could be the language
that delivers on these promises and therefore
giving us a competitive advantage. This is why I
choose Clojure for our
startup–[MoveNation](https://www.movenationnow.com?utm_source=simons-blog&utm_campaign=clojure-startup).

## References

[Changing to Clojure mid-flight by Marcus Rydberg](https://www.youtube.com/watch?v=zK9y1nvmft8)

[Beating the Averages by Paul Graham](http://www.paulgraham.com/avg.html)

[Facts about Google’s acquisition of ITA Software](https://www.google.com/press/ita/)

[Revenge of the Nerds by Paul Graham](http://www.paulgraham.com/icad.html)

[Clojure - Companies](https://clojure.org/community/companies)

[AI & Machine Learning | Common Lisp](https://lisp-lang.org/success/ai/)

[The New Normal: Everything Relies on Sharp Tools by Michael Nygard](https://www.cognitect.com/blog/2016/4/22/the-new-normal-everything-relies-on-sharp-tools)

**Thanks** to the following great people for
reading drafts and providing comments on this:

- Peter Strömberg - Founder of
  [Calva](https://calva.io/)
- Rupert Ede - Co-founder & CTO of
  [All Street](https://www.sevva.ai/)
- Peter Trydeman - Co-founder & CEO of
  [MoveNation](https://www.movenationnow.com?utm_source=simons-blog&utm_campaign=clojure-startup)
- Adam Renklint - Co-founder & CTO of
  [Pitch](https://pitch.com/)
- Andrew Meredith - Author of
  [learn-clojurescript.com](learn-clojurescript.com)
- John Stevenson - Author of
  [practical.li](practical.li)
