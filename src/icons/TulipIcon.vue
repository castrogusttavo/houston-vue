
<template>
  <Icon :iconName="'tulip'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TulipIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tulip'
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
