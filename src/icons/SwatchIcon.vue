
<template>
  <Icon :iconName="'swatch'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwatchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swatch'
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
