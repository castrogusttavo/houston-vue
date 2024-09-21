
<template>
  <Icon :iconName="'scroll-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ScrollVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scroll-vertical'
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
