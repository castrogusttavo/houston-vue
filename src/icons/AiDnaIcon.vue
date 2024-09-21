
<template>
  <Icon :iconName="'ai-dna'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AiDnaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ai-dna'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
