
<template>
  <Icon :iconName="'mouse-10'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse10Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-10'
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
