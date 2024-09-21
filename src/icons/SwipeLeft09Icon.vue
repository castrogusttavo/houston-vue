
<template>
  <Icon :iconName="'swipe-left-09'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeLeft09Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-left-09'
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
