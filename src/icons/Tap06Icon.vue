
<template>
  <Icon :iconName="'tap-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tap06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tap-06'
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
