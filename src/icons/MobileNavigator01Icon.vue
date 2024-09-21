
<template>
  <Icon :iconName="'mobile-navigator-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MobileNavigator01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mobile-navigator-01'
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
