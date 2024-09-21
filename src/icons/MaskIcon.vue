
<template>
  <Icon :iconName="'mask'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MaskIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mask'
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
