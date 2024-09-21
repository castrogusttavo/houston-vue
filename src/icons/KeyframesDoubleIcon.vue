
<template>
  <Icon :iconName="'keyframes-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KeyframesDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'keyframes-double'
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
