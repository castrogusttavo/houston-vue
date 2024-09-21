
<template>
  <Icon :iconName="'mouse-15'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse15Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-15'
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
