
<template>
  <Icon :iconName="'mouse-14'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse14Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-14'
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
