
<template>
  <Icon :iconName="'edge-style'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EdgeStyleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'edge-style'
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
