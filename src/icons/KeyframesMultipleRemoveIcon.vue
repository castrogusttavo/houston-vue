
<template>
  <Icon :iconName="'keyframes-multiple-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframesMultipleRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframes-multiple-remove'
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
