
<template>
  <Icon :iconName="'flash-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlashOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flash-off'
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
