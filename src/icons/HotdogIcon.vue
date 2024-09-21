
<template>
  <Icon :iconName="'hotdog'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HotdogIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hotdog'
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
