
<template>
  <Icon :iconName="'file-verified'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileVerifiedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-verified'
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
