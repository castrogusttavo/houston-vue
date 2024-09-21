
<template>
  <Icon :iconName="'smart'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SmartIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'smart'
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
