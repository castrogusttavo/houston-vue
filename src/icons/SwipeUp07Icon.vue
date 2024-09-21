
<template>
  <Icon :iconName="'swipe-up-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeUp07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-up-07'
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
