
<template>
  <Icon :iconName="'smart-watch-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmartWatch01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smart-watch-01'
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
