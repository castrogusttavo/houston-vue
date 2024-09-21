
<template>
  <Icon :iconName="'mask-love'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MaskLoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mask-love'
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
