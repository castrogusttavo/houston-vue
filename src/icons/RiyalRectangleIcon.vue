
<template>
  <Icon :iconName="'riyal-rectangle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RiyalRectangleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'riyal-rectangle'
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
