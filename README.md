# ThreeJS FPS boilerplate

Technologies used

- Vite
- Vitest
- Typescript
- Electron

Features

- FPS controls (WASD)
- Orbit controls (Mouse)
- Object collisions
- Shooting animations (for each weapon)
- Player flashlight (F)
- Multiple weapons (Pistol, Shotgun, Rifle, etc)
- Sounds (WIP)
- Particle effects (WIP)
- UI (WIP)

## How to run

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

![image](https://github.com/n1md7/three-boilerplate/assets/6734058/a37a3e73-d2be-46ea-9d7e-bf363e592b28)


### Workflow actions

Once it is cloned make sure you enable permissions

`Settings > Actions > General` make sure in **Workflow permissions** **Read and Write** is granted

<img width="1312" alt="image" src="https://github.com/n1md7/three-boilerplate/assets/6734058/d5f4bd64-45e5-4025-a6e6-d869c801b4e4">

### Configure template source and update change

```bash
# Add remote source
git remote add template https://github.com/n1md7/three-boilerplate.git
# Pull changes
git pull template master
# Merge into the current branch
git merge template/master --allow-unrelated-histories
```
