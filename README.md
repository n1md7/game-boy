# Game Boy emulator

[Play online](https://n1md7.github.io/game-boy/)

![image](https://github.com/n1md7/game-boy/assets/6734058/7cf00b96-e876-45b0-b063-642a64197477)

The Game Boy emulator uses JSDOS to run DOS games directly in the browser.
It includes a variety of classic games such as

- Doom
- Quake
- Mario
- Digger
- Wolfenstein
- Duke

This emulator is presented as a 3D game where you navigate through a room.
You'll find a Game Boy device and various cartridges scattered around.
To play, you must first collect these cartridges and the Game Boy device.
To collect these items, simply navigate your character to bump into them.
Once you've gathered all the necessary items, you can access the inventory
menu by pressing the TAB key. Here, you can choose the cartridge you want to play.

After clicking the play button, the game will run on the Game Boy emulator.
The screen will then enter an expanded mode, projecting the game output onto
a virtual projector screen within the game's environment.

Navigating the environment is done using the **WASD** keys, with **space** for jumping and **shift** for running.
However, as it can be cumbersome to control both the character and the game simultaneously,
I've implemented two distinct modes: Emulator and First Person.

In Emulator mode, the character remains stationary and doesn't accept any user input.
Instead, all keyboard interactions are channeled to the Game Boy emulator.
You can toggle between modes by pressing the 'M' key.

Each game may have unique keybindings, which are conveniently displayed at the top of the screen.
This ensures that you always have the necessary controls at your fingertips.

Main character movements

- **Mouse** to look around
- **WASD** or Arrow keys
- **Shift** to run
- **Space** to jump

Game controls

- **ESC** to open the Menu
- **TAB** to open Inventory

Features

- Projector screen (mirror mode can be changed from the Menu)
- Game Boy camera control by pressing the **C** key

Technologies used

- Vite
- Vitest
- Typescript
- SolidJS
- Electron

## How to run locally?

```bash
# Browser
$ npm run dev

# Build - Transpile to JS
$ npm run build


# Electron
$ npm run electron
# or
$ npm run start

# Build binaries
$ npm run make
$ npm run package
```
