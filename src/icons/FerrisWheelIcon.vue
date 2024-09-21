
<template>
  <Icon :iconName="'ferris-wheel'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FerrisWheelIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ferris-wheel'
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
