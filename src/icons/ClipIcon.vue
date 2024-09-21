
<template>
  <Icon :iconName="'clip'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ClipIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'clip'
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
