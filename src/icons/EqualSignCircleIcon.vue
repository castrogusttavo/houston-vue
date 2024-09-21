
<template>
  <Icon :iconName="'equal-sign-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EqualSignCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'equal-sign-circle'
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
