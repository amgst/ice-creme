
import { GoogleGenAI } from "@google/genai";

// Extend ImportMeta interface
interface ImportMetaEnv {
  VITE_GEMINI_API_KEY?: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}

export class GeminiService {
  private ai: GoogleGenAI | null = null;
  private apiKey: string;

  constructor() {
    // Try to get API key from environment variables
    this.apiKey = import.meta.env.VITE_GEMINI_API_KEY || 
                  (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : '') || 
                  '';
    
    if (this.apiKey) {
      this.ai = new GoogleGenAI({ apiKey: this.apiKey });
    } else {
      console.warn('Gemini API key not found. AI features will be disabled.');
    }
  }

  async getEventAdvice(message: string): Promise<string> {
    if (!this.ai) {
      return "I'm sorry, but the AI service is currently unavailable. Please contact our team directly for personalized event recommendations!";
    }
    
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction: "You are an expert event planner for Gelato Allegra, a luxury Italian catering service. Based on the customer's input, recommend the best package and suggest flavor pairings. Keep it professional, sophisticated, and concise. Our packages are: Petite Scooper (50 guests, 2 flavors), Semi Mellow (75 guests, 3 flavors), Mellow Scooper (120 guests, 4 flavors), Grande Scooper (160 guests, 5 flavors), Ultimate Scooper (200 guests, 6 flavors).",
          temperature: 0.7,
        },
      });
      return response.text || "I'm sorry, I couldn't process that. Please contact our team directly for advice!";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having a little trouble thinking right now. Could you try again later?";
    }
  }
}

export const geminiService = new GeminiService();
