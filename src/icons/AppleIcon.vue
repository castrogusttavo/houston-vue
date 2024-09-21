
<template>
  <Icon :iconName="'apple'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AppleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'apple'
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
