
<template>
  <Icon :iconName="'crab'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CrabIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'crab'
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
