import { GoogleGenerativeAI } from "@google/generative-ai";

export default defineEventHandler(async (event) => {
  const { pokemonName } = await readBody(event);

  if (!pokemonName) {
    throw createError({ statusCode: 400, message: "pokemonName is required" });
  }

  const config = useRuntimeConfig();
  const genAI = new GoogleGenerativeAI(config.geminiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `Diu alguna dada interessant del pokemon "${pokemonName}" seguint la pokédex. Màxim 40 paraules.`;
  const result = await model.generateContent(prompt);

  return { text: result.response.text() };
});
