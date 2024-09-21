
<template>
  <Icon :iconName="'tap-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tap05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tap-05'
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
