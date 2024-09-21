
<template>
  <Icon :iconName="'chrome'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChromeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chrome'
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
