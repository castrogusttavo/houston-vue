
<template>
  <Icon :iconName="'lollipop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LollipopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lollipop'
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
