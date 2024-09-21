
<template>
  <Icon :iconName="'touch-interaction-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TouchInteraction01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-interaction-01'
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
