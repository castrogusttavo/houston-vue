
<template>
  <Icon :iconName="'fencing-mask'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FencingMaskIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fencing-mask'
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
