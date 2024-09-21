
<template>
  <Icon :iconName="'cancel-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CancelCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cancel-circle'
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
