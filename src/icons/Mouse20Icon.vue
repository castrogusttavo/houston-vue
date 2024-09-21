
<template>
  <Icon :iconName="'mouse-20'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse20Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-20'
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
