
<template>
  <Icon :iconName="'swipe-right-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeRight06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-right-06'
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
