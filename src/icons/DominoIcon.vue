
<template>
  <Icon :iconName="'domino'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DominoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'domino'
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
