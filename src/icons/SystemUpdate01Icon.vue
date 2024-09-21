
<template>
  <Icon :iconName="'system-update-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SystemUpdate01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'system-update-01'
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
