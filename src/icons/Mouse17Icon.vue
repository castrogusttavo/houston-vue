
<template>
  <Icon :iconName="'mouse-17'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse17Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-17'
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
