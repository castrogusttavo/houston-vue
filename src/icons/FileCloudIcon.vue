
<template>
  <Icon :iconName="'file-cloud'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileCloudIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-cloud'
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
