
<template>
  <Icon :iconName="'mouse-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-05'
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
