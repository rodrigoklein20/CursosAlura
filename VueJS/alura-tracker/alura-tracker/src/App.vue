<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"></BarraLateral>
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioVue @aoSalvarTarefa="salvarTarefa"></FormularioVue>
      <div class="lista">
        <TarefaVue
          v-for="tarefa in tarefas"
          :key="tarefa.descricao"
          :tarefa="tarefa"
        />

        <BoxVue v-if="listaEstaVazia"> Você não está muito produtivo hoje </BoxVue>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BarraLateral from "./components/BarraLateral.vue";
import FormularioVue from "./components/FormularioVue.vue";
import TarefaVue from "./components/TarefaVue.vue";
import ITarefa from "./interfaces/ITarefa";
import BoxVue from "./components/BoxVue.vue";

export default defineComponent({
  name: "App",
  components: { BarraLateral, FormularioVue, TarefaVue, BoxVue },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
    };
  },
  computed: {
    listaEstaVazia () : boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    trocarTema (modoEscuroAtivo : boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
