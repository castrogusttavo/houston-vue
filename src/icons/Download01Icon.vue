
<template>
  <Icon :iconName="'download-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Download01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'download-01'
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
