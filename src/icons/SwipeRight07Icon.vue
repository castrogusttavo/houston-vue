
<template>
  <Icon :iconName="'swipe-right-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeRight07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-right-07'
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
