
<template>
  <Icon :iconName="'touch-interaction-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TouchInteraction04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-interaction-04'
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
