
<template>
  <Icon :iconName="'apple-pie'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ApplePieIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'apple-pie'
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
