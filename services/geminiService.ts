import { GoogleGenAI } from "@google/genai";
import { Framework } from "../types";

// Initialize the client. 
// Note: API Key must be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateArchitecture = async (
  framework: Framework,
  projectIdea: string
): Promise<string> => {
  
  // Use gemini-3-pro-preview for complex text tasks (coding/architecture)
  const modelId = 'gemini-3-pro-preview';
  
  const prompt = `
    Role: You are a world-class Senior Software Architect.
    Task: Create a comprehensive architectural blueprint for a web application.

    Inputs:
    - Framework: ${framework}
    - Project Idea: "${projectIdea}"

    Please provide the response in Markdown format.
    
    Structure your response exactly as follows:
    1. **Executive Summary**: A brief 2-sentence technical overview.
    2. **Recommended Tech Stack**: List 3-5 key libraries/tools compatible with ${framework} that fit this specific project (e.g., state management, UI library, API client).
    3. **Folder Structure**: A code block showing a recommended directory tree. Use comments to explain the purpose of key directories.
    4. **Key Components & Logic**: Briefly describe the 3 most important components or modules.
    5. **Getting Started Command**: A one-line shell command to initialize this project (e.g., npx create-react-app..., ng new..., etc.).

    Tone: Professional, concise, and technical.
    Constraints: Do not use deprecated libraries. Focus on modern best practices (e.g., React Hooks, Vue Composition API, Angular Standalone Components).
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};