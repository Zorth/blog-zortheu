---
title: 'Managing a Living World TTRPG'
description: 'A deep dive on how I managed 30 players with 7 GMs.'
pubDate: '2026-03-24'
heroImage: './assets/blog-placeholder-3.jpg'
---

TLDR: I have been running a **lot** of westmarches, see [the endgame solution to everything](#the-endgame-solution-to-everything) on how I run it now using a custom tool dedicated for this purpose.

# Backstory
I have been running living world style campaigns[^1] (also called *west-marches*) since late 2021. It came as a necessity since I started a "little TTRPG community"[^2] in my school and quickly had much more players than I had GMs[^3].

I quickly found that the internet had a lot of advice but often communicated in *vibes*. Not a lot of practical solutions, let alone tools to manage these situations.

I will try to reference the sources going forwards but it has been quite a while and my note-taking system has evolved much since then so I'm sorry if I have forgotten some inspirations.

I was, as with many things in my TTRPG journey, first brought to the attention to these many player style campaigns through [This Video]( https://www.youtube.com/watch?v=oGAC-gBoX9k ) by the wonderful Matthew Colville. And, since he hadn't proven me wrong in the past, decided this was the solution to all of my problems. Spoiler alert: It was.

# Things I've tried
Let's take a brief summation of things I've tried and what to take away from them.

## [DnDBeyond]( https://www.dndbeyond.com/ )
I started of my GM'ing journey with D&D5e using DnDBeyond, this was a great tool to keep characters and share sources with led me to pay over € 2,000 in books alone on the site. This worked, but aside from the fact this is ridiculously expensive and riddled with bugs or missing features. They did (and currently do) not have tools to manage worlds, notes, players, sessions, times, etc. in any meaningful way.

## [WorldAnvil]( https://www.worldanvil.com/ )
I was already using WorldAnvil for regular campaigns and decided to use this when starting my first westmarches. This worked for the wiki aspect of it and even some session notes etc. But I did pay for a subscription in order to use it and use it's premium tools. This is also where I discovered I do not like leaflet.js to work with, it is very clunky and lacks needed features for fantasy maps. Although having pins on maps that link to other maps opened my eyes here.

## [Discord]( https://discord.com/ )
Discord has a large supply of bots and other features to facility TTRPGs and planning things. "Groupflows" in my experience has been the best for planning but has broken nearly weakly whilst using it. This is still the best solution for communicating with people, making a forum post for a session is the best way to give a place to plan and discuss.

## Microsoft Excel
This is the powertool, the best planning option. I'm not sure where I heard about the original option but I know *Mystic Arts* posted [a video]( https://www.youtube.com/watch?v=NHnsxEkLHFM ) about essentially the best method to plan a session.
You should use this, you should automate character Levels, etc. using scripts. But still your players/users will break the sheet, forget to fill it in and accidentally fill it in wrong.

## [Foundry VTT]( https://foundryvtt.com/ )
Starting up my second living world campaign, I decided to use foundry. Now this is a VTT and it comes with it's issues. But, it's very great to track character sheets, quests, maps, etc. I can create user accounts for people. But it's a VTT and can be a bit laggy. Plus, you need to run a server 24/7.

# The Endgame Solution to Everything
So you might feel this coming but, the solution is a custom tool. The tool I created for this is called **Guild** and I will now describe it and help you get your own tool running should you want to use something similar.

## Guild
What is guild? First off: It's not for you, it's for me. I'm not trying to sell you something. **You can't use it.**

Users go to the dedicated website on our domain and log in using their e-mail & password, google, or discord. 
They then create their character using Name, Class & Ancestry, an optional link to DnDBeyond or anything else they want.
There's a list of sessions on the right they can either put themselves as "interested" in or join right away with a character of their choosing.
There's a "Feed" at the bottom with level ups of people's characters, ranks or other cool thing to bolster some community.

In our case, we're running both DnD5.5 and PF2r. There's a filter in the top right and a light mode (for some reason, nobody uses it).

![Guild Interface](./assets/Guild_01.png)


[^1]: https://arsludi.lamemage.com/index.php/78/grand-experiments-west-marches/

[^2]: https://tarragon.be

[^3]: https://rpg.stackexchange.com/questions/112324/difference-between-a-gm-and-a-dm
