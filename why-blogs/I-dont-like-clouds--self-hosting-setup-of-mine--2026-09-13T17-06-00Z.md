# I Don't Like Clouds: My Self-Hosting Setup

<details><summary>Click to view the rant on why I started self-hosting</summary>

Tbh, my journey into self-hosting started because of piracy.

But you know what pissed me off? When I found out that you have to rent some stuff on Amazon Prime.
That was so fucking weird. I thought when I paid for Amazon Prime, I paid for the whole library. Then they created fucking tiering? AND they have ads there too? In a fucking paid service? Bruh, fucking bitches.
Just because of that, I don't feel guilty pirating anymore. I do frequently go to the theaters to watch movies—that contribution is enough for the fucking ass cliffhangers and "come back for part 2" shit. I came to watch a movie, it's not your job to make me wait for another fucking one.

</details>
<hr>

Well, this is a good intro to introduce my self-hosting setup.

My requirements: I don't want to pay for a VPS to host services. 99.9999999% of the time, I don't require them when I'm not using my laptop or away from home, so self-hosting on my laptop is fine.
I don't want to pay for a domain either—maybe it's cheap, but a fucking subscription? Bruhhhhh, 99.999999% of the time I'm the only one who's going to use it, so for now there's no need for that.

I also ideally would like to host an email server/client, but for reasons of reliability and deliverability, it's better to use reliable external providers. If I ever get a domain, I'll have it behind a custom domain.

Well, for a free domain I settled on [duckdns.org](https://www.duckdns.org), which provides free dynamic DNS. Subdomains are also automatically forwarded to the same IP. Niceee.

Then I have Nginx on my laptop, listening on ports 80 and 443.
Nginx handles reverse proxying to all of my HTTP/HTTPS services.
For other stuff like DNS, I just bind it directly to the host port.

Oh yeah, btw I was able to generate actual HTTPS certificates using Let's Encrypt. They are valid for only 3 months at a time, so... yeah, not ideal. Ig the ideal solution is to automate it. I have a script for that already, so I just run that every 3 months. DuckDNS I also just update, but I can have a cron job or systemd timer that runs every 5 minutes—running frequently but only updating when the IP changes.

Oh yeah, and another thing: ALL my services are running in Docker, so it's easy to move over configs and data files without needing to hunt for them. Also, the software images can just be pulled, no need to store them locally. Amazing.
Ok, so only this week I found out about Dockge. Until now, I was using Portainer and other bloated Docker management tools. I didn't need 99% of the features from those. I just needed something to see what was running, view container logs, and start/stop them. Anything more, I don't expect to do from a UI—I'd rather sit at my terminal and do it. For that, Dockge is 🤌. And to monitor, Beszel 🤌. Both of these have just the features I want, and Beszel tracks my laptop battery too lol. Amazing. No need to mess with Grafana and stuff 🫨, too complex lol.

And for *clean* isolation, I created a Docker network named `homelab` and made sure all my Docker containers are part of this network. This way, NO services have their ports exposed directly. Nginx only has ports 80 and 443 forwarded, and based on the subdomain, it forwards to the respective services.

Below is a sample Docker Compose of my Nginx and something like Jellyfin:

```yaml
services:
  nginx:
    ...
    ports:
      - "80:80"
      - "443:443"
    ...
    networks:
      - homelab

networks:
  homelab:
    external: true
```

```yaml
services:
  jellyfin:
    ...
    networks:
      - homelab

networks:
  homelab:
    external: true
```

E.g.: `toocels.duckdns.org` proxy forwards to a default HTML page with a menu of services I have hosted.
And I also have `toocelsts.duckdns.org`, which points to the IP of my laptop on the Tailscale network. So if I want to access my homelab over Tailscale, I use that domain.
`immich.toocels.duckdns.org` proxy forwards to Immich Docker containers.

<img src="/images/nginx_home.png" width="600" title="Nginx Home Dashboard">

Nginx also handles HTTPS termination.

I like this clean setup.

So a list of services I currently host locally:
* **nginx** -> reverse proxy + TLS termination with Let's Encrypt, single ingress point on ports 80 and 443
* **dockge** -> lightweight Compose stack management UI to view status, logs, and start/stop containers
* **beszel / beszel-agent** -> lightweight server & container monitoring hub + agent (tracks CPU, RAM, disk, network, and laptop battery)
* **jellyfin** -> media server for streaming movies and TV shows to my TV and devices with hardware acceleration
* **navidrome / rewind** -> self-hosted music streaming server paired with Rewind for Spotify-like stats and web player
* **nextcloud / db** -> private file sync and storage on my local network backed by MariaDB
* **pihole** -> network-wide DNS server and local ad blocking (bound directly to host port 53)
* **vaultwarden** -> self-hosted Bitwarden-compatible password manager
* **tailscale** -> secure mesh VPN allowing my phone and devices to access all homelab services from anywhere without port forwarding
* **immich** -> self-hosted local image and video backup with ML facial recognition and search. Fuck Google Drive/Photos, so much better
* **personal website** -> as seen from the picture, forgot to add this. Will be added soon. Just my portfolio, resume, blogs, etc. (A live version you can check out at [toocels.github.io](https://toocels.github.io))

<img src="/images/homelab_architecture.png" width="900" title="Homelab Network Architecture">