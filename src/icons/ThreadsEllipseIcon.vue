
<template>
  <Icon :iconName="'threads-ellipse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThreadsEllipseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'threads-ellipse'
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
