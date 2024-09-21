
<template>
  <Icon :iconName="'rotate-right-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateRight05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-right-05'
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
