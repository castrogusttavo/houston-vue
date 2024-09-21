
<template>
  <Icon :iconName="'swipe-left-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeLeft03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-left-03'
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
