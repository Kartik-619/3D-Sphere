# 3D Solar System & Physics Simulator

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A **3D interactive planet simulator** built with **React and Three.js**, featuring realistic rotating planets like **Earth and Jupiter**, powered by real NASA-derived textures and physics-based rendering.

Explore the solar system, rotate planets, and experience immersive 3D visuals — all in the browser!

👉 **Live Demo**:https://3-d-sphere-orcin.vercel.app/

---

## 🚀 Features

- ✅ **Realistic 3D Planets** (Earth, Jupiter)
- ✅ **High-Resolution NASA Textures**
- ✅ **Smooth Rotation & Animation**
- ✅ **Interactive Camera Controls** (drag, zoom, pan)
- ✅ **Responsive Design**
- ✅ **Modular React Components**
- ✅ **Lighting & Material Effects** (Phong shading)
- ✅ **Optimized for Web Performance**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|----------|--------|
| **React** | Component-based UI architecture |
| **Three.js** | Core 3D rendering engine |
| **@react-three/fiber** | React renderer for Three.js (declarative 3D) |
| **@react-three/drei** | Helper components (`OrbitControls`, loaders, etc.) |
| **Vite** | Blazing-fast development server & bundler |
| **JavaScript (ES6+)** | Logic, animation, and interaction |
| **WebGL** | GPU-accelerated 3D graphics (via Three.js) |

---

## 🎓 What I Learned

This project helped me dive deep into:
- **3D Programming Fundamentals**: Scene, camera, renderer, lighting, materials
- **Texture Mapping**: Applying equirectangular maps to spheres (planets)
- **React + Three.js Integration**: Using `@react-three/fiber` to create reactive 3D components
- **OrbitControls**: Implementing user interaction (rotate, zoom, pan)
- **Lighting in 3D**: Using `ambientLight` and `directionalLight` for realistic shading
- **Asynchronous Texture Loading**: Handling image loading with `useTexture` and `TextureLoader`
- **Performance Optimization**: Managing render loops, avoiding memory leaks
- **Error Handling**: Debugging common issues like CORS, module exports, and class instantiation

> 💡 **Key Insight**:  
> "I learned that 3D on the web isn’t just about visuals — it’s about **balancing realism, performance, and interactivity**."

---

## 🌐 Project Scope

### 🎯 Goals
- Create a **realistic 3D Earth and Jupiter** using public NASA textures
- Build a **scalable component system** for adding more planets
- Enable **user interaction** via mouse/touch
- Understand the **Three.js rendering pipeline** within a React app

### ✅ Completed
- [x] Earth with texture, bump map, and rotation
- [x] Jupiter with realistic cloud bands
- [x] Camera controls for exploration
- [x] Responsive canvas and smooth animation
- [x] Modular `Planet` component system

### 🚀 Future Enhancements
- [ ] Add **Mars, Saturn, and the Sun**
- [ ] Simulate **orbital motion** using physics
- [ ] Launch a **rocket from Earth** with projectile motion
- [ ] Show **day/night cycle** with dynamic lighting
- [ ] Add **tooltips** on hover (planet facts)
- [ ] Implement **VR mode** using WebXR
- [ ] Create a **planet selector UI**
- [ ] Add **particle systems** (auroras, comet tails)

--- <hr> 
<h3>🚧 License</h3> <br>
This project is open source and available under the UnLicense License.

<br>

🌟 Acknowledgments
NASA Visible Earth – For providing high-resolution planetary textures
Three.js – For making 3D on the web accessible
Paul Henschel (drei) – For @react-three/drei utilities
<hr>
<br>
 <h3>💻 Feedback & Contributions</h3>
Have a suggestion or found a bug?
Feel free to open an issue or submit a PR!

Made with ❤️ by Kartik Sharma
