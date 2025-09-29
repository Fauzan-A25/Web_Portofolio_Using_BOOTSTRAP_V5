# Modern Data Science Portfolio

A cutting-edge personal web portfolio built for **Fauzan Ahsanudin Alfikri**, featuring modern glassmorphism design, interactive project slider, and responsive layout optimized for showcasing Data Science projects and skills.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **🎨 Modern Glassmorphism Design**: Stunning backdrop blur effects with transparent glass-like elements
- **🌓 Dark/Light Mode Toggle**: Seamless theme switching with persistent user preference
- **🎯 Interactive Project Slider**: Smooth Swiper.js implementation with manual navigation controls
- **📱 Perfect Responsive Design**: Mobile-first approach adaptable to all screen sizes
- **⚡ Performance Optimized**: Lazy loading, AOS animations, and optimized assets
- **🔍 SEO-Friendly**: Semantic HTML structure with proper meta tags and accessibility features
- **✨ Modern Animations**: Smooth transitions, hover effects, and scroll-triggered animations
- **🎭 Professional Typography**: Inter and JetBrains Mono fonts for optimal readability

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fauzan-A25/modern-portfolio.git
   ```

2. **Navigate to project directory**
   ```bash
   cd modern-portfolio
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your web browser
   # Or use Live Server extension in VS Code
   ```

## 📦 Technologies Used

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript ES6+ |
| **Framework** | Bootstrap 5.3.3 |
| **Slider** | Swiper.js 11 |
| **Animations** | AOS (Animate On Scroll) |
| **Icons** | Bootstrap Icons |
| **Fonts** | Google Fonts (Inter, JetBrains Mono) |

## 🎨 Design Features

### Modern UI/UX
- **Glassmorphism**: Backdrop blur with transparent elements
- **Gradient Accents**: Custom CSS gradients (#00d4aa to #00a8e8)
- **Smooth Transitions**: 0.4s cubic-bezier animations
- **Interactive Elements**: Hover effects and micro-interactions

### Project Showcase
- **Manual Slider Controls**: Left/right navigation arrows
- **Pagination Dots**: Direct slide navigation
- **Project Counter**: Current slide indicator (01/02)
- **Keyboard Support**: Arrow keys, Home, End navigation
- **Touch Gestures**: Mobile swipe support

## 🛠️ Customization

### Adding New Projects

1. Navigate to the projects section in `index.html`
2. Copy the existing swiper-slide template:
   ```html
   <div class="swiper-slide">
       <div class="project-card">
           <div class="row align-items-center">
               <!-- Add your project content here -->
           </div>
       </div>
   </div>
   ```
3. Update project details (image, title, description, links)
4. Project counter will update automatically

### Modifying Colors

Edit CSS variables in `modern_styl.css`:
```css
:root {
    --accent-color: #your-color;
    --accent-gradient: linear-gradient(135deg, #color1 0%, #color2 100%);
}
```

### Customizing Animations

Modify AOS settings in `modern_script.js`:
```javascript
AOS.init({
    duration: 1000,    // Animation duration
    once: true,        // Animate only once
    offset: 100,       // Trigger offset
});
```

## 📱 Responsive Breakpoints

- **📱 Mobile**: 480px and below
- **📟 Tablet**: 481px to 768px  
- **💻 Desktop**: 769px and above
- **🖥️ Large Desktop**: 1024px and above

## 📁 Project Structure

```
portfolio/
├── index.html                    # Main HTML file
├── modern_styl.css              # Modern CSS with glassmorphism
├── modern_script.js             # JavaScript with slider functionality
├── Img/                         # Images directory
│   ├── Fauzan.png              # Profile photo
│   ├── Fossil_App_Screenshot.png
│   └── COPPA_Model.png
└── README.md                    # Project documentation
```

## 🚀 Deployment

Deploy on any static hosting platform:

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch (main)
4. Access via `username.github.io/repository-name`

### Netlify
1. Connect GitHub repository
2. Set build command: `none`
3. Set publish directory: `/`
4. Deploy automatically

### Vercel
1. Import GitHub repository  
2. Configure project settings
3. Deploy with zero configuration

## 🎯 Performance Features

- **⚡ Lazy Loading**: Images load only when needed
- **🗜️ Optimized Assets**: Compressed images and efficient code
- **🖥️ GPU Acceleration**: Hardware-accelerated animations
- **📈 Progressive Enhancement**: Works on all devices and browsers

## 🎮 Manual Slider Controls

The project slider is designed for **manual navigation only**:

- **← → Arrow Buttons**: Click to navigate between projects
- **Pagination Dots**: Click any dot to jump to specific project
- **Keyboard Navigation**: Use arrow keys, Home, or End keys
- **Touch Gestures**: Swipe left/right on mobile devices
- **No Auto-Play**: Slider only moves when user interacts with it

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Fauzan Ahsanudin Alfikri** - Data Science Student

- 📧 **Email**: fauzanahsanudin@gmail.com  
- 💼 **LinkedIn**: [fauzanahsanudin](https://www.linkedin.com/in/fauzanahsanudin/)
- 👨‍💻 **GitHub**: [Fauzan-A25](https://github.com/Fauzan-A25)
- 🎓 **University**: Telkom University - Data Science Program

**Project Link**: [https://github.com/Fauzan-A25/modern-portfolio](https://github.com/Fauzan-A25/modern-portfolio)

---

### 🙏 Acknowledgments

- Bootstrap team for the amazing framework
- Swiper.js for the smooth slider functionality
- AOS library for scroll animations
- Google Fonts for beautiful typography

---

⭐ **Star this repository if it helped you build your modern portfolio!**

**Built by Fauzan Ahsanudin Alfikri**
