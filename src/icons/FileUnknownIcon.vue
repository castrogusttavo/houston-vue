
<template>
  <Icon :iconName="'file-unknown'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileUnknownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-unknown'
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
