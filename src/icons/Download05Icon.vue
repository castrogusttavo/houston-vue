
<template>
  <Icon :iconName="'download-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Download05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'download-05'
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
