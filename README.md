# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

![Markdown Preview](cobrinha.jpg)


Before you can run this client, you will need to be running the server side which you can download and install from here.


* In the Terminal go to Directory that you want to install.

        git clone https://github.com/lighthouse-labs/snek-multiplayer.git snek-multiplayer
        cd snek-multiplayer
        npm install
        npm run play

 * Use another Terminal to run the player:

        git clone git@github.com:cesconettoedu/snake-client.git snake-client
        cd snake-client
        node play.js

* Commands inside the game:

        w = Move: up
        a = Move: left
        s = Move: down
        d = Move: right

* Send message to others player press:

        r = let's goooo
        t = it's growing up
        y = almost there
        e = you can do it


