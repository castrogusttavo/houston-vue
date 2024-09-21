
<template>
  <Icon :iconName="'slow-winds'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SlowWindsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'slow-winds'
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
