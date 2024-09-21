
<template>
  <Icon :iconName="'lighthouse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LighthouseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lighthouse'
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
