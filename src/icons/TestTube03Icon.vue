
<template>
  <Icon :iconName="'test-tube-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TestTube03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'test-tube-03'
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
