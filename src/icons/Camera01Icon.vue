
<template>
  <Icon :iconName="'camera-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Camera01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camera-01'
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
