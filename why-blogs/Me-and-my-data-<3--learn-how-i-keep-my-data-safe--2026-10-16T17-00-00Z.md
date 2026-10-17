# Me and my data <3

Ok so this is not very complicated.
All my data is under 1 TB
All crucical data is under 0.5TB

Non curical data include,
Game files -> downloadable from internet
ISO -> obv downlaodable
Movies -> i do store the file names of movies for my jellyfin db
Series -> i do store the file names of movies for my jellyfin db
Steam -> games can be downloaded again
VMS -> nothing crucial here.

So all my data is in ta btrfs paritions.
I have a @Storage parition which has
ie -> crucial data
ie_big -> big data, image backups games, iso etc
sbls -> home dir files documents etc

All are weekly backed up to a luks encrypted btrfs 500gb drive. It only backs up crucial files.
Weekly btrfs snapshots are also created, so pretty good solution.
There is backup but no redundancy/bitrot protection ? or correuption protection ?

Need multiple copes for making sure corrupted can be not just detected but also fixed.
Btrfs does have option to detect corruption butnot fix it.
