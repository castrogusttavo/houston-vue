
<template>
  <Icon :iconName="'new-twitter-ellipse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NewTwitterEllipseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'new-twitter-ellipse'
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
