
<template>
  <Icon :iconName="'smart-watch-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmartWatch04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smart-watch-04'
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
