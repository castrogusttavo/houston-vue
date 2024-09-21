
<template>
  <Icon :iconName="'pokeball'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PokeballIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pokeball'
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
