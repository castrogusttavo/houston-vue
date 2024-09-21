
<template>
  <Icon :iconName="'alert-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlertCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alert-circle'
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
