
<template>
  <Icon :iconName="'mouse-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-06'
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
