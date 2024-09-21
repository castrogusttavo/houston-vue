
<template>
  <Icon :iconName="'webflow'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WebflowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'webflow'
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
