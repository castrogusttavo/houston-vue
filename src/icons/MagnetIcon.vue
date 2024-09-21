
<template>
  <Icon :iconName="'magnet'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MagnetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'magnet'
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
