
<template>
  <Icon :iconName="'swipe-right-09'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwipeRight09Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swipe-right-09'
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
