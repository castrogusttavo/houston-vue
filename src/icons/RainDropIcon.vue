
<template>
  <Icon :iconName="'rain-drop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RainDropIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rain-drop'
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
