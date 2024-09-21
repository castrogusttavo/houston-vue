
<template>
  <Icon :iconName="'puzzle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PuzzleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'puzzle'
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
