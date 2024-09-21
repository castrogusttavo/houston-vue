
<template>
  <Icon :iconName="'dna'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DnaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dna'
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
