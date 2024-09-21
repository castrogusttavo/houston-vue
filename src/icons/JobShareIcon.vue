
<template>
  <Icon :iconName="'job-share'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JobShareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'job-share'
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
