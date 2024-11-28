# **The Tea Cozy**

A modern web application built with **Vite** and **React** to showcase artisanally curated, sustainable teas from around the world.

---

## **Features**

- 🌟 **Responsive Design**: Fully mobile-friendly and optimized for all screen sizes.
- 🫖 **Featured Tea Section**: Highlighting seasonal and top-selling teas.
- 📍 **Location Finder**: Displays store locations with clean layout and details.
- 🖤 **Modern UI**: Minimalist design with smooth hover effects and transitions.
- ⚡ **Performance**: Powered by Vite for fast builds and hot module reloading.

---

## **Project Structure**

```plaintext
src/
├── assets/                # Images, logos, and other static assets
├── components/            # React components for the UI
│   ├── Header.jsx         # Header with navigation links and logo
│   ├── FeaturedTea.jsx    # Featured teas section
│   ├── Locations.jsx      # Store locations
│   ├── Contact.jsx        # Contact details section
│   ├── Footer.jsx         # Footer
├── App.jsx                # Main app component
├── index.css              # Global styles
├── main.jsx               # Entry point for React
public/
├── vite.svg               # Favicon
index.html                 # HTML file
```

---

## **Getting Started**

Follow these steps to set up the project on your local machine.

### **Prerequisites**

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm or yarn (npm is included with Node.js)

---

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tea-cozy.git
   cd tea-cozy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## **Scripts**

| Command           | Description                             |
|-------------------|-----------------------------------------|
| `npm run dev`     | Starts the development server          |
| `npm run build`   | Builds the app for production          |
| `npm run preview` | Previews the production build          |

---

## **Customization**

### **Changing Content**
- Update the content in React components under the `src/components` folder.
- Modify images in the `src/assets` directory.

### **Styling**
- Edit `src/index.css` for global styles.
- Modify individual component CSS files for specific styles.

---

## **Deployment**

To deploy the app:

1. Build the app for production:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `dist` folder to your hosting provider (e.g., Netlify, Vercel, GitHub Pages).

---

## **Technologies Used**

- **Vite**: Lightning-fast development environment.
- **React**: For building reusable UI components.
- **CSS**: Custom styles with responsive design.
- **JavaScript (ES6)**: Modern JavaScript features.

---

## **Contributing**

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
