
<template>
  <Icon :iconName="'hologram'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HologramIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hologram'
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
