
<template>
  <Icon :iconName="'divide-sign-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DivideSignCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'divide-sign-circle'
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
