
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getEventAdvice(message: string): Promise<string> {
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
