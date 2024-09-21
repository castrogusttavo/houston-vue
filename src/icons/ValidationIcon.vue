
<template>
  <Icon :iconName="'validation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ValidationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'validation'
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
