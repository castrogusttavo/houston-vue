
<template>
  <Icon :iconName="'cancel-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CancelSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cancel-square'
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
