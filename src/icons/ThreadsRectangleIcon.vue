
<template>
  <Icon :iconName="'threads-rectangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThreadsRectangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'threads-rectangle'
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
