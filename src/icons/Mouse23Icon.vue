
<template>
  <Icon :iconName="'mouse-23'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse23Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-23'
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
