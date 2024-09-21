
<template>
  <Icon :iconName="'tea-pod'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TeaPodIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tea-pod'
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
