
<template>
  <Icon :iconName="'swipe-down-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeDown07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-down-07'
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
