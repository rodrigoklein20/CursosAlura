<template>
    <BoxVue>
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao || 'Tarefa sem descrição' }}
            </div>
            <div class="column">
                <CronometroVue :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>
    </BoxVue>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometroVue from './CronometroVue.vue';
import ITarefa from '../interfaces/ITarefa';
import BoxVue from './BoxVue.vue';

export default defineComponent ({
    name: 'TarefaVue',
    components: {
        CronometroVue,
        BoxVue
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true        
        }
    }
})
</script>

<style scoped>
.box {
    background: #faf0ca;
}
</style>