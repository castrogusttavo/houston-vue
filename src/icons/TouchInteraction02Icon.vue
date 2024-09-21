
<template>
  <Icon :iconName="'touch-interaction-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TouchInteraction02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-interaction-02'
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
