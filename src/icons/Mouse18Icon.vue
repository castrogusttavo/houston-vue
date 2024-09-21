
<template>
  <Icon :iconName="'mouse-18'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse18Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-18'
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
