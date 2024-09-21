
<template>
  <Icon :iconName="'flash'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlashIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flash'
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
