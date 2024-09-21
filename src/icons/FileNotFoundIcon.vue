
<template>
  <Icon :iconName="'file-not-found'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileNotFoundIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-not-found'
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
