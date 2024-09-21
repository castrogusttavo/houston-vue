
<template>
  <Icon :iconName="'pokemon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PokemonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pokemon'
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
