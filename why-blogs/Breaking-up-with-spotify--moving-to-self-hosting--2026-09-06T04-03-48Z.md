# I think I'm done with Spotify

<details><summary>Click to view the history & too long rant about why breakup reason</summary>
My music journey in the beginning started just like most people. I inherited a kinda few-hundred-song library from my sister/family PC, ig? I don't remember much. But I started with a few, almost a hundred, downloaded songs, I would assume (no idea where those came from).

Eventually, when I started listening to songs regularly, I would download songs I liked. I guess at that time, the way to find new songs was by listening to some random song on TV lol. Now that I think about it, just music channels on TV were playing some real bangers 🎇.

Well, eventually I started discovering my own tastes by getting recommended songs on YouTube. And here is where my journey to actually curate a playlist for myself started. If ykyk *wink *wink, I started legally getting songs off YouTube into my songs folder.

I didn't download many songs during that time, ig. And what I had was more than enough.

Up until now, I kinda only had a PC to play songs, and when I had my PC, I wouldn't listen to music much. I started listening to songs a lot only when I got my own phone. And I was still using downloaded songs up until then.

But soon I realised, nah, this was toooo annoying. Downloading songs *legally* and loading them onto my phone was a pain. Also, that's when I got introduced to Spotify.

I really liked the recommendations and easy adding to playlists. No need to scour the internet for a clean copy. (Insane how most of the songs I *legally* downloaded had movie dialogues lol, because of the sources I was choosing.)

I eventually chose Spotify because of the recommendations 🤌. Not saying it's peak, but it's a feature I was missing.

But Spotify also had its downsides. I'm a weird guy. Other than popular artists, I sometimes come across YouTubers—not "YouTubers", but random people who post a song and disappear forever. I wanted those songs in my playlist too lol.

Spotify does have the option to add local songs, but again, it's too clumsy. There is no one central DB with all music. Period.

</details>
<hr>
Well, I did notice at one point that *Apna Time Aayega* by Ranveer Singh was not on Spotify :(.

This sounded reasonable, because they only had the movie version. I thought maybe whoever was supposed to upload all the songs to Spotify messed up, or idk what I was thinking, but I thought if a song had slightly different variations, I was ready to excuse this issue.

But BRUH.

I fucking just found out that from the *Nanban* movie, like the majority of the songs are not here???

HUHH???

*Heartiley Batter*???

WHERE IS IT SPOTIFY?? WHYYY??

SERIOUSLY??

HOW MANY MORE SONGS ARE YOU HIDING FROM ME??

*crack*

The breaking point where I lost trust in Spotify.

I had already broken up with streaming services, fucking asking me to pay for movies after I paid for streaming (looking at you, Amazon Prime, and wtf? Renting movies? Bruh, wtf is this classism after I paid to Prime? Tiering inside the app? You want me to keep paying you?)

So that's it.

Discoverability was the one reason I was staying on Spotify, and now, knowing Spotify is not a big enough collection of songs I would like to listen to, I'm moving to self-hosting.

<img src="/images/spotify_sucks.jpeg" width="500" title="A picture of Spotify 'Nanban' playlist with most songs not available">

*edit: later found those songs were not available cuz of offline status or something, but still apna time aayega was not there*


Well, after the big ranting from above, let's get to the important stuff.

I settled on Navidrome, a self-hosted music option. I already have Jellyfin, which also supports music, but yeah, it lacks a lot of features, so ig it's better I just use one dedicated for this.

It can be easily self-hosted in Docker. I have mine behind my Nginx (I'll create a post later about my homelab setup. A very clean setup 🫶).

Let me dump my tech stack:

* Navidrome running in Docker
* For listening on my laptop, I use the **Feishin** app
* For listening on Android, I settled on **Amcyf Music**
* I *legally* bought my copies from Spotify, JioSaavn, and YouTube

Below are some of my storefronts:

* *redacted*
* *redacted*
* *redacted*
* *redacted*

Then there is the tool called **Picard**, a music tagger tool. It was pretty useful in organising my songs into proper albums.

Here are my learnings:

**All songs belong in an album.**

In English songs, it's typical for an artist to have an album.

In Tamil, it's typical for a movie to have an album.

Songs have artists, and albums also have album artists.

In English songs, typically the album artist and each song's artist mostly match up.

In Tamil songs, kinda yeah, but there are still multiple artists too.

I did find it really interesting that in English movies, they usually just use existing songs lol. In Tamil, they create a whole new ass album for each movie.

Welp, then I used a LOT of AI. Claude was really helpful in manually tagging everything.

OH shit, completely forgot.

I (Claude) wrote a bunch of scripts. One will extract a Spotify playlist and collect all the details—song name, playlist URL, album URL, etc.

Then another, 2nd script will either algorithmically or using an LLM find the equivalent JioSaavn album.

And the 3rd script will *legally* buy all those albums off JioSaavn.

And now, no one can take my music away from me lol. MWAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA!
*yeah day 1 im starting with like 1.2k albums and 10k songs lol.*
<img src="/images/spotify_sucks_2.png" width="500" title="My navidrome collection">