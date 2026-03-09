import { ref } from "vue";

export const useGemini = () => {
  const aiResponse = ref("");
  const isGenerating = ref(false);
  const error = ref(null);

  const generateCreativeText = async (pokemonName) => {
    isGenerating.value = true;
    error.value = null;
    aiResponse.value = "";

    try {
      const data = await $fetch("/api/gemini", {
        method: "POST",
        body: { pokemonName },
      });
      aiResponse.value = data.text;
    } catch (e) {
      console.error("Error Gemini:", e);
      error.value = "La IA no està disponible ara mateix.";
    } finally {
      isGenerating.value = false;
    }
  };

  return { aiResponse, isGenerating, error, generateCreativeText };
};
