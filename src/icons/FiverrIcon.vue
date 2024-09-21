
<template>
  <Icon :iconName="'fiverr'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FiverrIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fiverr'
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
