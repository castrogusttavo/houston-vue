
<template>
  <Icon :iconName="'cloud-loading'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudLoadingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-loading'
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
