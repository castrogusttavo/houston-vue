
<template>
  <Icon :iconName="'rotate-bottom-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateBottomLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-bottom-left'
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
