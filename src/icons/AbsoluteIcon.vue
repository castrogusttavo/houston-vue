
<template>
  <Icon :iconName="'absolute'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AbsoluteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'absolute'
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
