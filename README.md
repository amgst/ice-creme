<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Gelato Allegra - Luxury Event Catering

Premium Italian gelato catering service for luxury weddings, corporate events, and special occasions.

## Local Development

**Prerequisites:** Node.js (v16+)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Add your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. In your Vercel project settings, add the environment variable:
   - Key: `GEMINI_API_KEY`
   - Value: Your Gemini API key
4. Deploy!

### Manual Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Features

- 🍨 Premium gelato catering packages
- 🤖 AI-powered event recommendations
- 📸 Beautiful gallery showcasing our work
- 🎉 Perfect for weddings, corporate events, and private parties
- 🇮🇹 Authentic Italian recipes and presentation

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Google Gemini AI

View your app in AI Studio: https://ai.studio/apps/drive/16JsMQEG5l-nTqLVE-mYZr7seITpfDb5d
