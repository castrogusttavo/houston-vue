
<template>
  <Icon :iconName="'download-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Download03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'download-03'
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
