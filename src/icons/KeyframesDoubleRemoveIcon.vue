
<template>
  <Icon :iconName="'keyframes-double-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframesDoubleRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframes-double-remove'
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
