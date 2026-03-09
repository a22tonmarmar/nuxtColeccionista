<template>
  <img :src="item.sprites.front_default || null" />
  <ul v-if="item" :class="{ disable: item.name === '' }">
    <li>{{ item.name }}</li>
    <li>{{ item.order === 0 ? "" : `Nº Pokédex: ${item.order}` }}</li>
    <li>{{ item.height === 0 ? "" : `Altura: ${item.height}` }}</li>
    <li>{{ item.weight === 0 ? "" : `Pes: ${item.weight}` }}</li>
  </ul>
  <div class="ai-container">
    <h3>✨ Informació Extra (IA)</h3>

    <!-- Passem el nom de l'item actual a la funció -->
    <button @click="generateCreativeText(item.name)" :disabled="isGenerating">
      {{ isGenerating ? "Pensant..." : "Generar dada curiosa" }}
    </button>

    <p v-if="aiResponse" class="response-box">
      {{ aiResponse }}
    </p>
  </div>
</template>

<script setup>
import { useGemini } from "../../../server/composables/useGemini";

const { item } = defineProps({ item: Object });
const { aiResponse, isGenerating, error, generateCreativeText } = useGemini();
</script>

<style scoped>
.disable {
  list-style: none;
}
</style>
