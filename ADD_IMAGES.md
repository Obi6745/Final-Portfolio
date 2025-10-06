# How to Add Your Real Project Images

## Current Status
Your portfolio is currently using placeholder images that will display properly. The images show:
- Whack-a-Mole Circuit (blue placeholder)
- Eco Haven Website (green placeholder) 
- CSS Rockstar Lyrics (purple placeholder)

## To Add Your Real Images:

1. **Save your project images** in the `public/images/` folder with these names:
   - `whack-a-mole-circuit.jpg` - Your Arduino circuit image
   - `eco-haven-homepage.jpg` - Your Eco Haven website screenshot
   - `css-rockstar-lyrics.jpg` - Your CSS Rockstar lyrics page screenshot

2. **Update the image paths** in `src/app/projects/page.tsx`:
   ```javascript
   // Change from:
   image: "https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Whack-a-Mole+Circuit",
   
   // To:
   image: "/images/whack-a-mole-circuit.jpg",
   ```

3. **Restart the development server** after adding images:
   ```bash
   npm run dev
   ```

## Image Requirements:
- **Format**: JPG or PNG
- **Size**: 400x300 pixels (or similar aspect ratio)
- **Location**: `public/images/` folder
- **Names**: Must match the paths in the code

Your portfolio will work perfectly with the placeholder images, and you can add your real images anytime!
