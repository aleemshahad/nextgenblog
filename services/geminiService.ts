import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateText = async (prompt: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini Text Generation Error:", error);
    return "Error generating text. Please check your API key.";
  }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  try {
    // Using generateContent for base64 image generation as per guidance for flash-image
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
            aspectRatio: "1:1"
        }
      }
    });

    // Extract image from response
    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData && part.inlineData.data) {
                return `data:image/png;base64,${part.inlineData.data}`;
            }
        }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    return null;
  }
};

export const generateSeoKeywords = async (topic: string): Promise<string> => {
  try {
    const prompt = `Generate a list of high-ranking SEO keywords and a short strategy for a blog post about: "${topic}". Format the output as a clean HTML list or simple text.`;
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "No keywords found.";
  } catch (error) {
    console.error("Gemini SEO Error:", error);
    return "Error generating SEO data.";
  }
};