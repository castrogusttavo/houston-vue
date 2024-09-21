
<template>
  <Icon :iconName="'capcut-rectangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CapcutRectangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'capcut-rectangle'
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
