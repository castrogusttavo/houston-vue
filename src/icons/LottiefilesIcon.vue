
<template>
  <Icon :iconName="'lottiefiles'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LottiefilesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lottiefiles'
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
