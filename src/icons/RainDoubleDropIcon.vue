
<template>
  <Icon :iconName="'rain-double-drop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RainDoubleDropIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rain-double-drop'
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
