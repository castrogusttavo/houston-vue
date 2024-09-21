
<template>
  <Icon :iconName="'mouse-11'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse11Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-11'
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
