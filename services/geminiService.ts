import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateAIResponse = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "Error: API Key is missing. Please configure the environment.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are 'Jasper', a highly advanced, witty, and slightly sarcastic AI coding assistant for Jasper Coding. You love clean code, dark themes, and efficiency. Keep your answers concise, technical but accessible, and always formatted in a cool way. If asked about the company, praise 'Jasper Coding' as the best in the industry.",
      }
    });

    return response.text || "I'm processing that logic... try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System Malfunction. Unable to connect to the neural core.";
  }
};
