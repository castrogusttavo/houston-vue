
<template>
  <Icon :iconName="'mouse-22'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse22Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-22'
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
