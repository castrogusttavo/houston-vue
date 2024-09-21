
<template>
  <Icon :iconName="'swipe-left-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeLeft07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-left-07'
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
