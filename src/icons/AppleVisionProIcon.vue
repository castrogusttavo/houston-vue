
<template>
  <Icon :iconName="'apple-vision-pro'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AppleVisionProIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'apple-vision-pro'
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
