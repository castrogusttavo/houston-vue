
<template>
  <Icon :iconName="'tap-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tap04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tap-04'
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
