
<template>
  <Icon :iconName="'block-game'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BlockGameIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'block-game'
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
