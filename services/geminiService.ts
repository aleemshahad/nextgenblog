import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI(process.env.API_KEY || '');

export const generateText = async (prompt: string): Promise<string> => {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text() || "No response generated.";
  } catch (error) {
    console.error("Gemini Text Generation Error:", error);
    return "Error generating text. Please check your API key.";
  }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([
      prompt,
      { text: "Generate an image based on this description." }
    ]);
    const response = await result.response;
    
    // For image generation, we'd need to use a different approach
    // The current Gemini models don't generate images directly
    // This is a placeholder for future image generation capability
    return null;
  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    return null;
  }
};

export const generateSeoKeywords = async (topic: string): Promise<string> => {
  try {
    const prompt = `Generate a list of high-ranking SEO keywords and a short strategy for a blog post about: "${topic}". Format the output as a clean HTML list or simple text.`;
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text() || "No keywords found.";
  } catch (error) {
    console.error("Gemini SEO Error:", error);
    return "Error generating SEO data.";
  }
};